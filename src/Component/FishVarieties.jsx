"use client";

import { useEffect, useRef, useState } from "react";

export default function FishVarieties() {

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const fishes = [
    { name: "Gold Fish", image: "goldfish.png", desc: "Popular aquarium fish known for its bright golden color." },
    { name: "Angel Fish", image: "angel.png", desc: "Elegant freshwater fish with beautiful triangular fins." },
    { name: "Yellow Molly", image: "yellowmolly.png", desc: "Peaceful live-bearing fish perfect for community aquariums." },
    { name: "Guppies", image: "guppies.png", desc: "Small colorful fish loved by aquarium hobbyists." },
    { name: "Fighter Fish (Betta)", image: "fighter.png", desc: "Vibrant fish famous for its flowing fins and colors." },
    { name: "Koi Carp", image: "koicrap.png", desc: "Large ornamental fish often kept in garden ponds." }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className={`text-[#0A84D6] font-semibold mb-2 transition-all duration-700
          ${visible ? "animate-slideLeft opacity-100" : "opacity-0"}`}>
            Our Fish Collection
          </p>

          <h2 className={`text-4xl md:text-5xl font-bold text-[#083B66] transition-all duration-700
          ${visible ? "animate-slideRight opacity-100" : "opacity-0"}`}>
            Popular Fish Varieties
          </h2>

          <p className={`text-[#083B66] mt-4 max-w-2xl mx-auto transition-all duration-700
          ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}>
            Explore a wide range of healthy ornamental fishes bred with care
            at Maya Fish Firm.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {fishes.map((fish, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden shadow-xl cursor-pointer rounded-[60px_20px_60px_20px] transition-all duration-1000
              ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >

              <img
                src={fish.image}
                alt={fish.name}
                className="w-full h-72 object-cover transition duration-700 group-hover:scale-110 rounded-[60px_20px_60px_20px]"
              />

              <div className="absolute inset-0 bg-[#071A2F]/80 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[60px_20px_60px_20px]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                <h3 className="text-white text-2xl font-bold mb-3 opacity-0 
                translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 
                transition duration-500">
                  {fish.name}
                </h3>

                <p className="text-[#C7D5E0] text-sm opacity-0 
                translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 
                transition duration-700">
                  {fish.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}