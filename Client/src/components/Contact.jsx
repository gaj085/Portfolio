import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-box">
        <div className="contact-header">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 className="contact-heading">
            Have an interesting <span>opportunity?</span>
          </h2>
          <p className="contact-subtext">
            I'm always interested in discussing software engineering opportunities, meaningful projects, and ideas worth building.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href={`mailto:${personalInfo.email}`}
            className="button button-primary contact-main-btn"
            aria-label={`Send email to ${personalInfo.email}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>Say Hello ({personalInfo.email})</span>
            <span className="arrow-icon" aria-hidden="true">↗</span>
          </a>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
            aria-label="View Resume PDF in new tab"
          >
            View Resume <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
            aria-label="GitHub profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
            aria-label="LinkedIn profile"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
