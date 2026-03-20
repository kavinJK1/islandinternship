(function () {
  const nav = document.getElementById("main-nav");
  if (!nav) {
    return;
  }

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  const currentKey = document.body.dataset.navCurrent;

  const activeSelectors = {
    community: '[data-nav-target="community"]',
    companies: '[data-nav-target="companies"]',
    destinations: '[data-nav-target="destinations"]',
    outcomes: '[data-nav-target="outcomes"]',
    pricing: '[data-nav-target="pricing"]',
    stories: '[data-nav-target="stories"]',
  };

  const closeMenu = () => {
    if (!hamburger || !mobileNav) {
      return;
    }

    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
  };

  const syncScrolled = () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  };

  if (currentKey && activeSelectors[currentKey]) {
    document.querySelectorAll(activeSelectors[currentKey]).forEach((element) => {
      element.classList.add("is-active");
      if (element.tagName === "A") {
        element.setAttribute("aria-current", "page");
      }
    });
  }

  syncScrolled();
  window.addEventListener("scroll", syncScrolled, { passive: true });

  if (hamburger && mobileNav) {
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();
