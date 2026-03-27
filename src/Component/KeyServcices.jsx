"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Ornamental Fish Breeding",
    desc: "Breeding vibrant and healthy ornamental fish varieties such as Goldfish, Angel Fish, Guppies, and Fighter Fish.",
    tags: ["Goldfish", "Angel Fish", "Guppies", "Fighter Fish"],
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "01",
    img: "/show-case-img-1.jpg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        {/* Fish body */}
        <path d="M2 12c0 0 3-5 8-5c3 0 5.5 1.5 7 4" stroke="#0A2A4A" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M2 12c0 0 3 5 8 5c3 0 5.5-1.5 7-4" stroke="#0A2A4A" strokeWidth="1.7" strokeLinecap="round"/>
        {/* Tail */}
        <path d="M17 8l4-3v7l-4-3z" stroke="#2C7CB0" strokeWidth="1.5" strokeLinejoin="round" fill="#dbeafe"/>
        {/* Eye */}
        <circle cx="8" cy="12" r="1.2" fill="#0A2A4A"/>
        {/* Fin */}
        <path d="M11 9c1-1.5 2.5-2 3.5-1.5" stroke="#2C7CB0" strokeWidth="1.3" strokeLinecap="round"/>
        {/* Bubbles */}
        <circle cx="19" cy="5" r="0.8" stroke="#2C7CB0" strokeWidth="1.2"/>
        <circle cx="21" cy="3" r="0.5" stroke="#2C7CB0" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    title: "Aquarium Fish Supply",
    desc: "Supplying quality ornamental fish to aquarium hobbyists, retailers, and pet stores.",
    tags: ["Hobbyists", "Pet Stores", "Bulk Orders"],
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "02",
    img: "/s2.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        {/* Tank glass */}
        <rect x="3" y="8" width="18" height="13" rx="2" stroke="#0A2A4A" strokeWidth="1.7" fill="#dbeafe" fillOpacity="0.4"/>
        {/* Water line */}
        <path d="M3 13c2-1 4 1 6 0s4-1 6 0s2 1 3 0" stroke="#2C7CB0" strokeWidth="1.3" strokeLinecap="round"/>
        {/* Lid */}
        <rect x="5" y="5" width="14" height="3" rx="1" stroke="#0A2A4A" strokeWidth="1.5" fill="#dbeafe" fillOpacity="0.6"/>
        {/* Small fish inside */}
        <path d="M8 17c1.5-1 3-1 4 0" stroke="#0A2A4A" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M8 17c1.5 1 3 1 4 0" stroke="#0A2A4A" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="8.5" cy="17" r="0.7" fill="#0A2A4A"/>
        {/* Bubble */}
        <circle cx="15" cy="15" r="0.8" stroke="#2C7CB0" strokeWidth="1.1"/>
        <circle cx="13" cy="13" r="0.5" stroke="#2C7CB0" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    title: "Fish Nutrition & Care",
    desc: "Providing proper fish feeding guidance and care support to maintain healthy aquarium environments.",
    tags: ["Feeding Plans", "Water Quality", "Health Support"],
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "03",
    img: "/silde3.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        {/* Bowl / dish */}
        <path d="M5 12a7 7 0 0014 0" stroke="#0A2A4A" strokeWidth="1.7" strokeLinecap="round"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="#0A2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Water drops / food pellets */}
        <circle cx="9" cy="8" r="1.2" fill="#2C7CB0" opacity="0.7"/>
        <circle cx="12" cy="6.5" r="1.2" fill="#2C7CB0" opacity="0.7"/>
        <circle cx="15" cy="8" r="1.2" fill="#2C7CB0" opacity="0.7"/>
        {/* Spoon handle */}
        <path d="M16 4l3 3" stroke="#0A2A4A" strokeWidth="1.4" strokeLinecap="round"/>
        {/* Heart shape - care symbol */}
        <path d="M10.5 16.5c0 0 1.5 1.5 1.5 1.5s1.5-1.5 1.5-1.5a1.06 1.06 0 00-1.5-1.5 1.06 1.06 0 00-1.5 1.5z" fill="#2C7CB0" opacity="0.8"/>
      </svg>
    ),
  },
  {
    title: "Aquaculture Support",
    desc: "Promoting responsible fish farming practices and sustainable aquaculture methods.",
    tags: ["Sustainable Farming", "Best Practices", "Consultation"],
    accent: "#0A2A4A",
    light: "#EFF3F8",
    num: "04",
    img: "/show-case-img-1.jpg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        {/* Pond / water surface */}
        <ellipse cx="12" cy="18" rx="9" ry="3" stroke="#0A2A4A" strokeWidth="1.6" fill="#dbeafe" fillOpacity="0.4"/>
        {/* Plant stem left */}
        <path d="M7 18V12" stroke="#0A2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Leaf left */}
        <path d="M7 14c-2-1-3-3-2-5c1 2 3 3 2 5z" fill="#2C7CB0" opacity="0.75" stroke="#2C7CB0" strokeWidth="0.8"/>
        {/* Plant stem right */}
        <path d="M17 18V11" stroke="#0A2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Leaf right */}
        <path d="M17 13c2-1 3-3 2-5c-1 2-3 3-2 5z" fill="#2C7CB0" opacity="0.75" stroke="#2C7CB0" strokeWidth="0.8"/>
        {/* Center plant */}
        <path d="M12 18V9" stroke="#0A2A4A" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M12 11c-1.5-1.5-1.5-4 0-5c1.5 1.5 1.5 4 0 5z" fill="#2C7CB0" stroke="#2C7CB0" strokeWidth="0.8"/>
        {/* Small fish */}
        <path d="M9 17c1-0.5 2-0.5 3 0" stroke="#0A2A4A" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M9 17c1 0.5 2 0.5 3 0" stroke="#0A2A4A" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function KeyServices() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        .ks-section {
          font-family: 'Montserrat', sans-serif;
         background: #F8FBFF;
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
          border-radius: 2px;
          overflow: hidden;
          background: #fff;
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

        /* Blue top border on hover */
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

        /* ── Full-card image overlay ── */
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

        /* ── Text body ── */
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

        .ks-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(10,42,74,0.35);
        }

        .ks-body-icon {
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
        }

        .ks-bar { width: 28px; height: 2px; background: #0A2A4A; flex-shrink: 0; }

        .ks-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 14.5px; font-weight: 700;
          color: #081c30; line-height: 1.3; margin: 0;
          letter-spacing: -0.015em;
        }

        .ks-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 400;
          color: #6a88a0; line-height: 1.8; margin: 0; flex: 1;
        }

        .ks-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .ks-tpill {
          font-family: 'Montserrat', sans-serif;
          font-size: 9.5px; font-weight: 600;
          border-radius: 100px; padding: 2px 9px;
          letter-spacing: 0.3px; text-transform: uppercase;
        }

        /* ── CTA ── */
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
  content:'';
  position:absolute;
  top:0;
  left:-80%;
  width:60%;
  height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent);
  transform:skewX(-20deg);
}
  .ks-cta:hover::before {
  animation: mfBtnShine 0.55s ease forwards;
}

/* Hover */
.ks-cta:hover {
  background:#142d55;
  border-color:#142d55;
  transform:translateY(-2px);
  box-shadow:0 8px 28px rgba(27,58,107,0.50);
}
       .ks-cta:active {
  transform:scale(0.97);
}
        .ks-cta-ic {
  width:34px;
  height:34px;
  border-radius:50%;
  background:rgba(255,255,255,0.18);
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left: 10px;
  transition: all 0.3s ease;
}
  .ks-cta:hover .ks-cta-ic {
  background:rgba(255,255,255,0.32);
  transform:rotate(45deg);
}

        @media (max-width: 1024px) { .ks-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px)  { .ks-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="ks-section">

        <div className="ks-blob" style={{
          top: "-80px", right: "-120px", width: "480px", height: "480px",
          background: "rgba(10,42,74,0.05)", transform: "rotate(20deg)",
          borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
        }} />
        <div className="ks-blob" style={{
          bottom: "-60px", left: "-80px", width: "360px", height: "360px",
          background: "rgba(44,124,176,0.06)", transform: "rotate(-15deg)",
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
              <div className="ks-img-area">
                <div className="ks-slide-img" style={{ backgroundImage: `url('${svc.img}')` }} />
                <a href="/service" className="ks-img-arrow" aria-label="View service">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="ks-body">
                <span className="ks-num">{svc.num}</span>

                <div className="ks-body-icon" style={{
                  background: svc.light,
                  border: `1px solid rgba(10,42,74,0.13)`,
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
                      border: `1px solid rgba(10,42,74,0.12)`,
                    }}>{t}</span>
                  ))}
                </div>
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