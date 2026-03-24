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
   NEW FRAME — Minimal double border + soft glow hover
───────────────────────────────────────── */
function ImageFrame({ children }) {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        borderRadius: "24px",
        padding: "8px",
        background: "transparent",
        transition: "all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
      }}
      className="mf-frame-outer"
    >
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          background: "#fff",
          padding: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.02), 0 8px 24px rgba(27,58,107,0.08)",
          transition: "all 0.3s ease",
        }}
        className="mf-frame-mid"
      >
        <div
          style={{
            position: "relative",
            borderRadius: "16px",
            border: "1px solid rgba(27,58,107,0.15)",
            background: "#fff",
            overflow: "hidden",
          }}
          className="mf-frame-inner"
        >
          {children}
        </div>
      </div>

      <style jsx>{`
        .mf-frame-outer:hover {
          transform: translateY(-4px);
        }
        .mf-frame-outer:hover .mf-frame-mid {
          box-shadow: 0 16px 32px -12px rgba(27,58,107,0.25);
        }
        .mf-frame-outer:hover .mf-frame-inner {
          border-color: #1B3A6B;
          box-shadow: 0 0 0 2px rgba(14,165,201,0.2);
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────
   AQUARIUM IMAGE
───────────────────────────────────────── */
function AquariumIllustration() {
  return (
    <img
      src="s2.png"
      alt="Beautiful colorful aquarium with tropical fish"
      style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block", borderRadius:"16px" }}
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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap');

        @keyframes mfSlideFromLeft  { from{opacity:0;transform:translateX(-52px)} to{opacity:1;transform:translateX(0)} }
        @keyframes mfSlideFromRight { from{opacity:0;transform:translateX(52px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes mfRevealUp       { from{opacity:0;transform:translateY(30px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes mfLetterBlur     { from{opacity:0;letter-spacing:0.5em;filter:blur(8px)} to{opacity:1;letter-spacing:2px;filter:blur(0)} }
        @keyframes mfClipUp         { from{clip-path:inset(100% 0 0 0);opacity:0} to{clip-path:inset(0% 0 0 0);opacity:1} }
        @keyframes mfStatPop        { 0%{opacity:0;transform:scale(0.65) translateY(24px)} 65%{transform:scale(1.07) translateY(-4px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes mfStatLabel      { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mfDividerGrow    { from{transform:scaleY(0);opacity:0} to{transform:scaleY(1);opacity:1} }
        @keyframes mfBtnShine       { 0%{left:-80%} 100%{left:130%} }
        @keyframes mfImageReveal    { from{clip-path:inset(0 100% 0 0);opacity:0.4} to{clip-path:inset(0 0% 0 0);opacity:1} }

        .mf-root {
          font-family: 'Montserrat', sans-serif;
          background: #fff;
          width: 100%;
          overflow: hidden;
        }

        .mf-hero {
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          column-gap: 56px;
          align-items: center;
          padding: 62px 68px 74px 62px;
          background: #fff;
        }

        .mf-left { position: relative; }
        .mf-left.mf-in { animation: mfSlideFromLeft 0.9s cubic-bezier(0.16,1,0.3,1) both; }

        /* extra padding so the frame has breathing space */
        .mf-gold-frame-wrap {
          position: relative;
          padding: 20px;
        }

        .mf-img-inner {
          position: relative;
          z-index: 2;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.55s ease;
        }
        .mf-img-inner:hover {
          transform: scale(1.015);
          box-shadow: 0 28px 72px rgba(27,58,107,0.28);
        }

        .mf-aquarium-img {
          width: 100%;
          aspect-ratio: 4 / 3.15;
          border-radius: 12px;
          overflow: hidden;
          display: block;
          position: relative;
          z-index: 1;
        }
        .mf-left.mf-in .mf-aquarium-img {
          animation: mfImageReveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }

        .mf-right { padding-left: 4px; }
        .mf-right.mf-in { animation: mfSlideFromRight 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s both; }

        .mf-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: #00BCD4;
          margin-bottom: 16px; opacity: 0;
        }
        .mf-right.mf-in .mf-eyebrow {
          animation: mfLetterBlur 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both;
        }

        .mf-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 3.4vw, 2.85rem);
          font-weight: 700; color: #1B3A6B;
          line-height: 1.12; letter-spacing: -0.025em;
          margin: 0 0 8px 0; display: block;
          overflow: hidden; opacity: 0;
        }
        .mf-right.mf-in .mf-heading {
          animation: mfClipUp 0.72s 0.36s cubic-bezier(0.16,1,0.3,1) both;
        }

        .mf-heading-thin {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 3.4vw, 2.85rem);
          font-weight: 300; color: rgba(27,58,107,0.50);
          line-height: 1.12; letter-spacing: -0.02em;
          display: block; margin: 0 0 26px 0;
          overflow: hidden; opacity: 0;
        }
        .mf-right.mf-in .mf-heading-thin {
          animation: mfClipUp 0.72s 0.50s cubic-bezier(0.16,1,0.3,1) both;
        }

        .mf-body-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px; margin-bottom: 34px; opacity: 0;
        }
        .mf-right.mf-in .mf-body-cols {
          animation: mfRevealUp 0.65s 0.62s cubic-bezier(0.16,1,0.3,1) both;
        }
        .mf-body-cols p {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.75rem, 0.92vw, 0.84rem);
          color: #2a4a7f; line-height: 1.9; font-weight: 400; margin: 0;
        }

        .mf-btn {
          display: inline-flex; align-items: center; gap: 0;
          padding: 6px 6px 6px 24px;
          background: #1B3A6B; border: 1.5px solid #1B3A6B;
          border-radius: 50px; cursor: pointer; text-decoration: none;
          box-shadow: 0 4px 20px rgba(27,58,107,0.40);
          transition: background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          position: relative; overflow: hidden; opacity: 0;
        }
        .mf-right.mf-in .mf-btn { animation: mfRevealUp 0.65s 0.76s cubic-bezier(0.16,1,0.3,1) both; }
        .mf-btn::before {
          content:''; position:absolute; top:0; left:-80%; width:60%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent);
          transform:skewX(-20deg); pointer-events:none;
        }
        .mf-btn:hover::before { animation: mfBtnShine 0.55s ease forwards; }
        .mf-btn:hover { background:#142d55; border-color:#142d55; transform:translateY(-2px); box-shadow:0 8px 28px rgba(27,58,107,0.50); }
        .mf-btn:active { transform:scale(0.97); }
        .mf-btn-label { font-family:'Montserrat',sans-serif; font-size:10.5px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#fff; margin-right:12px; white-space:nowrap; }
        .mf-btn-icon { width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.18); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:background 0.25s, transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .mf-btn:hover .mf-btn-icon { background:rgba(255,255,255,0.32); transform:rotate(45deg); }

        .mf-underwater { position:relative; overflow:hidden; }
        .mf-wave-svg-wrap { background:#ffffff; line-height:0; margin-bottom:-2px; }
        .mf-wave-svg-wrap svg { display:block; width:100%; }

        .mf-stats-band {
          position:relative; overflow:hidden;
          background:#1B3A6B; padding: 36px 56px;
        }
        .mf-stats-band::before {
          content:""; position:absolute; inset:0; pointer-events:none; z-index:0;
          background:
            radial-gradient(ellipse 600px 150px at 15% 30%, rgba(255,255,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 400px 120px at 65% 45%, rgba(255,255,255,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 300px 100px at 90% 20%, rgba(255,255,255,0.05) 0%, transparent 60%);
        }

        .mf-stats-grid { display:grid; grid-template-columns:repeat(4, minmax(0,1fr)); position:relative; z-index:2; max-width:1100px; margin:0 auto; }
        .mf-stat { display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:0 20px; position:relative; transition:transform 0.35s cubic-bezier(0.16,1,0.3,1); cursor:default; }
        .mf-stat:hover { transform:translateY(-6px); }
        .mf-stat:not(:last-child)::after { content:''; position:absolute; right:0; top:8%; height:84%; width:1px; background:rgba(255,255,255,0.20); transform-origin:top; transform:scaleY(0); opacity:0; }
        .mf-underwater.mf-in .mf-stat:nth-child(1)::after { animation:mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(2)::after { animation:mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(3)::after { animation:mfDividerGrow 0.5s cubic-bezier(0.16,1,0.3,1) 0.80s both; }

        .mf-stat-num { font-family:'Montserrat',sans-serif; font-size:clamp(2.2rem, 4vw, 3.2rem); font-weight:800; color:#ffffff; line-height:1; margin-bottom:6px; letter-spacing:-0.03em; position:relative; z-index:1; opacity:0; }
        .mf-underwater.mf-in .mf-stat:nth-child(1) .mf-stat-num { animation:mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(2) .mf-stat-num { animation:mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.22s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(3) .mf-stat-num { animation:mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.36s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(4) .mf-stat-num { animation:mfStatPop 0.72s cubic-bezier(0.16,1,0.3,1) 0.50s both; }

        .mf-stat-label { font-family:'Montserrat',sans-serif; font-size:clamp(0.68rem, 0.85vw, 0.78rem); font-weight:500; color:rgba(255,255,255,0.78); line-height:1.6; letter-spacing:0.8px; text-transform:uppercase; position:relative; z-index:1; opacity:0; }
        .mf-underwater.mf-in .mf-stat:nth-child(1) .mf-stat-label { animation:mfStatLabel 0.55s ease 0.34s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(2) .mf-stat-label { animation:mfStatLabel 0.55s ease 0.48s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(3) .mf-stat-label { animation:mfStatLabel 0.55s ease 0.62s both; }
        .mf-underwater.mf-in .mf-stat:nth-child(4) .mf-stat-label { animation:mfStatLabel 0.55s ease 0.76s both; }

        @media (max-width: 880px) {
          .mf-hero { grid-template-columns:1fr; padding:38px 26px 52px; gap:42px; }
          .mf-right { padding-left:0; }
          .mf-body-cols { grid-template-columns:1fr; gap:16px; }
          .mf-left.mf-in  { animation:mfRevealUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
          .mf-right.mf-in { animation:mfRevealUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        }
        @media (max-width: 580px) {
          .mf-stats-grid { grid-template-columns:repeat(2,1fr); }
          .mf-stats-band { padding:28px 20px; }
          .mf-stat { padding:14px 10px; }
          .mf-stat:nth-child(odd)  { border-right:1px solid rgba(255,255,255,.18); }
          .mf-stat:nth-child(even) { border-right:none; }
          .mf-stat::after { display:none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *,*::before,*::after { animation-duration:0.01ms !important; transition-duration:0.01ms !important; }
        }
      `}</style>

      <div className="mf-root">

        {/* ══════════════ ABOUT SECTION ══════════════ */}
        <section className="mf-hero">

          <div ref={imgRef} className={`mf-left${imgVisible ? " mf-in" : ""}`}>
            <div className="mf-gold-frame-wrap">
              <ImageFrame>
                <div className="mf-img-inner">
                  <div className="mf-aquarium-img">
                    <AquariumIllustration />
                  </div>
                </div>
              </ImageFrame>
            </div>
          </div>

          <div ref={textRef} className={`mf-right${textVisible ? " mf-in" : ""}`}>

            <p className="mf-eyebrow">About Us</p>

            <h2 style={{ margin: 0 }}>
              <span className="mf-heading">
                Discover the most beautiful{" "}
                <span style={{ fontWeight:300, color:"rgba(27,58,107,0.45)", letterSpacing:"-0.02em" }}>fish</span>
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

        {/* ══════════════ WAVE + STATS ══════════════ */}
        <div ref={statsRef} className={`mf-underwater${statsVisible ? " mf-in" : ""}`}>

          <div className="mf-wave-svg-wrap">
            <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1440" height="72" fill="#ffffff"/>
              <path d="M0,72 L0,34 C90,14 180,48 270,32 C360,16 450,46 540,30 C630,14 720,44 810,28 C900,12 990,42 1080,26 C1170,10 1260,40 1350,28 C1395,22 1420,34 1440,30 L1440,72 Z" fill="#1B3A6B"/>
              <path d="M0,72 L0,46 C120,32 240,56 360,42 C480,28 600,52 720,40 C840,28 960,50 1080,38 C1200,26 1320,48 1440,38 L1440,72 Z" fill="rgba(27,58,107,0.6)"/>
              <path d="M0,72 L0,58 C180,48 360,64 540,54 C720,44 900,62 1080,52 C1260,42 1380,58 1440,52 L1440,72 Z" fill="rgba(27,58,107,0.3)"/>
            </svg>
          </div>

          <div className="mf-stats-band">
            <BubbleLayer />
            <div className="mf-stats-grid">
              {STATS.map((s) => (
                <div className="mf-stat" key={s.label}>
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