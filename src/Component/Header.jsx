"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact",  href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        /* ── Header shell ── */
        .hdr {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'Montserrat', sans-serif;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .hdr.hdr-top { background: transparent; }
        .hdr.hdr-scrolled {
          background: rgba(6, 14, 31, 0.97);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06), 0 4px 32px rgba(0,0,0,0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        /* Always dark when menu open on mobile */
        .hdr.hdr-menu-open {
          background: rgba(6, 14, 31, 0.99);
        }

        /* ── Inner container ── */
        .hdr-inner {
          width: 100%;
          max-width: 100%;
          padding: 0 48px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
        }

        /* ── LEFT: Nav links ── */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .hdr-nav a {
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 4px;
          color: rgba(255,255,255,0.65);
          transition: color 0.25s ease;
          white-space: nowrap;
          position: relative;
        }
        .hdr-nav a:hover { color: rgba(255,255,255,0.95); }
        .hdr-nav a.active { color: #4FD1E8; font-weight: 600; }
        .hdr-nav a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px;
          width: 0; height: 2px;
          background: #4FD1E8;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .hdr-nav a:hover::after { width: calc(100% - 24px); }

        /* ── CENTER: Logo ── */
        .hdr-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .hdr-logo-img {
          width: 40px; height: 40px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.92;
          transition: opacity 0.3s;
        }
        .hdr-logo:hover .hdr-logo-img { opacity: 1; }
        .hdr-logo-text { display: flex; flex-direction: column; line-height: 1.2; }
        .hdr-logo-main {
          font-size: 14px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase; color: #ffffff;
        }
        .hdr-logo-sub {
          font-size: 8px; font-weight: 400;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.42);
        }

        /* ── RIGHT: Phone ── */
        .hdr-right {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
        }
        .hdr-phone { display: flex; align-items: center; gap: 10px; }
        .hdr-phone-icon {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.28);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.25s;
        }
        .hdr-phone:hover .hdr-phone-icon { border-color: rgba(255,255,255,0.6); }
        .hdr-phone-info { display: flex; flex-direction: column; line-height: 1.3; }
        .hdr-phone-label {
          font-size: 9.5px; font-weight: 400;
          letter-spacing: 0.3px;
          color: rgba(255,255,255,0.42); text-transform: uppercase;
        }
        .hdr-phone-num {
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.2px; color: #ffffff;
          text-decoration: none; transition: color 0.2s;
        }
        .hdr-phone-num:hover { color: #4FD1E8; }

        /* ── Hamburger ── */
        .hdr-burger {
          display: none;
          background: none; border: none; cursor: pointer;
          padding: 6px; flex-shrink: 0;
          width: 40px; height: 40px;
          align-items: center; justify-content: center;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          transition: background 0.2s, border-color 0.2s;
        }
        .hdr-burger:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.22);
        }

        /* ── Mobile drawer overlay ── */
        .hdr-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 998;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: hdr-fade-in 0.2s ease;
        }
        .hdr-overlay.open { display: block; }

        @keyframes hdr-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Mobile drawer ── */
        .hdr-mobile {
          display: none;
          position: fixed;
          top: 0; left: 0;
          width: min(320px, 88vw);
          height: 100dvh;
          background: #060e1f;
          border-right: 1px solid rgba(255,255,255,0.08);
          z-index: 999;
          flex-direction: column;
          overflow-y: auto;
          transform: translateX(-100%);
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 4px 0 40px rgba(0,0,0,0.5);
        }
        .hdr-mobile.open {
          transform: translateX(0);
        }

        /* Drawer header */
        .hdr-mob-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .hdr-mob-logo {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none;
        }
        .hdr-mob-logo-name {
          font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase; color: #fff;
          font-family: 'Montserrat', sans-serif;
        }
        .hdr-mob-logo-accent { color: #4FD1E8; }
        .hdr-mob-logo-sub {
          font-size: 8px; font-weight: 400;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          font-family: 'Montserrat', sans-serif;
        }
        .hdr-mob-close {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          transition: background 0.2s;
        }
        .hdr-mob-close:hover { background: rgba(255,255,255,0.13); }

        /* Drawer nav */
        .hdr-mob-nav {
          padding: 16px 16px 0;
          display: flex; flex-direction: column; gap: 4px;
        }
        .hdr-mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          border-radius: 10px;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.3px;
          text-decoration: none;
          color: rgba(255,255,255,0.70);
          border: 1px solid transparent;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          font-family: 'Montserrat', sans-serif;
        }
        .hdr-mob-link:hover {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border-color: rgba(255,255,255,0.08);
        }
        .hdr-mob-link.active {
          background: rgba(79,209,232,0.08);
          color: #4FD1E8;
          font-weight: 600;
          border-color: rgba(79,209,232,0.2);
        }

        /* Drawer phone */
        .hdr-mob-footer {
          padding: 20px 16px 32px;
          margin-top: auto;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .hdr-mob-phone-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          text-decoration: none;
        }
        .hdr-mob-phone-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(79,209,232,0.25);
        }
        .hdr-mob-phone-icon {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1.5px solid rgba(79,209,232,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hdr-mob-phone-info { display: flex; flex-direction: column; gap: 2px; }
        .hdr-mob-phone-lbl {
          font-size: 9.5px; font-weight: 500;
          color: rgba(255,255,255,0.38);
          text-transform: uppercase; letter-spacing: 0.5px;
          font-family: 'Montserrat', sans-serif;
        }
        .hdr-mob-phone-num {
          font-size: 14px; font-weight: 700;
          color: #fff; letter-spacing: 0.2px;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hdr-nav { gap: 2px; }
          .hdr-nav a { font-size: 12px; padding: 6px 9px; }
          .hdr-inner { padding: 0 28px; }
        }
        @media (max-width: 860px) {
          .hdr-nav, .hdr-right { display: none; }
          .hdr-burger { display: flex; }
          .hdr-logo { position: static; transform: none; flex: 1; justify-content: center; }
          .hdr-mobile { display: flex; }
          .hdr-inner { padding: 0 20px; }
        }
        @media (max-width: 480px) {
          .hdr-logo-text { display: none; }
        }
          
      `}</style>

      {/* Overlay */}
      <div
        className={`hdr-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <header className={[
        "hdr",
        scrolled ? "hdr-scrolled" : "hdr-top",
        menuOpen ? "hdr-menu-open" : "",
      ].join(" ")}>

        {/* ── Main bar ── */}
        <div className="hdr-inner">

          {/* LEFT — Nav */}
          <nav className="hdr-nav">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href} className={isActive(href) ? "active" : ""}>
                {label}
              </Link>
            ))}
          </nav>

          {/* CENTER — Logo */}
          <Link href="/" className="hdr-logo">
            <Image
              src="/logo1.png"
              alt="MAYA Fish Farm"
              width={40}
              height={40}
              className="hdr-logo-img"
            />
            <div className="hdr-logo-text">
              <span className="hdr-logo-main">Maya Fish Farm</span>
              <span className="hdr-logo-sub">Ornamental · Aquarium</span>
            </div>
          </Link>

          {/* RIGHT — Phone */}
          <div className="hdr-right">
            <div className="hdr-phone">
              <div className="hdr-phone-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                    stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="hdr-phone-info">
                <span className="hdr-phone-label">Call us anytime</span>
                <a href="tel:+18001230789" className="hdr-phone-num">+1800 1230 7890</a>
              </div>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            className="hdr-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile side drawer ── */}
        <div className={`hdr-mobile${menuOpen ? " open" : ""}`}>

          {/* Drawer header */}
          <div className="hdr-mob-head">
            <Link href="/" className="hdr-mob-logo" onClick={() => setMenuOpen(false)}>
              <Image
                src="/logo1.png"
                alt="MAYA Fish Farm"
                width={32}
                height={32}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.9 }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                <span className="hdr-mob-logo-name">
                  MAYA <span className="hdr-mob-logo-accent">FISH FARM</span>
                </span>
                <span className="hdr-mob-logo-sub">Ornamental · Aquarium</span>
              </div>
            </Link>
            <button className="hdr-mob-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Drawer nav links */}
          <nav className="hdr-mob-nav">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`hdr-mob-link${isActive(href) ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </nav>

          {/* Drawer phone */}
          <div className="hdr-mob-footer">
            <a href="tel:+18001230789" className="hdr-mob-phone-card">
              <div className="hdr-mob-phone-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                    stroke="#4FD1E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="hdr-mob-phone-info">
                <span className="hdr-mob-phone-lbl">Call us anytime</span>
                <span className="hdr-mob-phone-num">+1800 1230 7890</span>
              </div>
            </a>
          </div>

        </div>

      </header>
    </>
  );
}