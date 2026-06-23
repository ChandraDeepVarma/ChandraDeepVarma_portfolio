export default function CaseStudies({ data }) {
  if (!data) return null;
  const cases = data.cases || [];

  return (
    <section id="cases">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: 0 }}>
          <div className="section-label">Deep dives</div>
          <h2 className="section-title">Case studies</h2>
        </div>
        <div className="cases-list">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className={`case-item reveal ${
                idx > 0 ? `reveal-delay-${idx}` : ""
              }`}
            >
              <div className="case-num">{item.num}</div>
              <div className="case-content">
                <div className="case-tag">{item.tag}</div>
                <div className="case-title">{item.title}</div>
                <div className="case-desc">{item.desc}</div>
                <div className="cases-metrics">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="case-metric">
                      <div className="case-metric-val">{m.val}</div>
                      <div className="case-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-tech">
                {item.tech.map((t, tIdx) => (
                  <div key={tIdx} className="case-tech-item">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
