"use client";

import { useEffect, useRef, useState } from "react";
import { FaSeedling } from "react-icons/fa";

export default function Vision() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6">

      <div
        className={`max-w-5xl mx-auto bg-[#E6F6FF] rounded-2xl p-10 shadow-lg
        transition duration-500 hover:-translate-y-2 hover:shadow-xl
        ${visible ? "animate-slideRight opacity-100" : "opacity-0"}`}
      >

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 flex items-center justify-center
          bg-[#0A84D6] text-white rounded-full text-xl">

            <FaSeedling />

          </div>

          <h2 className="text-3xl font-bold text-[#083B66]">
            Our Vision
          </h2>

        </div>

        <p className="text-[#083B66] text-lg leading-relaxed">
          To become a trusted name in ornamental fish breeding and
          live feed supply.
        </p>

      </div>

    </section>
  );
}