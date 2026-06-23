export default function Experience({ data }) {
  if (!data) return null;
  const jobs = data.jobs || [];

  return (
    <section id="experience">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <div className="section-label">Career</div>
          <h2 className="section-title">Where I've worked</h2>
        </div>
        <div className="timeline">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className={`timeline-item reveal ${
                idx > 0 ? `reveal-delay-${idx}` : ""
              }`}
            >
              <div className="tl-date">{job.date}</div>
              <div className="tl-role">{job.role}</div>
              <div className="tl-company">{job.company}</div>
              <div className="tl-desc">{job.desc}</div>
              <div className="tl-tags">
                {job.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tl-tag">
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
