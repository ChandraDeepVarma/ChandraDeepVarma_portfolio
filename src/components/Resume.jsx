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
          <div className="resume-preview reveal" style={{ display: "flex", flexDirection: "column", height: "520px", padding: 0, overflow: "hidden", border: "1px solid var(--border)", background: "#05050b", boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <div style={{ flex: 1, position: "relative", minHeight: 0, background: "#09090f" }}>
              {data.cvUrl && data.cvUrl !== "#" ? (
                <iframe
                  src={`${data.cvUrl}?inline=true#toolbar=0&navpanes=0&statusbar=0&messages=0`}
                  style={{ width: "100%", height: "100%", border: "none", background: "#09090f" }}
                  title="Resume Preview"
                />
              ) : (
                <div className="resume-lines" style={{ padding: "40px" }}>
                  <div className="r-line title" />
                  <div className="r-line short" />
                  <div className="r-spacer" />
                  <div className="r-line accent" />
                  <div className="r-line full" />
                  <div className="r-line med" />
                  <div className="r-line short" />
                </div>
              )}
            </div>
            <div className="resume-actions" style={{ padding: "20px 32px", background: "rgba(10, 10, 20, 0.75)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderTop: "1px solid var(--border)", display: "flex", gap: "12px", justifyContent: "flex-start", position: "relative", zIndex: 10 }}>
              <a href={data.cvUrl || "#"} className="btn-primary" download="Chandra_Deep_Varma_Resume.pdf">
                <span>↓ Download PDF</span>
              </a>
              {data.viewUrl && data.viewUrl !== "#" && (
                <a href={data.viewUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                  View online
                </a>
              )}
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
