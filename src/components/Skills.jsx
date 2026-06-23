function getCategoryIcon(cat) {
  const title = (cat.title || "").toLowerCase();
  const iconText = cat.icon || "";

  // Frontend
  if (title.includes("frontend") || title.includes("client") || title.includes("ui") || iconText === "⬡") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  // Backend
  if (title.includes("backend") || title.includes("api") || title.includes("server") || iconText === "◈") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }

  // Database
  if (title.includes("database") || title.includes("data") || title.includes("storage") || iconText === "◇") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // DevOps & Third-Party
  if (title.includes("devops") || title.includes("tool") || title.includes("infra") || title.includes("integration") || title.includes("third-party") || iconText === "◉" || iconText === "⊞" || iconText === "⊕") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }

  return <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>{iconText}</span>;
}

export default function Skills({ data }) {
  if (!data) return null;
  const categories = data.categories || [];

  return (
    <section id="skills">
      <div className="section-inner">
        <div className="skills-header">
          <div className="reveal">
            <div className="section-label">Tech stack</div>
            <h2 className="section-title">What I work with</h2>
          </div>
          <p className="section-desc reveal reveal-delay-2">
            Proficient across the full spectrum of modern web development — from pixel-perfect frontends to distributed backend systems.
          </p>
        </div>
        <div className="skills-categories">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`skill-category reveal ${
                idx > 0 ? `reveal-delay-${idx}` : ""
              }`}
            >
              <div className={`skill-cat-icon ${cat.colorClass}`}>
                {getCategoryIcon(cat)}
              </div>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-cat-sub">{cat.subtitle}</div>
              <div className="skill-tags">
                {cat.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

