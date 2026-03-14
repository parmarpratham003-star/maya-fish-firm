"use client";  
import { useEffect, useRef } from "react";

const fishSvgs = [
  `<svg width="70" height="35" viewBox="0 0 70 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 17.5 C40 4, 15 4, 5 17.5 C15 31, 40 31, 55 17.5Z" fill="rgba(79,209,232,0.5)"/>
    <path d="M55 17.5 L70 5 L65 17.5 L70 30 Z" fill="rgba(79,209,232,0.3)"/>
    <circle cx="14" cy="15" r="2.5" fill="rgba(255,255,255,0.6)"/>
  </svg>`,
  `<svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C28 3, 10 3, 3 12 C10 21, 28 21, 38 12Z" fill="rgba(10,132,214,0.45)"/>
    <path d="M38 12 L50 3 L46 12 L50 21 Z" fill="rgba(10,132,214,0.25)"/>
    <circle cx="10" cy="10.5" r="1.8" fill="rgba(255,255,255,0.55)"/>
  </svg>`,
  `<svg width="85" height="40" viewBox="0 0 85 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M65 20 C50 5, 18 5, 6 20 C18 35, 50 35, 65 20Z" fill="rgba(79,209,232,0.3)"/>
    <path d="M65 20 L85 6 L79 20 L85 34 Z" fill="rgba(79,209,232,0.18)"/>
    <circle cx="17" cy="17.5" r="3" fill="rgba(255,255,255,0.5)"/>
  </svg>`,
];

export default function Hero() {
  const bubblesRef = useRef(null);
  const raysRef = useRef(null);
  const fishRef = useRef(null);

  useEffect(() => {
    // Bubbles
    const bubblesEl = bubblesRef.current;
    for (let i = 0; i < 22; i++) {
      const b = document.createElement("div");
      const size = 4 + Math.random() * 18;
      Object.assign(b.style, {
        position: "absolute",
        borderRadius: "50%",
        border: "1px solid rgba(79,209,232,0.25)",
        background: "rgba(79,209,232,0.04)",
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        animation: `rise ${7 + Math.random() * 16}s ${Math.random() * 14}s linear infinite`,
      });
      bubblesEl.appendChild(b);
    }

    // Rays
    const raysEl = raysRef.current;
    for (let i = 0; i < 12; i++) {
      const r = document.createElement("div");
      Object.assign(r.style, {
        position: "absolute",
        top: "-10%",
        width: "1px",
        left: `${5 + i * 8 + Math.random() * 5}%`,
        height: `${50 + Math.random() * 30}%`,
        background: "linear-gradient(to bottom, rgba(79,209,232,0.12), transparent)",
        transformOrigin: "top center",
        animation: `sway ${3 + Math.random() * 4}s ${Math.random() * 3}s ease-in-out infinite alternate`,
        opacity: `${0.3 + Math.random() * 0.5}`,
      });
      raysEl.appendChild(r);
    }

    // Fish
    const fishContainer = fishRef.current;
    function spawnFish() {
      const wrapper = document.createElement("div");
      const fishIdx = Math.floor(Math.random() * fishSvgs.length);
      wrapper.innerHTML = fishSvgs[fishIdx];
      const topPct = 15 + Math.random() * 60;
      const duration = 18 + Math.random() * 25;
      const delay = Math.random() * 8;
      Object.assign(wrapper.style, {
        position: "absolute",
        top: `${topPct}%`,
        opacity: "0",
        animation: `swimAcross ${duration}s ${delay}s linear infinite`,
        zIndex: "2",
      });
      fishContainer.appendChild(wrapper);
      setTimeout(() => wrapper.remove(), (duration + delay + 1) * 1000);
    }

    for (let i = 0; i < 3; i++) spawnFish();
    const fishInterval = setInterval(spawnFish, 5000);

    return () => clearInterval(fishInterval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes causticShift {
          0% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          100% { transform: translate(20px, -15px) scale(1.03); opacity: 1; }
        }
        @keyframes rise {
          0% { transform: translateY(110vh) scale(0.6); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-15vh) scale(1.1); opacity: 0; }
        }
        @keyframes sway {
          0% { transform: rotate(-6deg) scaleX(1); opacity: 0.6; }
          100% { transform: rotate(6deg) scaleX(1.8); opacity: 1; }
        }
        @keyframes swimAcross {
          0%   { transform: translateX(-120px); opacity: 0; }
          5%   { opacity: 0.35; }
          95%  { opacity: 0.2; }
          100% { transform: translateX(calc(100vw + 120px)); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: translate(-50%, -52%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -52%) scale(1.04); opacity: 1; }
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(175deg, #020D18 0%, #04192E 35%, #071F38 60%, #062035 100%);
          font-family: 'Outfit', sans-serif;
        }

        .caustic {
          position: absolute;
          top: -20%; left: -10%;
          width: 120%; height: 120%;
          background:
            radial-gradient(ellipse 600px 300px at 30% 20%, rgba(0,180,200,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 400px 200px at 70% 50%, rgba(79,209,232,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 300px 400px at 50% 80%, rgba(10,132,214,0.07) 0%, transparent 60%);
          animation: causticShift 8s ease-in-out infinite alternate;
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
        }

        .glow-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -52%);
          width: 520px; height: 520px;
          border-radius: 50%;
          border: 1px solid rgba(79,209,232,0.07);
          z-index: 4;
          pointer-events: none;
          animation: ringPulse 5s ease-in-out infinite;
        }
        .glow-ring::before {
          content: '';
          position: absolute;
          inset: 40px;
          border-radius: 50%;
          border: 1px solid rgba(79,209,232,0.05);
          animation: ringPulse 5s 1s ease-in-out infinite;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 4rem 2rem;
          max-width: 860px;
          margin: 0 auto;
          animation: fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) both;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #4FD1E8;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          animation: fadeUp 1.1s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .eyebrow::before, .eyebrow::after {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: rgba(79,209,232,0.5);
        }

        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          line-height: 1.12;
          color: #ECF6FF;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          animation: fadeUp 1.1s 0.18s cubic-bezier(0.16,1,0.3,1) both;
        }
        .italic-line {
          display: block;
          font-style: italic;
          font-weight: 400;
          color: #4FD1E8;
          font-size: clamp(2rem, 5vw, 3.6rem);
        }

        .subheadline {
          font-size: clamp(0.95rem, 2vw, 1.12rem);
          color: #B8D8EA;
          line-height: 1.65;
          margin-top: 1.8rem;
          margin-bottom: 0.7rem;
          font-weight: 400;
          animation: fadeUp 1.1s 0.28s cubic-bezier(0.16,1,0.3,1) both;
        }

        .description {
          font-size: 0.9rem;
          color: #6D97B0;
          line-height: 1.75;
          font-weight: 300;
          max-width: 620px;
          margin: 0 auto 2.6rem;
          animation: fadeUp 1.1s 0.36s cubic-bezier(0.16,1,0.3,1) both;
        }

        .cta-group {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp 1.1s 0.44s cubic-bezier(0.16,1,0.3,1) both;
        }

        .btn-primary {
          padding: 13px 34px;
          border-radius: 4px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          border: none;
          cursor: pointer;
          background: #0A84D6;
          color: #fff;
          position: relative;
          overflow: hidden;
          transition: background 0.25s, transform 0.18s;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .btn-primary:hover { background: #0e9cc4; transform: translateY(-2px); }
        .btn-primary:hover::after { transform: translateX(100%); }

        .btn-outline {
          padding: 12px 34px;
          border-radius: 4px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          cursor: pointer;
          background: transparent;
          color: #B0D4E8;
          border: 1px solid rgba(79,209,232,0.35);
          transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.18s;
        }
        .btn-outline:hover {
          background: rgba(79,209,232,0.1);
          color: #4FD1E8;
          border-color: rgba(79,209,232,0.7);
          transform: translateY(-2px);
        }

        .trust-pills {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2.4rem;
          animation: fadeUp 1.1s 0.54s cubic-bezier(0.16,1,0.3,1) both;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #4F7A92;
          font-weight: 400;
          letter-spacing: 0.3px;
        }
        .pill-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #1D7A90;
          flex-shrink: 0;
        }
      `}</style>

      <section className="hero-section">
        {/* Caustic background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <div className="caustic" />
        </div>

        {/* Light rays */}
        <div
          ref={raysRef}
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "60%",
            overflow: "hidden",
            zIndex: 1,
          }}
        />

        {/* Grain */}
        <div className="grain-overlay" />

        {/* Bubbles */}
        <div ref={bubblesRef} style={{ position: "absolute", inset: 0, zIndex: 1 }} />

        {/* Fish */}
        <div ref={fishRef} style={{ position: "absolute", inset: 0, zIndex: 2 }} />

        {/* Glow ring */}
        <div className="glow-ring" />

        {/* Content */}
        <div className="hero-content">
          <div className="eyebrow">Ornamental Fish Breeding &amp; Aquarium Supply</div>

          <h1 className="hero-h1">
            Healthy Ornamental Fish
            <span className="italic-line">For Aquariums &amp; Fish Lovers</span>
          </h1>

          <p className="subheadline">
            MAYA Fish Farm breeds vibrant and healthy ornamental fish varieties
            for aquariums, hobbyists, and aquarium retailers.
          </p>

          <p className="description">
            We follow responsible breeding practices, maintain clean water systems,
            and provide balanced nutrition to ensure strong and colorful fish for
            aquarium enthusiasts and businesses.
          </p>

          <div className="cta-group">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-outline">Call Now</button>
          </div>

          <div className="trust-pills">
            {["Responsible Breeding", "Clean Water Systems", "Balanced Nutrition", "Vibrant Varieties"].map((label) => (
              <div className="pill" key={label}>
                <div className="pill-dot" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", zIndex: 5, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: "90px", display: "block" }}>
            <path fill="#E6F6FF" d="M0,50 C240,80 480,20 720,45 C960,70 1200,25 1440,50 L1440,90 L0,90 Z" opacity="0.06" />
            <path fill="#E6F6FF" d="M0,65 C300,30 600,85 900,55 C1100,38 1280,70 1440,60 L1440,90 L0,90 Z" opacity="0.09" />
            <path fill="#E6F6FF" d="M0,75 C200,55 480,85 720,70 C960,55 1200,80 1440,72 L1440,90 L0,90 Z" opacity="0.13" />
          </svg>
        </div>
      </section>
    </>
  );
}