"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer1() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .f-root { font-family: 'Montserrat', sans-serif; }

        /* ── CTA SECTION ── */
        .f-banner {
          position: relative;
          min-height: 320px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          text-align: center;
          background: #060e1f;
        }

        /* Left cyan semi-circle blur */
        .f-banner-arc-left {
          position: absolute;
          left: -110px;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 52px solid #4FD1E8;
          filter: blur(22px);
          opacity: 0.55;
          z-index: 1;
          pointer-events: none;
        }

        /* Right cyan semi-circle blur */
        .f-banner-arc-right {
          position: absolute;
          right: -130px;
          top: 50%;
          transform: translateY(-55%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 48px solid #4FD1E8;
          filter: blur(20px);
          opacity: 0.45;
          z-index: 1;
          pointer-events: none;
        }

        /* Extra soft glow blobs for depth */
        .f-banner-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 500px; height: 200px;
          background: radial-gradient(ellipse, rgba(79,209,232,0.08) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .f-banner-content {
          position: relative; z-index: 2;
          padding: 4rem 1.5rem 4.5rem;
          max-width: 780px; width: 100%;
        }

        .f-banner-h {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 700; color: #fff;
          line-height: 1.18; letter-spacing: -0.03em;
          margin: 0 0 0.9rem;
        }
        .f-banner-p {
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px; font-weight: 400;
          color: rgba(255,255,255,0.45);
          margin: 0 0 2.2rem; line-height: 1.75;
        }
        .f-banner-row {
          display: flex; align-items: center;
          justify-content: center; gap: 1rem; flex-wrap: wrap;
        }

        /* Primary CTA button — solid cyan */
        .f-cta-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 13px 28px;
          background: #4FD1E8;
          border: none; border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          color: #060e1f;
          text-decoration: none; cursor: pointer;
          box-shadow: 0 0 32px rgba(79,209,232,0.35), 0 4px 16px rgba(79,209,232,0.2);
          transition: background 0.22s, box-shadow 0.22s, transform 0.2s;
        }
        .f-cta-btn:hover {
          background: #6ce0f0;
          box-shadow: 0 0 44px rgba(79,209,232,0.55), 0 6px 24px rgba(79,209,232,0.3);
          transform: translateY(-2px);
        }
        .f-cta-btn svg { flex-shrink: 0; }

        /* Ghost / outline secondary button */
        .f-cta-ghost {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 12px 26px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          text-decoration: none; cursor: pointer;
          transition: border-color 0.22s, color 0.22s, transform 0.2s;
        }
        .f-cta-ghost:hover {
          border-color: rgba(79,209,232,0.5);
          color: #4FD1E8;
          transform: translateY(-2px);
        }

        /* ── FOOTER BODY ── */
        .f-body { background: #060e1f; padding: 3.5rem 2rem 0; }
        .f-inner { max-width: 1160px; margin: 0 auto; }
        .f-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
          gap: 2rem 3.5rem; padding-bottom: 3rem;
        }
        .f-logo {
          display: flex; align-items: center; gap: 9px;
          margin-bottom: 1.1rem; text-decoration: none;
        }
        .f-logo-txt { display: flex; flex-direction: column; line-height: 1.25; }
        .f-logo-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 17px; font-weight: 700;
          color: #fff; letter-spacing: 0.5px;
        }
        .f-logo-accent { color: #4FD1E8; }
        .f-logo-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px; font-weight: 500;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(79,209,232,0.6); margin-top: 1px;
        }
        .f-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 400;
          color: rgba(255,255,255,0.35);
          line-height: 1.85; margin-bottom: 1.4rem; max-width: 280px;
        }
        .f-socials { display: flex; gap: 7px; }
        .f-soc {
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.40); font-size: 11px;
          text-decoration: none; cursor: pointer; transition: all 0.2s;
        }
        .f-soc:hover {
          border-color: rgba(79,209,232,0.45); color: #4FD1E8;
          background: rgba(79,209,232,0.05); transform: translateY(-2px);
        }
        .f-head {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 700;
          color: #fff; margin: 0 0 1.3rem;
          letter-spacing: 1.5px; text-transform: uppercase;
        }
        .f-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; }
        .f-links li a {
          font-family: 'Montserrat', sans-serif;
          font-size: 12.5px; font-weight: 400;
          color: rgba(255,255,255,0.42);
          text-decoration: none; display: block; transition: color 0.18s;
        }
        .f-links li a:hover { color: rgba(255,255,255,0.88); }
        .f-touch { display: flex; flex-direction: column; gap: 1.05rem; }
        .f-touch-row { display: flex; align-items: center; gap: 9px; }
        .f-touch-badge {
          width: 26px; height: 26px; border-radius: 6px;
          background: rgba(79,209,232,0.10);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #4FD1E8; font-size: 10px;
        }
        .f-touch-val {
          font-family: 'Montserrat', sans-serif;
          font-size: 12.5px; font-weight: 400;
          color: rgba(255,255,255,0.42);
        }
        .f-touch-val a { color: rgba(255,255,255,0.42); text-decoration: none; transition: color 0.18s; }
        .f-touch-val a:hover { color: rgba(255,255,255,0.85); }
        .f-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 0 0 0;
        }
        .f-bar {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 1.1rem 0 1.4rem;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;
        }
        .f-bar-l {
          font-family: 'Montserrat', sans-serif;
          font-size: 11.5px; font-weight: 400; color: rgba(255,255,255,0.25);
        }
        .f-bar-l a { color: #4FD1E8; text-decoration: none; }
        .f-bar-r { display: flex; align-items: center; gap: 0.6rem; }
        .f-bar-r a {
          font-family: 'Montserrat', sans-serif;
          font-size: 11.5px; color: rgba(255,255,255,0.28);
          text-decoration: none; transition: color 0.18s;
        }
        .f-bar-r a:hover { color: rgba(255,255,255,0.7); }
        .f-bar-sep { color: rgba(255,255,255,0.14); font-size: 11px; }
        .f-top {
          position: fixed; bottom: 1.3rem; right: 1.3rem; z-index: 50;
          width: 38px; height: 38px; border-radius: 8px;
          background: #0A84D6; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; color: #fff;
          box-shadow: 0 4px 16px rgba(10,132,214,0.45); transition: all 0.2s;
        }
        .f-top:hover { background: #0872b8; transform: translateY(-3px); }

        @media (max-width: 900px) { .f-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
        @media (max-width: 520px) {
          .f-grid { grid-template-columns: 1fr; }
          .f-banner-row { flex-direction: column; }
          .f-bar { flex-direction: column; align-items: flex-start; }
          .f-banner-arc-left { width: 200px; height: 200px; left: -80px; border-width: 38px; }
          .f-banner-arc-right { width: 180px; height: 180px; right: -90px; border-width: 34px; }
        }
      `}</style>

      <footer className="f-root">

        {/* ── CTA BANNER ── */}
        <div className="f-banner">
          {/* Decorative semi-circle arcs */}
          <div className="f-banner-arc-left" />
          <div className="f-banner-arc-right" />
          <div className="f-banner-glow" />

          <div className="f-banner-content">

            {/* Section label with flanking lines */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ display: "block", width: "48px", height: "1.5px", background: "#4FD1E8", opacity: 0.7 }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#4FD1E8",
                }}>
                  CTA
                </span>
                <span style={{ display: "block", width: "48px", height: "1.5px", background: "#4FD1E8", opacity: 0.7 }} />
              </div>
            </div>

            <h2 className="f-banner-h">
              Looking for Healthy Ornamental Fish<br />for Your Aquarium or Store?
            </h2>
            <p className="f-banner-p">
              Contact MAYA Fish Farm today to learn more about our fish varieties
              and aquarium supply services.
            </p>
            <div className="f-banner-row">
              <a href="/contact" className="f-cta-btn">
                Get in Touch
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#060e1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/service" className="f-cta-ghost">
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* ── FOOTER BODY ── */}
        <div className="f-body">
          <div className="f-inner">
            <div className="f-grid">
              <div>
                <a href="/" className="f-logo">
                  <Image src="/logo1.png" alt="Maya Fish Farm" width={36} height={36}
                    style={{ objectFit:'contain', filter:'brightness(0) invert(1)', opacity:0.9 }}
                  />
                  <div className="f-logo-txt">
                    <span className="f-logo-name">MAYA <span className="f-logo-accent">FISH FARM</span></span>
                    <span className="f-logo-sub">Ornamental · Aquarium</span>
                  </div>
                </a>
                <p className="f-desc">
                  MAYA Fish Farm is dedicated to producing high-quality ornamental fish through responsible breeding,
                  proper water management and balanced nutrition — supplying pet stores, hobbyists and aquarium businesses.
                </p>
                <div className="f-socials">
                  {[{ I: FaFacebookF, l: "Facebook", href: "#" }, { I: FaInstagram, l: "Instagram", href: "#" }, { I: FaYoutube, l: "YouTube", href: "#" }].map(({ I, l, href }) => (
                    <a key={l} href={href} aria-label={l} className="f-soc"><I /></a>
                  ))}
                </div>
              </div>

              <div>
                <p className="f-head">Quick links</p>
                <ul className="f-links">
                  {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/service" }, { label: "Contact", href: "/contact" }].map(({ label, href }) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="f-head">Information</p>
                <ul className="f-links">
                  {[{ label: "Ornamental Fish", href: "/service" }, { label: "Aquarium Supply", href: "/service" }, { label: "Fish Breeding", href: "/service" }, { label: "Sustainable Farming", href: "/about" }].map(({ label, href }) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="f-head">Get in touch</p>
                <div className="f-touch">
                  <div className="f-touch-row">
                    <span className="f-touch-badge">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="f-touch-val"><a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></span>
                  </div>
                  <div className="f-touch-row">
                    <span className="f-touch-badge">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="f-touch-val"><a href="mailto:info@mayafishfarm.com">info@mayafishfarm.com</a></span>
                  </div>
                  <div className="f-touch-row">
                    <span className="f-touch-badge">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>
                    </span>
                    <span className="f-touch-val">Maya Fish Farm, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="f-bar">
              <span className="f-bar-l">Copyright © 2026 <a href="/">MAYA FISH FARM</a>. All rights reserved.</span>
              <div className="f-bar-r">
                <a href="/privacy">Privacy Policy</a>
                <span className="f-bar-sep">|</span>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button className="f-top" onClick={scrollTop} aria-label="Back to top">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M18 15l-6-6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
}