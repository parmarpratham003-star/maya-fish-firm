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
        .hdr.hdr-top {
          background: transparent;
        }
        .hdr.hdr-scrolled {
          background: rgba(6, 14, 31, 0.97);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06), 0 4px 32px rgba(0,0,0,0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
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
        .hdr-nav a:hover {
          color: rgba(255,255,255,0.95);
        }
        .hdr-nav a.active {
          color: #4FD1E8;
          font-weight: 600;
        }
        /* Underline — slides in from left on hover ONLY, not on active */
        .hdr-nav a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px;
          width: 0;
          height: 2px;
          background: #4FD1E8;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .hdr-nav a:hover::after {
          width: calc(100% - 24px);
        }

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
          width: 40px;
          height: 40px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.92;
          transition: opacity 0.3s;
        }
        .hdr-logo:hover .hdr-logo-img { opacity: 1; }
        .hdr-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .hdr-logo-main {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #ffffff;
        }
        .hdr-logo-sub {
          font-size: 8px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
        }

        /* ── RIGHT: Phone + CTA ── */
        .hdr-right {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
        }

        /* Phone group */
        .hdr-phone {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hdr-phone-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.25s;
        }
        .hdr-phone:hover .hdr-phone-icon {
          border-color: rgba(255,255,255,0.6);
        }
        .hdr-phone-info {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .hdr-phone-label {
          font-size: 9.5px;
          font-weight: 400;
          letter-spacing: 0.3px;
          color: rgba(255,255,255,0.42);
          text-transform: uppercase;
        }
        .hdr-phone-num {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2px;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .hdr-phone-num:hover { color: #4FD1E8; }



        /* ── Hamburger ── */
        .hdr-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          flex-shrink: 0;
        }

        /* ── Mobile menu ── */
        .hdr-mobile {
          display: none;
          background: rgba(6, 14, 31, 0.98);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 16px 24px 24px;
          backdrop-filter: blur(20px);
        }
        .hdr-mobile.open { display: block; }

        .hdr-mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          margin-bottom: 6px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-decoration: none;
          color: rgba(255,255,255,0.74);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.2s, color 0.2s;
        }
        .hdr-mob-link:hover,
        .hdr-mob-link.active {
          background: rgba(255,255,255,0.07);
          color: #fff;
          border-color: rgba(79,209,232,0.2);
        }
        .hdr-mob-link.active { color: #4FD1E8; font-weight: 600; }

        .hdr-mob-phone {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          margin-bottom: 10px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
        }
        .hdr-mob-phone-label {
          font-size: 10px;
          color: rgba(255,255,255,0.44);
          letter-spacing: 0.3px;
        }
        .hdr-mob-phone-num {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
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
          .hdr-inner { padding: 0 20px; }
        }
        @media (max-width: 480px) {
          .hdr-logo-text { display: none; }
        }
      `}</style>

      <header className={`hdr ${scrolled ? "hdr-scrolled" : "hdr-top"}`}>

        {/* ── Main bar ── */}
        <div className="hdr-inner">

          {/* LEFT — Nav */}
          <nav className="hdr-nav">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={isActive(href) ? "active" : ""}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CENTER — Logo (absolutely centered) */}
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

          {/* RIGHT — Phone + CTA */}
          <div className="hdr-right">

            {/* Phone */}
            <div className="hdr-phone">
              <div className="hdr-phone-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="hdr-phone-info">
                <span className="hdr-phone-label">Call us anytime</span>
                <a href="tel:+91XXXXXXXXXX" className="hdr-phone-num">
                  +1800 1230 7890
                </a>
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        <div className={`hdr-mobile${menuOpen ? " open" : ""}`}>
          <div className="hdr-mob-phone">
            <div className="hdr-phone-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="hdr-mob-phone-label">Call us anytime</div>
              <a href="tel:+91XXXXXXXXXX" className="hdr-mob-phone-num">
                +1800 1230 7890
              </a>
            </div>
          </div>

          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`hdr-mob-link${isActive(href) ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}


        </div>

      </header>
    </>
  );
}