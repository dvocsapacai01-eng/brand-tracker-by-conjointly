import React from "react";
import { Icon } from "./Primitives.jsx";

// Blog — 07.B: Featured + 3 in a list.

export function BlogSection() {
  const featured = {
    label: "Lorem ipsum",
    title: "Dolor sit amet consectetur adipiscing elit",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — ut enim ad minim veniam quis nostrud.",
    img: "/assets/chart-brand-funnels.png",
  };
  const list = [
    { label: "Lorem ipsum", title: "Dolor sit amet consectetur adipiscing elit" },
    { label: "Sit amet",    title: "Sed do eiusmod tempor incididunt ut labore et dolore" },
    { label: "Consectetur", title: "Ut enim ad minim veniam quis nostrud exercitation" },
  ];
  return (
    <section id="blog" className="bt-section">
      <div className="bt-container">
        <div className="bt-section-head" style={{ textAlign: "left", marginLeft: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32 }}>
            <div>
              <span className="bt-eyebrow">Lorem ipsum</span>
              <h2 className="bt-h2" style={{ marginTop: 12 }}>Dolor sit amet consectetur</h2>
              <p className="bt-lead" style={{ maxWidth: 560 }}>
                Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#" style={{ fontSize: 14, color: "var(--bt-fg-1)", textDecoration: "none", fontWeight: 500, display: "inline-flex", gap: 6, alignItems: "center", whiteSpace: "nowrap" }}>
              Lorem ipsum <Icon name="arrow-right" size={14}/>
            </a>
          </div>
        </div>

        <div className="bt-blog">
          <a className="bt-blog__featured" href="#">
            <div className="bt-blog__media">
              <img src={featured.img} alt="" style={{
                width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center"
              }}/>
            </div>
            <div className="bt-blog__featured-body">
              <span className="label">{featured.label}</span>
              <h3>{featured.title}</h3>
              <p>{featured.body}</p>
              <span className="bt-blog__more">Lorem ipsum <Icon name="arrow-right" size={14}/></span>
            </div>
          </a>
          <div className="bt-blog__list">
            {list.map(p => (
              <a className="bt-blog__item" key={p.title} href="#">
                <div>
                  <span className="label">{p.label}</span>
                  <h4>{p.title}</h4>
                </div>
                <span className="bt-blog__item-arrow"><Icon name="arrow-up-right" size={20}/></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
