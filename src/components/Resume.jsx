export default function Resume({ data }) {
  if (!data) return null;

  return (
    <section id="resume">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: 0 }}>
          <div className="section-label">Download</div>
          <h2 className="section-title">Resume</h2>
        </div>
        <div className="resume-container">
          <div className="resume-preview reveal">
            <div className="resume-lines">
              <div className="r-line title" />
              <div className="r-line short" />
              <div className="r-spacer" />
              <div className="r-line accent" />
              <div className="r-line full" />
              <div className="r-line med" />
              <div className="r-line short" />
              <div className="r-spacer" />
              <div className="r-line accent" />
              <div className="r-line full" />
              <div className="r-line med" />
              <div className="r-line full" />
              <div className="r-spacer" />
              <div className="r-line accent" />
              <div className="r-line med" />
              <div className="r-line short" />
            </div>
            <div className="resume-actions">
              <a href="#" className="btn-primary">
                <span>↓ Download PDF</span>
              </a>
              <a href="#" className="btn-secondary">
                View online
              </a>
            </div>
          </div>
          <div className="resume-info reveal reveal-delay-2">
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
            <div className="resume-highlights">
              {(data.highlights || []).map((hl, idx) => (
                <div key={idx} className="resume-hl">
                  {hl}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
