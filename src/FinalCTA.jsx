import React from "react";
import { Icon } from "./Primitives.jsx";

// Final CTA — 08.C: Split. Pitch left, lead form right (dark).

export function FinalCTA() {
  return (
    <section id="cta" className="bt-section">
      <div className="bt-container">
        <div className="bt-cta-split">
          <div>
            <h2>Lorem ipsum dolor sit amet?</h2>
            <p>
              Consectetur adipiscing elit sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua enim ad minim veniam.
            </p>
            <div className="bt-cta-split__benefits">
              {[
                "Lorem ipsum dolor sit amet consectetur",
                "Adipiscing elit sed do eiusmod tempor",
                "Incididunt ut labore et dolore magna",
              ].map(b => (
                <span className="bt-cta-split__benefit" key={b}>
                  <Icon name="check" size={16} strokeWidth={2.25}/>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="bt-cta-form">
            <h4>Lorem ipsum dolor</h4>
            <p className="helper">Sit amet consectetur adipiscing elit.</p>
            <div className="bt-field">
              <label htmlFor="cta-email">Lorem ipsum</label>
              <input id="cta-email" type="email" placeholder="lorem@ipsum.com"/>
            </div>
            <div className="bt-field">
              <label htmlFor="cta-cat">Dolor sit</label>
              <select id="cta-cat" defaultValue="">
                <option value="" disabled>Lorem ipsum dolor</option>
                <option>Lorem</option>
                <option>Ipsum &amp; dolor</option>
                <option>Sit &amp; amet</option>
                <option>Consectetur</option>
                <option>Adipiscing</option>
              </select>
            </div>
            <button className="btn btn--md bt-cta-form__submit">
              Lorem ipsum
              <Icon name="arrow-right" size={16}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
