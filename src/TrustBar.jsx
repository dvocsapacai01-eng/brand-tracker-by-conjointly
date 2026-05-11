import React from "react";

// Trust bar — 03.A: Client logo strip.
// Logos are placeholder wordmarks at low opacity, layout-only.

export function TrustBar() {
  const logos = [
    "Loremipsum", "Dolor", "Sitamet", "Consect", "Adipisc", "Elitsed"
  ];
  return (
    <section className="bt-trust" aria-label="Trusted by">
      <div className="bt-container">
        <div className="bt-trust__head">Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
        <div className="bt-trust__row">
          {logos.map(l => (
            <div className="bt-trust__logo" key={l}
                 style={{
                   fontFamily: "var(--bt-font-sans)",
                   fontWeight: 700,
                   fontSize: 18,
                   letterSpacing: "-0.02em",
                 }}>
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
