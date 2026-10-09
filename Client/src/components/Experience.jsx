import { experienceData } from "../data/portfolioData";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-header">
        <div>
          <p className="eyebrow">BACKGROUND</p>
          <h2 className="section-title">
            Experience &amp; <span>leadership.</span>
          </h2>
          <p className="section-subtitle">
            Engineering internship training and student community leadership roles.
          </p>
        </div>
      </div>

      <div className="experience-timeline">
        {experienceData.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true">
              <span className="marker-dot" />
              <span className="marker-line" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <div className="timeline-role-row">
                    <h3 className="timeline-role">{item.role}</h3>
                    <span className="timeline-type-pill">{item.type}</span>
                  </div>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <span className="timeline-duration">{item.duration}</span>
              </div>

              <ul className="timeline-points">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="timeline-point">
                    <span className="point-bullet" aria-hidden="true">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
