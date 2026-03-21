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
   BUBBLE LAYER — static scattered circles
   matching the reference image exactly
───────────────────────────────────────── */
function BubbleLayer() {
  const BUBBLES = [
    { s:14, l:3,  t:55, f:true,  o:0.12 },
    { s:22, l:6,  t:30, f:false, o:0.20 },
    { s:8,  l:9,  t:65, f:true,  o:0.10 },
    { s:36, l:12, t:20, f:false, o:0.16 },
    { s:10, l:14, t:48, f:true,  o:0.13 },
    { s:18, l:17, t:70, f:false, o:0.18 },
    { s:28, l:20, t:35, f:true,  o:0.09 },
    { s:12, l:22, t:58, f:false, o:0.22 },
    { s:44, l:25, t:15, f:true,  o:0.07 },
    { s:8,  l:28, t:72, f:true,  o:0.14 },
    { s:20, l:31, t:42, f:false, o:0.19 },
    { s:16, l:34, t:25, f:true,  o:0.11 },
    { s:32, l:36, t:60, f:false, o:0.15 },
    { s:10, l:39, t:80, f:true,  o:0.12 },
    { s:24, l:42, t:38, f:false, o:0.20 },
    { s:14, l:44, t:18, f:true,  o:0.09 },
    { s:40, l:47, t:55, f:false, o:0.13 },
    { s:8,  l:50, t:75, f:true,  o:0.16 },
    { s:18, l:52, t:28, f:false, o:0.21 },
    { s:26, l:55, t:65, f:true,  o:0.08 },
    { s:12, l:58, t:45, f:false, o:0.18 },
    { s:34, l:60, t:22, f:true,  o:0.10 },
    { s:10, l:63, t:70, f:false, o:0.22 },
    { s:22, l:65, t:38, f:true,  o:0.12 },
    { s:16, l:68, t:55, f:false, o:0.17 },
    { s:48, l:70, t:12, f:true,  o:0.06 },
    { s:8,  l:72, t:78, f:true,  o:0.14 },
    { s:20, l:74, t:32, f:false, o:0.19 },
    { s:30, l:77, t:48, f:true,  o:0.09 },
    { s:12, l:79, t:68, f:false, o:0.20 },
    { s:16, l:82, t:25, f:true,  o:0.11 },
    { s:24, l:84, t:58, f:false, o:0.16 },
    { s:36, l:86, t:40, f:true,  o:0.08 },
    { s:10, l:88, t:72, f:false, o:0.22 },
    { s:18, l:90, t:18, f:true,  o:0.13 },
    { s:28, l:92, t:50, f:false, o:0.17 },
    { s:8,  l:94, t:82, f:true,  o:0.12 },
    { s:22, l:96, t:35, f:false, o:0.20 },
    { s:14, l:98, t:62, f:true,  o:0.10 },
  ];

  return (
    <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:1 }}>
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: b.s,
            height: b.s,
            borderRadius: "50%",
            background: b.f ? `rgba(255,255,255,${b.o})` : "transparent",
            border: b.f ? "none" : `${b.s > 24 ? 2 : 1.5}px solid rgba(255,255,255,${b.o})`,
            left: `${b.l}%`,
            top: `${b.t}%`,
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
export default function MayaFishFarm() {
  const [imgRef,   imgVisible]   = useScrollReveal(0.1);
  const [textRef,  textVisible]  = useScrollReveal(0.1);
  const [statsRef, statsVisible] = useScrollReveal(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,300;1,9..40,400&display=swap');

        /* ══ KEYFRAMES ══ */

        @keyframes wcmSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes mfBubbleRise {
          0%   { opacity: 0; }
          100% { opacity: 0; }
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

        //* ── Modern Glass Frame ── */
.mf-img-frame {
  position: relative;
  border-radius: 20px;
  padding: 10px;
  background: linear-gradient(135deg, rgba(10,132,214,0.25), rgba(79,209,232,0.15));
  backdrop-filter: blur(8px);
  box-shadow: 
    0 10px 40px rgba(10,132,214,0.15),
    inset 0 0 0 1px rgba(255,255,255,0.08);
}

/* inner container */
.mf-img-frame-inner {
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  position: relative;
}

/* glow border */
.mf-img-frame::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 22px;
  background: linear-gradient(120deg, #0A84D6, #4FD1E8, #0A84D6);
  opacity: 0.25;
  filter: blur(10px);
  z-index: 0;
}

/* subtle hover effect */
.mf-img-frame:hover {
  transform: translateY(-4px) scale(1.01);
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
  box-shadow: 
    0 20px 60px rgba(10,132,214,0.25),
    inset 0 0 0 1px rgba(255,255,255,0.1);
}

/* remove old decorations */
.mf-frame-arc,
.mf-frame-dot,
.mf-frame-stat,
.mf-frame-badge {
  display: none;
}

        /* Second ring — closer, more opaque */
        .mf-img-frame::after {
          content: '';
          position: absolute;
          top: 18px; left: 18px;
          right: -18px; bottom: -18px;
          border: 2px solid rgba(79,209,232,0.15);
          border-radius: 20px;
          pointer-events: none;
          z-index: 0;
          transition: border-color 0.4s ease, transform 0.5s ease;
        }
        .mf-img-frame:hover::after {
          border-color: rgba(79,209,232,0.32);
          transform: translate(3px, 3px);
        }

        /* Year pill — bottom right floating */
        .mf-frame-badge {
          position: absolute;
          bottom: -14px; right: 28px;
          background: #fff;
          border: 1.5px solid rgba(10,132,214,0.18);
          color: #0A84D6;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 100px;
          z-index: 5;
          pointer-events: none;
          box-shadow: 0 6px 22px rgba(10,132,214,0.12);
          animation: mfFloat 4s ease-in-out infinite;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mf-frame-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4FD1E8;
          flex-shrink: 0;
        }

        /* Top-left arc ring */
        .mf-frame-arc {
          position: absolute;
          top: -28px; left: -28px;
          width: 80px; height: 80px;
          border-radius: 50%;
          border: 2px dashed rgba(10,132,214,0.2);
          pointer-events: none;
          z-index: 0;
          animation: wcmSpin 18s linear infinite;
        }

        /* Small teal filled circle */
        .mf-frame-dot {
          position: absolute;
          top: -10px; right: 60px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #4FD1E8;
          pointer-events: none;
          z-index: 3;
          box-shadow: 0 0 0 3px rgba(79,209,232,0.22);
        }

        /* Experience stat card — left floating */
        .mf-frame-stat {
          position: absolute;
          top: 50%; left: -24px;
          transform: translateY(-50%);
          background: #0A84D6;
          border-radius: 14px;
          padding: 14px 16px;
          z-index: 5;
          pointer-events: none;
          box-shadow: 0 8px 28px rgba(10,132,214,0.38);
          animation: mfFloat 5s ease-in-out infinite 0.8s;
          text-align: center;
        }
        .mf-frame-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 22px; font-weight: 800;
          color: #fff; line-height: 1;
          letter-spacing: -0.5px;
          display: block;
        }
        .mf-frame-stat-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 8.5px; font-weight: 500;
          color: rgba(255,255,255,0.75);
          letter-spacing: 1px;
          text-transform: uppercase;
          display: block;
          margin-top: 3px;
          white-space: nowrap;
        }

        .mf-aquarium-img {
          width: 100%;
          aspect-ratio: 4 / 3.15;
          border-radius: 16px;
          overflow: hidden;
          display: block;
          position: relative;
          z-index: 1;
          box-shadow: 0 12px 48px rgba(0,0,0,0.12);
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.55s ease;
        }
        .mf-aquarium-img:hover {
          transform: scale(1.018);
          box-shadow: 0 24px 64px rgba(10,132,214,0.22);
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



        /* ══ UNDERWATER WRAPPER ══ */
        .mf-underwater {
          position: relative;
          overflow: hidden;
        }

        /* Wave SVG wrapper — sits on white bg, transitions into teal */
        .mf-wave-svg-wrap {
          background: #ffffff;
          line-height: 0;
          margin-bottom: -2px;
        }
        .mf-wave-svg-wrap svg { display: block; width: 100%; }

        /* ══ STATS BAND ══ */
        .mf-stats-band {
          position: relative;
          overflow: hidden;
          background: #17bcca;
          padding: 52px 56px 60px;
        }

        /* Subtle light caustic overlay */
        .mf-stats-band::before {
          content: "";
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 600px 150px at 15% 30%, rgba(255,255,255,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 400px 120px at 65% 45%, rgba(255,255,255,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 300px 100px at 90% 20%, rgba(255,255,255,0.06) 0%, transparent 60%);
        }

        .mf-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          position: relative; z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        .mf-stat {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 0 20px;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
        }
        .mf-stat:hover { transform: translateY(-6px); }

        /* Vertical divider — grows on scroll-in */
        .mf-stat:not(:last-child)::after {
          content: ''; position: absolute;
          right: 0; top: 8%; height: 84%; width: 1px;
          background: rgba(255,255,255,0.22);
          transform-origin: top; transform: scaleY(0); opacity: 0;
        }
        .mf-underwater.mf-in .mf-stat:nth-child(1)::after { animation: mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(2)::after { animation: mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(3)::after { animation: mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.80s both; }

        /* Stat numbers */
        .mf-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(3.6rem, 6.5vw, 5.6rem);
          font-weight: 800; color: #ffffff;
          line-height: 1; margin-bottom: 10px;
          letter-spacing: -0.03em;
          position: relative; z-index: 1; opacity: 0;
        }
        .mf-underwater.mf-in .mf-stat:nth-child(1) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(2) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.22s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(3) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.36s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(4) .mf-stat-num { animation: mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.50s both; }

        /* Stat labels */
        .mf-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          font-weight: 400; color: rgba(255,255,255,0.82);
          line-height: 1.6; letter-spacing: 0.2px;
          position: relative; z-index: 1; opacity: 0;
        }
        .mf-underwater.mf-in .mf-stat:nth-child(1) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.34s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(2) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.48s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(3) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.62s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(4) .mf-stat-label { animation: mfStatLabel 0.55s ease 0.76s both; }

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
          .mf-stats-band { padding: 40px 20px 48px; }
          .mf-stat { padding: 16px 10px; }
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
            <div className="mf-img-frame">
            <div className="mf-img-frame-inner">
              <div className="mf-aquarium-img">
                <AquariumIllustration />
              </div>
            </div>
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

        {/* ══════════════ WAVE + STATS UNDERWATER SECTION ══════════════ */}
        <div ref={statsRef} className={`mf-underwater${statsVisible ? " mf-in" : ""}`}>

          {/* Wave SVG — white bg above, teal fill below */}
          <div className="mf-wave-svg-wrap">
            <svg viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1440" height="110" fill="#ffffff"/>
              <path d="M0,110 L0,52 C90,22 180,72 270,50 C360,28 450,70 540,48 C630,26 720,68 810,46 C900,24 990,66 1080,44 C1170,22 1260,64 1350,46 C1395,37 1420,54 1440,48 L1440,110 Z" fill="#17bcca"/>
              <path d="M0,110 L0,68 C120,48 240,82 360,64 C480,46 600,78 720,62 C840,46 960,76 1080,60 C1200,44 1320,72 1440,58 L1440,110 Z" fill="rgba(23,188,202,0.6)"/>
              <path d="M0,110 L0,82 C180,68 360,92 540,78 C720,64 900,88 1080,74 C1260,60 1380,80 1440,72 L1440,110 Z" fill="rgba(23,188,202,0.3)"/>
            </svg>
          </div>

          {/* Underwater teal band */}
          <div className="mf-stats-band">
            <BubbleLayer />
            <div className="mf-stats-grid">
              {STATS.map((s) => (
                <div className={`mf-stat`} key={s.label}>
                  <div className="mf-stat-num"><Counter target={s.target} suffix={s.suffix} /></div>
                  <div className="mf-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  );
}