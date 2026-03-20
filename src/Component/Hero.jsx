"use client";
import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "/ss2.png" },
  { image: "/s2.png" },
  { image: "/ss1.png" },
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
  const [animKey, setAnimKey] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(current);
      setCurrent((p) => (p + 1) % total);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [total, current]);

  const goTo = (idx) => {
    if (idx === current) return;
    setPrevSlide(current);
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  };

  const c = slideContent[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,400;1,700&family=Josefin+Sans:wght@300;400;600;700&display=swap');

        /* ─── Keyframes ─── */
        @keyframes zoomIn {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
        @keyframes slideEnter {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fillBar {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* text reveal */
        @keyframes revealUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes letterBlur {
          from { opacity: 0; letter-spacing: 0.35em; filter: blur(8px); }
          to   { opacity: 1; letter-spacing: normal; filter: blur(0); }
        }
        @keyframes clipUp {
          from { clip-path: inset(100% 0 0 0); }
          to   { clip-path: inset(0% 0 0 0); }
        }

        /* ─── Shell ─── */
        .hv-wrap {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 660px;
          overflow: hidden;
          font-family: 'Nunito Sans', sans-serif;
          background: #020c18;
        }

        /* ─── Slides ─── */
        .hv-slide {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          opacity: 0;
        }
        .hv-slide.active {
          opacity: 1;
          animation: slideEnter 1.2s ease forwards, zoomIn 7s ease forwards;
          z-index: 1;
        }

        /* ─── Dark overlay — matches reference closely ─── */
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

        /* subtle vignette edges */
        .hv-vignette {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%);
        }

        /* ─── Content ─── */
        .hv-content {
          position: absolute; inset: 0; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 76px 2rem 0;
          gap: 0; /* controlled per-element via margin */
        }

        /* ─── Eyebrow ─── */
        .hv-eyebrow {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 5.5px;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          margin: 0 0 0.85rem;
          overflow: hidden;
        }
        .hv-eyebrow span { display: inline-block; }

        /* ─── Headline ─── */
        .hv-h1 {
          margin: 0;
          line-height: 1.08;
          max-width: 780px;
          width: 100%;
        }
        .hv-line {
          display: block;
          overflow: hidden;
          line-height: 1.1;
        }
        .hv-line-inner { display: block; }

        /* bold — heavy white */
        .hv-bold {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 4.4vw, 4.2rem);
          color: #ffffff;
          letter-spacing: -0.025em;
          line-height: 1.05;
        }
        /* thin italic */
        .hv-thin {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(2rem, 4.4vw, 4.2rem);
          color: rgba(255,255,255,0.78);
          letter-spacing: -0.015em;
          line-height: 1.05;
          margin-left: 0.15em;
        }

        /* ─── Sub ─── */
        .hv-sub {
          margin: 1.1rem auto 0;
          max-width: 480px;
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          font-weight: 300;
          line-height: 1.85;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.01em;
        }

        /* ─── CTAs ─── */
        .hv-cta-wrap {
          margin-top: 1.8rem;
          display: flex; gap: 10px;
          align-items: center; justify-content: center;
          flex-wrap: wrap;
        }

        /* Primary filled — Contact Us */
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
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12.5px; font-weight: 700;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: #fff; margin-right: 14px; white-space: nowrap;
        }
        .hv-btn-primary-icon {
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hv-btn-primary-icon svg path { stroke: #fff; }

        /* Outline — Get a Quote */
        .hv-btn-outline {
          display: inline-flex; align-items: center;
          padding: 11px 24px;
          border: 1.5px solid rgba(255,255,255,0.45);
          border-radius: 50px;
          background: transparent;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12.5px; font-weight: 600;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: #fff; cursor: pointer; text-decoration: none;
          transition: all 0.25s;
          backdrop-filter: blur(4px);
        }
        .hv-btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: #fff;
          transform: translateY(-2px);
        }

        /* Secondary — Call Now */
        .hv-btn-call {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 20px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50px;
          background: rgba(255,255,255,0.06);
          font-family: 'Josefin Sans', sans-serif;
          font-size: 12px; font-weight: 500;
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
        .hv-btn-call-icon {
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* Hero description — small fine print below CTAs */
        .hv-desc {
          margin: 1.4rem auto 0;
          max-width: 520px;
          font-size: clamp(0.72rem, 0.9vw, 0.8rem);
          font-weight: 300;
          line-height: 1.9;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.02em;
          font-style: italic;
        }
          display: flex; gap: 14px;
          align-items: center; justify-content: center;
        }
        /* ─── Side arrows — minimal circles on edges ─── */
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

        /* ─── Progress dots — bottom center ─── */
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

        /* ─── Slide counter — bottom right ─── */
        .hv-counter {
          position: absolute; bottom: 2rem; right: 2.2rem;
          z-index: 20;
          font-family: 'Josefin Sans', sans-serif;
          display: flex; align-items: baseline; gap: 4px;
        }
        .hv-counter-cur {
          font-size: 1.6rem; font-weight: 700;
          color: rgba(255,255,255,0.80); line-height: 1;
        }
        .hv-counter-sep {
          font-size: 11px; color: rgba(255,255,255,0.28); letter-spacing: 1px;
        }
        .hv-counter-tot {
          font-size: 11px; color: rgba(255,255,255,0.28); letter-spacing: 1px;
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .hv-bold, .hv-thin { font-size: clamp(1.7rem, 7.5vw, 2.8rem); }
          .hv-sub { font-size: 0.8rem; max-width: 90%; }
          .hv-eyebrow { font-size: 9.5px; letter-spacing: 4px; }
          .hv-arrow-left  { left: 0.6rem; }
          .hv-arrow-right { right: 0.6rem; }
          .hv-arrow { width: 38px; height: 38px; }
          .hv-counter { display: none; }
          .hv-cta-wrap { margin-top: 1.4rem; }
          .hv-content { padding: 76px 1.5rem 0; }
          .hv-h1 { max-width: 100%; }
        }
      `}</style>

      <section className="hv-wrap">

        {/* Slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hv-slide ${i === current ? "active" : ""}`}
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

        {/* Center content */}
        <div className="hv-content">

          {/* Eyebrow */}
          <p key={`ey-${animKey}`} className="hv-eyebrow">
            <span style={{ animation: "fadeIn 0.8s 0.1s ease both" }}>{c.eyebrow}</span>
          </p>

          {/* Headline — Slide 0: line-by-line clip reveal */}
          {current === 0 && (
            <h1 key={`h-${animKey}`} className="hv-h1">
              <span className="hv-line">
                <span className="hv-line-inner" style={{ animation: "revealUp 0.7s 0.18s cubic-bezier(0.16,1,0.3,1) both" }}>
                  <span className="hv-bold">{c.line1bold}</span>
                  <span className="hv-thin">{c.line1thin}</span>
                </span>
              </span>
              <span className="hv-line" style={{ marginTop: "0.06em" }}>
                <span className="hv-line-inner" style={{ animation: "revealUp 0.7s 0.30s cubic-bezier(0.16,1,0.3,1) both" }}>
                  <span className="hv-bold">{c.line2bold}</span>
                  <span className="hv-thin">{c.line2thin}</span>
                </span>
              </span>
            </h1>
          )}

          {/* Headline — Slide 1: letter blur collapse */}
          {current === 1 && (
            <h1 key={`h-${animKey}`} className="hv-h1"
              style={{ animation: "letterBlur 0.95s 0.12s cubic-bezier(0.16,1,0.3,1) both" }}>
              <span className="hv-line" style={{ display:"block" }}>
                <span className="hv-bold">{c.line1bold}</span>
                <span className="hv-thin">{c.line1thin}</span>
              </span>
              <span className="hv-line" style={{ display:"block", marginTop:"0.06em" }}>
                <span className="hv-bold">{c.line2bold}</span>
                <span className="hv-thin">{c.line2thin}</span>
              </span>
            </h1>
          )}

          {/* Headline — Slide 2: clip from bottom */}
          {current === 2 && (
            <h1 key={`h-${animKey}`} className="hv-h1">
              <span className="hv-line">
                <span className="hv-line-inner" style={{ animation: "clipUp 0.75s 0.12s cubic-bezier(0.77,0,0.18,1) both" }}>
                  <span className="hv-bold">{c.line1bold}</span>
                  <span className="hv-thin">{c.line1thin}</span>
                </span>
              </span>
              <span className="hv-line" style={{ marginTop: "0.06em" }}>
                <span className="hv-line-inner" style={{ animation: "clipUp 0.75s 0.26s cubic-bezier(0.77,0,0.18,1) both" }}>
                  <span className="hv-bold">{c.line2bold}</span>
                  <span className="hv-thin">{c.line2thin}</span>
                </span>
              </span>
            </h1>
          )}

          {/* Sub */}
          <p key={`sub-${animKey}`} className="hv-sub"
            style={{ animation: "fadeUp 0.75s 0.55s ease both" }}>
            {c.sub}
          </p>

          {/* CTAs */}
          <div key={`cta-${animKey}`} className="hv-cta-wrap"
            style={{ animation: "fadeUp 0.75s 0.70s ease both" }}>

            {/* Primary: Contact Us */}
            <a href="/contact" className="hv-btn-primary">
              <span className="hv-btn-primary-label">Contact Us</span>
              <span className="hv-btn-primary-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#083B66" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>

            {/* Primary: Get Quote */}
            <a href="/contact#quote" className="hv-btn-outline">
              <span>Get a Quote</span>
            </a>

            {/* Secondary: Call Now */}
            <a href="tel:+919876543210" className="hv-btn-call">
              <span className="hv-btn-call-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Call Now</span>
            </a>

          </div>

          {/* Hero description */}


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