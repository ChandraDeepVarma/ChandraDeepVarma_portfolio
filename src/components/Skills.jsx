import React from "react";

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

function getSkillIcon(tag) {
  const name = (tag || "").toLowerCase().trim();

  // React
  if (name === "react") {
    return (
      <svg width="13" height="13" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#61DAFB" }}>
        <ellipse cx="50" cy="50" rx="15" ry="40" stroke="currentColor" strokeWidth="7" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="15" ry="40" stroke="currentColor" strokeWidth="7" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="15" ry="40" stroke="currentColor" strokeWidth="7" transform="rotate(150 50 50)" />
        <circle cx="50" cy="50" r="7" fill="currentColor" />
      </svg>
    );
  }

  // Next.js
  if (name === "next.js" || name === "nextjs") {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#fff" }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15.5 16.5L10.5 10v6.5H9.3V7.5h1.2l5 6.5V7.5h1.2v9h-1.2z" fill="currentColor"/>
      </svg>
    );
  }

  // Framer Motion
  if (name.includes("framer")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#F024B6" }}>
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="currentColor"/>
      </svg>
    );
  }

  // Tailwind
  if (name.includes("tailwind")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#38BDF8" }}>
        <path d="M12 6.086C14.07 3.393 17.531 2 21.036 2c.5 0 .86.536.634.981l-4.437 8.756c2.07 2.693 5.531 4.086 9.036 4.086c.5 0 .86.536.634.981l-4.437 8.756c-1.42 2.805-4.237 4.438-7.234 4.438c-3.505 0-6.966-1.393-10.472-1.393c-.5 0-.86-.536-.634-.981l4.437-8.756c-2.07-2.693-5.531-4.086-9.036-4.086c-.5 0-.86-.536-.634-.981l4.437-8.756C4.766 3.719 7.583 2.086 10.58 2.086c.5 0 .86.536.634.981l-4.437 8.756C8.847 14.516 12 16 12 16" fill="currentColor"/>
      </svg>
    );
  }

  // Bootstrap
  if (name.includes("bootstrap")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#7952B3" }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 14H8.5V8h4.8c1.3 0 2.2.8 2.2 2 0 1-.6 1.7-1.4 1.9.9.2 1.6 1 1.6 2.1 0 1.2-.9 2-2.1 2zM10.1 9.4v2h2.6c.5 0 .9-.3.9-.8s-.4-.8-.9-.8h-2.6zm0 3.6v2h3c.5 0 .9-.3.9-.8s-.4-.8-.9-.8h-3z" fill="currentColor"/>
      </svg>
    );
  }

  // Javascript
  if (name.includes("javascript") || name === "js") {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#F7DF1E" }}>
        <rect width="24" height="24" fill="currentColor" rx="3"/>
        <path d="M19.784 17.195c-.097-.665-.544-1.127-1.282-1.127-.723 0-1.18.396-1.18 1.053 0 .615.426.85 1.137 1.155l.776.331c1.23.52 1.83 1.137 1.83 2.378 0 1.545-1.188 2.378-2.738 2.378-1.583 0-2.584-.79-2.784-2.146h1.597c.123.58.544.928 1.187.928.616 0 1.085-.297 1.085-.928 0-.58-.387-.79-.982-1.053l-.776-.33c-1.188-.507-1.748-1.112-1.748-2.28 0-1.396 1.053-2.26 2.502-2.26 1.458 0 2.35.792 2.518 1.894h-1.58z" fill="#000"/>
      </svg>
    );
  }

  // Node.js
  if (name.includes("node")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#339933" }}>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-1 15.5l-4.5-2.5V10l4.5 2.5v5zm1-6.5L7.5 8.5 12 6l4.5 2.5L12 11zm5 4.5l-4.5 2.5v-5l4.5-2.5v5z" fill="currentColor"/>
      </svg>
    );
  }

  // Python
  if (name.includes("python")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#3776AB" }}>
        <path d="M11.93 2c-2.4 0-4.3 1.9-4.3 4.3v1.8h4.3v.6H6.13c-2.4 0-4.3 1.9-4.3 4.3v3c0 2.4 1.9 4.3 4.3 4.3h1.8v-2.5c0-1.5 1.2-2.8 2.8-2.8h4.3c1.5 0 2.8-1.2 2.8-2.8V6.3c0-2.4-1.9-4.3-4.3-4.3zm-1.8 1.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM12.07 22c2.4 0 4.3-1.9 4.3-4.3v-1.8H12.1v-.6h5.8c2.4 0 4.3-1.9 4.3-4.3v-3c0-2.4-1.9-4.3-4.3-4.3h-1.8v2.5c0 1.5-1.2 2.8-2.8 2.8H8.97c-1.5 0-2.8 1.2-2.8 2.8v5.8c0 2.4 1.9 4.3 4.3 4.3zm1.8-1.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="currentColor"/>
      </svg>
    );
  }

  // Express.js
  if (name.includes("express")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#fff" }}>
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9h3v1.5H8.5v1h1.5v1.5H8.5v1H10V15H7V9zm5 0h3v1.5h-1.5v1H15v1.5h-1.5V15H12V9z" fill="currentColor"/>
      </svg>
    );
  }

  // PostgreSQL
  if (name.includes("postgres")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#336791" }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-4h1v4zm2.5-5.5h-4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4.5c.3 0 .5.2.5.5s-.2.5-.5.5zm0-2.5h-4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4.5c.3 0 .5.2.5.5s-.2.5-.5.5z" fill="currentColor"/>
      </svg>
    );
  }

  // MongoDB
  if (name.includes("mongo")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#47A248" }}>
        <path d="M12 2c-.1 0-.2.1-.3.2C10.2 5.3 7 10.6 7 14c0 3 2.2 5 5 5s5-2 5-5c0-3.4-3.2-8.7-4.7-11.8-.1-.1-.2-.2-.3-.2zm0 3c.9 2.2 3 6 3 9 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-3 2.1-6.8 3-9z" fill="currentColor"/>
      </svg>
    );
  }

  // MySQL
  if (name.includes("mysql")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#00758F" }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 11.2c-.3.4-.7.6-1.2.6h-2.2v2.7H10V9.5h4c.9 0 1.5.5 1.5 1.5 0 .8-.5 1.4-1.2 1.6l1 1.6zm-3.4-2.7v1.7h2.1c.4 0 .7-.2.7-.8 0-.5-.3-.9-.7-.9h-2.1z" fill="currentColor"/>
      </svg>
    );
  }

  // Razorpay
  if (name.includes("razorpay")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#0A2540" }}>
        <path d="M12 2L2 14h10l-2 8 10-12H10l2-8z" fill="#0052FF"/>
      </svg>
    );
  }

  // Firebase
  if (name.includes("firebase")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#FFCA28" }}>
        <path d="M3.9 18.2l7.1-13.6c.3-.5.9-.5 1.2 0l2 3.8L3.9 18.2zm14.3-.8L15 4.3c-.3-.5-1-.5-1.2 0L3.2 19.3c-.2.4 0 .9.5.9h14.1c.4 0 .6-.5.4-.8z" fill="currentColor"/>
      </svg>
    );
  }

  // Cloudinary
  if (name.includes("cloudinary")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#3448C5" }}>
        <path d="M19.3 10c.1-.7.1-1.3-.2-2-.6-1.6-2.2-2.5-3.8-2.1-.9.2-1.7.9-2.1 1.7C12.4 7 11.2 6.5 10 6.7 8.3 7 7.1 8.5 7.1 10.2c-1.5.3-2.6 1.6-2.6 3.2 0 1.9 1.6 3.5 3.5 3.5h11c1.7 0 3-1.3 3-3 0-1.8-1.2-3.3-2.7-3.9z" fill="currentColor"/>
      </svg>
    );
  }

  // Google Maps
  if (name.includes("google maps") || name.includes("map")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#4285F4" }}>
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" fill="currentColor"/>
      </svg>
    );
  }

  // WhatsApp
  if (name.includes("whatsapp")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#25D366" }}>
        <path d="M12.03 2a9.97 9.97 0 0 0-8.56 15.08L2 22l5.1-1.33a9.96 9.96 0 0 0 4.93 1.3h.01a9.97 9.97 0 0 0 9.99-9.97c0-2.66-1.03-5.16-2.92-7.05A9.91 9.91 0 0 0 12.03 2zm5.7 13.06c-.32.88-1.6 1.6-2.2 1.65-.6.04-1.37.24-4.13-.88a12.8 12.8 0 0 1-5.69-5c-.73-1-1.17-2.16-1.17-3.37a3.5 3.5 0 0 1 1.1-2.63c.27-.27.6-.33.8-.33h.53c.17 0 .4.01.62.53.22.53.76 1.86.83 2 .07.13.11.3.02.48-.09.18-.18.3-.35.5-.18.2-.38.45-.54.6-.18.17-.37.35-.16.7.2.35.92 1.5 1.97 2.43 1.35 1.2 2.48 1.57 2.83 1.75.35.18.56.15.77-.07.2-.23.9-.97 1.13-1.3.23-.33.47-.28.8-.16.33.12 2.1 1 2.46 1.18.36.18.6.27.68.42.09.15.09.87-.23 1.75z" fill="currentColor"/>
      </svg>
    );
  }

  // REST or API general
  if (name.includes("rest") || name.includes("api")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a78bfa" }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }

  // Database concepts fallbacks
  if (name.includes("database design") || name.includes("modeling") || name.includes("crud") || name.includes("optimization")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#38bdf8" }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // Authentication & Authorization / RBAC
  if (name.includes("authentication") || name.includes("authorization") || name.includes("access control") || name.includes("rbac") || name.includes("security")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#34d399" }}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }

  // Responsive / design concepts
  if (name.includes("responsive") || name.includes("layout") || name.includes("design")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#cbd5e1" }}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }

  // Files / upload
  if (name.includes("file") || name.includes("upload")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fb7185" }}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    );
  }

  // Rendering strategies / CSR / SSR / SSG / General gears
  if (name.includes("rendering") || name.includes("csr") || name.includes("ssr") || name.includes("ssg") || name.includes("static site")) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#f43f5e" }}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    );
  }

  // Fallback general bracket code icon
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a78bfa" }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
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
                  <span
                    key={tIdx}
                    className="skill-tag"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {getSkillIcon(tag)}
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
