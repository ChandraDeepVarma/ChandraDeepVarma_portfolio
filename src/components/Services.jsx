export default function Services({ data }) {
  if (!data) return null;
  const services = data.services || [];

  return (
    <section id="services">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: 0 }}>
          <div className="section-label">What I offer</div>
          <h2 className="section-title">Services</h2>
        </div>
        <div className="services-grid">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`service-card ${svc.type} reveal ${
                idx % 3 > 0 ? `reveal-delay-${idx % 3}` : ""
              }`}
            >
              <div className="service-icon">{svc.icon}</div>
              <div className="service-title">{svc.title}</div>
              <div className="service-desc">{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
