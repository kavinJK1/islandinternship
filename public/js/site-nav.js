(function () {
  const existingNav = document.getElementById("main-nav");
  if (!existingNav) {
    return;
  }

  const desktopItems = [
    { label: "How it Works", href: "/#how-it-works" },
    {
      label: "Destinations",
      target: "destinations",
      dropdown: [
        { label: "Bali", href: "/bali-placements.html" },
        { label: "Sri Lanka", href: "/sri-lanka.html" },
      ],
    },
    { label: "Tracks", href: "/tracks.html", target: "tracks" },
    { label: "Outcomes", href: "/career-outcomes.html", target: "outcomes" },
    { label: "Student Stories", href: "/stories", target: "stories" },
    { label: "Pricing", href: "/pricing", target: "pricing" },
    { label: "Community", href: "/community-lifestyle.html", target: "community" },
    { label: "FAQ", href: "/#faq" },
    {
      label: "Resources",
      target: "resources",
      dropdown: [
        { label: "Bali Internship Cost 2026", href: "/blog-bali-internship-cost.html" },
        { label: "Bali Visa Guide", href: "/blog-bali-visa-guide.html" },
        { label: "For Parents", href: "/for-parents.html" },
      ],
    },
  ];

  const rightItems = [{ label: "For Businesses", href: "/companies.html", target: "companies" }];
  const applyHref = "/#cta-banner";
  const dropdownIcon =
    '<svg width="9" height="5" viewBox="0 0 9 5" fill="none" aria-hidden="true"><path d="M1 1l3.5 3L8 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>';

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

  function renderDropdownItems(items) {
    return items
      .map(function (sub) {
        return (
          '<a href="' +
          sub.href +
          '" class="nav-dropdown-item">' +
          '<span class="nav-dropdown-dot" aria-hidden="true"></span>' +
          "<span>" +
          sub.label +
          "</span>" +
          "</a>"
        );
      })
      .join("");
  }

  function renderCenterItem(item) {
    if (item.dropdown) {
      return (
        '<div class="nav-dropdown">' +
        '<button type="button" class="nav-pill-item nav-dropdown-trigger"' +
        (item.target ? ' data-nav-target="' + item.target + '"' : "") +
        ">" +
        item.label +
        dropdownIcon +
        "</button>" +
        '<div class="nav-dropdown-menu"><div class="nav-dropdown-menu-inner">' +
        renderDropdownItems(item.dropdown) +
        "</div></div>" +
        "</div>"
      );
    }

    return (
      '<a href="' +
      item.href +
      '" class="nav-pill-item"' +
      (item.target ? ' data-nav-target="' + item.target + '"' : "") +
      ">" +
      item.label +
      "</a>"
    );
  }

  function renderRightItem(item) {
    return (
      '<a href="' +
      item.href +
      '" class="nav-action-link"' +
      (item.target ? ' data-nav-target="' + item.target + '"' : "") +
      ">" +
      item.label +
      "</a>"
    );
  }

  const replacement = document.createElement("header");
  replacement.id = "main-nav";
  replacement.className = "site-header";
  replacement.innerHTML =
    '<div class="container header-inner">' +
    '<a class="brand" href="/">Island<span>.</span>Internship</a>' +
    '<nav class="header-nav" aria-label="Primary">' +
    desktopItems.map(renderCenterItem).join("") +
    "</nav>" +
    '<div class="header-actions">' +
    rightItems.map(renderRightItem).join("") +
    '<a href="' +
    applyHref +
    '" class="header-apply">Apply now</a>' +
    "</div>" +
    '<button type="button" class="menu-button" id="hamburger" aria-expanded="false" aria-label="Toggle navigation">' +
    "<span></span><span></span><span></span>" +
    "</button>" +
    "</div>" +
    '<div class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">' +
    '<div class="mobile-nav-inner">' +
    desktopItems.map(renderCenterItem).join("") +
    rightItems.map(renderRightItem).join("") +
    '<a href="' +
    applyHref +
    '" class="header-apply mobile-nav-apply">Apply now</a>' +
    "</div>" +
    "</div>";

  const existingMobileNav = document.getElementById("mobile-nav");
  if (existingMobileNav) {
    existingMobileNav.remove();
  }
  existingNav.replaceWith(replacement);

  const nav = replacement;
  const hamburger = nav.querySelector("#hamburger");
  const mobileNav = nav.querySelector("#mobile-nav");

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
})();
