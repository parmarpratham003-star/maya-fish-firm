"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutHero() {
  const raysRef = useRef(null);

  useEffect(() => {
    const raysEl = raysRef.current;
    if (!raysEl) return;
    for (let i = 0; i < 10; i++) {
      const r = document.createElement("div");
      Object.assign(r.style, {
        position:        "absolute",
        top:             "-10%",
        width:           "1px",
        left:            `${5 + i * 9 + Math.random() * 5}%`,
        height:          `${40 + Math.random() * 30}%`,
        background:      "linear-gradient(to bottom, rgba(79,209,232,0.10), transparent)",
        transformOrigin: "top center",
        animation:       `abtSway ${3 + Math.random() * 4}s ${Math.random() * 3}s ease-in-out infinite alternate`,
        opacity:         `${0.2 + Math.random() * 0.35}`,
      });
      raysEl.appendChild(r);
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes abtSway {
          0%   { transform: rotate(-5deg) scaleX(1); }
          100% { transform: rotate(5deg) scaleX(1.6); }
        }
        @keyframes abtFadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes abtPulse {
          0%,100% { opacity:.35; transform:scale(1); }
          50%     { opacity:.7; transform:scale(1.04); }
        }
        @keyframes abtFloat {
          0%,100% { transform:translate(-50%,-50%) scale(1); }
          50%     { transform:translate(-50%,-50%) scale(1.03); }
        }

        .abt-banner {
          position: relative;
          height: 52vh;
          min-height: 320px;
          max-height: 480px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          background: #04111F;
        }

        /* Radial glow — slightly warmer tint than services banner */
        .abt-glow {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 65% 55% at 50% 110%, rgba(10,132,214,0.20) 0%, transparent 70%),
            radial-gradient(ellipse 35% 35% at 15% 15%, rgba(79,209,232,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 85% 85%, rgba(10,132,214,0.07) 0%, transparent 60%);
        }

        /* Grain overlay */
        .abt-grain {
          position: absolute; inset: 0; z-index: 2; opacity: .022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px; pointer-events: none;
        }

        /* Decorative pulsing rings */
        .abt-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(79,209,232,0.06);
          pointer-events: none;
          top: 50%; left: 50%;
          animation: abtFloat 5s ease-in-out infinite;
        }

        /* Diagonal accent lines */
        .abt-diag {
          position: absolute; pointer-events: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,209,232,0.11), transparent);
        }

        /* Fish silhouettes — decorative */
        .abt-fish-deco {
          position: absolute;
          pointer-events: none;
          opacity: 0.04;
        }

        /* Content */
        .abt-content {
          position: relative; z-index: 10;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 640px;
        }

        /* Eyebrow */
        .abt-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          color: #4FD1E8; font-size: 11px; font-weight: 600;
          letter-spacing: 5px; text-transform: uppercase;
          margin-bottom: 1.2rem;
          animation: abtFadeUp 0.8s 0.05s cubic-bezier(0.16,1,0.3,1) both;
        }
        .abt-eyebrow::before, .abt-eyebrow::after {
          content: ''; display: block; width: 28px; height: 1px;
          background: rgba(79,209,232,0.5);
        }

        /* Main title */
        .abt-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 6.5vw, 4.8rem);
          font-weight: 700;
          line-height: 1.08;
          color: #ECF6FF;
          letter-spacing: -0.02em;
          margin-bottom: 0;
          animation: abtFadeUp 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Tagline */
        .abt-tagline {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(1rem, 2.2vw, 1.4rem);
          color: #4FD1E8;
          margin: 0.7rem 0 1.6rem;
          letter-spacing: 0.01em;
          animation: abtFadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Breadcrumb */
        .abt-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; color: rgba(176,212,232,0.5);
          font-family: 'Outfit', sans-serif; font-weight: 400;
          letter-spacing: 0.5px;
          animation: abtFadeUp 0.8s 0.22s cubic-bezier(0.16,1,0.3,1) both;
        }
        .abt-breadcrumb a {
          color: #4FD1E8; text-decoration: none;
          transition: color 0.2s;
        }
        .abt-breadcrumb a:hover { color: #ECF6FF; }
        .abt-bc-sep {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(79,209,232,0.4); flex-shrink:0;
        }

        /* Bottom wave — same as services banner */
        .abt-wave {
          position: absolute; bottom: 0; left: 0; width: 100%;
          z-index: 5; line-height: 0;
        }
      `}</style>

      <section className="abt-banner">

        {/* Glow + grain */}
        <div className="abt-glow" />
        <div className="abt-grain" />

        {/* Light rays */}
        <div
          ref={raysRef}
          style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", overflow:"hidden", zIndex:1, pointerEvents:"none" }}
        />

        {/* Decorative rings */}
        <div className="abt-ring" style={{ width:"580px", height:"580px", transform:"translate(-50%,-50%)", animationDelay:"0s" }}/>
        <div className="abt-ring" style={{ width:"420px", height:"420px", transform:"translate(-50%,-50%)", animationDelay:"1.5s", borderColor:"rgba(10,132,214,0.05)" }}/>
        <div className="abt-ring" style={{ width:"260px", height:"260px", transform:"translate(-50%,-50%)", animationDelay:"0.8s", borderColor:"rgba(79,209,232,0.04)" }}/>

        {/* Diagonal accent lines */}
        <div className="abt-diag" style={{ top:"28%", left:"-5%", right:"-5%", transform:"rotate(-2.5deg)" }}/>
        <div className="abt-diag" style={{ bottom:"26%", left:"-5%", right:"-5%", transform:"rotate(-2.5deg)", opacity:0.6 }}/>

        {/* Decorative fish silhouette — large faint */}
        <svg
          className="abt-fish-deco"
          style={{ right:"-40px", top:"50%", transform:"translateY(-50%)", width:"320px" }}
          viewBox="0 0 200 100" fill="none"
        >
          <ellipse cx="90" cy="50" rx="75" ry="38" fill="#4FD1E8"/>
          <path d="M165 50 L200 20 L188 50 L200 80Z" fill="#4FD1E8"/>
          <circle cx="28" cy="42" r="9" fill="#04111F"/>
        </svg>

        <svg
          className="abt-fish-deco"
          style={{ left:"-30px", top:"30%", transform:"scaleX(-1) translateY(-50%)", width:"180px", opacity:0.035 }}
          viewBox="0 0 200 100" fill="none"
        >
          <ellipse cx="90" cy="50" rx="75" ry="38" fill="#0A84D6"/>
          <path d="M165 50 L200 20 L188 50 L200 80Z" fill="#0A84D6"/>
          <circle cx="28" cy="42" r="9" fill="#04111F"/>
        </svg>

        {/* Main content */}
        <div className="abt-content">

          <div className="abt-eyebrow">
            Maya Fish Farm
          </div>

          <h1 className="abt-title">About Us</h1>

          <p className="abt-tagline">
            Dedicated to Responsible Ornamental Fish Breeding
          </p>

          {/* Breadcrumb */}
          <div className="abt-breadcrumb">
            <Link href="/">Home</Link>
            <span className="abt-bc-sep" />
            <span style={{ color:"rgba(176,212,232,0.7)" }}>About</span>
          </div>

        </div>

        {/* Bottom wave — blends into light bg below */}
        <div className="abt-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ width:"100%", height:"56px", display:"block" }}>
            <path fill="#f5fbff" d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z"/>
          </svg>
        </div>

      </section>
    </>
  );
}