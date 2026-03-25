"use client";
import { useEffect, useState } from "react";

const slides = [
  { image: "/h3.jpeg" },
  { image: "/hh1.jpg" },
  { image: "/ss3.png" },
];

const slideContent = [
  {
    eyebrow: "Explore. Experience. Enjoy",
    line1bold: "Healthy Ornamental",
    line1thin: "Fish",
    line2bold: "Breeding",
    line2thin: "& Aquarium Supply",
    sub: "MAYA Fish Farm specializes in breeding vibrant and healthy ornamental fish varieties for aquariums, hobbyists, and aquarium retailers.",
  },
  {
    eyebrow: "Explore. Experience. Enjoy",
    line1bold: "Healthy Ornamental",
    line1thin: "Fish",
    line2bold: "Breeding",
    line2thin: "& Aquarium Supply",
    sub: "MAYA Fish Farm specializes in breeding vibrant and healthy ornamental fish varieties for aquariums, hobbyists, and aquarium retailers.",
  },
  {
    eyebrow: "Explore. Experience. Enjoy",
    line1bold: "Healthy Ornamental",
    line1thin: "Fish",
    line2bold: "Breeding",
    line2thin: "& Aquarium Supply",
    sub: "MAYA Fish Farm specializes in breeding vibrant and healthy ornamental fish varieties for aquariums, hobbyists, and aquarium retailers.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => {
    if (idx === current) return;
    setCurrent(idx);
  };

  const c = slideContent[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');

        /* ─── Keyframes ─── */

        @keyframes fillBar {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ─── Shell ─── */
        .hv-wrap {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 660px;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
          background: #020c18;
        }

        /* ─── Slides ─── */
        .hv-slide {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          opacity: 0;
          /* Smooth crossfade: opacity transitions over 1.2s on both enter and exit */
          transition: opacity 1.2s ease-in-out;
          will-change: opacity;
        }
        .hv-slide.active {
          opacity: 1;
          z-index: 1;
        }

        /* ─── Overlays ─── */
        .hv-overlay {
          position: absolute; inset: 0; z-index: 2;
          background:
            linear-gradient(to bottom,
              rgba(2,12,24,0.30) 0%,
              rgba(2,12,24,0.15) 35%,
              rgba(2,12,24,0.55) 70%,
              rgba(2,12,24,0.80) 100%),
            linear-gradient(to right,
              rgba(2,12,24,0.08) 0%,
              transparent 60%);
        }
        .hv-vignette {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%);
        }

        /* ─── Content — static, no animation ─── */
        .hv-content {
          position: absolute; inset: 0; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 76px 2rem 76px;
        }

        /* ─── Eyebrow ─── */
        .hv-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.72);
          text-transform: uppercase;
          margin: 0 0 2.2rem;
        }

        /* ─── Headline ─── */
        .hv-h1 {
          margin: 0;
          max-width: 900px;
          width: 100%;
        }

        /* INCREASED: line-height 1.5 → 1.65 for more breathing room */
        .hv-line {
          display: block;
          line-height: 1.65;
          padding-bottom: 0.05em;
        }
        .hv-line + .hv-line { margin-top: 0.35em; }

        /* INCREASED: max font-size 3.6rem → 4.1rem, min 1.8rem → 2rem */
        .hv-bold {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(2rem, 4.2vw, 4.1rem);
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.2;
          display: inline;
        }
        .hv-thin {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(2rem, 4.2vw, 4.1rem);
          color: rgba(255,255,255,0.72);
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-left: 0.18em;
          display: inline;
        }

        /* ─── Sub ─── */
        .hv-sub {
          margin: 2.4rem auto 0;
          max-width: 480px;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.72rem, 0.9vw, 0.82rem);
          font-weight: 400;
          line-height: 1.9;
          color: rgba(255,255,255,0.62);
          letter-spacing: 0.01em;
        }

        /* ─── CTAs ─── */
        .hv-cta-wrap {
          margin-top: 3rem;
          display: flex; gap: 14px;
          align-items: center; justify-content: center;
          flex-wrap: wrap;
        }

        .hv-btn-primary {
          display: inline-flex; align-items: center; gap: 0;
          padding: 6px 6px 6px 24px;
          background: #0A84D6;
          border: 1.5px solid #0A84D6;
          border-radius: 50px;
          cursor: pointer; text-decoration: none;
          box-shadow: 0 4px 20px rgba(10,132,214,0.45);
          transition: all 0.25s;
        }
        .hv-btn-primary:hover {
          background: #0872b8;
          border-color: #0872b8;
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(10,132,214,0.55);
        }
        .hv-btn-primary-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #fff; margin-right: 12px; white-space: nowrap;
        }
        .hv-btn-primary-icon {
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .hv-btn-call {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 18px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50px;
          background: rgba(255,255,255,0.06);
          font-family: 'Montserrat', sans-serif;
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          cursor: pointer; text-decoration: none;
          transition: all 0.25s;
          backdrop-filter: blur(4px);
        }
        .hv-btn-call:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          transform: translateY(-2px);
        }

        /* ─── Side arrows ─── */
        .hv-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          z-index: 20; width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(0,0,0,0.28);
          backdrop-filter: blur(8px);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .hv-arrow:hover {
          border-color: rgba(255,255,255,0.55);
          background: rgba(0,0,0,0.45);
          transform: translateY(-50%) scale(1.08);
        }
        .hv-arrow-left  { left: 1.8rem; }
        .hv-arrow-right { right: 1.8rem; }

        /* ─── Progress dots ─── */
        .hv-dots {
          position: absolute; bottom: 2.2rem; left: 50%; transform: translateX(-50%);
          z-index: 20; display: flex; align-items: center; gap: 9px;
        }
        .hv-dot {
          position: relative; overflow: hidden;
          width: 36px; height: 2.5px; border-radius: 2px;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
        }
        .hv-dot.active { background: rgba(255,255,255,0.12); }
        .hv-dot.active::after {
          content: ''; position: absolute; top:0; left:0; height:100%;
          background: rgba(255,255,255,0.9); border-radius: 2px;
          animation: fillBar 6s linear forwards;
        }

        /* ─── Slide counter ─── */
        .hv-counter {
          position: absolute; bottom: 2rem; right: 2.2rem;
          z-index: 20;
          font-family: 'Montserrat', sans-serif;
          display: flex; align-items: baseline; gap: 4px;
        }
        .hv-counter-cur {
          font-size: 1.6rem; font-weight: 800;
          color: rgba(255,255,255,0.80); line-height: 1;
          letter-spacing: -0.03em;
        }
        .hv-counter-sep {
          font-size: 11px; color: rgba(255,255,255,0.28); letter-spacing: 1px;
        }
        .hv-counter-tot {
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.28); letter-spacing: 1px;
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .hv-bold, .hv-thin { font-size: clamp(1.5rem, 7vw, 2.4rem); }
          .hv-sub { font-size: 0.74rem; max-width: 90%; margin-top: 1.2rem; }
          .hv-eyebrow { font-size: 9px; letter-spacing: 2px; margin-bottom: 0.9rem; }
          .hv-arrow-left  { left: 0.6rem; }
          .hv-arrow-right { right: 0.6rem; }
          .hv-arrow { width: 36px; height: 36px; }
          .hv-counter { display: none; }
          .hv-cta-wrap { margin-top: 1.4rem; gap: 8px; }
          .hv-content { padding: 60px 1.5rem 60px; }
          .hv-h1 { max-width: 100%; }
        }
      `}</style>

      <section className="hv-wrap">

        {/*
          Slides
          ──────
          All slides are always mounted. The active one gets opacity:1 via CSS,
          inactive ones are opacity:0. The CSS transition on opacity handles the
          smooth crossfade — no remounting or keyframes needed.
        */}
        {slides.map((s, i) => (
          <div
            key={`slide-${i}`}
            className={`hv-slide${i === current ? " active" : ""}`}
            style={{ backgroundImage: `url('${s.image}')` }}
          />
        ))}

        {/* Overlays */}
        <div className="hv-overlay" />
        <div className="hv-vignette" />

        {/* Side Arrows */}
        <button className="hv-arrow hv-arrow-left"
          onClick={() => goTo((current - 1 + total) % total)} aria-label="Previous">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button className="hv-arrow hv-arrow-right"
          onClick={() => goTo((current + 1) % total)} aria-label="Next">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        {/* Center content — text has NO animation at all */}
        <div className="hv-content">

          <p className="hv-eyebrow">{c.eyebrow}</p>

          <h1 className="hv-h1">
            <span className="hv-line">
              <span className="hv-bold">{c.line1bold}</span>
              <span className="hv-thin">{c.line1thin}</span>
            </span>
            <span className="hv-line">
              <span className="hv-bold">{c.line2bold}</span>
              <span className="hv-thin">{c.line2thin}</span>
            </span>
          </h1>

          <p className="hv-sub">{c.sub}</p>

          <div className="hv-cta-wrap">
            <a href="/contact" className="hv-btn-primary">
              <span className="hv-btn-primary-label">Contact Us</span>
              <span className="hv-btn-primary-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>

            <a href="tel:+919876543210" className="hv-btn-call">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Progress dots */}
        <div className="hv-dots">
          {slides.map((_, i) => (
            <div key={i}
              className={`hv-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)} />
          ))}
        </div>

        {/* Slide counter */}
        <div className="hv-counter">
          <span className="hv-counter-cur">{String(current + 1).padStart(2, "0")}</span>
          <span className="hv-counter-sep">/</span>
          <span className="hv-counter-tot">{String(total).padStart(2, "0")}</span>
        </div>

      </section>
    </>
  );
}