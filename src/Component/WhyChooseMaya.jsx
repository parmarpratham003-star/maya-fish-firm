"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    num: "1",
    stat: "Quality Service",
    tag: "Healthy & Vibrant Fish",
    desc: "We follow responsible fish breeding practices to ensure healthy and vibrant fish varieties.",
    accent: "#0A84D6",
  },
  {
    num: "2",
    stat: "On-time Delivery",
    tag: "Fresh & On Schedule",
    desc: "Reliable supply of ornamental fish to hobbyists and aquarium retailers.",
    accent: "#0A6FBF",
  },
  {
    num: "3",
    stat: "Affordable Pricing",
    tag: "High Standards, Low Cost",
    desc: "Competitive pricing while maintaining high standards of fish health.",
    accent: "#0E5EA8",
  },
  {
    num: "4",
    stat: "Customer Support",
    tag: "Always Here to Help",
    desc: "Guidance for aquarium maintenance and fish care.",
    accent: "#4FD1E8",
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
          display: grid;
          grid-template-columns: 45% 45%;
          min-height: 620px;
          overflow: hidden;
          position: relative;
        }

        /* ── LEFT dark blue panel ── */
        .wcm-left {
          background: #071E3D;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .wcm-left::before {
          content: '';
          position: absolute;
          top: -80px; left: -80px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(10,132,214,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .wcm-left::after {
          content: '';
          position: absolute;
          bottom: -60px; right: -60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79,209,232,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .wcm-left-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #4FD1E8;
          margin: 0 0 22px;
          display: flex; align-items: center; gap: 8px;
          position: relative; z-index: 1;
        }
        .wcm-left-eyebrow::before {
          content: '';
          width: 20px; height: 1.5px;
          background: #4FD1E8;
          display: block; flex-shrink: 0;
        }

        .wcm-left-h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.06;
          letter-spacing: -0.03em;
          margin: 0 0 26px;
          position: relative; z-index: 1;
        }

        .wcm-left-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          margin: 0;
          position: relative; z-index: 1;
        }

        /* ── RIGHT white panel ── */
        .wcm-right {
          background: #ffffff;
          position: relative;
          display: flex;
          align-items: stretch;
        }

        /* ── Seam circles ── */
        .wcm-seam {
          position: absolute;
          left: -36px;
          top: 0; bottom: 0;
          width: 72px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .wcm-vline {
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            #b8d6f0 8%,
            #b8d6f0 92%,
            transparent 100%
          );
          z-index: 0;
        }

        .wcm-circles {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
        }

        .wcm-circ-row {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wcm-circle {
          width: 70px; height: 70px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          position: relative; z-index: 2;
          cursor: default;
          box-shadow: 0 0 0 7px #ffffff, 0 6px 22px rgba(10,80,180,0.25);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s;
        }
        .wcm-circle:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 7px #ffffff, 0 10px 32px rgba(10,80,180,0.42);
        }

        .wcm-circle-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 24px; font-weight: 800;
          color: #fff; line-height: 1;
        }

        /* ── Items list ── */
        .wcm-items {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0 60px 0 60px;
        }

        .wcm-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 0;
          border-bottom: 1px solid #e8f1fa;
          cursor: default;
        }
        .wcm-item:last-child { border-bottom: none; }

        .wcm-tag {
          display: inline-flex;
          align-items: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 8.5px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #0A84D6;
          background: #ddeffc;
          border-radius: 100px;
          padding: 3px 10px;
          margin-bottom: 9px;
          width: fit-content;
          transition: background 0.25s, color 0.25s;
        }
        .wcm-item:hover .wcm-tag {
          background: #0A84D6;
          color: #fff;
        }

        .wcm-item-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px; font-weight: 700;
          color: #071E3D;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
          line-height: 1.2;
          transition: color 0.25s;
        }
        .wcm-item:hover .wcm-item-title { color: #0A84D6; }

        .wcm-item-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 11.5px; font-weight: 400;
          color: #8faec8;
          line-height: 1.85;
          margin: 0;
          max-width: 480px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .wcm-section { grid-template-columns: 1fr; min-height: auto; }
          .wcm-left { padding: 56px 32px 44px; }
          .wcm-seam { display: none; }
          .wcm-items { padding: 0 32px; }
          .wcm-item { padding: 22px 0; }
        }
      `}</style>

      <section className="wcm-section" ref={sectionRef}>

        {/* LEFT */}
        <motion.div
          className="wcm-left"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
         <span className="wcm-left-eyebrow">Our Values</span>

<h2 className="wcm-left-h2">
  Why<br/>Choose<br/>Us?
</h2>

<p className="wcm-left-sub">
  At MAYA Fish Farm, we focus on delivering healthy, vibrant ornamental fish
  through responsible breeding and expert care.
  <br/><br/>
  Our commitment to quality, reliability, and customer satisfaction ensures
  that every fish meets the highest standards for aquariums and retailers.
</p>
</motion.div>
        {/* RIGHT */}
        <div className="wcm-right">

          {/* Seam circles */}
          <div className="wcm-seam">
            <div className="wcm-vline" />
            <div className="wcm-circles">
              {cards.map((card, i) => (
                <div className="wcm-circ-row" key={card.num}>
                  <motion.div
                    className="wcm-circle"
                    style={{ background: card.accent }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="wcm-circle-num">{card.num}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Text rows */}
          <div className="wcm-items">
            {cards.map((card, i) => (
              <motion.div
                key={card.stat}
                className="wcm-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="wcm-tag">{card.tag}</span>
                <div className="wcm-item-title">{card.stat}</div>
                <p className="wcm-item-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}