"use client";

import { useEffect, useRef, useState } from "react";
import { FaBullseye, FaSeedling } from "react-icons/fa";

export default function MissionVision() {

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

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Mission */}
        <div
          className={`bg-[#E6F6FF] p-10 rounded-2xl shadow-lg
          transition duration-500 hover:-translate-y-3 hover:shadow-xl
          ${visible ? "animate-slideLeft opacity-100" : "opacity-0"}`}
        >

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 flex items-center justify-center
            bg-[#0A84D6] text-white rounded-full text-xl">

              <FaBullseye />

            </div>

            <h3 className="text-2xl font-bold text-[#083B66]">
              Our Mission
            </h3>

          </div>

          <p className="text-[#083B66] text-lg leading-relaxed">
            To provide affordable, healthy ornamental fish and promote
            responsible aquarium practices.
          </p>

        </div>


        {/* Vision */}
        <div
          className={`bg-[#E6F6FF] p-10 rounded-2xl shadow-lg
          transition duration-500 hover:-translate-y-3 hover:shadow-xl
          ${visible ? "animate-slideRight opacity-100" : "opacity-0"}`}
        >

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 flex items-center justify-center
            bg-[#0A84D6] text-white rounded-full text-xl">

              <FaSeedling />

            </div>

            <h3 className="text-2xl font-bold text-[#083B66]">
              Our Vision
            </h3>

          </div>

          <p className="text-[#083B66] text-lg leading-relaxed">
            To become a trusted name in ornamental fish breeding and
            live feed supply.
          </p>

        </div>

      </div>

    </section>
  );
}