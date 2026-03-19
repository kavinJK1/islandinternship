(function () {
  const nav = document.getElementById("main-nav");
  if (!nav) {
    return;
  }

  const navLinks = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");
  const langToggle = document.getElementById("lang-toggle");
  const langEn = document.getElementById("lt-en");
  const langNl = document.getElementById("lt-nl");
  const currentKey = document.body.dataset.navCurrent;

  const closeMenu = () => {
    if (!navLinks || !hamburger) {
      return;
    }

    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  };

  const setLang = (lang) => {
    if (!langEn || !langNl) {
      return;
    }

    langEn.classList.toggle("lt-active", lang === "en");
    langNl.classList.toggle("lt-active", lang === "nl");
    document.documentElement.lang = lang;
  };

  const goToHashTarget = (hash) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.href = `/${hash}`;
  };

  const activeSelectors = {
    community: 'a[href="/community-lifestyle.html"]',
    companies: 'a[href="/companies.html"]',
    outcomes: 'a[href="#placements"]',
  };

  if (currentKey && activeSelectors[currentKey]) {
    const activeLink = nav.querySelector(activeSelectors[currentKey]);
    if (activeLink) {
      activeLink.classList.add("nav-current");
      activeLink.setAttribute("aria-current", "page");
    }
  }

  setLang(langNl && langNl.classList.contains("lt-active") ? "nl" : "en");

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = langNl && langNl.classList.contains("lt-active") ? "en" : "nl";
      setLang(nextLang);
    });
  }

  const syncScrolled = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  };

  syncScrolled();
  window.addEventListener("scroll", syncScrolled, { passive: true });

  if (hamburger && navLinks) {
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  }

  nav.querySelectorAll('a[href^="#"]').forEach((link) => {
    if (link.classList.contains("nav-apply")) {
      return;
    }

    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      const target = document.querySelector(hash);
      if (target) {
        return;
      }

      event.preventDefault();
      closeMenu();
      window.location.href = `/${hash}`;
    });
  });

  window.openModal = function openModal(event) {
    if (event) {
      event.preventDefault();
    }

    closeMenu();
    goToHashTarget("#cta-banner");
    return false;
  };
})();
