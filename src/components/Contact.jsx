"use client";

import { useState } from "react";

export default function Contact({ data }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          text: `Thank you, ${form.name}! Your message has been sent successfully.`,
        });
        setForm({ name: "", email: "", subject: "", message: "" });
        
        // Auto-dismiss success message after 6 seconds
        setTimeout(() => {
          setStatus((prev) => prev.type === "success" ? { type: "", text: "" } : prev);
        }, 6000);
      } else {
        setStatus({
          type: "error",
          text: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Failed to connect to server. Please check your network connection.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  if (!data) return null;

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <div className="section-label">Get in touch</div>
          <h2 className="section-title">
            Let's build something
            <br />
            remarkable together
          </h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Open to the right opportunities</h3>
            <p>
              Whether you're a founder with an ambitious idea, a recruiter with a compelling role, or a team needing technical expertise — I'd love to hear from you.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">✉</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">{data.email}</div>
                </div>
              </div>
              {data.phone && (
                <div className="contact-item">
                  <div className="contact-item-icon">☏</div>
                  <div>
                    <div className="contact-item-label">Phone</div>
                    <div className="contact-item-value">{data.phone}</div>
                  </div>
                </div>
              )}
              <div className="contact-item">
                <div className="contact-item-icon">◈</div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-value">{data.linkedin}</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">⌥</div>
                <div>
                  <div className="contact-item-label">GitHub</div>
                  <div className="contact-item-value">{data.github}</div>
                </div>
              </div>
              {data.location && (
                <div className="contact-item">
                  <div className="contact-item-icon">◎</div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">{data.location}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            {status.text && (
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  marginBottom: "8px",
                  border: "1px solid",
                  backgroundColor: status.type === "success" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                  borderColor: status.type === "success" ? "rgba(16, 185, 129, 0.25)" : "rgba(239, 68, 68, 0.25)",
                  color: status.type === "success" ? "#34d399" : "#f87171",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>{status.type === "success" ? "✓" : "⚠"}</span>
                <span>{status.text}</span>
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="What's this about?"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>
            <button
              type="submit"
              className="form-submit"
              disabled={submitting}
              style={{
                opacity: submitting ? 0.8 : 1,
                cursor: submitting ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {submitting ? (
                <>
                  <span className="spinner-mini" style={{
                    width: "14px",
                    height: "14px",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    borderTop: "2px solid #fff",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                    display: "inline-block",
                  }}></span>
                  Sending...
                </>
              ) : (
                "Send message →"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
