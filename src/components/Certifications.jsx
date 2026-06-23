export default function Certifications({ data }) {
  if (!data) return null;
  const certs = data.certs || [];

  return (
    <section id="certifications">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className={`cert-card reveal ${
                idx % 3 > 0 ? `reveal-delay-${idx % 3}` : ""
              }`}
            >
              <div className="cert-badge" style={{ backgroundColor: cert.color }}>
                {cert.icon}
              </div>
              <div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-year">{cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
