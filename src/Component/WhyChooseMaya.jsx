"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 7.5V14C4 19.5 8.4 24.6 14 26C19.6 24.6 24 19.5 24 14V7.5L14 3Z" stroke="#1e3a5f" strokeWidth="1.8" fill="#dbeafe" strokeLinejoin="round"/>
        <path d="M10 14l3 3 5-5" stroke="#1e3a5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Quality Service",
    desc: "We follow responsible fish breeding practices to ensure healthy and vibrant fish varieties.",
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#1e3a5f" strokeWidth="1.8" fill="#dbeafe"/>
        <path d="M14 8v6l3.5 3.5" stroke="#1e3a5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "On-time Delivery",
    desc: "Reliable supply of ornamental fish to hobbyists and aquarium retailers, always on schedule.",
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="15" rx="3" stroke="#1e3a5f" strokeWidth="1.8" fill="#dbeafe"/>
        <path d="M3 12h22" stroke="#1e3a5f" strokeWidth="1.5"/>
        <circle cx="9" cy="17" r="2.5" fill="#1e3a5f"/>
        <path d="M9 15.5v3M7.5 17h3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <rect x="14" y="15.5" width="7" height="1.5" rx="0.75" fill="#1e3a5f" opacity="0.35"/>
        <rect x="14" y="18" width="4.5" height="1.5" rx="0.75" fill="#1e3a5f" opacity="0.35"/>
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Competitive pricing while maintaining high standards of fish health and quality.",
  },
  {
    id: 4,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="9" r="4" stroke="#1e3a5f" strokeWidth="1.8" fill="#dbeafe"/>
        <circle cx="19" cy="9" r="4" stroke="#1e3a5f" strokeWidth="1.8" fill="#dbeafe"/>
        <path d="M3 23c0-4 3-7 7-7M19 16c4 0 7 3 7 7" stroke="#1e3a5f" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M13 16c.6.2 1.4.3 2 0" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customer Support",
    desc: "Expert guidance for aquarium maintenance and fish care, whenever you need it.",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Years of service" },
  { value: 500, suffix: "+", label: "Happy clients" },
  { value: 50, suffix: "+", label: "Fish varieties" },
];

/* ── Counter hook ── */
function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

/* ── Single stat counter ── */
function StatCounter({ value, suffix, label, started }) {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="wcu-stat-item">
      <p className="wcu-stat-num">{count}{suffix}</p>
      <p className="wcu-stat-label">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.18 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .wcu-section { font-family: 'Montserrat', sans-serif; }

        /* ── Slide animations ── */
        .wcu-slide-left {
          opacity: 0;
          transform: translateX(-48px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wcu-slide-right {
          opacity: 0;
          transform: translateX(48px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wcu-slide-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .wcu-visible .wcu-slide-left,
        .wcu-visible .wcu-slide-right,
        .wcu-visible .wcu-slide-up {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* stagger delays */
        .wcu-delay-1 { transition-delay: 0.05s; }
        .wcu-delay-2 { transition-delay: 0.15s; }
        .wcu-delay-3 { transition-delay: 0.25s; }
        .wcu-delay-4 { transition-delay: 0.35s; }
        .wcu-delay-5 { transition-delay: 0.45s; }
        .wcu-delay-6 { transition-delay: 0.55s; }

        /* ── Section label — matches footer style ── */
        .wcu-section-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 1.4rem;
        }
        .wcu-label-line {
          display: block;
          width: 48px;
          height: 1.5px;
          background: #1e3a5f;
          opacity: 0.5;
        }
        .wcu-label-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #1e3a5f;
        }

        /* ── Heading ── */
        .wcu-heading {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1px;
          color: #0f1f38;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          margin: 0 0 1.1rem;
        }
        .wcu-heading span { color: #1e3a5f; }

        /* ── Stats ── */
        .wcu-stats-row {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 2.4rem;
          flex-wrap: nowrap;
        }
        .wcu-stat-item { padding: 0 1.6rem 0 0; white-space: nowrap; }
        .wcu-stat-item:first-child { padding-left: 0; }
        .wcu-stat-divider {
          width: 1px;
          height: 36px;
          background: #e2e8f0;
          margin-right: 1.6rem;
          flex-shrink: 0;
        }
        .wcu-stat-num {
          font-size: 26px;
          font-weight: 800;
          color: #1e3a5f;
          line-height: 1;
          margin: 0 0 4px;
          font-family: 'Montserrat', sans-serif;
        }
        .wcu-stat-label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── CTA buttons ── */
        .wcu-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #1e3a5f;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          font-family: 'Montserrat', sans-serif;
        }
        .wcu-cta-primary:hover { background: #152b46; transform: translateY(-2px); }

        .wcu-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1.5px solid rgba(30,58,95,0.25);
          color: #1e3a5f;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
          font-family: 'Montserrat', sans-serif;
        }
        .wcu-cta-ghost:hover { border-color: #1e3a5f; transform: translateY(-2px); }

        /* ── Feature cards ── */
        .wcu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
        }
        .wcu-v-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 1px;
          height: 100%;
          background: #e2e8f0;
          transform: translateX(-50%);
        }
        .wcu-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 2rem 0;
        }
        .wcu-card-left { padding-right: 2.5rem; }
        .wcu-card-right { padding-left: 2.5rem; margin-top: 3.5rem; }
        .wcu-card-bottom { border-top: 1px solid #e2e8f0; }

        .wcu-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #eff6ff;
          border: 1.5px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wcu-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #0f1f38;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }
        .wcu-card-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.75;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Layout ── */
        .wcu-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem 5rem;
          align-items: start;
        }
        .wcu-left { max-width: 440px; }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .wcu-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .wcu-left { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .wcu-grid { grid-template-columns: 1fr; }
          .wcu-v-line { display: none; }
          .wcu-card-left,
          .wcu-card-right { padding: 1.5rem 0; margin-top: 0; }
          .wcu-card-right { border-top: 1px solid #e2e8f0; }
          .wcu-card-bottom { border-top: 1px solid #e2e8f0; }
          .wcu-stats-row { flex-wrap: nowrap; }
          .wcu-stat-item { padding-right: 1rem; }
          .wcu-stat-divider { margin-right: 1rem; }
          .wcu-stat-num { font-size: 20px; }
          .wcu-stat-label { font-size: 9px; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`wcu-section bg-white py-24 px-6 md:px-16 lg:px-24 ${visible ? "wcu-visible" : ""}`}
      >
        <div className="wcu-inner">

          {/* ── LEFT ── */}
          <div className="wcu-left">

            {/* Section label — matches footer style */}
            <div className="wcu-section-label wcu-slide-left wcu-delay-1">
              <span className="wcu-label-line" />
              <span className="wcu-label-text">Why Choose Us</span>
              <span className="wcu-label-line" />
            </div>

            <h2 className="wcu-heading wcu-slide-left wcu-delay-2">
              The MAYA<br />
              <span>Difference</span>
            </h2>

            <p className="wcu-slide-left wcu-delay-3" style={{
              fontSize: "14.5px", color: "#64748b", lineHeight: "1.85",
              marginBottom: "2rem", fontWeight: 400,
            }}>
              We provide high-quality ornamental fish with expert care, trusted
              service, and competitive pricing — built on a decade of responsible
              breeding and community trust.
            </p>

            {/* Stats with countup */}
            <div className="wcu-stats-row wcu-slide-left wcu-delay-4">
              {stats.map((s, i) => (
                <>
                  <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} started={visible} />
                  {i < stats.length - 1 && <div className="wcu-stat-divider" />}
                </>
              ))}
            </div>

          
          </div>

          {/* ── RIGHT — Feature grid ── */}
          <div className="wcu-grid">
            <div className="wcu-v-line" />

            {features.map((f, i) => {
              const isLeft = i % 2 === 0;
              const isBottom = i >= 2;
              return (
                <div
                  key={f.id}
                  className={[
                    "wcu-card",
                    isLeft ? "wcu-card-left" : "wcu-card-right",
                    isBottom ? "wcu-card-bottom" : "",
                    isLeft ? "wcu-slide-left" : "wcu-slide-right",
                    `wcu-delay-${i + 2}`,
                  ].join(" ")}
                >
                  <div className="wcu-icon-box">{f.icon}</div>
                  <h4 className="wcu-card-title">{f.title}</h4>
                  <p className="wcu-card-desc">{f.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}