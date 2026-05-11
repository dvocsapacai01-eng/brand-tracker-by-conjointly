const BT_BRANDS = [
  { name: "Brand A", aided: 65, color: "#ff8fa3" },
  { name: "Brand B", aided: 58, color: "#7ddfc8" },
  { name: "Brand C", aided: 51, color: "#b7a7ff" },
  { name: "Brand D", aided: 44, color: "#ffd166" },
  { name: "Brand E", aided: 38, color: "#8ecae6" },
  { name: "Brand F", aided: 31, color: "#adb5bd" },
];



import React from "react";
import { BT_BRANDS, Icon } from "./Primitives.jsx";

// Hero — 02.B: Two-column. Copy left, dashboard preview right.

function HeroPreview() {
  // top 6 brands, animated funnel
  const top = (window.BT_BRANDS || []).slice(0, 6);
  return (
    <div className="bt-hero__preview">
      <div className="bt-hero__preview-inner">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 4px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--bt-fg-1)", letterSpacing: "-0.01em" }}>Lorem ipsum</span>
            <span style={{
              fontSize: 11, color: "var(--bt-fg-4)",
              padding: "2px 8px", borderRadius: 999, background: "var(--bt-surface-2)"
            }}>Dolor sit · Amet 2026</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button style={{
              border: "1px solid var(--bt-border)", background: "var(--bt-surface)",
              borderRadius: "var(--bt-radius-md)", padding: "4px 10px", fontSize: 12,
              color: "var(--bt-fg-2)", display: "inline-flex", alignItems: "center", gap: 4,
              cursor: "pointer", fontFamily: "inherit"
            }}>
              <Icon name="filter" size={12} /> 16 lorem
            </button>
            <button style={{
              border: "1px solid var(--bt-border)", background: "var(--bt-surface)",
              borderRadius: "var(--bt-radius-md)", padding: "4px 10px", fontSize: 12,
              color: "var(--bt-fg-2)", display: "inline-flex", alignItems: "center", gap: 4,
              cursor: "pointer", fontFamily: "inherit"
            }}>
              <Icon name="download" size={12} /> Ipsum
            </button>
          </div>
        </div>

        {/* mini header row */}
        <div style={{
          display: "grid", gridTemplateColumns: "120px 1fr 80px 80px", gap: 12,
          padding: "0 0 10px", borderBottom: "1px solid var(--bt-border-soft)",
          fontSize: 11, fontWeight: 500, color: "var(--bt-fg-4)",
          letterSpacing: "0.04em", textTransform: "uppercase",
        }}>
          <span>Lorem</span>
          <span>Ipsum dolor sit</span>
          <span style={{ textAlign: "right" }}>Amet</span>
          <span style={{ textAlign: "right" }}>Elit</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 12 }}>
          {top.map((b, i) => (
            <div key={b.name} style={{ display: "grid", gridTemplateColumns: "120px 1fr 80px 80px", gap: 12, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                <span style={{
                  width: 16, height: 16, borderRadius: 999, background: b.color,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 9, fontWeight: 700, flex: "0 0 auto"
                }}>{b.short}</span>
                <span style={{ fontSize: 12, color: "var(--bt-fg-1)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {b.name}
                </span>
              </div>
              <div style={{ position: "relative", height: 18, background: "var(--bt-surface-2)", borderRadius: 999 }}>
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0,
                  width: `${(b.aided / 65) * 100}%`,
                  background: b.color,
                  borderRadius: 999,
                  display: "flex", alignItems: "center", justifyContent: "flex-end",
                  paddingRight: 8,
                  animation: `bt-grow 900ms ${i * 90 + 200}ms cubic-bezier(0.16,1,0.3,1) backwards`,
                  transformOrigin: "left center",
                }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#fff" }}>{b.aided}%</span>
                </div>
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--bt-fg-2)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{b.cons}%</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--bt-fg-2)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{b.primary}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bt-hero">
      <div className="bt-container">
        <div className="bt-hero__inner">
          <div className="bt-hero__copy">
            <div className="bt-hero__pill">
              <span className="dot" />
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <h1>
              Lorem ipsum dolor, <em>sit amet consectetur adipiscing.</em>
            </h1>
            <p className="bt-hero__sub">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
            </p>
            <div className="bt-hero__ctas">
              <a className="btn btn--primary btn--lg" href="#cta">
                Lorem ipsum
                <Icon name="arrow-right" size={16} />
              </a>
              <a className="btn btn--secondary btn--lg" href="#dashboard">
                Dolor sit amet
              </a>
            </div>
            <div className="bt-hero__trust">
              <Icon name="check-circle" size={14} />
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </div>
          </div>
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}
