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
