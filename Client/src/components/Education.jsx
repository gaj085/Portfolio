import { educationData } from "../data/portfolioData";

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-header">
        <div>
          <p className="eyebrow">ACADEMIC BACKGROUND</p>
          <h2 className="section-title">
            Formal <span>education.</span>
          </h2>
          <p className="section-subtitle">
            Strong academic foundations in engineering, mathematics, and science.
          </p>
        </div>
      </div>

      <div className="education-grid">
        {educationData.map((item) => (
          <div key={item.id} className="education-card">
            <div className="education-card-top">
              <span className="education-duration">{item.duration}</span>
              <span className="education-score-pill">{item.score}</span>
            </div>
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-institution">
              <span>{item.institution}</span>
              {item.location && (
                <>
                  <span className="education-pipe" aria-hidden="true"> | </span>
                  <span className="education-location">{item.location}</span>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
