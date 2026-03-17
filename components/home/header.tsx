"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/homepage";
import { OpenApplicationButton } from "@/components/home/application-modal";

const centerItems = navigation.filter((i) => !i.slot || i.slot === "center");
const rightItems = navigation.filter((i) => i.slot === "right");

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function renderItem(item: (typeof navigation)[number], onClick?: () => void) {
    if (item.dropdown) {
      return (
        <div key={item.label} className="nav-dropdown">
          <button type="button" className="nav-pill-item nav-dropdown-trigger">
            {item.label}
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" aria-hidden="true">
              <path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-menu-inner">
              {item.dropdown.map((sub) => (
                <a key={sub.href} href={sub.href} className="nav-dropdown-item" onClick={onClick}>
                  {sub.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <a key={item.href} href={item.href} className="nav-pill-item" onClick={onClick}>
        {item.label}
      </a>
    );
  }

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">

        {/* Logo */}
        <a className="brand" href="#hero">
          Island<span>.</span>Internship
        </a>

        {/* Center pill nav — desktop */}
        <nav className="header-nav" aria-label="Primary">
          {centerItems.map((item) => renderItem(item))}
        </nav>

        {/* Right actions — desktop */}
        <div className="header-actions">
          {rightItems.map((item) => (
            <a key={item.href as string} href={item.href as string} className="nav-action-link">
              {item.label}
            </a>
          ))}
          <OpenApplicationButton className="button button-primary header-apply" source="Header">
            Apply now
          </OpenApplicationButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`menu-button ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-inner">
            {navigation.map((item) => renderItem(item, () => setIsOpen(false)))}
            <OpenApplicationButton
              className="button button-primary mobile-nav-apply"
              source="Mobile nav"
            >
              Apply now
            </OpenApplicationButton>
          </div>
        </div>
      )}
    </header>
  );
}
