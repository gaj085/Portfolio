import { personalInfo, heroStats } from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid">
        {/* Left Column: Introduction & CTAs */}
        <div className="hero-content">
          <div className="availability-badge" role="status">
            <span className="status-dot-pulse" aria-hidden="true" />
            <span>{personalInfo.availability}</span>
          </div>

          <p className="eyebrow">{personalInfo.eyebrow}</p>

          <h1 className="hero-title">
            {personalInfo.headlineStart}
            <br />
            <span className="hero-title-accent">{personalInfo.headlineAccent}</span>
          </h1>

          <p className="hero-description">
            I'm a software-focused{" "}
            <span className="bio-highlight">NIT-Bhopal ECE</span> student who enjoys building
            full-stack applications, solving challenging problems, and exploring AI-powered products.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span className="arrow-icon" aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
              <span className="arrow-icon" aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Top Highlight Stat Boxes: CGPA, 500+ DSA, 1900 Chess */}
          <div className="hero-stats-grid" aria-label="Key highlights">
            {heroStats.map((stat) => (
              <div key={stat.id} className="hero-stat-box">
                <div className="hero-stat-top">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-badge">{stat.label}</span>
                </div>
                <span className="hero-stat-subtext">{stat.subtext}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Portrait with Full-Stack Ecosystem Backdrop */}
        <div className="hero-visual-wrapper">
          {/* Full-Stack Architecture Backdrop conveying full-stack engineering */}
          <div className="hero-fullstack-backdrop" aria-hidden="true">
            <div className="fs-glow-sphere" />
            <div className="orbit-ring orbit-ring-outer" />
            <div className="orbit-ring orbit-ring-mid" />
            <div className="orbit-ring orbit-ring-inner" />

            {/* Floating Full-Stack Badges framing the portrait */}
            <div className="fs-badge fs-badge-frontend">
              <span className="fs-badge-dot dot-frontend" />
              <div className="fs-badge-text">
                <span className="fs-badge-layer">Frontend</span>
                <span className="fs-badge-tech">React.js · UI</span>
              </div>
            </div>

            <div className="fs-badge fs-badge-backend">
              <span className="fs-badge-dot dot-backend" />
              <div className="fs-badge-text">
                <span className="fs-badge-layer">Backend</span>
                <span className="fs-badge-tech">Node.js · APIs</span>
              </div>
            </div>

            <div className="fs-badge fs-badge-database">
              <span className="fs-badge-dot dot-database" />
              <div className="fs-badge-text">
                <span className="fs-badge-layer">Database</span>
                <span className="fs-badge-tech">MongoDB · SQL</span>
              </div>
            </div>

            <div className="fs-badge fs-badge-fullstack">
              <span className="fs-badge-dot dot-fullstack" />
              <div className="fs-badge-text">
                <span className="fs-badge-layer">Architecture</span>
                <span className="fs-badge-tech">Full-Stack Dev</span>
              </div>
            </div>
          </div>

          {/* Portrait foreground card */}
          <div className="hero-portrait-container">
            <div className="hero-portrait-frame">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="hero-portrait-img"
                loading="eager"
                onError={(e) => {
                  console.error("Portrait image failed to load:", e.target.src);
                }}
              />
              <div className="portrait-overlay" aria-hidden="true" />
            </div>

            <div className="portrait-caption">
              <span className="status-dot" aria-hidden="true" />
              <span>{personalInfo.caption}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
