import React from "react";
import { BTLogo } from "./Primitives.jsx";

// Footer — 09.B: Minimal logo + 1 nav row.

export function Footer() {
  return (
    <footer className="bt-footer">
      <div className="bt-container">
        <div className="bt-footer__top">
          <BTLogo height={26} />
          <nav className="bt-footer__nav" aria-label="Footer">
            <a href="#why">Lorem ipsum</a>
            <a href="#dashboard">Dolor sit</a>
            <a href="#features">Amet</a>
            <a href="#blog">Consectetur</a>
            <a href="#pricing">Adipiscing</a>
            <a href="#cta">Eiusmod</a>
          </nav>
        </div>
        <div className="bt-footer__rule" />
        <div className="bt-footer__bottom">
          <span>© 2026 Lorem Ipsum · Dolor · Sit · Amet</span>
          <span className="bt-footer__legal">
            <a href="#">Lorem</a>
            <a href="#">Ipsum</a>
            <a href="#">Dolor</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
