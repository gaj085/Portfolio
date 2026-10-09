import { achievementsData } from "../data/portfolioData";

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="section-header">
        <div>
          <p className="eyebrow">HONORS &amp; MILESTONES</p>
          <h2 className="section-title">
            Key <span>achievements.</span>
          </h2>
          <p className="section-subtitle">
            Problem-solving milestones, hackathon selections, and competitive metrics.
          </p>
        </div>
      </div>

      <div className="achievements-grid">
        {achievementsData.map((item) => {
          const isHighlight = item.id === "dsa" || item.id === "chess";
          return (
            <div
              key={item.id}
              className={`achievement-card ${isHighlight ? "achievement-highlight" : ""}`}
            >
              <div className="achievement-header">
                <span className="achievement-metric">{item.metric}</span>
                <span className="achievement-category">{item.category}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;
