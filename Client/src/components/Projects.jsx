import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-header projects-header">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="section-title">
            Featured <span>projects.</span>
          </h2>
          <p className="section-subtitle">
            A curated collection of full-stack platforms, machine learning systems, and AI applications.
          </p>
        </div>

        <div className="projects-count-pill" aria-label={`${projects.length} featured projects`}>
          <span className="count-dot" aria-hidden="true" />
          <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
