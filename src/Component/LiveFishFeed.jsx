"use client";

import { FaBug, FaLeaf, FaFish } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function LiveFishFeed() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-1000
        ${visible ? "animate-slideDown opacity-100" : "opacity-0"}`}>

          <p className="text-[#0A84D6] font-semibold mb-2 animate-pulse">
            Live Fish Feed
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#083B66] transition duration-500 hover:text-[#0A84D6]">
            Nutritious Live Fish Feed
          </h2>

          <p className="text-[#083B66] mt-4 max-w-2xl mx-auto">
            We provide high-quality live fish food that supports healthy
            growth, stronger immunity, and vibrant coloration for
            ornamental fish.
          </p>

        </div>


        {/* Organic Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">

          {/* Worms */}
          <div className={`group bg-white p-10 shadow-xl
          rounded-[60%_40%_55%_45%/45%_60%_40%_55%]
          hover:scale-105 transition duration-500 relative overflow-hidden
          ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}>

            <div className="flex items-center gap-4 mb-6">

              <FaBug className="text-[#0A84D6] text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />

              <h3 className="text-xl font-semibold text-[#083B66] transition duration-500 group-hover:text-[#0A84D6] group-hover:-translate-y-1">
                Worms
              </h3>

            </div>

            <p className="text-[#083B66] text-sm leading-relaxed transition duration-500 group-hover:translate-y-[-3px]">
              Protein-rich live worms ideal for fish growth and
              strengthening immunity in aquarium fish.
            </p>

          </div>


          {/* Natural Feed */}
          <div className={`group bg-white p-10 shadow-xl
          rounded-[55%_45%_60%_40%/40%_60%_45%_55%]
          hover:scale-105 transition duration-500 relative overflow-hidden
          ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}>

            <div className="flex items-center gap-4 mb-6">

              <FaLeaf className="text-[#4FD1E8] text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />

              <h3 className="text-xl font-semibold text-[#083B66] transition duration-500 group-hover:text-[#0A84D6] group-hover:-translate-y-1">
                Natural Live Feed
              </h3>

            </div>

            <p className="text-[#083B66] text-sm leading-relaxed transition duration-500 group-hover:translate-y-[-3px]">
              Natural feed that keeps fish active, healthy,
              and improves vitality and coloration.
            </p>

          </div>


          {/* Breeding Feed */}
          <div className={`group bg-white p-10 shadow-xl
          rounded-[45%_55%_40%_60%/60%_40%_55%_45%]
          hover:scale-105 transition duration-500 relative overflow-hidden
          ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}>

            <div className="flex items-center gap-4 mb-6">

              <FaFish className="text-[#0A84D6] text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />

              <h3 className="text-xl font-semibold text-[#083B66] transition duration-500 group-hover:text-[#0A84D6] group-hover:-translate-y-1">
                Breeding Support Feed
              </h3>

            </div>

            <p className="text-[#083B66] text-sm leading-relaxed transition duration-500 group-hover:translate-y-[-3px]">
              Special breeding feed that enhances reproduction
              and increases breeding success.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}