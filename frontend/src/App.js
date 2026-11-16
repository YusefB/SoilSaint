import React from 'react';
import './App.css';

const features = [
  {
    number: '01',
    title: 'Know your soil',
    description: 'Get a clearer picture of what is happening beneath the surface, from soil health to the conditions your plants need.',
    icon: '⌁',
  },
  {
    number: '02',
    title: 'Grow with confidence',
    description: 'Turn useful insights into practical next steps for a more resilient garden, farm, or growing space.',
    icon: '✳',
  },
  {
    number: '03',
    title: 'Care for the long term',
    description: 'Build better growing habits that support healthy soil and a thriving environment season after season.',
    icon: '↗',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="SoilSaint home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>soil<span className="brand-light">saint</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#approach">Our approach</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="mailto:hello@soilsaint.com">Get in touch <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> A better way to grow</div>
            <h1>Good things<br />start <em>underground.</em></h1>
            <p className="hero-description">Healthy soil changes everything. SoilSaint helps you understand the ground beneath you and grow a little better, every day.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#approach">Discover SoilSaint <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#about">Why soil matters <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Thoughtful growing. Healthier ground.</div>
          </div>
          <div className="hero-art" role="img" aria-label="Illustration of a thriving plant growing from healthy soil">
            <div className="sun-disc" />
            <div className="art-caption"><span>GROW FROM THE GROUND UP</span><span>EST. WITH CARE</span></div>
            <svg className="plant-illustration" viewBox="0 0 520 560" fill="none" aria-hidden="true">
              <path d="M260 416C260 333 259 246 258 162" stroke="#263D2A" strokeWidth="8" strokeLinecap="round" />
              <path d="M258 255C209 248 167 221 147 181C194 177 238 193 258 230" fill="#52745A" />
              <path d="M261 206C268 151 301 108 353 88C365 137 344 187 282 219" fill="#6C8B67" />
              <path d="M259 314C303 278 350 269 390 286C367 330 325 352 260 340" fill="#849B70" />
              <path d="M259 162C242 127 222 108 189 102C185 134 208 162 258 178" fill="#A4B286" />
              <path d="M260 417C227 438 208 472 206 512M260 419C284 452 296 479 294 520M256 422C250 457 253 486 260 524M262 426C311 432 334 452 348 477M254 429C220 430 184 448 166 472" stroke="#E9D9B8" strokeWidth="5" strokeLinecap="round" />
              <path d="M116 418C152 389 193 376 260 376C326 376 372 390 405 418L392 443H129L116 418Z" fill="#B66C45" />
              <path d="M128 432H392" stroke="#D99B6C" strokeWidth="4" strokeLinecap="round" />
              <path d="M155 453C182 466 207 470 236 469M279 467C308 468 338 462 365 450" stroke="#9D593A" strokeWidth="4" strokeLinecap="round" />
              <circle cx="142" cy="405" r="5" fill="#E6BC86" /><circle cx="378" cy="405" r="5" fill="#E6BC86" />
            </svg>
            <div className="art-stamp"><span>ROOTED<br />IN CARE</span><span className="stamp-star">✳</span></div>
            <div className="art-label">NOURISH THE ROOTS<br />AND THE REST WILL FOLLOW</div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-rule" /><span>03</span></div>
        </section>

        <section className="intro-strip" id="about">
          <p className="section-kicker">THE SOILSAINT IDEA</p>
          <p className="intro-copy">The best growth doesn't happen overnight.<br /><span>It starts with understanding what you're growing in.</span></p>
          <div className="intro-aside">A little more care below the surface can make a world of difference above it.</div>
        </section>

        <section className="approach" id="approach">
          <div className="section-heading">
            <div><p className="section-kicker">A GROUNDED APPROACH</p><h2>Grow well.<br /><em>From the ground up.</em></h2></div>
            <p className="heading-aside">Simple ideas for healthier soil and happier things growing in it.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top"><span>{feature.number}</span><span className="feature-icon" aria-hidden="true">{feature.icon}</span></div>
                <h3>{feature.title}</h3><p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing">
          <div className="closing-flower" aria-hidden="true">✳</div>
          <p className="section-kicker">LET'S GROW SOMETHING GOOD</p>
          <h2>Start with the soil.<br /><em>See where it takes you.</em></h2>
          <a className="button button-light" href="mailto:hello@soilsaint.com">Say hello <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">✳</span><span>soil<span className="brand-light">saint</span></span></a>
        <span>Rooted in care. Growing toward better.</span>
        <span>© {new Date().getFullYear()} SoilSaint</span>
      </footer>
    </div>
  );
}

export default App;
