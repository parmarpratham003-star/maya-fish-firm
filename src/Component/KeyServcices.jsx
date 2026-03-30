"use client";

import { motion } from "framer-motion";
import { Fish, Waves, Salad, Sprout } from "lucide-react";

const services = [
  {
    title: "Ornamental Fish Breeding",
    desc: "Breeding vibrant and healthy ornamental fish varieties such as Goldfish, Angel Fish, Guppies, and Fighter Fish.",
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "01",
    img: "/show-case-img-1.jpg",
    icon: <Fish size={38} strokeWidth={1.6} color="#0A2A4A" />,
  },
  {
    title: "Aquarium Fish Supply",
    desc: "Supplying quality ornamental fish to aquarium hobbyists, retailers, and pet stores.",
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "02",
    img: "/s2.png",
    icon: <Waves size={38} strokeWidth={1.6} color="#0A2A4A" />,
  },
  {
    title: "Fish Nutrition & Care",
    desc: "Providing proper fish feeding guidance and care support to maintain healthy aquarium environments.",
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "03",
    img: "/silde3.png",
    icon: <Salad size={38} strokeWidth={1.6} color="#0A2A4A" />,
  },
  {
    title: "Aquaculture Support",
    desc: "Promoting responsible fish farming practices and sustainable aquaculture methods.",
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "04",
    img: "/ss1.png",
    icon: <Sprout size={38} strokeWidth={1.6} color="#0A2A4A" />,
  },
];

export default function KeyServices() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        .ks-section {
          font-family: 'Montserrat', sans-serif;
          background: transparent;
          padding: 5.5rem 1.5rem; 
          position: relative;
          overflow: hidden;
        }

        .ks-blob { position: absolute; pointer-events: none; }

        .ks-hdr {
          text-align: center;
          max-width: 520px;
          margin: 0 auto 3.8rem;
        }
        .ks-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 1.1rem;
        }
        .ks-eline { width: 28px; height: 1px; background: #2C7CB0; display: block; }
        .ks-etxt {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase; color: #2C7CB0;
        }
        .ks-h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.9rem, 3.8vw, 2.8rem);
          font-weight: 800; color: #083B66;
          line-height: 1.18; letter-spacing: -0.03em;
          margin: 0 0 0.9rem;
        }
        .ks-h2 em { font-style: normal; color: #0A2A4A; }
        .ks-lead {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 400;
          color: #5a7a90; line-height: 1.8; margin: 0;
        }

        .ks-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.4rem;
          max-width: 1180px;
          margin: 0 auto;
        }

        .ks-card {
          position: relative;
          border-radius: 2px;
          overflow: hidden;
          background: transparent;
          border: 1px solid #e0ecf5;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          min-height: 360px;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
        }
        .ks-card:hover {
          box-shadow: 0 20px 56px rgba(10,42,74,0.15);
          transform: translateY(-6px);
          border-color: rgba(10,42,74,0.2);
          z-index: 2;
        }

        .ks-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0A2A4A, #2C7CB0);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          z-index: 10;
        }
        .ks-card:hover::before { transform: scaleX(1); }

        .ks-img-area {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
        }
        .ks-slide-img {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          transform: translateY(-100%);
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.08, 1);
        }
        .ks-card:hover .ks-slide-img { transform: translateY(0); }

        .ks-img-arrow {
          position: absolute; bottom: 1.2rem; right: 1.2rem;
          width: 36px; height: 36px; border-radius: 2px;
          background: #0A2A4A;
          display: flex; align-items: center; justify-content: center;
          z-index: 6; text-decoration: none;
          opacity: 0; transform: translateY(8px);
          transition: opacity 0.28s ease 0.18s, transform 0.28s ease 0.18s;
          box-shadow: 0 4px 14px rgba(10,42,74,0.55);
          pointer-events: all;
        }
        .ks-card:hover .ks-img-arrow { opacity: 1; transform: translateY(0); }

        .ks-body {
          padding: 1.8rem 1.6rem 2rem;
          display: flex; flex-direction: column;
          gap: 0.8rem; flex: 1;
          position: relative;
          z-index: 3;
          background: #fff;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .ks-card:hover .ks-body { opacity: 0; visibility: hidden; }

        .ks-body-icon {
          width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
        }

        .ks-bar { width: 220px; height: 2px; background: #0A2A4A; flex-shrink: 0; }

        .ks-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px; font-weight: 700;
          color: #302f2f; line-height: 1.3; margin: 0;
          letter-spacing: -0.015em;
        }

        .ks-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px; font-weight: 500;
          color: #4D4D4D; line-height: 1.8; margin: 0; flex: 1;
        }

        .ks-cta-wrap { display: flex; justify-content: center; margin-top: 3.2rem; }
        .ks-cta {
          display: inline-flex;
          align-items: center;
          gap: 0;
          padding: 6px 6px 6px 24px;
          background: linear-gradient(135deg, #0A2A4A, #2C7CB0);
          border: 1.5px solid #1B3A6B;
          border-radius: 50px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fff;
          box-shadow: 0 4px 20px rgba(27,58,107,0.40);
          transition: background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ks-cta::before {
          content: '';
          position: absolute;
          top: 0; left: -80%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: skewX(-20deg);
        }
        .ks-cta:hover::before {
          animation: mfBtnShine 0.55s ease forwards;
        }
        .ks-cta:hover {
          background: #142d55;
          border-color: #142d55;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(27,58,107,0.50);
        }
        .ks-cta:active { transform: scale(0.97); }
        .ks-cta-ic {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          margin-left: 10px;
          transition: all 0.3s ease;
        }
        .ks-cta:hover .ks-cta-ic {
          background: rgba(255,255,255,0.32);
          transform: rotate(45deg);
        }

        @media (max-width: 1024px) { .ks-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px)  { .ks-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="ks-section">

      
        {/* Header */}
        <div className="ks-hdr">
          <div className="ks-eyebrow">
            <span className="ks-eline" />
            <span className="ks-etxt">Our Services</span>
            <span className="ks-eline" />
          </div>
          <h2 className="ks-h2">What We <em>Offer</em></h2>
          <p className="ks-lead">
            From responsible breeding to full aquaculture support — everything your
            aquarium needs, from our farm to your tank.
          </p>
        </div>

        {/* Cards */}
        <div className="ks-grid">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="ks-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="ks-img-area">
                <div className="ks-slide-img" style={{ backgroundImage: `url('${svc.img}')` }} />
                <a href="/service" className="ks-img-arrow" aria-label="View service">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="ks-body">
                <div className="ks-body-icon">
                  {svc.icon}
                </div>
                <div className="ks-bar" />
                <h3 className="ks-title">{svc.title}</h3>
                <p className="ks-desc">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="ks-cta-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="/service" className="ks-cta">
            View All Services
            <span className="ks-cta-ic">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </motion.div>

      </section>
    </>
  );
}