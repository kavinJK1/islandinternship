(function () {
  const nav = document.getElementById("main-nav");
  if (!nav) {
    return;
  }

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  function inferCurrentKey() {
    const pathname = window.location.pathname;
    if (/\/(blog-bali-internship-cost|blog-bali-visa-guide|for-parents)\.html$/i.test(pathname)) return "resources";
    if (/\/(bali-placements|sri-lanka|sri-lanka-placements)\.html$/i.test(pathname)) return "destinations";
    if (/\/(tracks|business-internship-bali|marketing-internship-bali|startup-internship-bali|data-tech-internship-bali|hospitality-internship-bali|sustainability-internship-bali)\.html$/i.test(pathname)) return "tracks";
    if (/\/career-outcomes\.html$/i.test(pathname)) return "outcomes";
    if (/\/community-lifestyle\.html$/i.test(pathname)) return "community";
    if (/\/companies\.html$/i.test(pathname)) return "companies";
    if (/\/pricing$/i.test(pathname)) return "pricing";
    if (/\/stories$/i.test(pathname)) return "stories";
    return "";
  }

  const currentKey = document.body.dataset.navCurrent || inferCurrentKey();

  const activeSelectors = {
    community: '[data-nav-target="community"]',
    companies: '[data-nav-target="companies"]',
    destinations: '[data-nav-target="destinations"]',
    outcomes: '[data-nav-target="outcomes"]',
    pricing: '[data-nav-target="pricing"]',
    resources: '[data-nav-target="resources"]',
    stories: '[data-nav-target="stories"]',
    tracks: '[data-nav-target="tracks"]',
  };

  function closeMenu() {
    if (!hamburger || !mobileNav) {
      return;
    }

    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
  }

  function syncScrolled() {
    nav.classList.toggle("is-scrolled", window.scrollY > 10);
  }

  if (currentKey && activeSelectors[currentKey]) {
    document.querySelectorAll(activeSelectors[currentKey]).forEach(function (element) {
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
    hamburger.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Glow border: track cursor position on the nav pill
  var navPill = nav.querySelector(".header-nav") || nav.querySelector(".nav-links");
  if (navPill) {
    navPill.addEventListener("mousemove", function (e) {
      var rect = navPill.getBoundingClientRect();
      navPill.style.setProperty("--glow-x", (e.clientX - rect.left) + "px");
      navPill.style.setProperty("--glow-y", (e.clientY - rect.top) + "px");
    });
  }
})();
