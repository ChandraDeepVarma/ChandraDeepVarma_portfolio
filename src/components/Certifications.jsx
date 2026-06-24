"use client";

import { useState } from "react";

export default function Certifications({ data }) {
  const [selectedCert, setSelectedCert] = useState(null);

  if (!data) return null;
  const certs = data.certs || [];

  // Helper to determine if a URL points to a PDF file
  const isPdf = (url) => {
    if (!url) return false;
    return url.toLowerCase().split('?')[0].endsWith('.pdf') || url.includes('/raw/upload') && url.toLowerCase().includes('.pdf');
  };

  // Helper to determine if a URL points to an image
  const isImage = (url) => {
    if (!url) return false;
    const cleanUrl = url.toLowerCase().split('?')[0];
    return cleanUrl.endsWith('.png') || cleanUrl.endsWith('.jpg') || cleanUrl.endsWith('.jpeg') || cleanUrl.endsWith('.webp') || cleanUrl.endsWith('.gif') || url.includes('/image/upload');
  };

  return (
    <section id="certifications">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="certs-grid">
          {certs.map((cert, idx) => {
            const hasDocument = cert.certFile || cert.certLink;
            return (
              <div
                key={idx}
                className={`cert-card reveal ${
                  idx % 3 > 0 ? `reveal-delay-${idx % 3}` : ""
                }`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", width: "100%" }}>
                  <div className="cert-badge" style={{ backgroundColor: cert.color }}>
                    {cert.icon}
                  </div>
                  <div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-year">{cert.year}</div>
                  </div>
                </div>

                {hasDocument && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="view-cert-btn"
                    style={{
                      marginTop: "20px",
                      padding: "8px 16px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "8px",
                      color: "#cbd5e1",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    View Credential →
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Certificate Modal Preview Overlay */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(5, 5, 11, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(17, 17, 39, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "850px",
              maxHeight: "90vh",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(139, 92, 246, 0.15)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "24px 32px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#a78bfa",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {selectedCert.issuer}
                </span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "800",
                    color: "#f8fafc",
                    margin: "4px 0 0 0",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {selectedCert.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#94a3b8",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#f8fafc";
                  e.currentTarget.style.background = "rgba(239, 68, 68, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body / Viewer */}
            <div
              style={{
                flex: 1,
                padding: "32px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(10, 10, 20, 0.5)",
                minHeight: "350px",
              }}
            >
              {selectedCert.certFile && isImage(selectedCert.certFile) && (
                <img
                  src={selectedCert.certFile}
                  alt={selectedCert.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "55vh",
                    borderRadius: "12px",
                    objectFit: "contain",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                />
              )}

              {selectedCert.certFile && isPdf(selectedCert.certFile) && (
                <iframe
                  src={`${selectedCert.certFile}#toolbar=0`}
                  title={selectedCert.name}
                  style={{
                    width: "100%",
                    height: "55vh",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                />
              )}

              {/* External / Fallback link presentation */}
              {(!selectedCert.certFile || (!isImage(selectedCert.certFile) && !isPdf(selectedCert.certFile))) && (
                <div style={{ textAlign: "center", maxWidth: "480px" }}>
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: "16px" }}>🔗</span>
                  <h4 style={{ color: "#f8fafc", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                    External Certification Link
                  </h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "24px" }}>
                    This credential is hosted on an external platform (e.g. Google Drive, Credly, or issuer verification site). Click the button below to view it.
                  </p>
                  <a
                    href={selectedCert.certLink || selectedCert.certFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "14px 28px",
                      background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                      color: "#fff",
                      borderRadius: "30px",
                      fontWeight: "700",
                      fontSize: "0.9rem",
                      boxShadow: "0 6px 20px rgba(139, 92, 246, 0.3)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(139, 92, 246, 0.45)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(139, 92, 246, 0.3)";
                    }}
                  >
                    Open Certificate Link ↗
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer (Only shown when previewing direct file to offer a download / separate window option) */}
            {selectedCert.certFile && (isImage(selectedCert.certFile) || isPdf(selectedCert.certFile)) && (
              <div
                style={{
                  padding: "20px 32px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(10, 10, 20, 0.2)",
                }}
              >
                <div style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: "500" }}>
                  File format: {isPdf(selectedCert.certFile) ? "PDF Document" : "Image File"}
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href={selectedCert.certFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "10px 20px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Open in New Tab ↗
                  </a>
                  {selectedCert.certLink && (
                    <a
                      href={selectedCert.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "10px 20px",
                        background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                        color: "#fff",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Credential Link ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
