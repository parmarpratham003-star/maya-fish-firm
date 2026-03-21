"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Ornamental Fish Breeding",
    desc: "Breeding vibrant and healthy ornamental fish varieties such as Goldfish, Angel Fish, Guppies, and Fighter Fish.",
    tags: ["Goldfish", "Angel Fish", "Guppies", "Fighter Fish"],
    accent: "#0A84D6",
    light: "#E6F6FF",
    num: "01",
    img: "/show-case-img-1.jpg",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M3 17c2-4 5-6 9-6s7 2 9 6" stroke="#0A84D6" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 17c1-2 3-3 6-3s5 1 6 3" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="3" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M17 8c0-1.5-.7-2.8-2-3.5" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Aquarium Fish Supply",
    desc: "Supplying quality ornamental fish to aquarium hobbyists, retailers, and pet stores.",
    tags: ["Hobbyists", "Pet Stores", "Bulk Orders"],
    accent: "#0871B9",
    light: "#DCF0FF",
    num: "02",
    img: "/s2.png",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="18" height="8" rx="2" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M7 13V9a5 5 0 0110 0v4" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 17h2M12 17h4" stroke="#0A84D6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Fish Nutrition & Care",
    desc: "Providing proper fish feeding guidance and care support to maintain healthy aquarium environments.",
    tags: ["Feeding Plans", "Water Quality", "Health Support"],
    accent: "#0A9FBF",
    light: "#DFF8FF",
    num: "03",
    img: "/silde3.png",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.3 4.7 3.3 6H12h3.7C17.7 14.7 19 12.5 19 10c0-3.5-3-7-7-7z" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M9 16v3h6v-3" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 10c0-1.1.9-2 2-2s2 .9 2 2" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Aquaculture Support",
    desc: "Promoting responsible fish farming practices and sustainable aquaculture methods.",
    tags: ["Sustainable Farming", "Best Practices", "Consultation"],
    accent: "#0A84D6",
    light: "#E6F6FF",
    num: "04",
    img: "/show-case-img-1.jpg",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.8 5.5H20l-4.6 3.4 1.8 5.5L12 13l-5.2 3.4 1.8-5.5L4 7.5h6.2z" stroke="#0A84D6" strokeWidth="1.7"/>
        <circle cx="12" cy="13" r="2.2" stroke="#4FD1E8" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

export default function KeyServices() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .ks-section {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(160deg, #f0f9ff 0%, #e4f4fd 50%, #d8eef9 100%);
          padding: 5.5rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .ks-blob { position: absolute; pointer-events: none; }

        /* ── Section header ── */
        .ks-hdr {
          text-align: center;
          max-width: 520px;
          margin: 0 auto 3.8rem;
        }
        .ks-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 1.1rem;
        }
        .ks-eline { width: 28px; height: 1px; background: #4FD1E8; display: block; }
        .ks-etxt {
          font-size: 11px; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase; color: #4FD1E8;
        }
        .ks-h2 {
          font-size: clamp(1.9rem, 3.8vw, 2.8rem);
          font-weight: 800; color: #083B66;
          line-height: 1.18; letter-spacing: -0.025em;
          margin: 0 0 0.9rem;
        }
        .ks-h2 em { font-style: normal; color: #0A84D6; }
        .ks-lead {
          font-size: 14px; font-weight: 400;
          color: #5a7a90; line-height: 1.8; margin: 0;
        }

        /* ── Grid ── */
        .ks-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.4rem;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* ── Card shell ── */
        .ks-card {
          position: relative;
          border-radius: 0;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e0ecf5;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          min-height: 360px;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .ks-card:hover {
          box-shadow: 0 20px 56px rgba(10,132,214,0.18);
          transform: translateY(-5px);
          z-index: 2;
        }
        /* Blue top border on hover */
        .ks-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0A84D6, #4FD1E8);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          z-index: 10;
        }
        .ks-card:hover::before { transform: scaleX(1); }

        /* ── Full-card image overlay (slides from top) ── */
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
          filter: brightness(0.55) saturate(0.85);
        }
        .ks-slide-img::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(4,12,30,0.15) 0%,
            rgba(4,12,30,0.75) 100%
          );
        }
        .ks-card:hover .ks-slide-img { transform: translateY(0); }

        /* Arrow button — appears on hover */
        .ks-img-arrow {
          position: absolute; bottom: 1.2rem; right: 1.2rem;
          width: 36px; height: 36px; border-radius: 0;
          background: #0A84D6;
          display: flex; align-items: center; justify-content: center;
          z-index: 6; text-decoration: none;
          opacity: 0; transform: translateY(8px);
          transition: opacity 0.28s ease 0.18s, transform 0.28s ease 0.18s;
          box-shadow: 0 4px 14px rgba(10,132,214,0.55);
          pointer-events: all;
        }
        .ks-card:hover .ks-img-arrow { opacity: 1; transform: translateY(0); }

        /* ── Text body ── */
        .ks-body {
          padding: 1.6rem 1.6rem 1.8rem;
          display: flex; flex-direction: column;
          gap: 0.7rem; flex: 1;
          position: relative;
          z-index: 3;
          background: #fff;
          /* Hide entire body when image slides in */
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        /* ← KEY CHANGE: hide ALL body content on hover */
        .ks-card:hover .ks-body {
          opacity: 0;
          visibility: hidden;
        }

        /* num */
        .ks-num {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(10,132,214,0.4);
          font-family: monospace;
        }

        /* icon */
        .ks-body-icon {
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 0;
        }

        /* accent bar */
        .ks-bar {
          width: 28px; height: 2px;
          background: #0A84D6;
          flex-shrink: 0;
        }

        .ks-title {
          font-size: 15px; font-weight: 700;
          color: #081c30; line-height: 1.3; margin: 0;
          letter-spacing: -0.015em;
        }

        .ks-desc {
          font-size: 12.5px; font-weight: 400;
          color: #6a88a0; line-height: 1.78;
          margin: 0; flex: 1;
        }

        /* tags */
        .ks-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .ks-tpill {
          font-size: 10px; font-weight: 600;
          border-radius: 0; padding: 2px 8px;
          letter-spacing: 0.2px; text-transform: uppercase;
        }

        /* learn more */
        .ks-more {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 11.5px; font-weight: 700;
          text-decoration: none; margin-top: 0.15rem;
          width: fit-content; letter-spacing: 0.4px;
          text-transform: uppercase;
          border-bottom: 1.5px solid currentColor;
          padding-bottom: 1px;
          transition: opacity 0.2s;
        }
        .ks-more:hover { opacity: 0.75; }

        /* ── CTA ── */
        .ks-cta-wrap {
          display: flex; justify-content: center; margin-top: 3.2rem;
        }
        .ks-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 34px;
          background: linear-gradient(135deg, #0A84D6, #0AAFCF);
          color: #fff; font-size: 13.5px; font-weight: 600;
          border-radius: 999px; text-decoration: none;
          letter-spacing: 0.3px;
          box-shadow: 0 6px 24px rgba(10,132,214,0.30);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ks-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(10,132,214,0.40);
        }
        .ks-cta-ic {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(255,255,255,0.22);
          display: flex; align-items: center; justify-content: center;
        }

        @media (max-width: 1024px) {
          .ks-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ks-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ks-section">

        {/* Blobs */}
        <div className="ks-blob" style={{
          top: "-80px", right: "-120px", width: "480px", height: "480px",
          background: "rgba(10,132,214,0.05)", transform: "rotate(20deg)",
          borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
        }} />
        <div className="ks-blob" style={{
          bottom: "-60px", left: "-80px", width: "360px", height: "360px",
          background: "rgba(79,209,232,0.06)", transform: "rotate(-15deg)",
          borderRadius: "40% 60% 45% 55% / 55% 45% 60% 40%",
        }} />

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
              {/* Image overlay — slides down from top on hover */}
              <div className="ks-img-area">
                <div className="ks-slide-img" style={{ backgroundImage: `url('${svc.img}')` }} />
                <a href="/service" className="ks-img-arrow" aria-label="View service">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10"
                      stroke="#fff" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Text body — fully hidden on hover */}
              <div className="ks-body">
                <span className="ks-num">{svc.num}</span>

                <div className="ks-body-icon" style={{
                  background: svc.light,
                  border: `1px solid rgba(10,132,214,0.13)`,
                }}>
                  {svc.icon}
                </div>

                <div className="ks-bar" />
                <h3 className="ks-title">{svc.title}</h3>
                <p className="ks-desc">{svc.desc}</p>

                <div className="ks-tags">
                  {svc.tags.map(t => (
                    <span key={t} className="ks-tpill" style={{
                      color: svc.accent,
                      background: svc.light,
                      border: `1px solid rgba(10,132,214,0.12)`,
                    }}>{t}</span>
                  ))}
                </div>

                <a href="/service" className="ks-more" style={{ color: svc.accent }}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H6M11 3V8"
                      stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
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
                <path d="M7 17L17 7M17 7H7M17 7v10"
                  stroke="#fff" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </motion.div>

      </section>
    </>
  );
}