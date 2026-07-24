import { useState } from "react";
import { Link } from "react-router";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CATEGORIES, PROJECTS } from "../../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useScrollAnimation();

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div ref={headerRef as React.RefObject<HTMLDivElement>} className="animate-on-scroll">
            <span className="section-label">Portfolio</span>
            <h1 className="page-header__title">
              Our{" "}
              <span className="gradient-text">Work</span>
            </h1>
            <p className="page-header__sub">
              A selection of projects we're proud of — brand identities to complex digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-pill${activeFilter === cat ? " filter-pill--active" : ""}`}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((proj, i) => (
              <ProjectCard
                key={proj.title}
                proj={proj}
                index={i}
                isActiveFilterAll={activeFilter === "All"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner animate-on-scroll scale-in">
            <div className="cta-banner__orb" />
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Like what<br />you see?</h2>
              <p className="cta-banner__sub">{"Let's build your next project together."}</p>
            </div>
            <Link to="/contact" className="btn btn--white btn--lg">Start a Project →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
