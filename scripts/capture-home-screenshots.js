#!/usr/bin/env node

const fs = require("fs");
const http = require("http");
const path = require("path");
const WebSocket = require("ws");

const origin = process.argv[2] || "http://127.0.0.1:8765";
const outputDir = process.argv[3] || path.resolve("_qa/screenshots");
const cdpPort = Number(process.argv[4] || 9222);
const viewports = [[390, 844], [768, 1024], [1024, 900], [1440, 1000]];

function getJson(requestPath) {
  return new Promise((resolve, reject) => {
    http.get({ host: "127.0.0.1", port: cdpPort, path: requestPath }, (response) => {
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
  let commandId = 0;

  socket.on("message", (raw) => {
    const message = JSON.parse(raw.toString());
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

  await send("Page.enable");
  fs.mkdirSync(outputDir, { recursive: true });

  for (const [width, height] of viewports) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: false,
      screenWidth: width,
      screenHeight: height
    });
    await send("Page.navigate", { url: `${origin}/` });
    await delay(900);
    const screenshot = await send("Page.captureScreenshot", {
      format: "png",
      fromSurface: true,
      captureBeyondViewport: false
    });
    const outputPath = path.join(outputDir, `home_${width}.png`);
    fs.writeFileSync(outputPath, Buffer.from(screenshot.data, "base64"));
    console.log(`${width}x${height}: ${outputPath}`);
  }

  socket.close();
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
