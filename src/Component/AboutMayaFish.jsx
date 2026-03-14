"use client";

import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    title: "Healthy Fish Breeding",
    desc: "Responsible breeding with clean water systems and balanced nutrition for vibrant, strong fish.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 7.5 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#0A84D6" strokeWidth="1.8" fill="none"/>
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#4FD1E8" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="#0A84D6"/>
      </svg>
    ),
  },
  {
    title: "Modern Aquaculture Practices",
    desc: "Up-to-date water quality management and scientifically guided aquaculture methods.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="10" rx="2" stroke="#0A84D6" strokeWidth="1.8" fill="none"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="#4FD1E8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="#0A84D6"/>
      </svg>
    ),
  },
  {
    title: "Reliable Aquarium Supply",
    desc: "Trusted by hobbyists, pet stores, and bulk buyers for consistent quality and healthy stock.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="#0A84D6" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function AboutMayaFish() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [fishCount, setFishCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const fishTarget = 10, customerTarget = 500, yearTarget = 5;
    let f = 0, c = 0, y = 0;
    const interval = setInterval(() => {
      if (f < fishTarget) { f++; setFishCount(f); }
      if (c < customerTarget) { c += 10; setCustomerCount(c); }
      if (y < yearTarget) { y++; setYearCount(y); }
      if (f >= fishTarget && c >= customerTarget && y >= yearTarget) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        .about-section {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(160deg, #EBF7FF 0%, #F5FBFF 50%, #ffffff 100%);
          padding: 88px 32px;
        }

        .about-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .about-inner { grid-template-columns: 1fr; gap: 40px; }
          .about-section { padding: 60px 20px; }
        }

        .left-col { position: relative; }

        .accent-ring {
          position: absolute;
          top: -18px; left: -18px;
          width: 90px; height: 90px;
          border-radius: 50%;
          border: 2px solid rgba(79,209,232,0.25);
          z-index: 0;
        }
        .accent-dot {
          position: absolute;
          top: 6px; left: 6px;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #4FD1E8;
          opacity: 0.5;
        }

        .img-frame {
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4/3;
          background: linear-gradient(145deg, #c8e8f8, #a0d4ef);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
        }
        .img-frame:hover { transform: scale(1.02); }

        .badge {
          position: absolute;
          bottom: -18px; right: -12px;
          background: #fff;
          border: 1px solid rgba(10,132,214,0.15);
          border-radius: 14px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(10,132,214,0.12);
          z-index: 10;
        }
        .badge-label {
          color: #0A84D6;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 3px;
        }
        .badge-sub { color: #083B66; font-size: 11px; font-weight: 300; }

        .eyebrow {
          color: #4FD1E8;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow::before {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(79,209,232,0.6);
        }

        .about-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .about-h2 .line1 {
          display: block;
          color: #083B66;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        .about-h2 .line2 {
          display: block;
          font-style: italic;
          color: #4FD1E8;
          font-weight: 600;
        }

        .about-desc {
          color: #3a6680;
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 32px;
          max-width: 460px;
        }

        .highlights {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #fff;
          border: 1px solid rgba(10,132,214,0.1);
          border-radius: 12px;
          padding: 14px 18px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .highlight-card:hover {
          border-color: rgba(79,209,232,0.45);
          transform: translateX(4px);
        }

        .hl-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, #E6F6FF, #c8e9f8);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hl-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: #083B66;
          margin-bottom: 3px;
        }
        .hl-desc {
          font-size: 0.78rem;
          color: #5a88a0;
          font-weight: 300;
          line-height: 1.5;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 32px;
        }

        .stat-box {
          background: #fff;
          border: 1px solid rgba(10,132,214,0.1);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
        }

        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #0A84D6;
          display: block;
        }

        .stat-label {
          font-size: 0.72rem;
          color: #5a88a0;
          font-weight: 400;
          margin-top: 2px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0A84D6;
          color: #fff;
          padding: 13px 32px;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.3px;
          transition: background 0.22s, transform 0.18s;
        }
        .read-more-btn:hover { background: #0e9cc4; transform: translateY(-2px); }

        .btn-arrow {
          width: 20px; height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
        }
      `}</style>

      <section className="about-section" ref={sectionRef}>
        <div className="about-inner">

          {/* LEFT — Illustration */}
          <div className="left-col">
            <div className="accent-ring"><div className="accent-dot" /></div>

            <div className="img-frame">
              {/* Replace with <img src="/all.png" alt="Fish Farm" style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
              <svg width="100%" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bgGrad" x1="0" y1="0" x2="380" y2="280" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#b8dff4"/>
                    <stop offset="100%" stopColor="#7ec6e8"/>
                  </linearGradient>
                </defs>
                <rect width="380" height="280" fill="url(#bgGrad)"/>
                <path d="M0 200 Q95 170 190 200 Q285 230 380 200 L380 280 L0 280Z" fill="#2d8fb5" opacity="0.35"/>
                <path d="M0 220 Q95 195 190 220 Q285 245 380 220 L380 280 L0 280Z" fill="#1a7a9e" opacity="0.4"/>
                <g transform="translate(90,110)">
                  <path d="M80 28 C60 8, 20 8, 5 28 C20 48, 60 48, 80 28Z" fill="#fff" opacity="0.85"/>
                  <path d="M80 28 L100 12 L94 28 L100 44Z" fill="#fff" opacity="0.6"/>
                  <circle cx="18" cy="24" r="4" fill="#083B66" opacity="0.7"/>
                  <circle cx="19" cy="23" r="1.5" fill="#fff" opacity="0.9"/>
                </g>
                <g transform="translate(200,80)">
                  <path d="M60 20 C45 6, 14 6, 4 20 C14 34, 45 34, 60 20Z" fill="#4FD1E8" opacity="0.8"/>
                  <path d="M60 20 L75 8 L71 20 L75 32Z" fill="#4FD1E8" opacity="0.55"/>
                  <circle cx="13" cy="17" r="3" fill="#083B66" opacity="0.6"/>
                </g>
                <g transform="translate(130,155)">
                  <path d="M55 18 C40 5, 12 5, 3 18 C12 31, 40 31, 55 18Z" fill="#f97316" opacity="0.75"/>
                  <path d="M55 18 L68 7 L64 18 L68 29Z" fill="#ea6a00" opacity="0.6"/>
                  <circle cx="11" cy="15" r="2.8" fill="#3B0E00" opacity="0.55"/>
                </g>
                <g transform="translate(260,140)">
                  <path d="M48 16 C35 4, 10 4, 3 16 C10 28, 35 28, 48 16Z" fill="#a855f7" opacity="0.7"/>
                  <path d="M48 16 L60 6 L57 16 L60 26Z" fill="#9333ea" opacity="0.5"/>
                </g>
                <circle cx="40" cy="80" r="4" fill="#fff" opacity="0.25"/>
                <circle cx="340" cy="60" r="3" fill="#fff" opacity="0.2"/>
                <circle cx="200" cy="40" r="5" fill="#fff" opacity="0.18"/>
                <path d="M30 260 Q35 240 30 220" stroke="#2d8" strokeWidth="3" opacity="0.4" fill="none" strokeLinecap="round"/>
                <path d="M350 265 Q345 248 352 228" stroke="#2d8" strokeWidth="2.5" opacity="0.35" fill="none" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="badge">
              <div className="badge-label">Ornamental Fish</div>
              <div className="badge-sub">Healthy aquarium fish breeding</div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <div className="eyebrow">About Us</div>

            <h2 className="about-h2">
              <span className="line1">Trusted Ornamental Fish</span>
              <span className="line2">Breeders &amp; Suppliers</span>
            </h2>

            <p className="about-desc">
              MAYA Fish Farm is an ornamental fish breeding farm focused on producing healthy and
              colorful aquarium fish varieties. Our farm follows responsible aquaculture practices
              including proper breeding techniques, balanced nutrition, and water quality management
              to ensure strong fish growth and survival.
            </p>

            <div className="highlights">
              {highlights.map((h) => (
                <div className="highlight-card" key={h.title}>
                  <div className="hl-icon">{h.icon}</div>
                  <div>
                    <div className="hl-title">{h.title}</div>
                    <div className="hl-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-num">{fishCount}+</span>
                <div className="stat-label">Fish Varieties</div>
              </div>
              <div className="stat-box">
                <span className="stat-num">{customerCount}+</span>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-box">
                <span className="stat-num">{yearCount}+</span>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            <button className="read-more-btn">
              Read More
              <span className="btn-arrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H4M8 2V6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}