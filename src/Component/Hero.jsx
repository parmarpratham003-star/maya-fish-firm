"use client";
import { useEffect, useRef } from "react";

const fishSvgs = [
  // Orange Goldfish
  `<svg width="72" height="36" viewBox="0 0 72 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform:scaleX(-1)">
    <path d="M56 18 C40 4, 14 4, 4 18 C14 32, 40 32, 56 18Z" fill="rgba(255,140,0,0.75)"/>
    <path d="M56 18 C48 10, 48 26, 56 18Z" fill="rgba(255,100,0,0.5)"/>
    <path d="M56 18 L72 5 L66 18 L72 31Z" fill="rgba(255,120,0,0.5)"/>
    <path d="M20 10 C28 6, 44 6, 52 14" stroke="rgba(255,200,80,0.4)" stroke-width="1.5" fill="none"/>
    <path d="M20 26 C28 30, 44 30, 52 22" stroke="rgba(255,200,80,0.3)" stroke-width="1" fill="none"/>
    <circle cx="14" cy="16" r="3" fill="rgba(255,255,255,0.8)"/>
    <circle cx="14" cy="16" r="1.5" fill="rgba(60,20,0,0.7)"/>
    <circle cx="13.3" cy="15.3" r="0.6" fill="rgba(255,255,255,0.9)"/>
  </svg>`,

  // Blue Fighter Fish
  `<svg width="60" height="34" viewBox="0 0 60 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform:scaleX(-1)">
    <path d="M44 17 C30 4, 10 4, 3 17 C10 30, 30 30, 44 17Z" fill="rgba(30,100,220,0.8)"/>
    <path d="M44 17 L60 4 L54 17 L60 30Z" fill="rgba(30,80,200,0.5)"/>
    <path d="M44 17 C50 8, 58 5, 60 4" stroke="rgba(100,180,255,0.6)" stroke-width="2" fill="none"/>
    <path d="M44 17 C50 26, 58 29, 60 30" stroke="rgba(100,180,255,0.5)" stroke-width="2" fill="none"/>
    <path d="M15 8 Q25 4 38 10" stroke="rgba(120,200,255,0.5)" stroke-width="1.2" fill="none"/>
    <path d="M15 26 Q25 30 38 24" stroke="rgba(80,160,255,0.4)" stroke-width="1" fill="none"/>
    <circle cx="11" cy="15" r="3" fill="rgba(255,255,255,0.85)"/>
    <circle cx="11" cy="15" r="1.5" fill="rgba(10,20,80,0.8)"/>
    <circle cx="10.3" cy="14.3" r="0.6" fill="rgba(255,255,255,0.9)"/>
  </svg>`,

  // Purple/Pink Guppy
  `<svg width="52" height="28" viewBox="0 0 52 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform:scaleX(-1)">
    <path d="M38 14 C26 3, 8 3, 3 14 C8 25, 26 25, 38 14Z" fill="rgba(170,60,210,0.75)"/>
    <path d="M38 14 L52 4 L47 14 L52 24Z" fill="rgba(200,80,230,0.45)"/>
    <path d="M12 7 Q22 4 34 10" stroke="rgba(230,150,255,0.5)" stroke-width="1.2" fill="none"/>
    <path d="M12 21 Q22 24 34 18" stroke="rgba(200,100,240,0.4)" stroke-width="1" fill="none"/>
    <ellipse cx="10" cy="12" rx="2.5" ry="2" fill="rgba(255,255,255,0.85)"/>
    <circle cx="10" cy="12" r="1.2" fill="rgba(40,0,60,0.75)"/>
    <circle cx="9.4" cy="11.4" r="0.5" fill="rgba(255,255,255,0.9)"/>
  </svg>`,

  // Red/White Angel-ish Fish (tall)
  `<svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform:scaleX(-1)">
    <path d="M32 26 C20 16, 8 18, 4 26 C8 34, 20 36, 32 26Z" fill="rgba(220,50,50,0.75)"/>
    <path d="M32 26 L44 18 L40 26 L44 34Z" fill="rgba(200,40,40,0.45)"/>
    <path d="M14 18 C18 8, 22 2, 24 0" stroke="rgba(255,120,120,0.55)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M14 34 C18 44, 22 50, 24 52" stroke="rgba(255,100,100,0.5)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M10 20 Q18 14 28 20" stroke="rgba(255,180,180,0.4)" stroke-width="1.2" fill="none"/>
    <path d="M10 32 Q18 38 28 32" stroke="rgba(255,150,150,0.35)" stroke-width="1" fill="none"/>
    <circle cx="10" cy="25" r="3" fill="rgba(255,255,255,0.9)"/>
    <circle cx="10" cy="25" r="1.5" fill="rgba(80,0,0,0.75)"/>
    <circle cx="9.3" cy="24.3" r="0.6" fill="rgba(255,255,255,0.95)"/>
  </svg>`,

  // Green Molly
  `<svg width="64" height="30" viewBox="0 0 64 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform:scaleX(-1)">
    <path d="M48 15 C34 3, 10 3, 4 15 C10 27, 34 27, 48 15Z" fill="rgba(30,160,80,0.75)"/>
    <path d="M48 15 L64 4 L58 15 L64 26Z" fill="rgba(20,140,60,0.45)"/>
    <path d="M14 7 Q28 3 42 10" stroke="rgba(100,230,140,0.45)" stroke-width="1.3" fill="none"/>
    <path d="M14 23 Q28 27 42 20" stroke="rgba(60,200,100,0.4)" stroke-width="1" fill="none"/>
    <path d="M22 5 L20 2 M28 4 L27 1 M34 5 L33 2" stroke="rgba(80,210,120,0.5)" stroke-width="1.2" stroke-linecap="round"/>
    <circle cx="12" cy="13" r="3" fill="rgba(255,255,255,0.85)"/>
    <circle cx="12" cy="13" r="1.5" fill="rgba(0,40,10,0.75)"/>
    <circle cx="11.3" cy="12.3" r="0.6" fill="rgba(255,255,255,0.9)"/>
  </svg>`,

  // Yellow Koi
  `<svg width="80" height="38" viewBox="0 0 80 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform:scaleX(-1)">
    <path d="M62 19 C44 4, 14 4, 5 19 C14 34, 44 34, 62 19Z" fill="rgba(240,200,20,0.78)"/>
    <path d="M28 8 Q38 5 52 12" stroke="rgba(255,140,0,0.45)" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M28 30 Q38 33 52 26" stroke="rgba(255,100,0,0.3)" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M62 19 L80 5 L73 19 L80 33Z" fill="rgba(220,180,0,0.45)"/>
    <path d="M18 9 Q30 5 46 12" stroke="rgba(255,230,100,0.4)" stroke-width="1.3" fill="none"/>
    <path d="M18 29 Q30 33 46 26" stroke="rgba(255,210,60,0.35)" stroke-width="1" fill="none"/>
    <circle cx="14" cy="17" r="3.5" fill="rgba(255,255,255,0.9)"/>
    <circle cx="14" cy="17" r="1.8" fill="rgba(60,40,0,0.75)"/>
    <circle cx="13.2" cy="16.2" r="0.7" fill="rgba(255,255,255,0.95)"/>
  </svg>`,
];

export default function Hero() {
  const bubblesRef = useRef(null);
  const raysRef    = useRef(null);
  const fishRef    = useRef(null);

  useEffect(() => {
    // Bubbles
    const bubblesEl = bubblesRef.current;
    for (let i = 0; i < 22; i++) {
      const b    = document.createElement("div");
      const size = 4 + Math.random() * 18;
      Object.assign(b.style, {
        position:     "absolute",
        borderRadius: "50%",
        border:       "1px solid rgba(79,209,232,0.25)",
        background:   "rgba(79,209,232,0.04)",
        width:        `${size}px`,
        height:       `${size}px`,
        left:         `${Math.random() * 100}%`,
        animation:    `rise ${7 + Math.random() * 16}s ${Math.random() * 14}s linear infinite`,
      });
      bubblesEl.appendChild(b);
    }

    // Rays
    const raysEl = raysRef.current;
    for (let i = 0; i < 12; i++) {
      const r = document.createElement("div");
      Object.assign(r.style, {
        position:        "absolute",
        top:             "-10%",
        width:           "1px",
        left:            `${5 + i * 8 + Math.random() * 5}%`,
        height:          `${50 + Math.random() * 30}%`,
        background:      "linear-gradient(to bottom, rgba(79,209,232,0.12), transparent)",
        transformOrigin: "top center",
        animation:       `sway ${3 + Math.random() * 4}s ${Math.random() * 3}s ease-in-out infinite alternate`,
        opacity:         `${0.3 + Math.random() * 0.5}`,
      });
      raysEl.appendChild(r);
    }

    // Fish — pick random from colorful set
    const fishContainer = fishRef.current;
    function spawnFish() {
      const wrapper  = document.createElement("div");
      const fishIdx  = Math.floor(Math.random() * fishSvgs.length);
      wrapper.innerHTML = fishSvgs[fishIdx];
      const topPct   = 10 + Math.random() * 65;
      const duration = 16 + Math.random() * 22;
      const delay    = Math.random() * 6;
      const scale    = 0.7 + Math.random() * 0.7; // random size variety
      Object.assign(wrapper.style, {
        position:  "absolute",
        top:       `${topPct}%`,
        left:      "0",
        opacity:   "0",
        transform: `scale(${scale})`,
        transformOrigin: "left center",
        animation: `swimLeftToRight ${duration}s ${delay}s linear forwards`,
        zIndex:    "2",
      });
      fishContainer.appendChild(wrapper);
      setTimeout(() => wrapper.remove(), (duration + delay + 1) * 1000);
    }

    for (let i = 0; i < 4; i++) spawnFish();
    const fishInterval = setInterval(spawnFish, 4000);
    return () => clearInterval(fishInterval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes causticShift {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.7; }
          100% { transform: translate(20px, -15px) scale(1.03); opacity: 1; }
        }
        @keyframes rise {
          0%   { transform: translateY(110vh) scale(0.6); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-15vh) scale(1.1); opacity: 0; }
        }
        @keyframes sway {
          0%   { transform: rotate(-6deg) scaleX(1); opacity: 0.6; }
          100% { transform: rotate(6deg) scaleX(1.8); opacity: 1; }
        }
        @keyframes swimLeftToRight {
          0%   { transform: translateX(-120px); opacity: 0; }
          5%   { opacity: 0.7; }
          95%  { opacity: 0.55; }
          100% { transform: translateX(calc(100vw + 120px)); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: translate(-50%, -52%) scale(1); opacity: 0.5; }
          50%       { transform: translate(-50%, -52%) scale(1.04); opacity: 1; }
        }

        .hero-section {
          position: relative;
          min-height: 75vh;
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
          position: absolute; inset: 0; z-index: 2; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px; pointer-events: none;
        }
        .glow-ring {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -52%);
          width: 520px; height: 520px; border-radius: 50%;
          border: 1px solid rgba(79,209,232,0.07);
          z-index: 4; pointer-events: none;
          animation: ringPulse 5s ease-in-out infinite;
        }
        .glow-ring::before {
          content: ''; position: absolute; inset: 40px; border-radius: 50%;
          border: 1px solid rgba(79,209,232,0.05);
          animation: ringPulse 5s 1s ease-in-out infinite;
        }
        .hero-content {
          position: relative; z-index: 10; text-align: center;
          padding: 5rem 2rem 4.5rem; max-width: 860px; margin: 0 auto;
          animation: fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          color: #4FD1E8; font-size: 11px; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 2.4rem;
          animation: fadeUp 1.1s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .eyebrow::before, .eyebrow::after {
          content: ''; display: block; width: 28px; height: 1px;
          background: rgba(79,209,232,0.5);
        }
        .hero-h1 {
          font-family: 'Playfair Display', serif; font-weight: 600;
          font-size: clamp(2.4rem, 6vw, 4.2rem); line-height: 1.18;
          color: #ECF6FF; margin-bottom: 1.2rem; letter-spacing: -0.02em;
          animation: fadeUp 1.1s 0.18s cubic-bezier(0.16,1,0.3,1) both;
        }
        .italic-line {
          display: block; font-style: italic; font-weight: 400;
          color: #4FD1E8; font-size: clamp(2rem, 5vw, 3.6rem); margin-top: 0.3rem;
        }
        .description {
          font-size: 0.9rem; color: #6D97B0; line-height: 1.85; font-weight: 300;
          max-width: 580px; margin: 1.4rem auto 3rem;
          animation: fadeUp 1.1s 0.36s cubic-bezier(0.16,1,0.3,1) both;
        }
        .cta-group {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
          animation: fadeUp 1.1s 0.44s cubic-bezier(0.16,1,0.3,1) both;
        }
        .btn-primary {
          padding: 13px 34px; border-radius: 4px; font-family: 'Outfit', sans-serif;
          font-size: 0.88rem; font-weight: 600; letter-spacing: 0.5px;
          border: none; cursor: pointer; background: #0A84D6; color: #fff;
          position: relative; overflow: hidden; transition: background 0.25s, transform 0.18s;
        }
        .btn-primary::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          transform: translateX(-100%); transition: transform 0.5s;
        }
        .btn-primary:hover { background: #0e9cc4; transform: translateY(-2px); }
        .btn-primary:hover::after { transform: translateX(100%); }
        .btn-outline {
          padding: 12px 34px; border-radius: 4px; font-family: 'Outfit', sans-serif;
          font-size: 0.88rem; font-weight: 500; letter-spacing: 0.5px;
          cursor: pointer; background: transparent; color: #B0D4E8;
          border: 1px solid rgba(79,209,232,0.35);
          transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.18s;
        }
        .btn-outline:hover {
          background: rgba(79,209,232,0.1); color: #4FD1E8;
          border-color: rgba(79,209,232,0.7); transform: translateY(-2px);
        }
      `}</style>

      <section className="hero-section">
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <div className="caustic" />
        </div>
        <div ref={raysRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "60%", overflow: "hidden", zIndex: 1 }} />
        <div className="grain-overlay" />
        <div ref={bubblesRef} style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <div ref={fishRef} style={{ position: "absolute", inset: 0, zIndex: 2, overflow: "hidden" }} />
        <div className="glow-ring" />

        <div className="hero-content">
          <div className="eyebrow">Ornamental Fish Breeding &amp; Aquarium Supply</div>
          <h1 className="hero-h1">
            Healthy Ornamental Fish
            <span className="italic-line">For Aquariums &amp; Fish Lovers</span>
          </h1>
          <p className="description">
            MAYA Fish Farm breeds vibrant and healthy ornamental fish varieties
            for aquariums, hobbyists, and aquarium retailers.
          </p>
          <div className="cta-group">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-outline">Call Now</button>
          </div>
        </div>

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