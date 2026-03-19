"use client";
import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "/s3.png" },
  { image: "/s2.png" },
  { image: "/silde3.png" },
];

export default function Hero() {
  const raysRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey]  = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => { setCurrent(idx); setAnimKey((k) => k + 1); };

  useEffect(() => {
    const raysEl = raysRef.current;
    for (let i = 0; i < 12; i++) {
      const r = document.createElement("div");
      Object.assign(r.style, {
        position:        "absolute",
        top:             "-10%",
        width:           "1px",
        left:            `${5 + i * 8 + Math.random() * 5}%`,
        height:          `${50 + Math.random() * 30}%`,
        background:      "linear-gradient(to bottom, rgba(79,209,232,0.10), transparent)",
        transformOrigin: "top center",
        animation:       `sway ${3 + Math.random() * 4}s ${Math.random() * 3}s ease-in-out infinite alternate`,
        opacity:         `${0.2 + Math.random() * 0.4}`,
      });
      raysEl.appendChild(r);
    }
  }, []);

  const slide = slides[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes causticShift {
          0%   { transform:translate(0,0) scale(1); opacity:.7; }
          100% { transform:translate(20px,-15px) scale(1.03); opacity:1; }
        }
        @keyframes sway {
          0%   { transform:rotate(-6deg) scaleX(1); opacity:.6; }
          100% { transform:rotate(6deg) scaleX(1.8); opacity:1; }
        }
        @keyframes ringPulse {
          0%,100% { transform:translate(-50%,-50%) scale(1); opacity:.4; }
          50%     { transform:translate(-50%,-50%) scale(1.04); opacity:.8; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes arrowPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(79,209,232,0.15); }
          50%     { box-shadow:0 0 0 8px rgba(79,209,232,0); }
        }
        @keyframes fillDot {
          from { width:0%; } to { width:100%; }
        }

        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .slide-bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          animation: crossFade 0.9s ease-in-out both;
        }

        @keyframes crossFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Darker on left-bottom for text, fades right */
        .slide-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(4,17,31,0.15) 0%, rgba(4,17,31,0.96) 100%),
            linear-gradient(to right,  rgba(4,17,31,0.82) 0%, rgba(4,17,31,0.08) 60%);
          z-index: 1;
        }

        .caustic {
          position: absolute; top:-20%; left:-10%;
          width:120%; height:120%;
          background:
            radial-gradient(ellipse 600px 300px at 30% 20%, rgba(0,180,200,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 400px 200px at 70% 50%, rgba(79,209,232,0.04) 0%, transparent 60%);
          animation: causticShift 8s ease-in-out infinite alternate;
          z-index: 2;
        }
        .grain-overlay {
          position: absolute; inset: 0; z-index: 3; opacity: .022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px; pointer-events: none;
        }
        .glow-ring {
          position: absolute; top:50%; left:50%;
          transform: translate(-50%,-50%);
          width: 560px; height: 560px; border-radius: 50%;
          border: 1px solid rgba(79,209,232,0.06);
          z-index: 4; pointer-events: none;
          animation: ringPulse 5s ease-in-out infinite;
        }
        .glow-ring::before {
          content: ''; position: absolute; inset: 44px; border-radius: 50%;
          border: 1px solid rgba(79,209,232,0.04);
          animation: ringPulse 5s 1s ease-in-out infinite;
        }

        /* Side arrows at vertical 50% */
        .side-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1.5px solid rgba(79,209,232,0.28);
          background: rgba(4,17,31,0.50);
          backdrop-filter: blur(10px);
          color: #4FD1E8;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background .22s, border-color .22s, transform .22s;
          animation: arrowPulse 3s ease-in-out infinite;
        }
        .side-arrow:hover {
          background: rgba(79,209,232,0.18);
          border-color: rgba(79,209,232,0.6);
          transform: translateY(-50%) scale(1.1);
        }
        .side-arrow-left  { left: 1.5rem; }
        .side-arrow-right { right: 1.5rem; }

        /* Content pinned to bottom-left, same width as header max-w-5xl px-6 */
        .hero-bottom {
          position: relative;
          z-index: 10;
          margin-top: auto;
          width: 100%;
          padding-bottom: 4rem;
        }
        .hero-container {
          max-width: 64rem;        /* Tailwind max-w-5xl */
          margin: 0 auto;
          padding: 0 1.5rem;       /* Tailwind px-6 */
          text-align: left;
        }

        /* Eyebrow */
        .eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          color: #4FD1E8;
          font-size: 11px; font-weight: 600;
          letter-spacing: 5px; text-transform: uppercase;
          margin-bottom: 1.6rem;
        }
        .eyebrow::before, .eyebrow::after {
          content: ''; display: block; width: 28px; height: 1px;
          background: rgba(79,209,232,0.5);
        }

        /* Headline — large, white, bold, Playfair */
        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2.8rem, 5.8vw, 5.2rem);
          line-height: 1.08;
          color: #ECF6FF;
          letter-spacing: -0.02em;
          margin-bottom: 0.1rem;
          white-space: nowrap;
        }

        /* Italic cyan line */
        .italic-line {
          display: block;
          font-style: italic;
          font-weight: 400;
          color: #4FD1E8;
          font-size: clamp(2.2rem, 4.6vw, 4.2rem);
          line-height: 1.15;
          margin-bottom: 2rem;
          white-space: nowrap;
        }

        /* Sub-text */
        .hero-sub {
          font-size: 0.95rem;
          color: rgba(176,212,232,0.88);
          line-height: 1.8;
          font-weight: 300;
          max-width: 520px;
          margin-bottom: 2.4rem;
        }

        /* CTAs */
        .cta-group {
          display: flex; gap: 14px; flex-wrap: wrap; align-items: center;
          margin-bottom: 0.4rem;
        }
        .btn-primary {
          padding: 13px 36px; border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem; font-weight: 600; letter-spacing: 0.4px;
          border: none; cursor: pointer;
          background: #0A84D6; color: #fff;
          transition: background .25s, transform .18s, box-shadow .25s;
          box-shadow: 0 4px 22px rgba(10,132,214,0.40);
        }
        .btn-primary:hover { background:#0e9cc4; transform:translateY(-2px); box-shadow:0 6px 30px rgba(10,132,214,0.50); }

        .btn-outline {
          padding: 12px 28px; border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem; font-weight: 500; letter-spacing: 0.4px;
          cursor: pointer;
          background: rgba(255,255,255,0.07);
          color: #B0D4E8;
          border: 1.5px solid rgba(176,212,232,0.3);
          display: flex; align-items: center; gap: 8px;
          transition: background .22s, border-color .22s, transform .18s;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.13);
          border-color: rgba(176,212,232,0.55);
          transform: translateY(-2px);
        }

        /* Slide dots */
        .slide-dots {
          display: flex; gap: 8px; margin-top: 2.2rem;
        }
        .sdot {
          width: 28px; height: 3px; border-radius: 2px;
          background: rgba(255,255,255,0.18);
          cursor: pointer; position: relative; overflow: hidden;
        }
        .sdot.active { background: rgba(79,209,232,0.18); }
        .sdot.active::after {
          content: ''; position: absolute; top:0; left:0; height:100%;
          background: #4FD1E8; border-radius: 2px;
          animation: fillDot 5s linear forwards;
        }

        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }

        @media (max-width: 900px) {
          .hero-h1    { white-space: normal; font-size: clamp(2rem,6vw,3.4rem); }
          .italic-line{ white-space: normal; font-size: clamp(1.7rem,5vw,2.8rem); }
          .side-arrow-left  { left: 0.5rem; }
          .side-arrow-right { right: 0.5rem; }
          .side-arrow { width: 42px; height: 42px; }
        }
      `}</style>

      <section className="hero-section">

        <div key={`bg-${animKey}`} className="slide-bg"
          style={{ backgroundImage:`url('${slide.image}')` }} />
        <div className="slide-overlay" />

        <div style={{ position:"absolute", inset:0, overflow:"hidden", zIndex:2 }}>
          <div className="caustic" />
        </div>
        <div ref={raysRef} style={{ position:"absolute", top:0, left:0, width:"100%", height:"60%", overflow:"hidden", zIndex:2 }} />
        <div className="grain-overlay" />
        <div className="glow-ring" />

        {/* ← Left arrow */}
        <button className="side-arrow side-arrow-left"
          onClick={() => goTo((current - 1 + total) % total)} aria-label="Previous slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* → Right arrow */}
        <button className="side-arrow side-arrow-right"
          onClick={() => goTo((current + 1) % total)} aria-label="Next slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Bottom-left content */}
        <div className="hero-bottom">
          <div className="hero-container">

            <div key={`eyebrow-${animKey}`} className="eyebrow fade-up">
              Ornamental Fish Breeding &amp; Aquarium Supply
            </div>

            <h1 key={`h1-${animKey}`} className="hero-h1 fade-up" style={{ animationDelay:"0.07s" }}>
              Healthy Ornamental Fish
              <span className="italic-line">Breeding &amp; Aquarium Supply</span>
            </h1>

            <p key={`sub-${animKey}`} className="hero-sub fade-up" style={{ animationDelay:"0.14s" }}>
              MAYA Fish Farm specializes in breeding vibrant and healthy ornamental fish
              varieties for aquariums, hobbyists, and aquarium retailers.
            </p>

            <div key={`cta-${animKey}`} className="cta-group fade-up" style={{ animationDelay:"0.20s" }}>
              <button className="btn-primary">Contact Us</button>
              <button className="btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                Call Now
              </button>
            </div>

            <div className="slide-dots">
              {slides.map((_, i) => (
                <div key={i} className={`sdot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)} />
              ))}
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
