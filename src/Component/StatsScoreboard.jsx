"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { percent: 90, label: "Quality Service", color: "#378ADD" },
  { percent: 85, label: "Happy Clients",   color: "#1D9E75" },
  { percent: 80, label: "Fish Variety",    color: "#639922" },
];

const DUR = 1600;
function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function StatCell({ percent, label, color, start, delay, isLast }) {
  const [value, setValue]   = useState(0);
  const [done, setDone]     = useState(false);
  const [barW, setBarW]     = useState(0);
  const rafRef              = useRef(null);

  useEffect(() => {
    if (!start) return;
    let t0 = null;

    const tick = (t) => {
      if (!t0) t0 = t;
      const raw = Math.min((t - t0) / DUR, 1);
      const val = easeOut(raw) * percent;
      setValue(Math.round(val));
      setBarW((val / 100) * 60);
      if (raw >= 1) setDone(true);
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };

    const timer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [start, percent, delay]);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-center
        py-8 px-4 sm:py-10 sm:px-6
        ${!isLast ? "border-b sm:border-b-0 sm:border-r border-gray-100" : ""}
      `}
    >
      {/* Number */}
      <span
        className="text-4xl sm:text-5xl font-medium leading-none tracking-tight tabular-nums"
        style={{ color }}
      >
        {value}%
      </span>

      {/* Label */}
      <span className="mt-2 text-[10px] uppercase tracking-widest text-gray-400 font-medium text-center">
        {label}
      </span>

      {/* Underbar */}
      <div
        className="mt-3 h-[3px] rounded-full transition-none"
        style={{ width: barW, backgroundColor: color }}
      />
    </div>
  );
}

export default function StatsScoreboard() {
  const ref             = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => { 
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-2 px-4">
      <div
        className="
          flex flex-col sm:flex-row
          border border-gray-100
          rounded-2xl
          overflow-hidden
          bg-white
          animate-[fadeUp_0.6s_ease_forwards]
          opacity-0
        "
      >
        {stats.map((s, i) => (
          <StatCell
            key={i}
            {...s}
            start={start}
            delay={i * 180}
            isLast={i === stats.length - 1}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}