document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  /* =======================
  // Accessible responsive menu
  ======================= */
  var body = document.querySelector("body");
  var menuOpenButton = document.querySelector(".nav-button");
  var menuCloseButton = document.querySelector(".nav__icon-close");
  var menu = document.querySelector(".main-nav");
  var moreMenu = document.querySelector(".nav-more");

  if (moreMenu) {
    moreMenu.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && moreMenu.open) {
        event.preventDefault();
        event.stopPropagation();
        moreMenu.open = false;
        moreMenu.querySelector("summary").focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (!moreMenu.contains(event.target)) moreMenu.open = false;
    });
    moreMenu.addEventListener("focusout", function (event) {
      if (event.relatedTarget && !moreMenu.contains(event.relatedTarget)) moreMenu.open = false;
    });
  }

  if (menuOpenButton && menuCloseButton && menu) {
    var menuFocusableSelector = 'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';
    var desktopMenu = window.matchMedia("(min-width: 1025px)");
    var backgroundItems = Array.from(document.querySelectorAll("#main-content, .footer, .top, .logo, .header-utility, .nav-button"));
    var previousInert = new Map();

    function focusableMenuItems() {
      return Array.from(menu.querySelectorAll(menuFocusableSelector)).filter(function (item) {
        return item.getClientRects().length > 0;
      });
    }

    function menuOpen() {
      if (desktopMenu.matches) return;
      menu.classList.add("is-open");
      menuOpenButton.setAttribute("aria-expanded", "true");
      menuOpenButton.setAttribute("aria-label", "Close navigation menu");
      body.classList.add("menu-open");
      menuCloseButton.focus();
      backgroundItems.forEach(function (item) {
        previousInert.set(item, item.inert);
        item.inert = true;
      });
    }

    function menuClose(restoreFocus) {
      menu.classList.remove("is-open");
      menuOpenButton.setAttribute("aria-expanded", "false");
      menuOpenButton.setAttribute("aria-label", "Open navigation menu");
      body.classList.remove("menu-open");
      previousInert.forEach(function (wasInert, item) { item.inert = wasInert; });
      previousInert.clear();
      if (moreMenu) moreMenu.open = false;
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

    desktopMenu.addEventListener("change", function () {
      var wasOpen = menu.classList.contains("is-open");
      var focusWasInMenu = menu.contains(document.activeElement);
      menuClose(false);
      if (focusWasInMenu) {
        if (desktopMenu.matches) menu.querySelector(".nav__list--primary a").focus();
        else if (!wasOpen) menuOpenButton.focus();
      }
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
  var topTarget = document.querySelector("#page-top");

  if (btnScrollToTop) {
    var wideGutter = window.matchMedia("(min-width: 1400px)");
    function updateScrollTopButton() {
      var active = wideGutter.matches && window.scrollY > window.innerHeight;
      btnScrollToTop.classList.toggle("is-active", active);
      btnScrollToTop.hidden = !active;
    }

    window.addEventListener("scroll", updateScrollTopButton, { passive: true });
    window.addEventListener("resize", updateScrollTopButton, { passive: true });
    wideGutter.addEventListener("change", updateScrollTopButton);
    updateScrollTopButton();
  }

  document.querySelectorAll("[data-back-to-top]").forEach(function (control) {
    control.addEventListener("click", function (event) {
      event.preventDefault();
      if (topTarget) topTarget.focus({ preventScroll: true });
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  });
});
