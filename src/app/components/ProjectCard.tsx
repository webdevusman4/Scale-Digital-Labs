import React from "react";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  proj: Project;
  index: number;
  isActiveFilterAll: boolean;
}

export default function ProjectCard({ proj, index, isActiveFilterAll }: ProjectCardProps) {
  return (
    <div
      className={`project-card animate-on-scroll${
        index === 0 && isActiveFilterAll ? " project-card--hero" : ""
      }`}
      style={
        {
          "--delay": `${index * 80}ms`,
          gridColumn: index === 0 && isActiveFilterAll ? "1 / -1" : undefined,
        } as React.CSSProperties
      }
    >
      <div className="project-card__img-wrap">
        <img src={proj.img} alt={proj.title} className="project-card__img" />
        <div className="project-card__tags">
          {proj.tags.map((t) => (
            <span key={t} className="project-card__tag">
              {t}
            </span>
          ))}
        </div>
        <div className="project-card__overlay">
          <div className="project-card__overlay-row">
            <div>
              {proj.clientType && (
                <p className="project-card__concept-badge">{proj.clientType}</p>
              )}
              <p className="project-card__overlay-cat">{proj.category}</p>
              <p className="project-card__overlay-title">{proj.title}</p>
            </div>
            {proj.isConceptCard ? (
              <a
                href="#"
                className="project-card__view-btn project-card__view-btn--concept"
              >
                View Concept ✦
              </a>
            ) : (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__view-btn"
              >
                View →
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-card__meta">
        <p className="project-card__category">
          {proj.category} · {proj.year}
        </p>
        <h3 className="project-card__title">{proj.title}</h3>
        {proj.desc && (
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--fg-muted)",
              marginTop: 8,
              lineHeight: 1.6,
            }}
          >
            {proj.desc}
          </p>
        )}
      </div>
      <div className="project-card__bar" />
    </div>
  );
}
