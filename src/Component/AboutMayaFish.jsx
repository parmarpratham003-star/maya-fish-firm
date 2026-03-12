"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutMayaFish() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [fishCount, setFishCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const fishTarget = 10;
    const customerTarget = 500;
    const yearTarget = 5;

    let f = 0;
    let c = 0;
    let y = 0;

    const interval = setInterval(() => {

      if (f < fishTarget) {
        f++;
        setFishCount(f);
      }

      if (c < customerTarget) {
        c += 10;
        setCustomerCount(c);
      }

      if (y < yearTarget) {
        y++;
        setYearCount(y);
      }

      if (f >= fishTarget && c >= customerTarget && y >= yearTarget) {
        clearInterval(interval);
      }

    }, 30);

  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 bg-gradient-to-b from-[#E6F6FF] to-white"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group">

          <img
            src="/all.png"
            alt="Fish Farm"
            className="rounded-3xl shadow-2xl w-full transition duration-700 group-hover:scale-105"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-10 -right-10 backdrop-blur-md bg-white/80
          p-6 rounded-xl shadow-xl border border-white/40">

            <p className="text-[#0A84D6] font-semibold text-sm">
              Premium Quality Fish
            </p>

            <p className="text-[#083B66] text-xs">
              Healthy ornamental fish breeding
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Section label */}
          <p className="text-[#4FD1E8] font-semibold tracking-[4px] uppercase mb-4 text-sm">
            About Us
          </p>

          {/* Heading (same style as Hero) */}
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">

            <span className="block text-[#083B66] font-light tracking-wide">
              Trusted Ornamental Fish
            </span>

            <span className="block italic text-[#4FD1E8] font-semibold">
              Breeders & Suppliers
            </span>

          </h2>

          {/* Description */}
          <p className="text-[#083B66] leading-relaxed mb-10">
            Maya Fish Firm specializes in breeding high-quality ornamental
            fish and supplying healthy aquarium fish for hobbyists,
            pet stores, and bulk buyers. We maintain clean water systems
            and proper breeding methods to ensure strong fish.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10">

            <div>
              <h3 className="text-3xl font-bold text-[#0A84D6]">
                {fishCount}+
              </h3>
              <p className="text-sm text-[#083B66]">Fish Varieties</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#0A84D6]">
                {customerCount}+
              </h3>
              <p className="text-sm text-[#083B66]">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#0A84D6]">
                {yearCount}+
              </h3>
              <p className="text-sm text-[#083B66]">Years Experience</p>
            </div>

          </div>

          {/* Button */}
          <button
            className="bg-[#0A84D6] text-white px-10 py-3 rounded-full
            hover:bg-[#4FD1E8] hover:scale-105 transition duration-300
            shadow-xl"
          >
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}