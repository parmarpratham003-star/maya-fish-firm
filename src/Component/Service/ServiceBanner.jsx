"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ServicesBanner() {
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
        animation:       `svcSway ${3 + Math.random() * 4}s ${Math.random() * 3}s ease-in-out infinite alternate`,
        opacity:         `${0.2 + Math.random() * 0.35}`,
      });
      raysEl.appendChild(r);
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes svcSway {
          0%   { transform: rotate(-5deg) scaleX(1); }
          100% { transform: rotate(5deg) scaleX(1.6); }
        }
        @keyframes svcFadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes svcPulse {
          0%,100% { opacity:.4; transform:scale(1); }
          50%     { opacity:.75; transform:scale(1.04); }
        }
        @keyframes svcShimmer {
          0%   { background-position:-400px 0; }
          100% { background-position: 400px 0; }
        }

        .svc-banner {
          position: relative;
          height: 100vh;
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

        /* Layered radial glow */
        .svc-banner-glow {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 70% 60% at 50% 110%, rgba(10,132,214,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 20%, rgba(79,209,232,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(10,132,214,0.06) 0%, transparent 60%);
        }

        /* Grain */
        .svc-banner-grain {
          position: absolute; inset: 0; z-index: 2; opacity: .022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px; pointer-events: none;
        }

        /* Decorative rings */
        .svc-ring {
          position: absolute; border-radius: 50%; pointer-events: none;
          border: 1px solid rgba(79,209,232,0.06);
          animation: svcPulse 5s ease-in-out infinite;
        }

        /* Diagonal accent lines */
        .svc-diag {
          position: absolute; pointer-events: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,209,232,0.12), transparent);
        }

        /* Content */
        .svc-banner-content {
          position: relative; z-index: 10;
          text-align: center;
          padding: 0 1.5rem;
          animation: svcFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Eyebrow */
        .svc-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          color: #4FD1E8; font-size: 11px; font-weight: 600;
          letter-spacing: 5px; text-transform: uppercase;
          margin-bottom: 1.2rem;
          animation: svcFadeUp 0.8s 0.05s cubic-bezier(0.16,1,0.3,1) both;
        }
        .svc-eyebrow::before, .svc-eyebrow::after {
          content: ''; display: block; width: 28px; height: 1px;
          background: rgba(79,209,232,0.5);
        }

        /* Page title */
        .svc-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 700;
          line-height: 1.1;
          color: #ECF6FF;
          letter-spacing: -0.02em;
          margin-bottom: 0.3rem;
          animation: svcFadeUp 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .svc-title-italic {
          display: block;
          font-style: italic;
          font-weight: 400;
          color: #4FD1E8;
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
        }

        /* Description */
        .svc-desc {
          font-size: 0.9rem;
          color: rgba(176,212,232,0.75);
          font-weight: 300;
          line-height: 1.75;
          max-width: 480px;
          margin: 1.2rem auto 1.8rem;
          animation: svcFadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Breadcrumb */
        .svc-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; color: rgba(176,212,232,0.5);
          font-family: 'Outfit', sans-serif; font-weight: 400;
          letter-spacing: 0.5px;
          animation: svcFadeUp 0.8s 0.22s cubic-bezier(0.16,1,0.3,1) both;
        }
        .svc-breadcrumb a {
          color: #4FD1E8; text-decoration: none;
          transition: color 0.2s;
        }
        .svc-breadcrumb a:hover { color: #ECF6FF; }
        .svc-breadcrumb-sep {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(79,209,232,0.4);
        }

        /* Bottom wave — matches footer wave in hero */
        .svc-wave {
          position: absolute; bottom: 0; left: 0; width: 100%;
          z-index: 5; line-height: 0;
        }
      `}</style>

      <section className="svc-banner">

        {/* Glow + grain */}
        <div className="svc-banner-glow" />
        <div className="svc-banner-grain" />

        {/* Light rays */}
        <div ref={raysRef} style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", overflow:"hidden", zIndex:1, pointerEvents:"none" }} />

        {/* Decorative rings */}
        <div className="svc-ring" style={{ width:"560px", height:"560px", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animationDelay:"0s" }}/>
        <div className="svc-ring" style={{ width:"400px", height:"400px", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animationDelay:"1.2s", borderColor:"rgba(10,132,214,0.05)" }}/>

        {/* Diagonal accent lines */}
        <div className="svc-diag" style={{ top:"30%", left:"-5%", right:"-5%", transform:"rotate(-2.5deg)" }}/>
        <div className="svc-diag" style={{ bottom:"28%", left:"-5%", right:"-5%", transform:"rotate(-2.5deg)", opacity:0.6 }}/>

        {/* Content */}
        <div className="svc-banner-content">

          <div className="svc-eyebrow">
            Maya Fish Farm
          </div>

          <h1 className="svc-title">
            Our Services
            <span className="svc-title-italic">What We Offer</span>
          </h1>

          <p className="svc-desc">
            Professional ornamental fish breeding and aquarium supply services —
            delivered with care, expertise, and a passion for aquatic life.
          </p>

          {/* Breadcrumb */}
          <div className="svc-breadcrumb">
            <Link href="/">Home</Link>
            <span className="svc-breadcrumb-sep" />
            <span style={{ color:"rgba(176,212,232,0.7)" }}>Services</span>
          </div>

        </div>

        {/* Bottom wave — same style as hero */}
        <div className="svc-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ width:"100%", height:"56px", display:"block" }}>
            <path fill="#f5fbff" d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" opacity="1"/>
          </svg>
        </div>

      </section>
    </>
  );
}