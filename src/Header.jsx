import React from "react";
import { BTLogo } from "./Primitives.jsx";

// Header — 01.A: Centered nav, Cal-style. Sticky, translucent.

export function Header() {
  return (
    <header className="bt-header">
      <div className="bt-container bt-header__inner">
        <BTLogo height={28} />
        <nav className="bt-nav" aria-label="Primary">
          <a href="#why">Lorem ipsum</a>
          <a href="#dashboard">Dolor sit</a>
          <a href="#features">Amet</a>
          <a href="#blog">Consectetur</a>
          <a href="#pricing">Adipiscing</a>
        </nav>
        <div className="bt-header__cta">
          <a href="#" className="bt-header__signin">Sed do</a>
          <a href="#cta" className="btn btn--primary btn--sm">Lorem ipsum</a>
        </div>
      </div>
    </header>
  );
}
