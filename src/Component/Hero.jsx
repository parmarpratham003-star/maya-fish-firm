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
  const [animKey, setAnimKey] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => { setCurrent(idx); setAnimKey((k) => k + 1); };

  useEffect(() => {
    const el = raysRef.current;
    for (let i = 0; i < 10; i++) {
      const r = document.createElement("div");
      Object.assign(r.style, {
        position: "absolute", top: "-10%", width: "1px",
        left: `${5 + i * 9 + Math.random() * 5}%`,
        height: `${45 + Math.random() * 30}%`,
        background: "linear-gradient(to bottom, rgba(79,209,232,0.08), transparent)",
        transformOrigin: "top center",
        animation: `sway ${3 + Math.random() * 5}s ${Math.random() * 3}s ease-in-out infinite alternate`,
        opacity: `${0.15 + Math.random() * 0.35}`,
      });
      el.appendChild(r);
    }
  }, []);

  // Split headline words for word-by-word animation
  const h1Words = "Healthy Ornamental Fish".split(" ");
  const italicWords = "Breeding & Aquarium Supply".split(" ");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes sway {
          0%   { transform: rotate(-5deg) scaleX(1); }
          100% { transform: rotate(5deg) scaleX(1.6); }
        }
        @keyframes causticShift {
          0%   { transform: translate(0,0) scale(1); opacity:.7; }
          100% { transform: translate(20px,-15px) scale(1.03); opacity:1; }
        }
        @keyframes ringPulse {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity:.3; }
          50%     { transform: translate(-50%,-50%) scale(1.05); opacity:.6; }
        }
        @keyframes arrowPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(79,209,232,0.15); }
          50%     { box-shadow: 0 0 0 8px rgba(79,209,232,0); }
        }
        @keyframes fillDot {
          from { width: 0%; } to { width: 100%; }
        }

        /* ── Slide 1: word reveal upward (mask) ── */
        @keyframes wordUp {
          0%   { transform: translateY(105%); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }

        /* ── Slide 2: letter spacing collapse ── */
        @keyframes letterCollapse {
          0%   { letter-spacing: 0.5em; opacity: 0; filter: blur(4px); }
          100% { letter-spacing: inherit; opacity: 1; filter: blur(0); }
        }

        /* ── Slide 3: vertical slice reveal (clip-path) ── */
        @keyframes sliceReveal {
          0%   { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); opacity: 0; }
          100% { clip-path: polygon(0 0,   100% 0,   100% 100%, 0 100%); opacity: 1; }
        }

        /* ── Shared: eyebrow line expand ── */
        @keyframes lineExpand {
          from { width: 0; opacity: 0; }
          to   { width: 28px; opacity: 1; }
        }
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 8px; }
          to   { opacity: 1; letter-spacing: 5px; }
        }

        /* ── Shared: sub + cta ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Word mask container ── */
        .word-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          padding-bottom: 0.06em;
        }
        .word-inner {
          display: inline-block;
        }

        /* ── Hero shell ── */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* ── Slider ── */
        .slide {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1.4s ease-in-out, transform 7s ease;
        }
        .slide.active   { opacity: 1; transform: scale(1);    z-index: 1; }
        .slide.inactive { opacity: 0; transform: scale(1.04); z-index: 0; }

        /* ── Overlay ── */
        .slide-overlay {
          position: absolute; inset: 0; z-index: 2;
          background:
            linear-gradient(to bottom, rgba(4,17,31,0.02) 0%, rgba(4,17,31,0.38) 58%, rgba(4,17,31,0.96) 84%, rgba(4,17,31,0.99) 100%),
            linear-gradient(to right,  rgba(4,17,31,0.62) 0%, rgba(4,17,31,0.03) 65%);
        }

        /* ── Caustic ── */
        .caustic {
          position: absolute; top:-20%; left:-10%; width:120%; height:120%; z-index:3;
          background:
            radial-gradient(ellipse 600px 300px at 30% 20%, rgba(0,180,200,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 400px 200px at 70% 50%, rgba(79,209,232,0.04) 0%, transparent 60%);
          animation: causticShift 8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        /* ── Grain ── */
        .grain-overlay {
          position: absolute; inset: 0; z-index: 3; opacity:.02; pointer-events:none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }

        /* ── Glow ring ── */
        .glow-ring {
          position: absolute; top:50%; left:50%;
          transform: translate(-50%,-50%);
          width:580px; height:580px; border-radius:50%;
          border:1px solid rgba(79,209,232,0.05);
          z-index:4; pointer-events:none;
          animation: ringPulse 5s ease-in-out infinite;
        }
        .glow-ring::before {
          content:''; position:absolute; inset:50px; border-radius:50%;
          border:1px solid rgba(79,209,232,0.03);
          animation: ringPulse 5s 1.2s ease-in-out infinite;
        }

        /* ── Side arrows ── */
        .side-arrow {
          position: absolute; top:50%; transform:translateY(-50%);
          z-index: 20; width:50px; height:50px; border-radius:50%;
          border:1.5px solid rgba(79,209,232,0.25);
          background:rgba(4,17,31,0.48);
          backdrop-filter:blur(12px);
          color:#4FD1E8; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:background .22s, border-color .22s, transform .22s;
          animation:arrowPulse 3s ease-in-out infinite;
        }
        .side-arrow:hover {
          background:rgba(79,209,232,0.16); border-color:rgba(79,209,232,0.55);
          transform:translateY(-50%) scale(1.1);
        }
        .side-arrow-left  { left:1.8rem; }
        .side-arrow-right { right:1.8rem; }

        /* ── Content ── */
        .hero-bottom {
          position: relative; z-index: 10;
          margin-top: 20vh; width: 100%;
          padding-bottom: 3.2rem;
        }
        .hero-container {
          max-width: 64rem; margin: 0 auto;
          padding: 0 1.5rem; text-align: left;
        }

        /* ── Eyebrow ── */
        .eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          color: #4FD1E8; font-size: 11px; font-weight: 600;
          letter-spacing: 5px; text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .eyebrow-text {
          animation: eyebrowFade 0.9s ease both;
        }
        .eyebrow-line {
          display: block; height: 1px;
          background: rgba(79,209,232,0.5);
          animation: lineExpand 0.6s ease both;
        }

        /* ── Headline ── */
        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2.8rem, 5.8vw, 5.2rem);
          line-height: 1.1;
          color: #ECF6FF;
          letter-spacing: -0.02em;
          margin-bottom: 0.3rem;
          white-space: nowrap;
        }
        .italic-line {
          display: block; font-style: italic; font-weight: 400;
          color: #4FD1E8;
          font-size: clamp(2.2rem, 4.6vw, 4.2rem);
          line-height: 1.1; margin-bottom: 1.6rem;
          white-space: nowrap;
        }

        /* ── Sub / CTA ── */
        .hero-sub {
          font-size: 0.95rem; color: rgba(176,212,232,0.88);
          line-height: 1.9; font-weight: 300;
          max-width: 520px; margin-bottom: 2rem;
        }
        .cta-group {
          display: flex; gap: 14px; flex-wrap: wrap; align-items: center;
        }
        .btn-primary {
          padding: 13px 36px; border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem; font-weight: 600; letter-spacing: 0.4px;
          border: none; cursor: pointer;
          background: #0A84D6; color: #fff;
          box-shadow: 0 4px 22px rgba(10,132,214,0.40);
          transition: background .25s, transform .18s, box-shadow .25s;
        }
        .btn-primary:hover { background:#0e9cc4; transform:translateY(-2px); box-shadow:0 6px 30px rgba(10,132,214,0.50); }

        .btn-outline {
          padding: 12px 28px; border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem; font-weight: 500; letter-spacing: 0.4px;
          cursor: pointer; background: rgba(255,255,255,0.07);
          color: #B0D4E8; border: 1.5px solid rgba(176,212,232,0.3);
          display: flex; align-items: center; gap: 8px;
          transition: background .22s, border-color .22s, transform .18s;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.13);
          border-color: rgba(176,212,232,0.55);
          transform: translateY(-2px);
        }

        /* ── Slide dots ── */
        .slide-dots { display: flex; gap: 8px; margin-top: 1.8rem; }
        .sdot {
          width: 28px; height: 3px; border-radius: 2px;
          background: rgba(255,255,255,0.18);
          cursor: pointer; position: relative; overflow: hidden;
        }
        .sdot.active { background: rgba(79,209,232,0.18); }
        .sdot.active::after {
          content: ''; position: absolute; top:0; left:0; height:100%;
          background: #4FD1E8; border-radius: 2px;
          animation: fillDot 6s linear forwards;
        }

        /* Slide number indicator — bottom right */
        .slide-counter {
          position: absolute; bottom: 3.2rem; right: 2rem;
          z-index: 20; font-family: 'Playfair Display', serif;
          font-size: 11px; color: rgba(255,255,255,0.35);
          letter-spacing: 2px;
        }
        .slide-counter strong {
          font-size: 1.1rem; color: rgba(255,255,255,0.75); font-weight: 700;
        }

        @media (max-width: 900px) {
          .hero-h1    { white-space: normal; font-size: clamp(2rem,6vw,3.4rem); }
          .italic-line{ white-space: normal; font-size: clamp(1.7rem,5vw,2.8rem); }
          .side-arrow-left  { left: 0.5rem; }
          .side-arrow-right { right: 0.5rem; }
          .side-arrow { width: 42px; height: 42px; }
          .slide-counter { display: none; }
        }
      `}</style>

      <section className="hero-section">

        {slides.map((s, i) => (
          <div key={i}
            className={`slide ${i === current ? "active" : "inactive"}`}
            style={{ backgroundImage: `url('${s.image}')` }}
          />
        ))}

        <div className="slide-overlay" />
        <div style={{ position:"absolute", inset:0, overflow:"hidden", zIndex:3 }}>
          <div className="caustic" />
        </div>
        <div ref={raysRef} style={{ position:"absolute", top:0, left:0, width:"100%", height:"60%", overflow:"hidden", zIndex:3, pointerEvents:"none" }} />
        <div className="grain-overlay" />
        <div className="glow-ring" />

        <button className="side-arrow side-arrow-left"
          onClick={() => goTo((current - 1 + total) % total)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <button className="side-arrow side-arrow-right"
          onClick={() => goTo((current + 1) % total)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        {/* ── Content with professional per-slide animations ── */}
        <div className="hero-bottom">
          <div className="hero-container">

            {/* Eyebrow — letter-spacing collapse on all slides */}
            <div key={`ey-${animKey}`} className="eyebrow">
              <span className="eyebrow-line" style={{ animationDelay:"0s" }}/>
              <span className="eyebrow-text" style={{ animationDelay:"0.05s" }}>
                Ornamental Fish Breeding &amp; Aquarium Supply
              </span>
              <span className="eyebrow-line" style={{ animationDelay:"0.1s" }}/>
            </div>

            {/* Slide 1: word-by-word mask reveal upward */}
            {current === 0 && (
              <h1 key={`h1-${animKey}`} className="hero-h1">
                {h1Words.map((w, i) => (
                  <span key={i} className="word-mask" style={{ marginRight:"0.28em" }}>
                    <span className="word-inner" style={{
                      animation: `wordUp 0.65s ${0.1 + i * 0.12}s cubic-bezier(0.16,1,0.3,1) both`
                    }}>{w}</span>
                  </span>
                ))}
                <span className="italic-line" style={{ display:"block", marginTop:"0.1rem" }}>
                  {italicWords.map((w, i) => (
                    <span key={i} className="word-mask" style={{ marginRight:"0.22em" }}>
                      <span className="word-inner" style={{
                        animation: `wordUp 0.65s ${0.38 + i * 0.11}s cubic-bezier(0.16,1,0.3,1) both`
                      }}>{w}</span>
                    </span>
                  ))}
                </span>
              </h1>
            )}

            {/* Slide 2: letter spacing collapse + blur */}
            {current === 1 && (
              <h1 key={`h1-${animKey}`} className="hero-h1"
                style={{ animation:"letterCollapse 0.9s 0.12s cubic-bezier(0.16,1,0.3,1) both" }}>
                Healthy Ornamental Fish
                <span className="italic-line"
                  style={{ animation:"letterCollapse 0.9s 0.26s cubic-bezier(0.16,1,0.3,1) both", display:"block" }}>
                  Breeding &amp; Aquarium Supply
                </span>
              </h1>
            )}

            {/* Slide 3: clip-path slice up from bottom */}
            {current === 2 && (
              <h1 key={`h1-${animKey}`} className="hero-h1"
                style={{ animation:"sliceReveal 0.9s 0.1s cubic-bezier(0.77,0,0.18,1) both" }}>
                Healthy Ornamental Fish
                <span className="italic-line"
                  style={{ animation:"sliceReveal 0.9s 0.24s cubic-bezier(0.77,0,0.18,1) both", display:"block" }}>
                  Breeding &amp; Aquarium Supply
                </span>
              </h1>
            )}

            <p key={`sub-${animKey}`} className="hero-sub"
              style={{ animation:"fadeUp 0.75s 0.55s cubic-bezier(0.16,1,0.3,1) both" }}>
              MAYA Fish Farm specializes in breeding vibrant and healthy ornamental fish
              varieties for aquariums, hobbyists, and aquarium retailers.
            </p>

            <div key={`cta-${animKey}`} className="cta-group"
              style={{ animation:"fadeUp 0.75s 0.68s cubic-bezier(0.16,1,0.3,1) both" }}>
              <button className="btn-primary">Contact Us</button>
              <button className="btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                Call Now
              </button>
            </div>

            <div key={`dots-${animKey}`} className="slide-dots"
              style={{ animation:"fadeUp 0.75s 0.78s cubic-bezier(0.16,1,0.3,1) both" }}>
              {slides.map((_, i) => (
                <div key={i} className={`sdot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)} />
              ))}
            </div>

          </div>
        </div>

        {/* Slide counter */}
        <div className="slide-counter">
          <strong>{String(current + 1).padStart(2, "0")}</strong> / {String(total).padStart(2, "0")}
        </div>

      </section>
    </>
  );
}