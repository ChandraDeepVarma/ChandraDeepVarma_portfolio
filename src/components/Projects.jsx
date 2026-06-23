"use client";

export default function Projects({ data }) {
  if (!data) return null;
  const projects = data.projects || [];

  const defaultIcons = [
    <svg key="1" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ position: "relative", zIndex: 1, opacity: 0.3 }}>
      <rect x="10" y="10" width="40" height="8" rx="4" fill="white" />
      <rect x="10" y="26" width="25" height="8" rx="4" fill="white" />
      <rect x="10" y="42" width="35" height="8" rx="4" fill="white" />
    </svg>,
    <svg key="2" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ position: "relative", zIndex: 1, opacity: 0.3 }}>
      <circle cx="30" cy="30" r="18" stroke="white" strokeWidth="2" />
      <circle cx="30" cy="30" r="8" fill="white" />
      <line x1="12" y1="30" x2="18" y2="30" stroke="white" strokeWidth="2" />
      <line x1="42" y1="30" x2="48" y2="30" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="3" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ position: "relative", zIndex: 1, opacity: 0.3 }}>
      <rect x="8" y="16" width="44" height="28" rx="4" stroke="white" strokeWidth="2" />
      <polyline points="18,32 26,24 34,30 42,20" stroke="white" strokeWidth="2" fill="none" />
    </svg>,
    <svg key="4" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ position: "relative", zIndex: 1, opacity: 0.3 }}>
      <rect x="14" y="8" width="32" height="44" rx="4" stroke="white" strokeWidth="2" />
      <line x1="20" y1="20" x2="40" y2="20" stroke="white" strokeWidth="2" />
      <line x1="20" y1="30" x2="35" y2="30" stroke="white" strokeWidth="2" />
      <line x1="20" y1="40" x2="30" y2="40" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="5" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ position: "relative", zIndex: 1, opacity: 0.3 }}>
      <path d="M30 10 L50 40 L10 40 Z" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="30" cy="28" r="4" fill="white" />
    </svg>,
    <svg key="6" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ position: "relative", zIndex: 1, opacity: 0.3 }}>
      <circle cx="20" cy="30" r="8" stroke="white" strokeWidth="2" />
      <circle cx="40" cy="30" r="8" stroke="white" strokeWidth="2" />
      <line x1="28" y1="30" x2="32" y2="30" stroke="white" strokeWidth="2" />
    </svg>
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / rect.height) * -10;
    const ry = ((e.clientX - cx) / rect.width) * 10;
    card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.01)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: 0 }}>
          <div className="section-label">Featured work</div>
          <h2 className="section-title">Selected projects</h2>
          <p className="section-desc" style={{ marginTop: "12px" }}>
            Real products, shipped to production. Each project represents a unique challenge solved.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card reveal ${
                idx % 3 > 0 ? `reveal-delay-${idx % 3}` : ""
              }`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-img">
                <div className={`project-img-bg ${project.bgClass}`} style={{ position: "absolute", inset: 0 }} />
                {defaultIcons[idx % defaultIcons.length]}
              </div>
              <div className="project-body">
                <div className="project-num">{project.num}</div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl || "#"} className="project-link" target="_blank" rel="noopener noreferrer">
                    ↗ Live demo
                  </a>
                  <a href={project.sourceUrl || "#"} className="project-link" target="_blank" rel="noopener noreferrer">
                    ⌥ Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
