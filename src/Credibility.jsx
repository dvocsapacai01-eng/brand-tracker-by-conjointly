import React from "react";
import { Icon, Spark } from "./Primitives.jsx";

// Credibility — 04.B: 4 cards each with mini chart.

export function CredibilitySection() {
  const cards = [
    {
      icon: "git-branch",
      title: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      viz: <Spark data={[42, 44, 43, 45, 44, 46, 47, 47]} color="var(--bt-data-blue)" animate />,
    },
    {
      icon: "microscope",
      title: "Sit amet consectetur",
      body: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      viz: (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 56, width: "100%" }}>
          {[40, 55, 48, 62, 58, 72, 68, 84].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, background: "var(--bt-data-purple)",
              borderRadius: 3, opacity: 0.85,
              animation: `bt-rise 700ms ${i * 60}ms cubic-bezier(0.16,1,0.3,1) backwards`
            }}/>
          ))}
        </div>
      ),
    },
    {
      icon: "users",
      title: "Adipiscing elit",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      viz: (
        <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
          {[
            { l: "n=1,200", w: 90, c: "var(--bt-ink)" },
            { l: "Lorem", w: 70, c: "var(--bt-data-teal)" },
            { l: "16 ipsum", w: 60, c: "var(--bt-data-pink)" },
          ].map((r, i) => (
            <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 10, color: "var(--bt-fg-3)", width: 64, fontVariantNumeric: "tabular-nums" }}>{r.l}</span>
              <div style={{ flex: 1, height: 6, background: "var(--bt-surface-2)", borderRadius: 999 }}>
                <div style={{
                  height: "100%", width: `${r.w}%`, background: r.c, borderRadius: 999,
                  animation: `bt-grow 800ms ${i * 100 + 200}ms cubic-bezier(0.16,1,0.3,1) backwards`,
                  transformOrigin: "left",
                }}/>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: "layout-dashboard",
      title: "Eiusmod tempor",
      body: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.",
      viz: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, width: "100%", height: 70 }}>
          <div style={{ background: "var(--bt-surface-2)", borderRadius: 4, padding: 5, display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={{ fontSize: 8, color: "var(--bt-fg-4)" }}>Lorem</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--bt-fg-1)" }}>57.5%</span>
            <span style={{ fontSize: 8, color: "var(--bt-positive)" }}>↑ 2.3 pts</span>
          </div>
          <div style={{ background: "var(--bt-surface-2)", borderRadius: 4, padding: 5, display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={{ fontSize: 8, color: "var(--bt-fg-4)" }}>Ipsum</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--bt-fg-1)" }}>29.0%</span>
            <span style={{ fontSize: 8, color: "var(--bt-positive)" }}>↑ 1.1 pts</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="why" className="bt-section">
      <div className="bt-container">
        <div className="bt-section-head">
          <span className="bt-eyebrow">Lorem ipsum</span>
          <h2 className="bt-h2">Dolor sit amet consectetur adipiscing</h2>
          <p className="bt-lead">
            Lorem ipsum dolor sit amet consectetur adipiscing elit &mdash;
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bt-grid-4">
          {cards.map(c => (
            <article className="bt-card" key={c.title}>
              <div className="bt-card__icon"><Icon name={c.icon} size={20} /></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="bt-card__viz">{c.viz}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
