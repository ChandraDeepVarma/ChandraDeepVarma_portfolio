"use client";

import { useEffect } from "react";

export default function ClientAnimations() {
  useEffect(() => {
    // ── Reveal on scroll animation ──
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));

    // ── Smooth page load body opacity ──
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";
    
    const timeout = setTimeout(() => {
      document.body.style.opacity = "1";
    }, 50);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
