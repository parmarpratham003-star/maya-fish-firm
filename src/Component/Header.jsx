"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact",  href: "/contact" },
];

const PhoneIcon = ({ scrolled }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="17" stroke={scrolled ? "#0A84D6" : "rgba(255,255,255,0.5)"} strokeWidth="1.2"/>
    <path d="M13 12.5c.3.8.8 1.5 1.4 2.1l-1.3 1.4c.9 1.8 2.4 3.3 4.2 4.2l1.4-1.3c.6.6 1.3 1.1 2.1 1.4v2.2a.5.5 0 01-.5.5C14.5 23 11 19.5 11 15.3a.5.5 0 01.5-.5l1.5-.3z"
      fill={scrolled ? "#0A84D6" : "#fff"}/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = ({ scrolled }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke={scrolled ? "#083B66" : "#fff"} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CloseIcon = ({ scrolled }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke={scrolled ? "#083B66" : "#fff"} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Josefin+Sans:wght@300;400;600;700&display=swap');

        .hdr-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          font-family: 'Nunito Sans', sans-serif;
        }

        .hdr-bar { transition: all 0.4s ease; }

        .hdr-root.transparent .hdr-bar {
          background: transparent;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          box-shadow: none;
        }
        .hdr-root.solid .hdr-bar {
          background: rgba(255,255,255,0.97);
          border-bottom: 1px solid rgba(8,59,102,0.08);
          box-shadow: 0 4px 32px rgba(8,59,102,0.10);
          backdrop-filter: blur(16px);
        }

        .hdr-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 2rem; height: 76px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 1.5rem;
        }

        /* Logo */
        .hdr-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; flex-shrink: 0; }
        .hdr-logo-text { display: flex; flex-direction: column; line-height: 1.25; }
        .hdr-logo-main {
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 3px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .transparent .hdr-logo-main { color: #fff; }
        .solid       .hdr-logo-main { color: #083B66; }
        .hdr-logo-sub {
          font-size: 9px; font-weight: 400;
          letter-spacing: 2.5px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .transparent .hdr-logo-sub { color: rgba(255,255,255,0.55); }
        .solid       .hdr-logo-sub { color: #0A84D6; }

        /* Nav */
        .hdr-nav { display: flex; align-items: center; gap: 2rem; }
        .hdr-nav a {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: 0.5px;
          text-decoration: none; position: relative; padding-bottom: 3px;
          transition: color 0.3s;
        }
        .transparent .hdr-nav a        { color: rgba(255,255,255,0.78); }
        .transparent .hdr-nav a.active,
        .transparent .hdr-nav a:hover  { color: #fff; }
        .solid .hdr-nav a              { color: #4a6a80; }
        .solid .hdr-nav a.active,
        .solid .hdr-nav a:hover        { color: #083B66; }
        .hdr-nav a::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px; border-radius: 2px;
          transition: width 0.25s ease, background 0.4s;
        }
        .transparent .hdr-nav a::after { background: rgba(255,255,255,0.7); }
        .solid       .hdr-nav a::after { background: #0A84D6; }
        .hdr-nav a.active::after,
        .hdr-nav a:hover::after { width: 100%; }

        /* Actions */
        .hdr-actions { display: flex; align-items: center; gap: 1.2rem; flex-shrink: 0; }
        .hdr-phone { display: flex; align-items: center; gap: 10px; }
        .hdr-phone-info { display: flex; flex-direction: column; line-height: 1.3; }
        .hdr-phone-label { font-size: 10px; letter-spacing: 0.5px; transition: color 0.4s; }
        .transparent .hdr-phone-label { color: rgba(255,255,255,0.5); }
        .solid       .hdr-phone-label { color: #7a9ab0; }
        .hdr-phone-num {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.3px;
          transition: color 0.4s;
        }
        .transparent .hdr-phone-num { color: #fff; }
        .solid       .hdr-phone-num { color: #083B66; }
        .hdr-divider { width: 1px; height: 32px; transition: background 0.4s; }
        .transparent .hdr-divider { background: rgba(255,255,255,0.18); }
        .solid       .hdr-divider { background: rgba(8,59,102,0.12); }

        /* CTA */
        .hdr-cta {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 50px;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          text-decoration: none; cursor: pointer;
          transition: all 0.3s ease; white-space: nowrap;
        }
        .transparent .hdr-cta {
          background: rgba(255,255,255,0.12); color: #fff;
          border: 1.5px solid rgba(255,255,255,0.35); box-shadow: none;
        }
        .transparent .hdr-cta:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-1px);
        }
        .solid .hdr-cta {
          background: #0A84D6; color: #fff;
          border: 1.5px solid transparent;
          box-shadow: 0 4px 18px rgba(10,132,214,0.35);
        }
        .solid .hdr-cta:hover {
          background: #0872b8; transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(10,132,214,0.45);
        }
        .hdr-cta-icon {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.4s;
        }
        .transparent .hdr-cta-icon { background: rgba(255,255,255,0.18); }
        .solid       .hdr-cta-icon { background: rgba(255,255,255,0.2); }

        /* WhatsApp CTA — always green */
        .hdr-wa {
          display: flex; align-items: center; gap: 7px;
          padding: 9px 18px; border-radius: 50px;
          background: #25D366;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          color: #fff; text-decoration: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(37,211,102,0.35);
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .hdr-wa:hover {
          background: #1ebe5d;
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(37,211,102,0.45);
        }

        /* Hamburger */
        .hdr-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }

        /* Mobile menu */
        .hdr-mobile { display: none; padding: 1rem 1.5rem 1.5rem; transition: background 0.4s; }
        .hdr-mobile.open { display: block; }
        .transparent .hdr-mobile { background: rgba(2,14,30,0.92); backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.08); }
        .solid       .hdr-mobile { background: #fff; border-top: 1px solid rgba(8,59,102,0.08); }

        .hdr-mobile a {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px; margin-bottom: 6px; border-radius: 10px;
          font-family: 'Josefin Sans', sans-serif; font-size: 13px; font-weight: 600;
          text-decoration: none; transition: background 0.2s, color 0.2s;
        }
        .transparent .hdr-mobile a { color: rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.08); }
        .transparent .hdr-mobile a:hover,
        .transparent .hdr-mobile a.active { background: rgba(255,255,255,0.1); color: #fff; }
        .solid .hdr-mobile a { color: #3a6680; border: 1px solid rgba(8,59,102,0.07); }
        .solid .hdr-mobile a:hover,
        .solid .hdr-mobile a.active { background: #f0f9ff; color: #083B66; border-color: rgba(10,132,214,0.12); }

        .hdr-mobile-cta {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; width: 100%; margin-top: 10px; padding: 13px;
          background: #0A84D6; color: #fff;
          font-family: 'Josefin Sans', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.5px; border-radius: 10px; text-decoration: none;
          box-shadow: 0 4px 16px rgba(10,132,214,0.30);
        }
        .hdr-mobile-phone {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px; margin-bottom: 8px; border-radius: 10px;
        }
        .transparent .hdr-mobile-phone { border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.06); }
        .solid       .hdr-mobile-phone { border: 1px solid rgba(10,132,214,0.15); background: #f5fafd; }
        .hdr-mp-label { font-size: 10px; }
        .transparent .hdr-mp-label { color: rgba(255,255,255,0.5); }
        .solid       .hdr-mp-label { color: #7a9ab0; }
        .hdr-mp-num { font-family: 'Josefin Sans', sans-serif; font-size: 13px; font-weight: 700; text-decoration: none; }
        .transparent .hdr-mp-num { color: #fff; }
        .solid       .hdr-mp-num { color: #083B66; }
        a.hdr-phone-num { text-decoration: none; }
        .transparent a.hdr-phone-num { color: #fff; }
        .solid       a.hdr-phone-num { color: #083B66; }

        @media (max-width: 900px) {
          .hdr-nav, .hdr-actions { display: none; }
          .hdr-hamburger { display: flex; }
        }
      `}</style>

      <header className={`hdr-root ${scrolled ? 'solid' : 'transparent'}`}>
        <div className="hdr-bar">
          <div className="hdr-inner">

            <Link href="/" className="hdr-logo">
              <Image
                src="/logo1.png" alt="Maya Fish Farm"
                width={52} height={52}
                style={{
                  objectFit: 'contain',
                  mixBlendMode: scrolled ? 'multiply' : 'normal',
                  filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                  opacity: scrolled ? 1 : 0.9,
                  transition: 'filter 0.4s, opacity 0.4s',
                }}
              />
              <div className="hdr-logo-text">
                <span className="hdr-logo-main">Maya Fish Farm</span>
                <span className="hdr-logo-sub">Ornamental · Aquarium</span>
              </div>
            </Link>

            <nav className="hdr-nav">
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href}
                  className={activeLink === label ? 'active' : ''}
                  onClick={() => setActiveLink(label)}>
                  {label}
                </Link>
              ))}
            </nav>

            <div className="hdr-actions">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hdr-wa">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>

            <button className="hdr-hamburger"
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <CloseIcon scrolled={scrolled} /> : <MenuIcon scrolled={scrolled} />}
            </button>
          </div>
        </div>

        <div className={`hdr-mobile ${menuOpen ? 'open' : ''}`}>
          <div className="hdr-mobile-phone">
            <PhoneIcon scrolled={scrolled} />
            
          </div>
          
           <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hdr-mobile-cta"
            style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.30)' }}>
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
      </header>
    </>
  );
}