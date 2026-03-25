"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    tag: "Healthy & Vibrant",
    title: "Quality Service",
    desc: "We follow responsible fish breeding practices to ensure healthy and vibrant fish varieties.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    circleColor: "#071E3D",
  },
  {
    tag: "Fresh & On Schedule",
    title: "On-time Delivery",
    desc: "Reliable supply of ornamental fish to hobbyists and aquarium retailers.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    circleColor: "#0A84D6",
  },
  {
    tag: "High Standards, Low Cost",
    title: "Affordable Pricing",
    desc: "Competitive pricing while maintaining high standards of fish health.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    circleColor: "#1D4E89",
  },
  {
    tag: "Always Here to Help",
    title: "Customer Support",
    desc: "Guidance for aquarium maintenance and fish care.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    circleColor: "#4FD1E8",
  },
];

export default function WhyChooseMaya() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

        .wcm-section {
          font-family: 'Montserrat', sans-serif;
          background: #EBF4FB;
          padding: 80px 60px 90px;
        }

        /* ── Heading ── */
        .wcm-heading {
          text-align: center;
          margin-bottom: 60px;
        }
        .wcm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #0A84D6;
          margin-bottom: 20px;
        }
        .wcm-eyebrow::before,
        .wcm-eyebrow::after {
          content: '';
          width: 36px;
          height: 1.5px;
          background: #0A84D6;
          display: block;
        }
        .wcm-h2 {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 800;
          color: #071E3D;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .wcm-h2 span { color: #0A84D6; }
        .wcm-sub {
          font-size: 13.5px;
          font-weight: 400;
          color: #8faec8;
          line-height: 1.8;
          max-width: 460px;
          margin: 0 auto;
        }

        /* ── 2×2 Grid ── */
        .wcm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px 80px;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Single card ── */
        .wcm-card {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          cursor: default;
        }

        /* Circle */
        .wcm-circle {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.35s;
        }
        .wcm-card:hover .wcm-circle {
          transform: scale(1.08);
          box-shadow: 0 10px 32px rgba(7,30,61,0.22);
        }

        /* Text */
        .wcm-card-body {
          padding-top: 6px;
        }

        .wcm-card-tag {
          display: inline-block;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #0A84D6;
          background: #ffffff;
          border: 1px solid #c8e4f7;
          border-radius: 100px;
          padding: 3px 10px;
          margin-bottom: 8px;
        }

        .wcm-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #071E3D;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
          line-height: 1.2;
          transition: color 0.25s;
        }
        .wcm-card:hover .wcm-card-title { color: #0A84D6; }

        .wcm-card-desc {
          font-size: 12.5px;
          font-weight: 400;
          color: #8faec8;
          line-height: 1.85;
          margin: 0;
          max-width: 280px;
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .wcm-section { padding: 56px 24px 64px; }
          .wcm-grid { grid-template-columns: 1fr; gap: 36px; }
          .wcm-card-desc { max-width: 100%; }
        }
      `}</style>

      <section className="wcm-section" ref={sectionRef}>

        {/* Heading */}
        <motion.div
          className="wcm-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="wcm-eyebrow">Our Values</div>
          <h2 className="wcm-h2">Why choose <span>MAYA</span>?</h2>
          <p className="wcm-sub">
            At MAYA Fish Farm, we deliver healthy, vibrant ornamental fish
            through responsible breeding and dedicated expert care.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="wcm-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="wcm-card"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Coloured circle with inline icon */}
              <div
                className="wcm-circle"
                style={{ background: card.circleColor }}
              >
                {card.icon}
              </div>

              {/* Text */}
              <div className="wcm-card-body">
                <span className="wcm-card-tag">{card.tag}</span>
                <div className="wcm-card-title">{card.title}</div>
                <p className="wcm-card-desc">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </>
  );
}