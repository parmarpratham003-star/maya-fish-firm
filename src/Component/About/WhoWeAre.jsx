"use client";

import { useEffect, useRef, useState } from "react";
import { FaFish, FaWater, FaHeart } from "react-icons/fa";

export default function WhoWeAre() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div
          className={`transition-all duration-1000
          ${visible ? "animate-slideLeft opacity-100" : "opacity-0"}`}
        >

          <img
            src="/all.png"
            alt="Maya Fish Firm"
            className="rounded-2xl shadow-xl w-full hover:scale-105 transition duration-500"
          />

        </div>


        {/* RIGHT CONTENT */}
        <div
          className={`transition-all duration-1000
          ${visible ? "animate-slideRight opacity-100" : "opacity-0"}`}
        >

          <p className="text-[#0A84D6] font-semibold mb-2 animate-pulse">
            About Maya Fish Firm
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#083B66] mb-6">
             Who We Are
          </h2>

          <p className="text-[#083B66] text-lg leading-relaxed mb-6">
            Maya Fish Firm is committed to providing high-quality ornamental
            fish and nutritious live fish feed. Our mission is to support
            aquarium lovers and businesses with reliable, healthy, and
            affordable fish supply.
          </p>

          <p className="text-[#083B66] text-lg leading-relaxed mb-8">
            We believe that proper breeding, clean water systems, and
            responsible care create strong and vibrant fish.
          </p>


          {/* Feature Points */}
          <div className="space-y-4">

            <div className="flex items-center gap-3 text-[#083B66]">
              <FaFish className="text-[#0A84D6]" />
              High-quality ornamental fish
            </div>

            <div className="flex items-center gap-3 text-[#083B66]">
              <FaWater className="text-[#0A84D6]" />
              Clean water breeding systems
            </div>

            <div className="flex items-center gap-3 text-[#083B66]">
              <FaHeart className="text-[#0A84D6]" />
              Responsible care for healthy fish
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}