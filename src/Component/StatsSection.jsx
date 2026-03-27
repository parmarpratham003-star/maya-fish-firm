"use client";

import { useEffect, useRef, useState } from "react";

/* 🔥 COUNT HOOK */
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
}

/* 🔥 COUNTER */
function StatCounter({ value, suffix, label, start }) {
  const count = useCountUp(value, 1800, start);

  return (
    <div className="stat-item">
      <p className="stat-num">
        {count}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

/* 🔥 MAIN SECTION */
export default function StatsSection() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  const stats = [
    { value: 10, suffix: "+", label: "Years of Service" },
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 50, suffix: "+", label: "Fish Varieties" },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        .stats-root {
          font-family: 'Montserrat', sans-serif;
        }

        /* 🔥 SAME AS CTA HEIGHT */
        .stats-strip {
          background: #060e1f;
          padding: 2rem 2rem; /* EXACT SAME AS CTA */
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);

          min-height: 120px;
          display: flex;
          align-items: center;
        }

        .stats-inner {
          max-width: 1100px;
          margin: auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .stat-item {
          flex: 1;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.08);
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-num {
          font-size: 28px;
          font-weight: 800;
          color: #4FD1E8;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .stats-inner {
            flex-direction: column;
            gap: 1.2rem;
          }

          .stat-item {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 10px;
          }

          .stat-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <section ref={ref} className="stats-root stats-strip">
        <div className="stats-inner">

          {stats.map((item, i) => (
            <StatCounter
              key={i}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              start={start}
            />
          ))}

        </div>
      </section>
    </>
  );
}