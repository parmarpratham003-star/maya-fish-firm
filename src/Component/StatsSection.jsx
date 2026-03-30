"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { percent: 90, label: "Quality Service", color: "#378ADD" },
  { percent: 85, label: "Happy Clients",   color: "#1D9E75" },
  { percent: 80, label: "Fish Variety",    color: "#639922" },
];

const SIZE   = 130;
const STROKE = 9;
const R      = (SIZE - STROKE) / 2;
const CIRC   = 2 * Math.PI * R;
const CX     = SIZE / 2;
const CY     = SIZE / 2;
const DUR    = 1500;

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function CircleStat({ percent, label, color, start, delay }) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let t0 = null;

    const tick = (t) => {
      if (!t0) t0 = t;
      const raw = Math.min((t - t0) / DUR, 1);
      const p   = easeOut(raw);
      setProgress(p * percent);
      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, percent]);

  const offset     = CIRC - (progress / 100) * CIRC;
  const rotateDeg  = (progress / percent) * 360 - 90;

  return (
    <div
      className="flex flex-col items-center text-center opacity-0 animate-[fadeUp_0.6s_ease_forwards]"
      style={{ animationDelay: delay }}
    >
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg
          width={SIZE}
          height={SIZE}
          className="block"
        >
          {/* Background ring */}
          <circle
            cx={CX}
            cy={CY}
            r={R}
            stroke="#e5e7eb"
            strokeWidth={STROKE}
            fill="none"
          />
          {/* Animated arc */}
          <circle
            cx={CX}
            cy={CY}
            r={R}
            stroke={color}
            strokeWidth={STROKE}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
            transform={`rotate(${rotateDeg} ${CX} ${CY})`}
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>

        {/* Center number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-800">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="mt-3 text-[11px] uppercase tracking-widest text-gray-400 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref   = useRef(null);
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
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section ref={ref} className="py-12 px-4">
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((s, i) => (
            <CircleStat
              key={i}
              {...s}
              start={start}
              delay={`${i * 140}ms`}
            />
          ))}
        </div>
      </section>
    </>
  );
}