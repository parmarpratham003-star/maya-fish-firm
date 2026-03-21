"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 2200;
          const startTime = performance.now();
          const tick = (now) => {
            const p = Math.min((now - startTime) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

/* ─────────────────────────────────────────
   BUBBLE LAYER
───────────────────────────────────────── */
function BubbleLayer() {
  const bubbles = useRef(
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      size: Math.round(5 + Math.random() * 18),
      left: Math.round(Math.random() * 100),
      bottom: Math.round(Math.random() * 40),
      dur: (6 + Math.random() * 9).toFixed(1),
      delay: (Math.random() * 14).toFixed(1),
    }))
  ).current;

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
      {bubbles.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.25)",
            left: `${b.left}%`,
            bottom: `${b.bottom}%`,
            animation: `mfBubbleRise ${b.dur}s ease-in-out infinite ${b.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────── */
function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────
   STATS DATA
───────────────────────────────────────── */
const STATS = [
  { target: 75, suffix: "+", label: "Project Done" },
  { target: 30, suffix: "",  label: "Professional Team" },
  { target: 15, suffix: "+", label: "Years of Experience" },
  { target: 97, suffix: "%", label: "Satisfied Client" },
];

/* ─────────────────────────────────────────
   AQUARIUM IMAGE
───────────────────────────────────────── */
function AquariumIllustration() {
  return (
    <img
      src="s2.png"
      alt="Beautiful colorful aquarium with tropical fish"
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", borderRadius: "16px" }}
    />
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function AboutMayaFish() {
  const [imgRef,   imgVisible]   = useScrollReveal(0.1);
  const [textRef,  textVisible]  = useScrollReveal(0.1);
  const [statsRef, statsVisible] = useScrollReveal(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,300;1,9..40,400&display=swap');

        /* ══ KEYFRAMES ══ */

        @keyframes mfBubbleRise {
          0%   { opacity: 0;    transform: translateY(0) scale(1); }
          12%  { opacity: 0.55; }
          85%  { opacity: 0.08; }
          100% { opacity: 0;    transform: translateY(-320px) scale(0.38); }
        }
        @keyframes mfFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes mfSlideFromLeft {
          from { opacity: 0; transform: translateX(-52px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes mfSlideFromRight {
          from { opacity: 0; transform: translateX(52px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes mfRevealUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mfLetterBlur {
          from { opacity: 0; letter-spacing: 0.5em; filter: blur(8px); }
          to   { opacity: 1; letter-spacing: 0.5px; filter: blur(0); }
        }
        @keyframes mfClipUp {
          from { clip-path: inset(100% 0 0 0); opacity: 0; }
          to   { clip-path: inset(0% 0 0 0);   opacity: 1; }
        }
        @keyframes mfStatPop {
          0%   { opacity: 0; transform: scale(0.65) translateY(24px); }
          65%  { transform: scale(1.07) translateY(-4px); }
          100% { opacity: 1; transform: scale(1)   translateY(0); }
        }
        @keyframes mfStatLabel {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mfDividerGrow {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }
        @keyframes mfWaveIn {
          from { opacity: 0; transform: scaleX(0.94) translateY(16px); }
          to   { opacity: 1; transform: scaleX(1)    translateY(0); }
        }
        @keyframes mfBtnShine {
          0%   { left: -80%; }
          100% { left: 130%; }
        }
        @keyframes mfPulseRing {
          0%   { text-shadow: 0 0 0px rgba(26,184,196,0.7); }
          50%  { text-shadow: 0 0 18px rgba(26,184,196,0.5); }
          100% { text-shadow: 0 0 0px rgba(26,184,196,0.0); }
        }
        @keyframes mfImageReveal {
          from { clip-path: inset(0 100% 0 0); opacity: 0.4; }
          to   { clip-path: inset(0 0%   0 0); opacity: 1; }
        }

        /* ══ ROOT ══ */
        .mf-root {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          width: 100%;
          overflow: hidden;
        }

        /* ══ ABOUT SECTION ══ */
        .mf-hero {
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          column-gap: 56px;
          align-items: center;
          padding: 62px 68px 74px 62px;
          background: #fff;
        }

        /* Left column */
        .mf-left { position: relative; }
        .mf-left.mf-in { animation: mfSlideFromLeft 0.9s cubic-bezier(0.16,1,0.3,1) both; }

        .mf-aquarium-img {
          width: 100%;
          aspect-ratio: 4 / 3.15;
          border-radius: 16px;
          overflow: hidden;
          display: block;
          position: relative;
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.55s ease;
        }
        .mf-aquarium-img:hover {
          transform: scale(1.018);
          box-shadow: 0 22px 60px rgba(26,184,196,0.2);
        }
        /* Image reveal wipe */
        .mf-left.mf-in .mf-aquarium-img {
          animation: mfImageReveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }

        /* Shimmer on hover */
        .mf-aquarium-img::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.14) 50%, transparent 62%);
          background-size: 600px 100%;
          background-position: -600px 0;
          border-radius: 16px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .mf-aquarium-img:hover::after {
          opacity: 1;
          animation: mfBtnShine 0.75s ease forwards;
        }

        /* Quote card */
        .mf-quote {
          position: absolute;
          bottom: -18px; left: -14px;
          background: #fff;
          border-radius: 12px;
          padding: 20px 22px;
          width: 238px;
          box-shadow: 0 14px 44px rgba(0,0,0,.14), 0 2px 8px rgba(0,0,0,.06);
          animation: mfFloat 4s ease-in-out infinite;
          z-index: 10;
          font-family: 'DM Sans', sans-serif;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .mf-quote:hover {
          box-shadow: 0 24px 56px rgba(0,0,0,.18), 0 4px 14px rgba(0,0,0,.08);
          animation-play-state: paused;
          transform: translateY(-5px) !important;
        }
        .mf-quote-icon {
          font-family: 'DM Sans', sans-serif;
          font-size: 52px; font-weight: 800;
          color: #1ab8c4; line-height: 0.72;
          display: block; margin-bottom: 13px;
          letter-spacing: -2px;
          animation: mfPulseRing 2.8s ease-in-out infinite;
        }
        .mf-quote-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: #3a3a3a;
          line-height: 1.8; font-weight: 400;
          margin: 0 0 13px 0;
        }
        .mf-quote-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 700;
          color: #111; letter-spacing: 0.6px;
          text-transform: uppercase; margin-bottom: 2px;
        }
        .mf-quote-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; color: #999; font-weight: 400;
        }

        /* Right column */
        .mf-right { padding-left: 4px; }
        .mf-right.mf-in { animation: mfSlideFromRight 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s both; }

        /* Eyebrow */
        .mf-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 400;
          letter-spacing: 0.5px;
          color: rgba(10,132,214,0.85);
          margin-bottom: 16px; opacity: 0;
        }
        .mf-right.mf-in .mf-eyebrow {
          animation: mfLetterBlur 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Heading bold line */
        .mf-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(2rem, 3.4vw, 2.85rem);
          font-weight: 700; color: #0c1a1f;
          line-height: 1.12; letter-spacing: -0.025em;
          margin: 0 0 8px 0; display: block;
          overflow: hidden; opacity: 0;
        }
        .mf-right.mf-in .mf-heading {
          animation: mfClipUp 0.72s 0.36s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Heading thin line */
        .mf-heading-thin {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(2rem, 3.4vw, 2.85rem);
          font-weight: 300; color: rgba(12,26,31,0.55);
          line-height: 1.12; letter-spacing: -0.02em;
          display: block; margin: 0 0 26px 0;
          overflow: hidden; opacity: 0;
        }
        .mf-right.mf-in .mf-heading-thin {
          animation: mfClipUp 0.72s 0.50s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Body columns */
        .mf-body-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px; margin-bottom: 34px; opacity: 0;
        }
        .mf-right.mf-in .mf-body-cols {
          animation: mfRevealUp 0.65s 0.62s cubic-bezier(0.16,1,0.3,1) both;
        }
        .mf-body-cols p {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.78rem, 0.95vw, 0.88rem);
          color: #617d87; line-height: 1.8; font-weight: 400; margin: 0;
        }

        /* CTA Button */
        .mf-btn {
          display: inline-flex; align-items: center; gap: 0;
          padding: 6px 6px 6px 24px;
          background: #0A84D6; border: 1.5px solid #0A84D6;
          border-radius: 50px; cursor: pointer; text-decoration: none;
          box-shadow: 0 4px 20px rgba(10,132,214,0.45);
          transition: background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          position: relative; overflow: hidden; opacity: 0;
        }
        .mf-right.mf-in .mf-btn {
          animation: mfRevealUp 0.65s 0.76s cubic-bezier(0.16,1,0.3,1) both;
        }
        /* Shine sweep */
        .mf-btn::before {
          content: ''; position: absolute;
          top: 0; left: -80%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.24), transparent);
          transform: skewX(-20deg); pointer-events: none;
        }
        .mf-btn:hover::before { animation: mfBtnShine 0.55s ease forwards; }
        .mf-btn:hover {
          background: #0872b8; border-color: #0872b8;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(10,132,214,0.55);
        }
        .mf-btn:active { transform: scale(0.97); }
        .mf-btn-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase;
          color: #fff; margin-right: 12px; white-space: nowrap;
        }
        .mf-btn-icon {
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s, transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .mf-btn:hover .mf-btn-icon {
          background: rgba(255,255,255,0.32);
          transform: rotate(45deg);
        }

        /* ══ WAVE DIVIDER ══ */
        .mf-wave-wrap {
          background: #fff; line-height: 0;
          overflow: hidden; margin-bottom: -3px;
        }
        .mf-wave-wrap svg { display: block; width: 100%; height: 70px; }
        .mf-wave-wrap.mf-in svg {
          animation: mfWaveIn 1.1s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* ══ STATS BAND ══ */
        .mf-stats-band {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #19bcc8 0%, #0da8b4 50%, #0a8f9a 100%);
          padding: 50px 48px 56px;
        }

        .mf-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          position: relative; z-index: 2;
        }

        .mf-stat {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 0 16px; position: relative;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
        }
        .mf-stat:hover { transform: translateY(-7px); }

        /* Glow on hover */
        .mf-stat::before {
          content: ''; position: absolute; inset: -10px;
          border-radius: 18px;
          background: rgba(255,255,255,0);
          transition: background 0.35s ease;
          pointer-events: none; z-index: 0;
        }
        .mf-stat:hover::before { background: rgba(255,255,255,0.07); }

        /* Animated vertical divider */
        .mf-stat:not(:last-child)::after {
          content: ''; position: absolute;
          right: 0; top: 10%; height: 80%; width: 1px;
          background: rgba(255,255,255,0.24);
          transform-origin: top; transform: scaleY(0); opacity: 0;
        }
        .mf-stats-band.mf-in .mf-stat:nth-child(1)::after { animation: mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(2)::after { animation: mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(3)::after { animation: mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.80s both; }

        /* Stat numbers — staggered scale pop */
        .mf-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          font-weight: 700; color: #fff;
          line-height: 1; margin-bottom: 10px;
          letter-spacing: -0.025em;
          position: relative; z-index: 1; opacity: 0;
        }
        .mf-stats-band.mf-in .mf-stat:nth-child(1) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(2) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.22s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(3) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.36s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(4) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.50s both; }

        /* Stat labels — staggered fade up */
        .mf-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.78rem, 0.95vw, 0.88rem);
          font-weight: 400; color: rgba(255,255,255,.82);
          text-align: center; line-height: 1.8;
          position: relative; z-index: 1; opacity: 0;
        }
        .mf-stats-band.mf-in .mf-stat:nth-child(1) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.34s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(2) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.48s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(3) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.62s both; }
        .mf-stats-band.mf-in .mf-stat:nth-child(4) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.76s both; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 880px) {
          .mf-hero { grid-template-columns: 1fr; padding: 38px 26px 52px; gap: 42px; }
          .mf-right { padding-left: 0; }
          .mf-body-cols { grid-template-columns: 1fr; gap: 16px; }
          .mf-quote { width: 200px; padding: 16px 18px; }
          .mf-left.mf-in  { animation: mfRevealUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
          .mf-right.mf-in { animation: mfRevealUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        }
        @media (max-width: 580px) {
          .mf-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .mf-stat { padding: 20px 12px; border-bottom: 1px solid rgba(255,255,255,.18); }
          .mf-stat:nth-child(odd)  { border-right: 1px solid rgba(255,255,255,.18); }
          .mf-stat:nth-child(even) { border-right: none; }
          .mf-stat:nth-last-child(-n+2) { border-bottom: none; }
          .mf-stat::after { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="mf-root">

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <section className="mf-hero">

          {/* LEFT — image + floating quote */}
          <div ref={imgRef} className={`mf-left${imgVisible ? " mf-in" : ""}`}>
            <div className="mf-aquarium-img">
              <AquariumIllustration />
            </div>
            <div className="mf-quote">
              <span className="mf-quote-icon">"</span>
              <p className="mf-quote-text">
                There's nothing quite like a day at the aquarium. These are the moments we live for
              </p>
              <div className="mf-quote-name">William Despres –</div>
              <div className="mf-quote-role">CEO/Founder</div>
            </div>
          </div>

          {/* RIGHT — text content */}
          <div ref={textRef} className={`mf-right${textVisible ? " mf-in" : ""}`}>

            <p className="mf-eyebrow">About Us</p>

            <h2 style={{ margin: 0 }}>
              <span className="mf-heading">
                Discover the most beautiful{" "}
                <span style={{ fontWeight: 300, color: "rgba(12,26,31,0.55)", letterSpacing: "-0.02em" }}>fish</span>
              </span>
              <span className="mf-heading-thin">tanks from around the world</span>
            </h2>

            <div className="mf-body-cols">
              <p>
                Fusce duis non turpis nec vestibulum magnis torquent lacinia. Parturient hac nec
                semper amet facilisi tellus nibh ex orci. Penatibus eget elit bibendum senectus
                duis posuere mi. Ullamcorper a faucibus nascetur id taciti cras fringilla. Lorem
              </p>
              <p>
                Facilisi dignissim arcu faucibus litora pede porta eros magna. Dignissim vel fames
                neque quam suspendisse orci massa montes fringilla eleifend. Nulla cubilia auctor
                scelerisque si letius.
              </p>
            </div>

            <a className="mf-btn" href="#">
              <span className="mf-btn-label">Discover More</span>
              <span className="mf-btn-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>

          </div>
        </section>

        {/* ══════════════ WAVE DIVIDER ══════════════ */}
        <div className={`mf-wave-wrap${statsVisible ? " mf-in" : ""}`}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1440" height="70" fill="#ffffff" />
            <path d="M0,70 L0,32 Q180,70 360,46 Q540,22 720,46 Q900,70 1080,46 Q1260,22 1440,46 L1440,70 Z" fill="#19bcc8" />
            <path d="M0,70 L0,50 Q180,70 360,59 Q540,47 720,59 Q900,70 1080,59 Q1260,47 1440,59 L1440,70 Z" fill="rgba(26,184,196,0.42)" />
            <path d="M0,70 L0,62 Q360,70 720,65 Q1080,60 1440,65 L1440,70 Z" fill="rgba(100,225,235,0.18)" />
          </svg>
        </div>

        {/* ══════════════ STATS BAND ══════════════ */}
        <section ref={statsRef} className={`mf-stats-band${statsVisible ? " mf-in" : ""}`}>
          <BubbleLayer />
          <div className="mf-stats-grid">
            {STATS.map((s) => (
              <div className="mf-stat" key={s.label}>
                <div className="mf-stat-num"><Counter target={s.target} suffix={s.suffix} /></div>
                <div className="mf-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}