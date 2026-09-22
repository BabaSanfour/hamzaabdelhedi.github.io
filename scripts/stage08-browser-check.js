#!/usr/bin/env node

const http = require("http");
const WebSocket = require("ws");

const origin = process.argv[2] || "http://127.0.0.1:8765";
const cdpPort = Number(process.argv[3] || 9222);

function getJson(path) {
  return new Promise((resolve, reject) => {
    http.get({ host: "127.0.0.1", port: cdpPort, path }, (response) => {
      let body = "";
      response.on("data", (chunk) => { body += chunk; });
      response.on("end", () => {
        try { resolve(JSON.parse(body)); } catch (error) { reject(error); }
      });
    }).on("error", reject);
  });
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function main() {
  const targets = await getJson("/json/list");
  const target = targets.find((item) => item.type === "page");
  if (!target) throw new Error("No CDP page target is available");

  const socket = new WebSocket(target.webSocketDebuggerUrl);
  const pending = new Map();
  const runtimeExceptions = [];
  let commandId = 0;

  socket.on("message", (raw) => {
    const message = JSON.parse(raw.toString());
    if (message.method === "Runtime.exceptionThrown") {
      runtimeExceptions.push(message.params.exceptionDetails?.text || "Runtime exception");
    }
    if (message.id && pending.has(message.id)) {
      const request = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
    }
  });

  await new Promise((resolve, reject) => {
    socket.once("open", resolve);
    socket.once("error", reject);
  });

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++commandId;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  }

  async function evaluate(expression) {
    const result = await send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
      userGesture: true
    });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Evaluation failed");
    return result.result?.value;
  }

  async function setViewport(width, height) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: false,
      screenWidth: width,
      screenHeight: height
    });
  }

  async function navigate(path) {
    await send("Page.navigate", { url: `${origin}${path}` });
    await delay(900);
  }

  async function layoutSnapshot() {
    return evaluate(`(() => {
      const root = document.documentElement;
      const selectors = ['.c-hero__inner', '.c-hero__left', '.c-hero__right', '.c-hero__btn', '.c-hero__btn .c-button'];
      return {
        viewport: window.innerWidth,
        clientWidth: root.clientWidth,
        scrollWidth: root.scrollWidth,
        horizontalOverflow: root.scrollWidth - root.clientWidth,
        body: {
          clientWidth: document.body.clientWidth,
          scrollWidth: document.body.scrollWidth,
          offsetWidth: document.body.offsetWidth
        },
        scrollingElements: Array.from(document.querySelectorAll('*')).filter((element) => element.scrollWidth > element.clientWidth + 1).slice(0, 12).map((element) => ({
          tag: element.tagName.toLowerCase(),
          id: element.id,
          className: typeof element.className === 'string' ? element.className : '',
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth
        })),
        overflowingElements: Array.from(document.querySelectorAll('body *')).map((element) => {
          const rect = element.getBoundingClientRect();
          return { element, rect };
        }).filter(({ rect }) => rect.right > root.clientWidth + 1 || rect.left < -1).slice(0, 12).map(({ element, rect }) => ({
          tag: element.tagName.toLowerCase(),
          className: typeof element.className === 'string' ? element.className : '',
          text: (element.textContent || '').trim().slice(0, 80),
          left: rect.left,
          right: rect.right,
          width: rect.width
        })),
        boxes: selectors.map((selector) => {
          const element = document.querySelector(selector);
          if (!element) return { selector, missing: true };
          const rect = element.getBoundingClientRect();
          return { selector, left: rect.left, right: rect.right, width: rect.width };
        }),
        heroTextBoxes: ['.c-hero__header-card', '.c-hero__name', '.c-hero__position', '.c-hero__affiliations'].map((selector) => {
          const element = document.querySelector(selector);
          if (!element) return { selector, missing: true };
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return {
            selector,
            left: rect.left,
            right: rect.right,
            width: rect.width,
            height: rect.height,
            text: (element.textContent || '').trim(),
            scrollWidth: element.scrollWidth,
            whiteSpace: style.whiteSpace,
            overflowWrap: style.overflowWrap,
            wordBreak: style.wordBreak,
            children: Array.from(element.children).map((child) => {
              const childRect = child.getBoundingClientRect();
              return { tag: child.tagName.toLowerCase(), text: child.textContent.trim(), left: childRect.left, right: childRect.right, top: childRect.top, bottom: childRect.bottom };
            })
          };
        })
      };
    })()`);
  }

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");

  const report = { browser: "Google Chrome", origin, checks: {}, runtimeExceptions };

  await setViewport(390, 844);
  await navigate("/");
  report.checks.mobileLayout = await layoutSnapshot();
  report.checks.menuBefore = await evaluate(`(() => {
    const button = document.querySelector('.nav-button');
    return { expanded: button?.getAttribute('aria-expanded'), open: document.querySelector('.main-nav')?.classList.contains('is-open') };
  })()`);
  report.checks.menuOpen = await evaluate(`(() => {
    const button = document.querySelector('.nav-button');
    button?.click();
    return { expanded: button?.getAttribute('aria-expanded'), label: button?.getAttribute('aria-label'), open: document.querySelector('.main-nav')?.classList.contains('is-open'), focus: document.activeElement?.getAttribute('aria-label') };
  })()`);
  report.checks.menuClosedByEscape = await evaluate(`(() => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    const button = document.querySelector('.nav-button');
    return { expanded: button?.getAttribute('aria-expanded'), open: document.querySelector('.main-nav')?.classList.contains('is-open'), focus: document.activeElement?.className };
  })()`);
  report.checks.disclosure = await evaluate(`(() => {
    const details = document.querySelector('.trajectory-node');
    const summary = details?.querySelector('summary');
    summary?.click();
    return { open: Boolean(details?.open), detailDisplay: details ? getComputedStyle(details.querySelector('.trajectory-node__detail-card')).display : null };
  })()`);

  await navigate("/publications/");
  report.checks.publicationFilters = await evaluate(`(() => {
    const button = document.querySelector('.js-type-filter[data-filter]:not([data-filter="all"])');
    const result = document.querySelector('#publications-results');
    const before = { pressed: button?.getAttribute('aria-pressed'), result: result?.textContent.trim() };
    button?.click();
    return { before, afterPressed: button?.getAttribute('aria-pressed'), result: result?.textContent.trim(), visibleCards: document.querySelectorAll('.publication-wrapper:not([hidden])').length };
  })()`);

  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await navigate("/");
  report.checks.reducedMotion = await evaluate(`(() => ({
    matches: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    heroTransition: getComputedStyle(document.querySelector('.c-hero')).transitionDuration,
    spotlightTransition: getComputedStyle(document.querySelector('.c-spotlight__item')).transitionDuration
  }))()`);
  await send("Emulation.setEmulatedMedia", { features: [] });

  await send("Emulation.setScriptExecutionDisabled", { value: true });
  await navigate("/");
  report.checks.javascriptDisabled = await evaluate(`(() => ({
    h1Count: document.querySelectorAll('h1').length,
    mainTextLength: document.querySelector('main')?.innerText.length || 0,
    navigationLinks: document.querySelectorAll('#primary-navigation a').length
  }))()`);
  await send("Emulation.setScriptExecutionDisabled", { value: false });

  await setViewport(195, 844);
  await navigate("/");
  report.checks.zoom200Equivalent = await layoutSnapshot();

  await setViewport(1440, 1000);
  await navigate("/");
  report.checks.desktopLayout = await layoutSnapshot();
  report.checks.performance = await evaluate(`(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const resources = performance.getEntriesByType('resource').map((entry) => ({
      name: entry.name.replace(location.origin, ''),
      initiatorType: entry.initiatorType,
      transferSize: entry.transferSize,
      encodedBodySize: entry.encodedBodySize,
      duration: Math.round(entry.duration)
    })).sort((a, b) => (b.transferSize || b.encodedBodySize) - (a.transferSize || a.encodedBodySize));
    return {
      domContentLoaded: Math.round(navigation?.domContentLoadedEventEnd || 0),
      loadEventEnd: Math.round(navigation?.loadEventEnd || 0),
      resourceCount: resources.length,
      transferBytes: resources.reduce((sum, entry) => sum + (entry.transferSize || 0), 0),
      encodedBytes: resources.reduce((sum, entry) => sum + (entry.encodedBodySize || 0), 0),
      largestResources: resources.slice(0, 8)
    };
  })()`);

  report.runtimeExceptions = runtimeExceptions;
  console.log(JSON.stringify(report, null, 2));
  socket.close();
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
