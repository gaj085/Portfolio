import { aboutData } from "../data/portfolioData";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-header">
        <div>
          <p className="eyebrow">ABOUT ME</p>
          <h2 className="section-title">
            Engineering software with <span>curiosity &amp; precision.</span>
          </h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-bio-card">
          <p className="about-bio-lead">
            I'm pursuing a B.Tech. in Electronics and Communication Engineering at{" "}
            <span className="bio-highlight">NIT-Bhopal (ECE)</span>, with a strong interest in software
            engineering. I enjoy building full-stack applications, exploring AI-powered systems, and solving
            challenging algorithmic problems. My projects combine practical product development with an interest
            in understanding how systems work under the hood.
          </p>
          <div className="about-badges">
            <span className="accent-tag">ECE @ NIT-Bhopal</span>
            <span className="accent-tag">Graduating 2027</span>
            <span className="accent-tag">Full-Stack &amp; Systems</span>
          </div>
        </div>

        <div className="about-focus-grid">
          {aboutData.focusAreas.map((area) => (
            <div key={area.title} className="focus-card">
              <div className="focus-icon-box" aria-hidden="true">
                {area.icon === "layers" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                )}
                {area.icon === "code" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                )}
                {area.icon === "cpu" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                )}
                {area.icon === "git-branch" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="3" x2="6" y2="15"></line>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </svg>
                )}
              </div>
              <h3 className="focus-title">{area.title}</h3>
              <p className="focus-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
