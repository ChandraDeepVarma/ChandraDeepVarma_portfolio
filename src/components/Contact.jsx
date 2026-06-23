"use client";

import { useState } from "react";

export default function Contact({ data }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replicate form submission action or show success
    alert(`Thank you ${form.name || "there"}! Message sent successfully.`);
    setForm({ name: "", email: "", subject: "", message: "" });
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
              <div className="contact-item">
                <div className="contact-item-icon">☏</div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">+1 (415) 555-0182</div>
                </div>
              </div>
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
              <div className="contact-item">
                <div className="contact-item-icon">◎</div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">San Francisco, CA · Remote-first</div>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
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
            <button type="submit" className="form-submit">
              Send message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
