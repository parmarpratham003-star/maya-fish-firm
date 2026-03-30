"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0 = null;
    const tick = (t) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { value: 10,  suffix: "+", label: "Years of Service" },
  { value: 500, suffix: "+", label: "Happy Clients"    },
  { value: 50,  suffix: "+", label: "Fish Varieties"   },
];

function StatItem({ value, suffix, label, start, delay }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div
      className="flex flex-col items-center gap-1 opacity-0 animate-fadeUp"
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      <div className="flex items-end leading-none">
        <span className="text-6xl md:text-7xl font-black tabular-nums tracking-tight text-blue-950">
          {count}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-blue-500 mb-1 ml-0.5">
          {suffix}
        </span>
      </div>
      <p className="text-xs font-semibold tracking-widest uppercase text-blue-900/50 mt-1">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStart(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      <section ref={ref} className="py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center flex-1 justify-center">
              <StatItem {...s} start={start} delay={`${i * 140}ms`} />
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-blue-200 mx-8" />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}