"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/homepage";
import { OpenApplicationButton } from "@/components/home/application-modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const isHome = pathname === "/";

  const centerItems = navigation.filter((i) => !i.slot || i.slot === "center");
  const rightItems = navigation.filter((i) => i.slot === "right");

  function resolveHref(href: string): string {
    if (href.startsWith("#") && !isHome) return `/${href}`;
    return href;
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      nav.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      nav.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    };
    nav.addEventListener("mousemove", onMove);
    return () => nav.removeEventListener("mousemove", onMove);
  }, []);

  function renderItem(item: (typeof navigation)[number], onClick?: () => void) {
    if (item.dropdown) {
      return (
        <div key={item.label} className="nav-dropdown">
          <button type="button" className="nav-pill-item nav-dropdown-trigger">
            {item.label}
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden="true">
              <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-menu-inner">
              {item.dropdown.map((sub) => (
                <a key={sub.href} href={resolveHref(sub.href)} className="nav-dropdown-item" onClick={onClick}>
                  <span className="nav-dropdown-dot" aria-hidden="true" />
                  <span>{sub.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }
    const href = resolveHref(item.href);
    return (
      <a key={item.label} href={href} className="nav-pill-item" onClick={onClick}>
        {item.label}
      </a>
    );
  }

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">

        {/* Logo */}
        <a className="brand" href={isHome ? "#hero" : "/"}>
          Island<span>.</span>Internship
        </a>

        {/* Center pill nav — desktop */}
        <nav ref={navRef} className="header-nav" aria-label="Primary">
          {centerItems.map((item) => renderItem(item))}
        </nav>

        {/* Right actions — desktop */}
        <div className="header-actions">
          {rightItems.map((item) => (
            <a key={item.label} href={resolveHref(item.href as string)} className="nav-action-link">
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
