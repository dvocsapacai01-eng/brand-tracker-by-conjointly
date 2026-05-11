import React from "react";

// Brand Tracker — shared building blocks (logo, icons, mini charts, brand row)
// All visualisations use REAL data from chart-brand-funnels.png + chart-aided-awareness-time.png

export const BT_BRANDS = [
  { name: "Lorem ipsum dolor",      short: "Lo", color: "var(--bt-data-purple)", aided: 57.5, cons: 29.0, primary: 18.5, switch: 3.9 },
  { name: "Sit amet",               short: "Si", color: "var(--bt-data-green)",  aided: 49.2, cons: 18.0, primary: 12.4, switch: 4.2 },
  { name: "Consectetur",            short: "Co", color: "var(--bt-data-yellow)", aided: 47.2, cons: 17.5, primary: 8.5,  switch: 2.5 },
  { name: "Adipiscing",             short: "Ad", color: "var(--bt-data-blue)",   aided: 47.1, cons: 12.1, primary: 3.6,  switch: 0.6 },
  { name: "Eiusmod",                short: "Ei", color: "var(--bt-data-violet)", aided: 46.0, cons: 12.7, primary: 5.4,  switch: 2.4 },
  { name: "Tempor incididunt magna",short: "Te", color: "var(--bt-data-navy)",   aided: 42.4, cons: 16.0, primary: 9.5,  switch: 2.9 },
  { name: "Labore",                 short: "La", color: "var(--bt-data-teal)",   aided: 41.3, cons: 10.0, primary: 4.1,  switch: 1.1 },
  { name: "Dolore magna",           short: "Do", color: "var(--bt-data-yellow)", aided: 37.3, cons: 15.3, primary: 7.2,  switch: 3.7 },
  { name: "Aliqua enim",            short: "Al", color: "var(--bt-data-amber)",  aided: 35.9, cons: 8.5,  primary: 3.8,  switch: 1.0 },
  { name: "Minim veniam",           short: "Mi", color: "var(--bt-data-red)",    aided: 32.0, cons: 7.9,  primary: 2.1,  switch: 0.5 },
  { name: "Quis nostrud",           short: "Qu", color: "var(--bt-data-pink)",   aided: 31.9, cons: 9.8,  primary: 4.1,  switch: 0.8 },
  { name: "Exercitation",           short: "Ex", color: "var(--bt-data-slate)",  aided: 28.9, cons: 7.3,  primary: 2.0,  switch: 0.4 },
  { name: "Ullamco",                short: "Ul", color: "var(--bt-data-green)",  aided: 20.2, cons: 3.0,  primary: 1.1,  switch: 0.6 },
  { name: "Laboris",                short: "Lb", color: "var(--bt-data-teal)",   aided: 18.1, cons: 3.0,  primary: 0.3,  switch: 0.2 },
  { name: "Aliquip",                short: "Aq", color: "var(--bt-data-slate)",  aided: 16.3, cons: 4.6,  primary: 2.5,  switch: 0.7 },
  { name: "Commodo",                short: "Cm", color: "var(--bt-data-green)",  aided: 4.5,  cons: 1.1,  primary: 0.5,  switch: 0.0 },
];

// Real time-series, aided awareness — Dec'25 / Feb / Mar / Apr 2026
// Eyeballed from chart-aided-awareness-time.png — top brands only
export const BT_TIMESERIES = [
  { name: "Lorem ipsum dolor",      color: "var(--bt-data-purple)", values: [55, 62, 60, 60] },
  { name: "Sit amet",               color: "var(--bt-data-green)",  values: [48, 53, 51, 50] },
  { name: "Consectetur",            color: "var(--bt-data-yellow)", values: [44, 47, 45, 47] },
  { name: "Adipiscing",             color: "var(--bt-data-blue)",   values: [45, 48, 41, 43] },
  { name: "Eiusmod",                color: "var(--bt-data-violet)", values: [44, 45, 48, 47] },
  { name: "Tempor incididunt magna",color: "var(--bt-data-navy)",   values: [42, 42, 42, 43] },
  { name: "Labore",                 color: "var(--bt-data-teal)",   values: [38, 40, 39, 39] },
  { name: "Dolore magna",           color: "var(--bt-data-yellow)", values: [37, 36, 36, 38] },
  { name: "Aliqua enim",             color: "var(--bt-data-amber)", values: [36, 39, 36, 36] },
  { name: "Minim veniam",           color: "var(--bt-data-red)",    values: [29, 32, 31, 33] },
  { name: "Quis nostrud",           color: "var(--bt-data-pink)",   values: [28, 31, 32, 32] },
  { name: "Exercitation",           color: "var(--bt-data-slate)",  values: [25, 27, 28, 29] },
  { name: "Ullamco",                color: "var(--bt-data-green)",  values: [22, 19, 24, 19] },
  { name: "Laboris",                color: "var(--bt-data-teal)",   values: [18, 18, 18, 18] },
  { name: "Aliquip",                color: "var(--bt-data-slate)",  values: [16, 13, 13, 17] },
  { name: "Commodo",                color: "var(--bt-data-green)",  values: [4, 3, 6, 4] },
];

// ===== Logo =====
export function BTLogo({ height = 32, variant = "light" }) {
  const src = variant === "dark"
    ? "/assets/brand-tracker-logo-dark.png"
    : "/assets/brand-tracker-logo.png";
  return (
    <a href="#" className="bt-logo" aria-label="Lorem ipsum">
      <img src={src} alt="Lorem ipsum" style={{ height, width: "auto" }} />
    </a>
  );
}

// ===== Icon (inline stroke SVG, no external dep) =====
export function Icon({ name, size = 18, strokeWidth = 1.75, style }) {
  const paths = {
    "arrow-right":   <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    "arrow-up-right": <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    "check":         <polyline points="20 6 9 17 4 12"/>,
    "check-circle":  <><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></>,
    "git-branch":    <><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></>,
    "microscope":    <><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></>,
    "users":         <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    "layout-dashboard": <><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></>,
    "trending-up":   <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>,
    "menu":          <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    "chevron-down":  <polyline points="6 9 12 15 18 9"/>,
    "search":        <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    "sparkles":      <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>,
    "filter":        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>,
    "download":      <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    "calendar":      <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={strokeWidth}
         strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
}

// ===== Brand bullet (small colored dot w/ short tag) =====
export function BrandBullet({ brand, size = 16 }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: 999,
      background: brand.color, color: "#fff",
      fontSize: size * 0.5, fontWeight: 700, letterSpacing: 0,
      flex: "0 0 auto",
    }}>
      {brand.short}
    </span>
  );
}

// ===== Funnel row (label + bar + value) — pill bars matching real screenshot =====
export function FunnelRow({ brand, value, max = 60, label, animate = false, delay = 0 }) {
  const w = Math.max(2, (value / max) * 100);
  const showLabelInside = w > 18;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "center", gap: 12, height: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
        <BrandBullet brand={brand} size={14} />
        <span style={{ fontSize: 12, color: "var(--bt-fg-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {label || brand.name}
        </span>
      </div>
      <div style={{ position: "relative", height: 20, background: "var(--bt-surface-2)", borderRadius: 999 }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: animate ? `${w}%` : `${w}%`,
          background: brand.color,
          borderRadius: 999,
          display: "flex", alignItems: "center", justifyContent: "flex-end",
          paddingRight: showLabelInside ? 10 : 0,
          transition: "width 800ms cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: `${delay}ms`,
        }}>
          {showLabelInside && (
            <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>{value}%</span>
          )}
        </div>
        {!showLabelInside && (
          <span style={{
            position: "absolute", left: `calc(${w}% + 6px)`, top: "50%",
            transform: "translateY(-50%)", fontSize: 11, fontWeight: 600, color: "var(--bt-fg-2)"
          }}>{value}%</span>
        )}
      </div>
    </div>
  );
}

// ===== Animated mini sparkline (used inside cards) =====
export function Spark({ data = [40,55,48,62,58,72,68,84], color = "var(--bt-data-blue)", height = 56, width = 220, fill = true, animate = false }) {
  const max = Math.max(...data) * 1.05;
  const min = Math.min(...data) * 0.85;
  const range = Math.max(1, max - min);
  const stepX = width / (data.length - 1);
  const pts = data.map((v, i) => [i * stepX, height - ((v - min) / range) * (height - 4) - 2]);
  const linePath = "M " + pts.map(p => p.join(" ")).join(" L ");
  const fillPath = linePath + ` L ${width} ${height} L 0 ${height} Z`;
  const pathRef = React.useRef(null);
  const [len, setLen] = React.useState(0);
  React.useEffect(() => { if (pathRef.current) setLen(pathRef.current.getTotalLength()); }, []);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none" style={{ overflow: "visible" }}>
      {fill && (
        <path d={fillPath} fill={color} opacity="0.10" />
      )}
      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={animate && len ? {
          strokeDasharray: len,
          strokeDashoffset: len,
          animation: "bt-draw 1400ms cubic-bezier(0.16,1,0.3,1) forwards"
        } : undefined}
      />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke={color} strokeWidth="1.5"
                style={animate ? { opacity: 0, animation: `bt-fade 250ms ${800 + i * 80}ms forwards` } : undefined}/>
      ))}
    </svg>
  );
}




