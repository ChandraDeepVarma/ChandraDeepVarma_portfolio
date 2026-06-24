"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar({ initials = "CDVN" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobile = () => setMobileOpen(true);
  const closeMobile = () => setMobileOpen(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} id="mobileMenu">
        <div className="mobile-logo" onClick={closeMobile}>
          <Logo initials={initials} />
        </div>
        <button className="mobile-close" id="mobileClose" onClick={closeMobile}>
          ✕
        </button>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#skills" onClick={closeMobile}>Skills</a>
        <a href="#experience" onClick={closeMobile}>Experience</a>
        <a href="#projects" onClick={closeMobile}>Projects</a>
        <a href="#services" onClick={closeMobile}>Services</a>
        <a href="#contact" onClick={closeMobile}>Contact</a>
      </div>

      {/* Main Navbar */}
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div onClick={scrollToTop}>
          <Logo initials={initials} />
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact" className="nav-cta">
            Let's Talk
          </a>
        </div>
        <div className={`nav-hamburger ${mobileOpen ? "menu-open" : ""}`} id="hamburger" onClick={openMobile}>
          <span />
          <span />
          <span />
        </div>
      </nav>
    </>
  );
}
