import { useState } from "react";

function ProjectCard({ project, index }) {
  const [showHighlights, setShowHighlights] = useState(false);
  const primaryLink = project.live || project.github;
  const categoryText = project.category || project.subtitle || "Software Project";

  return (
    <article className="project-card" id={`project-${project.id}`}>
      {/* 16:9 Image Preview Container */}
      {primaryLink ? (
        <a
          className="project-image-link"
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live application or source for ${project.title}`}
        >
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src={project.image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              width="640"
              height="360"
            />
            <div className="project-image-overlay" aria-hidden="true" />
            <span className="project-image-badge" aria-hidden="true">
              Visit Project ↗
            </span>
          </div>
        </a>
      ) : (
        <div className="project-image-link no-link">
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src={project.image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              width="640"
              height="360"
            />
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="project-card-content">
        <div className="project-card-header">
          <div className="project-header-text">
            <p className="project-category">{categoryText}</p>
            <h3 className="project-title">{project.title}</h3>
          </div>
          <span className="project-index" aria-label={`Project number ${index + 1}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Technical Highlights Toggle (if available) */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="project-highlights-container">
            <button
              type="button"
              className="highlights-toggle-btn"
              onClick={() => setShowHighlights(!showHighlights)}
              aria-expanded={showHighlights}
              aria-controls={`highlights-${project.id}`}
            >
              <span>{showHighlights ? "Hide" : "View"} technical highlights</span>
              <span className={`toggle-chevron ${showHighlights ? "is-expanded" : ""}`} aria-hidden="true">
                ▾
              </span>
            </button>

            {showHighlights && (
              <ul id={`highlights-${project.id}`} className="project-highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="highlight-item">
                    <span className="highlight-bullet" aria-hidden="true">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Technology Badges */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="project-tech-stack" aria-label="Technologies used">
            {project.techStack.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="project-actions">
          {project.github && (
            <a
              href={project.github}
              className="project-link-btn link-github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              className="project-link-btn link-live"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live deployment`}
            >
              <span className="live-dot" aria-hidden="true" />
              <span>Live Demo</span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
