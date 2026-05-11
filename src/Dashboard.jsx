import React from "react";
import { BT_BRANDS, BT_TIMESERIES } from "./Primitives.jsx";

// Dashboard — 05.A: Tabbed product preview. Charts rendered live (animated).

function TabFunnels() {
  const data = BT_BRANDS;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{
        display: "grid", gridTemplateColumns: "160px 1fr 1fr 1fr 80px", gap: 16,
        padding: "0 4px 8px", borderBottom: "1px solid var(--bt-border-soft)",
        fontSize: 11, fontWeight: 500, color: "var(--bt-fg-4)",
        letterSpacing: "0.04em", textTransform: "uppercase",
      }}>
        <span>Lorem</span>
        <span>Ipsum dolor ↓</span>
        <span>Sit amet</span>
        <span>Consectetur</span>
        <span style={{ textAlign: "right" }}>Adipisc</span>
      </div>
      {data.map((b, i) => (
        <div key={b.name} style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr 1fr 80px", gap: 16, alignItems: "center", height: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
            <span style={{
              width: 14, height: 14, borderRadius: 999, background: b.color,
              flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 8, fontWeight: 700,
            }}>{b.short}</span>
            <span style={{ fontSize: 11.5, color: "var(--bt-fg-1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.name}</span>
          </div>
          {[
            { v: b.aided, max: 65 },
            { v: b.cons, max: 32 },
            { v: b.primary, max: 20 },
          ].map((m, idx) => {
            const w = (m.v / m.max) * 100;
            const inside = w > 30;
            return (
              <div key={idx} style={{ position: "relative", height: 14, background: "var(--bt-surface-2)", borderRadius: 999 }}>
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: `${w}%`,
                  background: b.color, borderRadius: 999,
                  display: "flex", alignItems: "center", justifyContent: "flex-end",
                  paddingRight: inside ? 6 : 0,
                  animation: `bt-grow 700ms ${i * 30 + idx * 60}ms cubic-bezier(0.16,1,0.3,1) backwards`,
                  transformOrigin: "left",
                }}>
                  {inside && <span style={{ fontSize: 9, fontWeight: 600, color: "#fff" }}>{m.v}%</span>}
                </div>
                {!inside && (
                  <span style={{ position: "absolute", left: `calc(${w}% + 6px)`, top: "50%", transform: "translateY(-50%)", fontSize: 9.5, color: "var(--bt-fg-2)" }}>{m.v}%</span>
                )}
              </div>
            );
          })}
          <span style={{ fontSize: 11.5, fontWeight: 500, color: "var(--bt-fg-2)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{b.switch}%</span>
        </div>
      ))}
    </div>
  );
}

function TabAwarenessTime() {
  const months = ["Lorem 1", "Ipsum 2", "Dolor 3", "Sit 4"];
  const W = 880, H = 360, padL = 50, padR = 20, padT = 20, padB = 40;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const stepX = innerW / (months.length - 1);
  const yMax = 67;
  const yFor = v => padT + innerH - (v / yMax) * innerH;
  const xFor = i => padL + i * stepX;

  const yTicks = [0, 25, 50, 67];

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--bt-fg-1)", margin: 0, letterSpacing: "-0.01em" }}>Lorem ipsum dolor sit amet</h4>
        <p style={{ fontSize: 12, color: "var(--bt-fg-3)", margin: "2px 0 0" }}>Consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ overflow: "visible" }}>
        {yTicks.map(t => (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={yFor(t)} y2={yFor(t)} stroke="var(--bt-border)" strokeDasharray="3 3" />
            <text x={padL - 8} y={yFor(t) + 3} fontSize="10" fill="var(--bt-fg-4)" textAnchor="end">{t}%</text>
          </g>
        ))}
        {months.map((m, i) => (
          <text key={m} x={xFor(i)} y={H - 12} fontSize="10" fill="var(--bt-fg-3)" textAnchor="middle">{m}</text>
        ))}
        {BT_TIMESERIES.map((b, bi) => {
          const pts = b.values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(" ");
          return (
            <g key={b.name}>
              <polyline points={pts} fill="none" stroke={b.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"
                        style={{ animation: `bt-fade 500ms ${bi * 30}ms backwards` }} />
              {b.values.map((v, i) => (
                <circle key={i} cx={xFor(i)} cy={yFor(v)} r="3" fill={b.color}
                        style={{ animation: `bt-fade 300ms ${bi * 30 + i * 50 + 200}ms backwards` }}/>
              ))}
            </g>
          );
        })}
      </svg>
      <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: "6px 14px", justifyContent: "center" }}>
        {BT_TIMESERIES.map(b => (
          <span key={b.name} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, color: "var(--bt-fg-3)" }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: b.color }}/>
            {b.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function TabCategoryOverview() {
  const segments = [
    { l: "Lorem ipsum dolor", v: 87, c: "var(--bt-data-blue)" },
    { l: "Sit amet", v: 71, c: "var(--bt-data-green)" },
    { l: "Consectetur adipiscing (12mo)", v: 24, c: "var(--bt-data-amber)" },
    { l: "Eiusmod tempor (12mo)", v: 9, c: "var(--bt-data-pink)" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
      <div style={{ background: "var(--bt-surface-2)", borderRadius: 12, padding: 24 }}>
        <h4 style={{ fontSize: 13, fontWeight: 500, color: "var(--bt-fg-3)", margin: "0 0 4px" }}>Lorem ipsum dolor</h4>
        <div style={{ fontSize: 38, fontWeight: 700, color: "var(--bt-fg-1)", letterSpacing: "-0.02em", lineHeight: 1 }}>71%</div>
        <p style={{ fontSize: 12, color: "var(--bt-fg-3)", margin: "8px 0 24px" }}>sit amet consectetur adipiscing elit.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {segments.map((s, i) => (
            <div key={s.l}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--bt-fg-3)", marginBottom: 4 }}>
                <span>{s.l}</span><span style={{ color: "var(--bt-fg-1)", fontWeight: 600 }}>{s.v}%</span>
              </div>
              <div style={{ height: 8, background: "var(--bt-surface)", borderRadius: 999 }}>
                <div style={{ height: "100%", width: `${s.v}%`, background: s.c, borderRadius: 999,
                  animation: `bt-grow 700ms ${i * 80}ms cubic-bezier(0.16,1,0.3,1) backwards`, transformOrigin: "left" }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "var(--bt-surface-2)", borderRadius: 12, padding: 24, display: "flex", flexDirection: "column" }}>
        <h4 style={{ fontSize: 13, fontWeight: 500, color: "var(--bt-fg-3)", margin: "0 0 12px" }}>Top 5 lorem ipsum dolor</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, justifyContent: "center" }}>
         {BT_BRANDS.slice(0, 5).map((b, i) => (
            <div key={b.name} style={{ display: "grid", gridTemplateColumns: "120px 1fr 50px", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "var(--bt-fg-1)" }}>{b.name}</span>
              <div style={{ height: 16, background: "var(--bt-surface)", borderRadius: 999 }}>
                <div style={{ height: "100%", width: `${(b.aided / 65) * 100}%`, background: b.color, borderRadius: 999,
                  animation: `bt-grow 800ms ${i * 80}ms cubic-bezier(0.16,1,0.3,1) backwards`, transformOrigin: "left" }}/>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--bt-fg-1)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{b.aided}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabPerception() {
  const attrs = ["Lorem", "Ipsum", "Dolor sit amet", "Consectetur", "Adipiscing", "Eiusmod"];
const data = (BT_BRANDS || []).slice(0, 6);
  return (
    <div>
      <h4 style={{ fontSize: 13, fontWeight: 500, color: "var(--bt-fg-3)", margin: "0 0 16px" }}>Lorem ipsum dolor sit amet · % consectetur</h4>
      <div style={{ display: "grid", gridTemplateColumns: `160px repeat(${attrs.length}, 1fr)`, gap: 6 }}>
        <div></div>
        {attrs.map(a => <div key={a} style={{ fontSize: 10.5, color: "var(--bt-fg-3)", padding: "6px 4px", textAlign: "center", lineHeight: 1.2 }}>{a}</div>)}
        {data.map((b, ri) => (
          <React.Fragment key={b.name}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--bt-fg-1)" }}>
              <span style={{ width: 12, height: 12, borderRadius: 999, background: b.color }}/>
              {b.name}
            </div>
            {attrs.map((a, ci) => {
              // pseudo-real: use brand index + attribute index for stable values
              const v = Math.max(8, Math.round((b.aided * 0.45) - ci * 4 + (ri === 0 ? 12 : 0) + ci * 1.4));
              const op = Math.min(1, Math.max(0.12, v / 60));
              return (
                <div key={ci} style={{
                  background: b.color, opacity: op, borderRadius: 6,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "10px 0",
                  color: op > 0.45 ? "#fff" : "var(--bt-fg-1)",
                  fontSize: 11, fontWeight: 600,
                  animation: `bt-fade 500ms ${(ri * attrs.length + ci) * 18}ms backwards`,
                }}>{v}%</div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function TabBrandEvolution() {
  const stages = [
    { l: "Lorem ipsum", v: 57.5 },
    { l: "Dolor sit",   v: 29.0 },
    { l: "Amet elit",   v: 18.5 },
    { l: "Eiusmod tempor", v: 3.9 },
  ];
  const series = [
    { name: "Loremipsum", color: "var(--bt-data-purple)", values: [55, 30, 17.5, 4.0] },
    { name: "Loremipsum · Q3", color: "var(--bt-fg-4)", values: [56, 29.5, 18.0, 4.1], dashed: true },
    { name: "Loremipsum · Q4", color: "var(--bt-data-purple)", values: [57.5, 29.0, 18.5, 3.9] },
  ];
  const W = 700, H = 320, padL = 60, padR = 40, padT = 24, padB = 40;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const stepX = innerW / (stages.length - 1);
  const yMax = 65;
  const xFor = i => padL + i * stepX;
  const yFor = v => padT + innerH - (v / yMax) * innerH;
  const yTicks = [0, 20, 40, 60];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: 24, alignItems: "center" }}>
      <div>
        <h4 style={{ fontSize: 13, fontWeight: 500, color: "var(--bt-fg-3)", margin: "0 0 16px" }}>Loremipsum — dolor sit amet Q1 → Q4 2026</h4>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H}>
          {yTicks.map(t => (
            <g key={t}>
              <line x1={padL} x2={W - padR} y1={yFor(t)} y2={yFor(t)} stroke="var(--bt-border)" strokeDasharray="3 3"/>
              <text x={padL - 8} y={yFor(t) + 3} fontSize="10" fill="var(--bt-fg-4)" textAnchor="end">{t}%</text>
            </g>
          ))}
          {stages.map((s, i) => (
            <text key={s.l} x={xFor(i)} y={H - 14} fontSize="10.5" fill="var(--bt-fg-3)" textAnchor="middle">{s.l}</text>
          ))}
          {series.map((s, si) => (
            <g key={s.name}>
              <polyline
                points={s.values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(" ")}
                fill="none" stroke={s.color} strokeWidth="2"
                strokeDasharray={s.dashed ? "4 4" : ""}
                strokeLinecap="round" strokeLinejoin="round"
                style={{ animation: `bt-fade 600ms ${si * 200}ms backwards` }}
              />
              {s.values.map((v, i) => (
                <circle key={i} cx={xFor(i)} cy={yFor(v)} r="3.5" fill={s.color}
                        style={{ animation: `bt-fade 300ms ${si * 200 + i * 80 + 200}ms backwards` }}/>
              ))}
            </g>
          ))}
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {stages.map(s => (
          <div key={s.l} style={{ background: "var(--bt-surface-2)", borderRadius: 10, padding: 12 }}>
            <div style={{ fontSize: 11, color: "var(--bt-fg-3)" }}>{s.l}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "var(--bt-fg-1)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}%</div>
            <div style={{ fontSize: 11, color: "var(--bt-positive)", marginTop: 4 }}>↑ Lorem</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSection() {
  const tabs = [
    { label: "Lorem ipsum",  render: <TabFunnels /> },
    { label: "Dolor sit",    render: <TabCategoryOverview /> },
    { label: "Amet elit",    render: <TabPerception /> },
    { label: "Consectetur",  render: <TabAwarenessTime /> },
    { label: "Adipiscing",   render: <TabBrandEvolution /> },
  ];
  const [i, setI] = React.useState(0);
  return (
    <section id="dashboard" className="bt-section" style={{ paddingTop: 40 }}>
      <div className="bt-container">
        <div className="bt-section-head">
          <span className="bt-eyebrow">Lorem ipsum</span>
          <h2 className="bt-h2">Dolor sit amet consectetur adipiscing elit</h2>
          <p className="bt-lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="bt-dashboard__tabs-wrap">
          <div className="bt-dashboard__tabs" role="tablist">
            {tabs.map((t, idx) => (
              <button key={t.label} role="tab" aria-selected={idx === i}
                      className={"bt-dashboard__tab" + (idx === i ? " is-active" : "")}
                      onClick={() => setI(idx)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bt-dashboard__panel">
          <div className="bt-dashboard__chrome">
            <span className="bt-dashboard__dots"><i/><i/><i/></span>
            <span className="bt-dashboard__url">loremipsum.example.com / dolor-sit</span>
            <span style={{ width: 60 }}/>
          </div>
          <div className="bt-dashboard__body" key={i}>
            {tabs[i].render}
          </div>
        </div>
      </div>
    </section>
  );
}
