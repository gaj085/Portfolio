import { skillsData } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <div>
          <p className="eyebrow">TECHNICAL EXPERTISE</p>
          <h2 className="section-title">
            Skills &amp; <span>technologies.</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, and engineering tools applied across real-world systems.
          </p>
        </div>
      </div>

      <div className="skills-grid">
        {skillsData.map((category) => (
          <div key={category.category} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-category-indicator" aria-hidden="true" />
              <h3 className="skill-category-title">{category.category}</h3>
            </div>
            <div className="skill-badges-list">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
