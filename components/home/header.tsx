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

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LERP = reducedMotion ? 1 : 0.07;

    let tx = -300, ty = 24;
    let cx = -300, cy = 24;
    let rafId: number;

    function tick() {
      if (!nav) return;
      cx += (tx - cx) * LERP;
      cy += (ty - cy) * LERP;
      nav.style.setProperty("--glow-x", `${Math.round(cx)}px`);
      nav.style.setProperty("--glow-y", `${Math.round(cy)}px`);
      rafId = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      const r = nav.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    }

    function onEnter(e: MouseEvent) {
      const r = nav.getBoundingClientRect();
      cx = tx = e.clientX - r.left;
      cy = ty = e.clientY - r.top;
    }

    rafId = requestAnimationFrame(tick);
    nav.addEventListener("mousemove", onMove);
    nav.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      nav.removeEventListener("mousemove", onMove);
      nav.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  function isActive(item: (typeof navigation)[number]): boolean {
    if (item.dropdown) {
      return item.dropdown.some((sub) => sub.href === pathname);
    }
    if (!item.href) return false;
    if (item.href.startsWith("#")) return false;
    return pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
  }

  function renderItem(item: (typeof navigation)[number], onClick?: () => void) {
    const active = isActive(item);
    if (item.dropdown) {
      return (
        <div key={item.label} className="nav-dropdown">
          <button
            type="button"
            className={`nav-pill-item nav-dropdown-trigger${active ? " is-active" : ""}`}
          >
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
      <a key={item.label} href={href} className={`nav-pill-item${active ? " is-active" : ""}`} onClick={onClick}>
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
