"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  {
    num: "01",
    title: "Quality Service",
    desc: "Healthy, vibrant fish through responsible and ethical breeding practices.",
    dark: true,
  },
  {
    num: "02",
    title: "On-time Delivery",
    desc: "Reliable and timely delivery for hobbyists, retailers, and bulk orders.",
    dark: false,
  },
  {
    num: "03",
    title: "Affordable Pricing",
    desc: "High-quality fish at competitive prices with no hidden costs.",
    dark: false,
  },
  {
    num: "04",
    title: "Customer Support",
    desc: "Expert guidance for fish care, feeding, and aquarium maintenance.",
    dark: true,
  },
];
function FeatureCard({ feature }) {
  const { num, title, desc, dark } = feature;

  return (
    <div
      className={`relative overflow-hidden group transition-all duration-500 hover:-translate-y-1
        ${
          dark
            ? "bg-[#0A2A4A] text-white"
            : "bg-[#E6F2FF] text-[#0A2A4A] border border-[#cfe3f5]"
        }
      `}
      style={{ borderRadius: "2px 24px 2px 24px", padding: "40px 36px 36px" }}
    >
      <span
        className={`absolute top-4 right-6 text-[88px] font-black transition-all duration-500
          ${
            dark
              ? "text-[#123b6d]"
              : "text-[#d9e9f7]"
          }
        `}
      >
        {num}
      </span>

      <div className="w-2 h-2 rounded-full mb-5 bg-[#2C7CB0]" />

      <h3 className={`text-[19px] font-semibold mb-3`}>
        {title}
      </h3>

      <div className="w-8 h-[1.5px] mb-4 bg-[#2C7CB0] transition-all duration-500 group-hover:w-16" />

      <p className={`text-[12.5px] leading-[1.8] ${dark ? "text-[#b8cbe0]" : "text-[#4a6b85]"}`}>
        {desc}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (rootRef.current) obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-up { opacity: 0; transform: translateY(30px); transition: all 0.7s ease; }
        .fade-up.show { opacity: 1; transform: translateY(0); }

        .fade-left { opacity: 0; transform: translateX(-60px); transition: all 0.8s ease; }
        .fade-left.show { opacity: 1; transform: translateX(0); }

        .fade-right { opacity: 0; transform: translateX(60px); transition: all 0.8s ease; }
        .fade-right.show { opacity: 1; transform: translateX(0); }
      `}</style>

      {/* ✅ NO BACKGROUND COLOR */}
      <section ref={rootRef} className="px-8 py-20 bg-transparent">

        <div className="max-w-5xl mx-auto">

          {/* Top label */}
          <div className={`fade-up ${visible ? "show" : ""} flex items-center gap-3 mb-6`}>
            <div className="w-7 h-[1px] bg-[#2C7CB0]" />
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2C7CB0]">
              Why Choose Us
            </span>
          </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-14">

            <div className={`fade-left ${visible ? "show" : ""}`}>
              <h2 className="text-[36px] font-bold text-[#0A2A4A] leading-[1.2]">
                Why Choose Our 
              </h2>
              <h2 className="text-[36px] font-bold italic text-[#2C7CB0]">
                Fish Farm
              </h2>
            </div>

            {/* RIGHT */}
            <p className={`fade-right ${visible ? "show" : ""} text-[13.5px] text-[#5a7a90] max-w-xs`}>
              Trusted by aquarium enthusiasts for quality breeding and reliable service.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className={`fade-up ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <FeatureCard feature={f} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}