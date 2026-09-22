document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  /* =======================
  // Accessible responsive menu
  ======================= */
  var body = document.querySelector("body");
  var menuOpenButton = document.querySelector(".nav-button");
  var menuCloseButton = document.querySelector(".nav__icon-close");
  var menu = document.querySelector(".main-nav");

  if (menuOpenButton && menuCloseButton && menu) {
    var menuFocusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function focusableMenuItems() {
      return Array.from(menu.querySelectorAll(menuFocusableSelector));
    }

    function menuOpen() {
      menu.classList.add("is-open");
      menuOpenButton.setAttribute("aria-expanded", "true");
      menuOpenButton.setAttribute("aria-label", "Close navigation menu");
      body.classList.add("menu-open");
      menuCloseButton.focus();
    }

    function menuClose(restoreFocus) {
      menu.classList.remove("is-open");
      menuOpenButton.setAttribute("aria-expanded", "false");
      menuOpenButton.setAttribute("aria-label", "Open navigation menu");
      body.classList.remove("menu-open");
      if (restoreFocus) menuOpenButton.focus();
    }

    menuOpenButton.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) menuClose(false);
      else menuOpen();
    });

    menuCloseButton.addEventListener("click", function () {
      menuClose(true);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuClose(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (!menu.classList.contains("is-open")) return;

      if (event.key === "Escape") {
        event.preventDefault();
        menuClose(true);
        return;
      }

      if (event.key !== "Tab") return;
      var items = focusableMenuItems();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* =======================
  // Animation Load Page
  ======================= */
  window.setTimeout(function () {
    body.classList.add("is-in");
  }, 150);

  /* ==================================
  // Stop Animations After All Have Run
  ================================== */
  window.setTimeout(function () {
    body.classList.add("stop-animations");
  }, 1500);

  /* ======================================
  // Stop Animations During Window Resizing
  ====================================== */
  var resizeTimer;
  window.addEventListener("resize", function () {
    document.body.classList.add("resize-animation-stopper");
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      document.body.classList.remove("resize-animation-stopper");
    }, 300);
  });

  /* =======================
  // Responsive Videos
  ======================= */
  if (typeof reframe === "function") {
    reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");
  }

  /* =======================
  // Zoom Image
  ======================= */
  var lightense = document.querySelector(".page img, .post img");
  var imageLink = document.querySelectorAll(".page a img, .post a img");

  imageLink.forEach(function (image) {
    image.parentNode.classList.add("image-link");
    image.classList.add("no-lightense");
  });

  if (lightense && typeof Lightense === "function") {
    Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense)", {
      padding: 60,
      offset: 30
    });
  }

  /* ============================
  // Affiliations Slider
  ============================ */
  if (document.querySelector(".my-slider") && typeof tns === "function") {
    tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 20,
      nav: false,
      mouseDrag: true,
      autoplay: false,
      controlsContainer: "#customize-controls",
      responsive: {
        1024: { items: 3 },
        768: { items: 2 },
        0: { items: 1 }
      }
    });
  }

  /* ============================
  // iTyped
  ============================ */
  if (document.querySelector(".c-subscribe") && typeof ityped !== "undefined") {
    ityped.init('#ityped', {
      strings: itype_text,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      onFinished: function () {}
    });
  }

  /* =======================
  // Scroll to top
  ======================= */
  var btnScrollToTop = document.querySelector(".top");

  if (btnScrollToTop) {
    function updateScrollTopButton() {
      var active = window.scrollY > window.innerHeight;
      btnScrollToTop.classList.toggle("is-active", active);
      btnScrollToTop.hidden = !active;
    }

    window.addEventListener("scroll", updateScrollTopButton, { passive: true });
    updateScrollTopButton();

    btnScrollToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  }
});
