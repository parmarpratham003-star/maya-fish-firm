"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  {
    num: "01",
    title: "Quality Service",
    desc: "We ensure healthy, vibrant fish through responsible and ethical breeding practices, maintaining the highest standards of quality.",
  },
  {
    num: "02",
    title: "On-time Delivery",
    desc: "Reliable and timely delivery for hobbyists, retailers, and bulk buyers with complete safety and freshness.",
  },
  {
    num: "03",
    title: "Affordable Pricing",
    desc: "Premium-quality fish at competitive prices with transparent pricing and no hidden costs.",
  },
  {
    num: "04",
    title: "Customer Support",
    desc: "Expert guidance on fish care, feeding, and aquarium maintenance from our experienced team.",
  },
];

function FeatureCard({ feature, index }) {
  const styles = [
    {
      bg: "bg-[#142B4D]",
      text: "text-white",
      sub: "text-[#b8c9e3]",
      num: "text-[#2f5ea8]",
    },
    {
      bg: "bg-[#EAF2FF]",
      text: "text-[#142B4D]",
      sub: "text-[#5f7ea3]",
      num: "text-[#c9dbf5]",
    },
    {
      bg: "bg-[#EAF2FF]",
      text: "text-[#142B4D]",
      sub: "text-[#5f7ea3]",
      num: "text-[#c9dbf5]",
    },
    {
      bg: "bg-[#142B4D]",
      text: "text-white",
      sub: "text-[#b8c9e3]",
      num: "text-[#2f5ea8]",
    },
  ];

  const s = styles[index];
  const { num, title, desc } = feature;

  const cornerStyle =
    index === 0 || index === 3
      ? "rounded-[0px_20px_0px_20px]"
      : "rounded-[20px_0px_20px_0px]";

  return (
    <div
      className={`relative overflow-hidden group transition-all duration-500 hover:-translate-y-1
      ${s.bg} ${s.text} ${cornerStyle}
      p-5 sm:p-6 md:p-[60px_32px_32px]`}
    >
      {/* Number */}
      <span
        className={`absolute top-2 right-3 sm:-top-3 sm:right-5
        text-[40px] sm:text-[70px] md:text-[85px] font-black ${s.num}`}
      >
        {num}
      </span>

      {/* Title */}
      <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold mb-2 sm:mb-3">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-6 sm:w-8 h-[1.5px] mb-3 bg-[#3F8CFF] transition-all duration-500 group-hover:w-14" />

      {/* Description */}
      <p className={`text-[12.5px] sm:text-[13.5px] md:text-[14px] leading-[1.6] sm:leading-[1.8] ${s.sub}`}>
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

        .fade-left { opacity: 0; transform: translateX(-40px); transition: all 0.8s ease; }
        .fade-left.show { opacity: 1; transform: translateX(0); }

        .fade-right { opacity: 0; transform: translateX(40px); transition: all 0.8s ease; }
        .fade-right.show { opacity: 1; transform: translateX(0); }
      `}</style>

      <section
        ref={rootRef}
        className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20"
      >
        <div className="max-w-5xl mx-auto">

          {/* Top label */}
          <div className={`fade-up ${visible ? "show" : ""} flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6`}>
            <div className="w-5 sm:w-7 h-[1px] bg-[#3F8CFF]" />
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#3F8CFF]">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">

            <div className={`fade-left ${visible ? "show" : ""}`}>
              <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-[#142B4D] leading-[1.2]">
                Why Choose Our
              </h2>
              <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold italic text-[#3F8CFF]">
                Fish Farm
              </h2>
            </div>

            <p className={`fade-right ${visible ? "show" : ""} text-[13px] sm:text-[14px] text-[#5f7ea3] max-w-full md:max-w-xs`}>
              We deliver premium-quality fish, reliable service, and expert support for every aquarium need.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`fade-up ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <FeatureCard feature={f} index={i} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}