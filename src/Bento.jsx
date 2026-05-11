import React from "react";
import { BT_BRANDS, Icon, Spark } from "./Primitives.jsx";
import { Hero } from "./Hero.jsx";

// Bento — 06.A: Big-left + 4 small.

export function BentoSection() {
  const top5 = BT_BRANDS.slice(0, 5);
  return (
    <section id="features" className="bt-section">
      <div className="bt-container">
        <div className="bt-section-head">
          <span className="bt-eyebrow">Lorem ipsum</span>
          <h2 className="bt-h2">Dolor sit amet consectetur adipiscing elit</h2>
          <p className="bt-lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="bt-bento bt-bento--A">
          {/* Hero card - big left */}
          <article className="bt-bento__cell cell-1">
            <span className="label">Lorem ipsum</span>
            <h4>Dolor sit amet consectetur adipiscing elit sed do</h4>
            <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.</p>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8, paddingTop: 12 }}>
              {top5.map((b, i) => (
                <div key={b.name} style={{ display: "grid", gridTemplateColumns: "140px 1fr 44px", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--bt-fg-1)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.name}</span>
                  <div style={{ height: 16, background: "var(--bt-surface-2)", borderRadius: 999 }}>
                    <div style={{
                      height: "100%", width: `${(b.aided / 65) * 100}%`, background: b.color,
                      borderRadius: 999,
                      animation: `bt-grow 800ms ${i * 80}ms cubic-bezier(0.16,1,0.3,1) backwards`,
                      transformOrigin: "left",
                    }}/>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--bt-fg-1)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{b.aided}%</span>
                </div>
              ))}
            </div>
          </article>

          {/* 02 — wide */}
          <article className="bt-bento__cell cell-2">
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center", height: "100%" }}>
              <div>
                <span className="label">Dolor sit</span>
                <h4 style={{ marginTop: 8 }}>Lorem ipsum → consectetur</h4>
                <p style={{ marginTop: 4 }}>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
              </div>
              <div style={{ width: 200 }}>
                <Spark data={[42, 44, 46, 48, 51, 53, 56, 57.5]} color="var(--bt-data-purple)" animate height={64} />
              </div>
            </div>
          </article>

          {/* 03 */}
          <article className="bt-bento__cell cell-3">
            <span className="label">Amet elit</span>
            <h4 style={{ fontSize: 16 }}>Lorem ipsum dolor</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
              {[
                { l: "Lorem", c: "var(--bt-data-blue)" },
                { l: "Ipsum", c: "var(--bt-data-green)" },
                { l: "Dolor sit", c: "var(--bt-data-amber)" },
                { l: "Amet", c: "var(--bt-data-pink)" },
                { l: "Elit", c: "var(--bt-data-violet)" },
              ].map(c => (
                <span key={c.l} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 11, color: "var(--bt-fg-2)",
                  padding: "4px 10px", border: "1px solid var(--bt-border)",
                  borderRadius: 999, background: "var(--bt-bg)"
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: c.c }}/>
                  {c.l}
                </span>
              ))}
            </div>
          </article>

          {/* 04 */}
          <article className="bt-bento__cell cell-4">
            <span className="label">Consectetur</span>
            <h4 style={{ fontSize: 16 }}>Lorem deltas</h4>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { l: "Loremipsum", v: "+2.3", up: true },
                { l: "Dolor", v: "+1.1", up: true },
                { l: "Sitamet", v: "−0.4", up: false },
              ].map(r => (
                <div key={r.l} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color: "var(--bt-fg-2)" }}>{r.l}</span>
                  <span style={{ color: r.up ? "var(--bt-positive)" : "var(--bt-negative)", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{r.v}</span>
                </div>
              ))}
            </div>
          </article>

          {/* 05 */}
          <article className="bt-bento__cell cell-5">
            <span className="label">Adipiscing</span>
            <h4 style={{ fontSize: 16 }}>Lorem ipsum</h4>
            <p style={{ fontSize: 12 }}>Dolor sit amet.</p>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 6 }}>
              {["Lorem", "Ipsum dolor", "Sit amet"].map(x => (
                <span key={x} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 11, padding: "5px 8px", borderRadius: 6,
                  border: "1px solid var(--bt-border)", color: "var(--bt-fg-2)",
                }}>
                  <Icon name="download" size={11}/>
                  {x}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
