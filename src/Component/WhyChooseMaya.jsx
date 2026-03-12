"use client";

import { FaFish, FaWater, FaTruck, FaCheckCircle } from "react-icons/fa";
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
      image: "/goldfish.png",
      text: "Carefully bred fish with strong immunity and proper care."
    },
    {
      icon: <FaWater />,
      title: "Clean Breeding System",
      image: "/dolphin.png",
      text: "Maintained tanks and clean water systems for healthy fish."
    },
    {
      icon: <FaTruck />,
      title: "Affordable Bulk Supply",
      image: "/fighter.png",
      text: "Reliable and affordable fish supply for shops and dealers."
    },
    {
      icon: <FaCheckCircle />,
      title: "Expert Fish Care Guidance",
      image: "/angel.png",
      text: "Professional help for aquarium care and maintenance."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#E6F6FF]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000
          ${visible ? "animate-slideDown opacity-100" : "opacity-0"}`}
        >

          <p className="text-[#0A84D6] font-semibold mb-2">
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


        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {cards.map((card, index) => (

            <div
              key={index}
              className={`relative group overflow-hidden shadow-xl rounded-md
              ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >

              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Transparent Diagonal Overlay */}
              <div
                className="absolute bottom-0 left-0 w-full h-[55%]
                bg-gradient-to-t from-black/70 to-transparent
                p-6 flex flex-col justify-end
                transition-all duration-500
                group-hover:h-[75%]"
                style={{
                  clipPath: "polygon(0% 35%,100% 0%,100% 100%,0% 100%)"
                }}
              >

                {/* Icon */}
                <div className="text-white text-xl mb-2">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#E6F6FF] text-sm mt-2 opacity-0 max-h-0 overflow-hidden
                group-hover:opacity-100 group-hover:max-h-40
                transition-all duration-500">
                  {card.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}