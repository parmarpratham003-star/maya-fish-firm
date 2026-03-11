"use client";

import { FaFish, FaWater, FaTruck, FaUserFriends, FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseMaya() {

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

  const cards = [
    {
      icon: <FaFish />,
      title: "Healthy & Disease-Free Fish",
      text: "Carefully bred fish with strong immunity and proper care."
    },
    {
      icon: <FaWater />,
      title: "Clean Breeding System",
      text: "Maintained tanks and clean water systems for healthy fish."
    },
    {
      icon: <FaTruck />,
      title: "Affordable Bulk Supply",
      text: "Reliable and affordable fish supply for shops and dealers."
    },
    {
      icon: <FaCheckCircle />,
      title: "Expert Fish Care Guidance",
      text: "Professional help for aquarium care and maintenance."
    },
    {
      icon: <FaUserFriends />,
      title: "Trusted Service",
      text: "Dedicated support for hobbyists and aquarium businesses."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000
          ${visible ? "animate-slideDown opacity-100" : "opacity-0"}`}
        >

          <p className="text-[#0A84D6] font-semibold mb-2 animate-pulse">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#083B66]">
            Why Choose Maya Fish Firm
          </h2>

          <p className="text-[#083B66] mt-4 max-w-2xl mx-auto">
            We provide healthy ornamental fish, clean breeding systems,
            and reliable service for aquarium hobbyists and pet shops.
          </p>

        </div>


        {/* Auto Moving Cards */}
        <div className="relative w-full overflow-hidden">

          <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">

            {cards.concat(cards).map((card, index) => (
              <div
                key={index}
                className="min-w-[300px] h-[220px] bg-[#0F2F4F] rounded-2xl p-8 shadow-lg
                transition duration-300 group
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(10,132,214,0.5)]"
              >

                <div className="w-14 h-14 flex items-center justify-center
                rounded-full bg-[#083B66] mb-5 group-hover:bg-[#0A84D6] transition">

                  <div className="text-[#4FD1E8] text-2xl transition-transform duration-500
                  group-hover:rotate-12 group-hover:scale-125 group-hover:text-white">
                    {card.icon}
                  </div>

                </div>

                <h3 className="font-semibold text-white mb-3 text-lg
                transition duration-500 group-hover:text-[#4FD1E8] group-hover:-translate-y-1">
                  {card.title}
                </h3>

                <p className="text-[#C7D5E0] text-sm leading-relaxed
                transition duration-500 group-hover:translate-y-[-3px]">
                  {card.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}