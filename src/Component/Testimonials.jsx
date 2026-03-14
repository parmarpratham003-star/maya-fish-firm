"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    initials: "RP",
    name: "Ravi Patel",
    role: "Aquarium Hobbyist, Ahmedabad",
    rating: 5,
    text: "MAYA Fish Farm provides healthy and colorful fish varieties. The quality and service are excellent — I've been a repeat customer and every order has exceeded my expectations.",
    avatarFrom: "#0A84D6",
    avatarTo: "#4FD1E8",
  },
  {
    initials: "AS",
    name: "Amit Shah",
    role: "Aquarium Shop Owner, Surat",
    rating: 4,
    text: "Reliable fish supplier for aquarium shops. The fish are healthy and well maintained. Our store has been sourcing from MAYA for months and the consistency is outstanding.",
    avatarFrom: "#083B66",
    avatarTo: "#0A84D6",
  },
  {
    initials: "NK",
    name: "Nisha Kumar",
    role: "Hobbyist Collector, Vadodara",
    rating: 5,
    text: "The Guppies and Angel Fish I ordered were vibrant and arrived in perfect condition. MAYA's care for fish quality and packaging is unlike any other supplier I've used.",
    avatarFrom: "#4FD1E8",
    avatarTo: "#0A84D6",
  },
];

const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill={filled ? "#0A84D6" : "none"}>
    <path
      d="M8 1l1.8 5H15l-4.2 3 1.6 5L8 11.2 3.6 14l1.6-5L1 6h5.2z"
      stroke="#0A84D6"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M9 11L5 7l4-4" stroke="#0A84D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M5 3l4 4-4 4" stroke="#0A84D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function TestimonialCard({ t }) {
  return (
    <div className="group bg-white border border-[rgba(10,132,214,0.1)] rounded-[20px] p-9 flex flex-col gap-5 relative overflow-hidden transition-all duration-300 hover:border-[rgba(79,209,232,0.4)] hover:-translate-y-1 h-full">

      {/* Top accent bar */}
      <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A84D6] to-[#4FD1E8] rounded-t-[20px]" />

      {/* Quote mark */}
      <span className="font-serif text-[5rem] text-[rgba(79,209,232,0.15)] leading-[0.7] h-9 block">
        "
      </span>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < t.rating} />
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif italic text-[#083B66] text-base leading-relaxed flex-grow">
        {t.text}
      </p>

      {/* Divider */}
      <div className="h-px bg-[rgba(10,132,214,0.08)]" />

      {/* Client */}
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${t.avatarFrom}, ${t.avatarTo})`,
          }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-[#083B66] text-sm font-semibold">{t.name}</p>
          <p className="text-[#6d97b0] text-xs font-light">{t.role}</p>
        </div>
      </div>

    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perPage = isMobile ? 1 : 2;
  const pageCount = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="relative bg-gradient-to-b from-[#EBF7FF] via-[#f5fbff] to-white py-24 px-6 overflow-hidden">

      {/* Decorative rings */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full border border-[rgba(79,209,232,0.1)] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full border border-[rgba(10,132,214,0.08)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-px bg-[#4FD1E8] opacity-60" />
          <p className="text-[#4FD1E8] text-[11px] font-semibold tracking-[4px] uppercase">
            Testimonials
          </p>
          <span className="w-6 h-px bg-[#4FD1E8] opacity-60" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-center leading-tight mb-3">
          <span className="block text-[#083B66] text-4xl md:text-5xl font-light">
            What Our Clients
          </span>
          <span className="block italic text-[#4FD1E8] text-4xl md:text-5xl font-semibold">
            Say About Us
          </span>
        </h2>

        <p className="text-center text-[#3a6680] text-sm leading-relaxed font-light mb-14">
          Real feedback from aquarium hobbyists and shop owners who trust MAYA Fish Farm.
        </p>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch"
          >
            {visible.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-10">

          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-[rgba(10,132,214,0.2)] bg-white flex items-center justify-center transition-all hover:border-[#4FD1E8] hover:bg-[#E6F6FF] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft />
          </button>

          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all duration-200 ${
                i === page
                  ? "w-[28px] h-2 bg-[#0A84D6]"
                  : "w-2 h-2 bg-[rgba(10,132,214,0.2)] hover:bg-[rgba(10,132,214,0.4)]"
              }`}
            />
          ))}

          <button
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page === pageCount - 1}
            className="w-10 h-10 rounded-full border border-[rgba(10,132,214,0.2)] bg-white flex items-center justify-center transition-all hover:border-[#4FD1E8] hover:bg-[#E6F6FF] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}