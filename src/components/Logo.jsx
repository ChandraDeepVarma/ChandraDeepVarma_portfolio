"use client";

import React from "react";

export function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-icon-svg"
      style={{
        transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--violet-light, #a78bfa)" />
          <stop offset="100%" stopColor="var(--cyan, #06b6d4)" />
        </linearGradient>
      </defs>
      {/* Outer Hexagon outline with a dashed effect */}
      <path
        d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
        stroke="url(#logoGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 2"
        className="logo-hex-path"
      />
      {/* Sleek code brackets */}
      <path
        d="M11 12L7 16L11 20"
        stroke="url(#logoGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12L25 16L21 20"
        stroke="url(#logoGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Glowing center dot */}
      <circle cx="16" cy="16" r="2.5" fill="url(#logoGrad)" />
    </svg>
  );
}

export default function Logo({ initials = "CDVN", style = {} }) {
  return (
    <div
      className="portfolio-logo"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        userSelect: "none",
        ...style,
      }}
    >
      <LogoIcon />
      {/* <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1.3rem",
          fontWeight: "800",
          background: "linear-gradient(135deg, var(--violet-light, #a78bfa), var(--cyan, #06b6d4))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px",
        }}
      >
        {initials}.
      </span> */}
    </div>
  );
}
