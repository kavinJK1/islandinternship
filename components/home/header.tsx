"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/homepage";
import { OpenApplicationButton } from "@/components/home/application-modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#hero">
          Island<span>.</span>Internship
        </a>

        <nav className={`header-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <OpenApplicationButton className="button button-primary header-apply" source="Header">
            Apply now
          </OpenApplicationButton>
        </nav>

        <button
          type="button"
          className={`menu-button ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
