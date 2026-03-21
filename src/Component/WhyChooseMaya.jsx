"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    num: "01",
    title: "Quality Service",
    desc: "We follow responsible fish breeding practices to ensure healthy and vibrant fish varieties for every customer.",
    tag: "Responsible Breeding",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 3 5 6 5 10c0 2.5 1.5 5 4 6.5V19h6v-2.5C17.5 15 19 12.5 19 10c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M9 19h6M10 22h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 10c0-1.7 1.3-3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "On-time Delivery",
    desc: "Reliable supply of ornamental fish to hobbyists and aquarium retailers, delivered fresh and on schedule.",
    tag: "Reliable Supply",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M18 10l3-2v8l-3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12h6M6 15h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Affordable Pricing",
    desc: "Competitive pricing while maintaining high standards of fish health — quality you can afford at every scale.",
    tag: "Great Value",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 5.5C9.2 4.6 10.5 4 12 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Customer Support",
    desc: "Guidance for aquarium maintenance and fish care — our team is always ready to help you succeed.",
    tag: "Expert Guidance",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function Card({ card, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="wcm-card"
    >
      {/* Top accent line */}
      <div className="wcm-top-bar" />

      {/* Icon row */}
      <div className="wcm-icon-row">
        <div className="wcm-icon-box">{card.icon}</div>
        <span className="wcm-step">{card.num}</span>
      </div>

      {/* Animated separator */}
      <div className="wcm-sep" />

      <h3 className="wcm-title">{card.title}</h3>
      <p className="wcm-desc">{card.desc}</p>

      <div className="wcm-tag">
        <span className="wcm-tag-line" />
        {card.tag}
      </div>
    </motion.div>
  );
}

export default function WhyChooseMaya() {
  const sectionRef = useRef(null);
  const headInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,300&display=swap');

        @keyframes wcmPulse {
          0%,100% { opacity:.5; transform:scale(1); }
          50%      { opacity:1;  transform:scale(1.35); }
        }

        /* ══ SECTION ══ */
        .wcm-section {
          font-family: 'DM Sans', sans-serif;
          background: #071A2F;
          padding: 88px 40px 100px;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow blobs */
        .wcm-light-1 {
          position: absolute; pointer-events: none; border-radius: 50%;
          background: radial-gradient(circle, rgba(10,132,214,0.18) 0%, transparent 70%);
          width: 600px; height: 600px;
          top: -200px; right: -100px;
        }
        .wcm-light-2 {
          position: absolute; pointer-events: none; border-radius: 50%;
          background: radial-gradient(circle, rgba(79,209,232,0.09) 0%, transparent 70%);
          width: 420px; height: 420px;
          bottom: -100px; left: -80px;
        }

        /* ══ HEADER ══ */
        .wcm-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 64px;
          position: relative; z-index: 2;
        }

        /* Eyebrow — matches hv-eyebrow exactly */
        .wcm-eyebrow-wrap {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; margin-bottom: 18px;
        }
        .wcm-eline { width: 24px; height: 1px; background: rgba(255,255,255,0.28); display: block; }
        .wcm-eyebrow-txt {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 400;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.72);
        }

        /* Heading — hv-bold / hv-thin split */
        .wcm-h2 {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1.8rem, 3.8vw, 3.6rem);
          line-height: 1.2; letter-spacing: -0.025em;
          margin: 0 0 18px;
        }
        .wcm-h2-bold {
          display: block;
          font-weight: 700; color: #ffffff;
          letter-spacing: -0.025em; line-height: 1.12;
        }
        .wcm-h2-thin {
          display: block;
          font-weight: 300; color: rgba(255,255,255,0.72);
          letter-spacing: -0.02em; line-height: 1.12;
        }

        /* Sub — matches hv-sub */
        .wcm-lead {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.78rem, 0.95vw, 0.88rem);
          font-weight: 400; line-height: 1.8;
          color: rgba(255,255,255,0.62);
          letter-spacing: 0; margin: 0;
        }

        /* ══ GRID — unified bordered panel ══ */
        .wcm-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative; z-index: 2;
          border: 1px solid rgba(79,209,232,0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        /* ══ CARD ══ */
        .wcm-card {
          position: relative;
          background: #0b2240;
          padding: 36px 28px 32px;
          display: flex; flex-direction: column;
          gap: 14px;
          border-right: 1px solid rgba(79,209,232,0.08);
          transition: background 0.3s ease;
          overflow: hidden;
          cursor: default;
        }
        .wcm-card:last-child { border-right: none; }
        .wcm-card:hover { background: #0e2b4f; }

        /* Top accent bar — slides in on hover */
        .wcm-top-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #0A84D6, #4FD1E8);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .wcm-card:hover .wcm-top-bar { transform: scaleX(1); }

        /* Icon row */
        .wcm-icon-row {
          display: flex; align-items: center;
          justify-content: space-between;
        }

        /* Icon box */
        .wcm-icon-box {
          width: 50px; height: 50px; border-radius: 12px;
          background: rgba(10,132,214,0.12);
          border: 1px solid rgba(10,132,214,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #4FD1E8; flex-shrink: 0;
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            color 0.3s ease,
            transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .wcm-card:hover .wcm-icon-box {
          background: linear-gradient(135deg, #0A84D6, #4FD1E8);
          border-color: transparent;
          color: #ffffff;
          transform: scale(1.1) rotate(-6deg);
        }

        /* Step number */
        .wcm-step {
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px;
          color: rgba(79,209,232,0.22);
          font-family: monospace;
          transition: color 0.3s;
        }
        .wcm-card:hover .wcm-step { color: rgba(79,209,232,0.45); }

        /* Separator */
        .wcm-sep {
          height: 1px;
          background: linear-gradient(90deg, rgba(79,209,232,0.25), transparent);
          transform-origin: left; transform: scaleX(0.25);
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
          flex-shrink: 0;
        }
        .wcm-card:hover .wcm-sep { transform: scaleX(1); }

        /* Title */
        .wcm-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px; font-weight: 700;
          color: #ECF6FF; letter-spacing: -0.02em;
          line-height: 1.25; margin: 0;
          transition: color 0.3s;
        }
        .wcm-card:hover .wcm-title { color: #4FD1E8; }

        /* Description */
        .wcm-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 300;
          color: rgba(109,151,176,0.85);
          line-height: 1.75; margin: 0; flex: 1;
        }

        /* Tag */
        .wcm-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          color: rgba(79,209,232,0.6);
          margin-top: 4px;
        }
        .wcm-tag-line {
          width: 14px; height: 1px;
          background: rgba(79,209,232,0.4);
          flex-shrink: 0;
          transition: width 0.35s ease, background 0.35s ease;
        }
        .wcm-card:hover .wcm-tag { color: #4FD1E8; }
        .wcm-card:hover .wcm-tag-line { width: 22px; background: #4FD1E8; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 900px) {
          .wcm-grid {
            grid-template-columns: repeat(2, 1fr);
            border-radius: 12px;
          }
          .wcm-card { border-bottom: 1px solid rgba(79,209,232,0.08); }
          .wcm-card:nth-child(2n) { border-right: none; }
          .wcm-card:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 520px) {
          .wcm-grid { grid-template-columns: 1fr; }
          .wcm-card { border-right: none; }
          .wcm-card:last-child { border-bottom: none; }
          .wcm-section { padding: 56px 20px 64px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wcm-card, .wcm-icon-box, .wcm-sep,
          .wcm-top-bar, .wcm-tag-line { transition: none; }
        }
      `}</style>

      <section className="wcm-section" ref={sectionRef}>

        {/* Ambient lights */}
        <div className="wcm-light-1" />
        <div className="wcm-light-2" />

        {/* Header */}
        <motion.div
          className="wcm-header"
          initial={{ opacity: 0, y: 28 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow — same as hv-eyebrow */}
          <p className="wcm-eyebrow-wrap">
            <span className="wcm-eline" />
            <span className="wcm-eyebrow-txt">Explore. Experience. Enjoy</span>
            <span className="wcm-eline" />
          </p>

          {/* Heading — bold + thin split matching hero hv-bold / hv-thin */}
          <h2 className="wcm-h2">
            <span className="wcm-h2-bold">Reasons to Choose</span>
            <span className="wcm-h2-thin">Maya Fish Farm</span>
          </h2>

          {/* Sub — matches hv-sub */}
          <p className="wcm-lead">
            Responsible breeding, reliable delivery, and genuine customer care —
            bringing you the healthiest ornamental fish.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="wcm-grid">
          {cards.map((card, i) => (
            <Card key={card.title} card={card} index={i} />
          ))}
        </div>

      </section>
    </>
  );
}