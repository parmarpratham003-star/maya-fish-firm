"use client";
import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "/s1.png" },
  { image: "/s2.png" },
  { image: "/silde3.png" },
];

export default function Hero() {
  const raysRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  };

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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes causticShift {
          0%   { transform:translate(0,0) scale(1); opacity:.7; }
          100% { transform:translate(20px,-15px) scale(1.03); opacity:1; }
        }
        @keyframes sway {
          0%   { transform:rotate(-6deg) scaleX(1); opacity:.6; }
          100% { transform:rotate(6deg) scaleX(1.8); opacity:1; }
        }
        @keyframes ringPulse {
          0%,100% { transform:translate(-50%,-50%) scale(1); opacity:.5; }
          50%     { transform:translate(-50%,-50%) scale(1.04); opacity:1; }
        }
        @keyframes slideIn {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes bgZoom {
          from { transform:scale(1.07); }
          to   { transform:scale(1); }
        }
        @keyframes arrowPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(79,209,232,0.15); }
          50%     { box-shadow:0 0 0 8px rgba(79,209,232,0); }
        }

        .hero-section {
          position:relative;
          height:100vh;
          min-height:600px;
          display:flex;
          align-items:center;
          overflow:hidden;
          font-family:'Outfit',sans-serif;
        }

        /* Full BG image */
        .slide-bg {
          position:absolute; inset:0;
          background-size:cover;
          background-position:center;
          animation:bgZoom 5.5s ease-out forwards;
          z-index:0;
        }

        /* Overlay — heavy left, fade right */
        .slide-overlay {
          position:absolute; inset:0;
          background:linear-gradient(
            105deg,
            rgba(4,17,31,0.93) 0%,
            rgba(4,17,31,0.72) 42%,
            rgba(4,17,31,0.25) 100%
          );
          z-index:1;
        }

        .caustic {
          position:absolute; top:-20%; left:-10%;
          width:120%; height:120%;
          background:
            radial-gradient(ellipse 600px 300px at 30% 20%, rgba(0,180,200,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 400px 200px at 70% 50%, rgba(79,209,232,0.04) 0%, transparent 60%);
          animation:causticShift 8s ease-in-out infinite alternate;
          z-index:2;
        }
        .grain-overlay {
          position:absolute; inset:0; z-index:3; opacity:.022;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size:180px; pointer-events:none;
        }
        .glow-ring {
          position:absolute; top:50%; left:50%;
          transform:translate(-50%,-50%);
          width:560px; height:560px; border-radius:50%;
          border:1px solid rgba(79,209,232,0.06);
          z-index:4; pointer-events:none;
          animation:ringPulse 5s ease-in-out infinite;
        }
        .glow-ring::before {
          content:''; position:absolute; inset:44px; border-radius:50%;
          border:1px solid rgba(79,209,232,0.04);
          animation:ringPulse 5s 1s ease-in-out infinite;
        }

        /* ── Side arrows ── exactly at 50% vertical of the hero */
        .side-arrow {
          position:absolute;
          top:50%;
          transform:translateY(-50%);
          z-index:20;
          width:56px; height:56px;
          border-radius:50%;
          border:1.5px solid rgba(79,209,232,0.28);
          background:rgba(4,17,31,0.52);
          backdrop-filter:blur(10px);
          color:#4FD1E8;
          cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:background .22s, border-color .22s, transform .22s;
          animation:arrowPulse 3s ease-in-out infinite;
        }
        .side-arrow:hover {
          background:rgba(79,209,232,0.18);
          border-color:rgba(79,209,232,0.6);
          transform:translateY(-50%) scale(1.1);
        }
        .side-arrow-left  { left:2.2rem; }
        .side-arrow-right { right:2.2rem; }

        /* ── Content ── */
        .hero-inner {
          position:relative; z-index:10;
          width:100%;
          padding:0 9rem;          /* leaves room for side arrows */
          display:flex; align-items:center;
          height:100%;
        }
        .hero-content {
          max-width:800px;
          display:flex; flex-direction:column; gap:0;
        }

        /* Eyebrow */
        .eyebrow {
          display:inline-flex; align-items:center; gap:14px;
          color:#4FD1E8; font-size:11.5px; font-weight:600;
          letter-spacing:5px; text-transform:uppercase;
          margin-bottom:2rem;
        }
        .eyebrow::before,.eyebrow::after {
          content:''; display:block; width:30px; height:1px;
          background:rgba(79,209,232,0.5);
        }

        /* Headline */
        .hero-h1 {
          font-family:'Playfair Display',serif; font-weight:600;
          font-size:clamp(3rem,5.2vw,5rem);
          line-height:1.1;
          color:#ECF6FF;
          letter-spacing:-0.02em;
          white-space:nowrap;
          margin-bottom:0.3rem;
        }
        .italic-line {
          display:block; font-style:italic; font-weight:400;
          color:#4FD1E8;
          font-size:clamp(2.4rem,4.2vw,4rem);
          margin-top:0.2rem;
          white-space:nowrap;
        }

        /* Sub-headline */
        .sub-headline {
          font-size:1.1rem; color:#B0D4E8; line-height:1.7; font-weight:400;
          max-width:600px;
          margin-top:2rem;
          margin-bottom:1.1rem;
        }

        /* Description */
        .hero-desc {
          font-size:0.9rem; color:#5a8099; line-height:2; font-weight:300;
          max-width:580px;
          margin-bottom:3rem;
          border-left:2px solid rgba(79,209,232,0.25);
          padding-left:1.1rem;
        }

        /* CTAs */
        .cta-group {
          display:flex; gap:14px; flex-wrap:wrap; align-items:center;
        }
        .btn-primary {
          padding:15px 38px; border-radius:4px; font-family:'Outfit',sans-serif;
          font-size:0.95rem; font-weight:600; letter-spacing:0.5px;
          border:none; cursor:pointer; background:#0A84D6; color:#fff;
          transition:background .25s,transform .18s,box-shadow .25s;
          box-shadow:0 4px 22px rgba(10,132,214,0.38);
        }
        .btn-primary:hover { background:#0e9cc4; transform:translateY(-2px); box-shadow:0 6px 30px rgba(10,132,214,0.48); }

        .btn-secondary {
          padding:14px 38px; border-radius:4px; font-family:'Outfit',sans-serif;
          font-size:0.95rem; font-weight:600; letter-spacing:0.5px;
          cursor:pointer; background:rgba(79,209,232,0.1); color:#4FD1E8;
          border:1.5px solid rgba(79,209,232,0.32);
          transition:background .22s,color .22s,border-color .22s,transform .18s;
        }
        .btn-secondary:hover {
          background:rgba(79,209,232,0.2); color:#ECF6FF;
          border-color:rgba(79,209,232,0.65); transform:translateY(-2px);
        }

        .btn-outline {
          padding:14px 30px; border-radius:4px; font-family:'Outfit',sans-serif;
          font-size:0.95rem; font-weight:500; letter-spacing:0.5px;
          cursor:pointer; background:transparent; color:#6D97B0;
          border:1.5px solid rgba(79,209,232,0.18);
          transition:background .22s,color .22s,border-color .22s,transform .18s;
          display:flex; align-items:center; gap:9px;
        }
        .btn-outline:hover {
          background:rgba(79,209,232,0.08); color:#B0D4E8;
          border-color:rgba(79,209,232,0.42); transform:translateY(-2px);
        }

        .slide-text-anim { animation:slideIn 0.65s cubic-bezier(0.16,1,0.3,1) both; }

        /* Bottom wave */
        .bottom-wave {
          position:absolute; bottom:0; left:0; width:100%; z-index:5; line-height:0;
        }

        @media (max-width:1024px) {
          .hero-inner { padding:0 7rem; }
          .hero-h1 { font-size:clamp(2.4rem,5vw,4rem); white-space:normal; }
          .italic-line { font-size:clamp(2rem,4.2vw,3.2rem); white-space:normal; }
        }
        @media (max-width:640px) {
          .hero-inner { padding:0 5rem; }
          .side-arrow { width:42px; height:42px; }
          .side-arrow-left  { left:0.6rem; }
          .side-arrow-right { right:0.6rem; }
          .hero-h1 { font-size:2rem; }
          .italic-line { font-size:1.7rem; }
        }
      `}</style>

      <section className="hero-section">

        {/* Full BG */}
        <div
          key={`bg-${animKey}`}
          className="slide-bg"
          style={{ backgroundImage:`url('${slide.image}')` }}
        />
        <div className="slide-overlay" />

        {/* Atmosphere */}
        <div style={{ position:"absolute", inset:0, overflow:"hidden", zIndex:2 }}>
          <div className="caustic" />
        </div>
        <div ref={raysRef} style={{ position:"absolute", top:0, left:0, width:"100%", height:"60%", overflow:"hidden", zIndex:2 }} />
        <div className="grain-overlay" />
        <div className="glow-ring" />

        {/* ← Left arrow at vertical centre */}
        <button
          className="side-arrow side-arrow-left"
          onClick={() => goTo((current - 1 + total) % total)}
          aria-label="Previous slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* → Right arrow at vertical centre */}
        <button
          className="side-arrow side-arrow-right"
          onClick={() => goTo((current + 1) % total)}
          aria-label="Next slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Content */}
        <div className="hero-inner">
          <div className="hero-content">

            <div key={`eyebrow-${animKey}`} className="eyebrow slide-text-anim">
              Ornamental Fish Breeding &amp; Aquarium Supply
            </div>

            <h1 key={`h1-${animKey}`} className="hero-h1 slide-text-anim" style={{ animationDelay:"0.07s" }}>
              Healthy Ornamental Fish
              <span className="italic-line">Breeding &amp; Aquarium Supply</span>
            </h1>

            <p key={`sub-${animKey}`} className="sub-headline slide-text-anim" style={{ animationDelay:"0.13s" }}>
              MAYA Fish Farm specializes in breeding vibrant and healthy ornamental fish varieties
              for aquariums, hobbyists, and aquarium retailers.
            </p>

            <p key={`desc-${animKey}`} className="hero-desc slide-text-anim" style={{ animationDelay:"0.19s" }}>
              MAYA Fish Farm is dedicated to producing high-quality ornamental fish through responsible
              breeding practices, proper water management, and balanced fish nutrition. Our farm supplies
              aquarium fish varieties to hobbyists, pet stores, and aquarium businesses while promoting
              sustainable aquaculture practices.
            </p>

            <div key={`cta-${animKey}`} className="cta-group slide-text-anim" style={{ animationDelay:"0.25s" }}>
              <button className="btn-primary">Contact Us</button>
              <button className="btn-secondary">Get Quote</button>
              <button className="btn-outline">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{opacity:.8}}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                Call Now
              </button>
            </div>

          </div>
        </div>

        {/* Bottom wave */}
        <div className="bottom-wave">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width:"100%", height:"90px", display:"block" }}>
            <path fill="#E6F6FF" d="M0,50 C240,80 480,20 720,45 C960,70 1200,25 1440,50 L1440,90 L0,90 Z" opacity="0.06" />
            <path fill="#E6F6FF" d="M0,65 C300,30 600,85 900,55 C1100,38 1280,70 1440,60 L1440,90 L0,90 Z" opacity="0.09" />
            <path fill="#E6F6FF" d="M0,75 C200,55 480,85 720,70 C960,55 1200,80 1440,72 L1440,90 L0,90 Z" opacity="0.13" />
          </svg>
        </div>

      </section>
    </>
  );
}
