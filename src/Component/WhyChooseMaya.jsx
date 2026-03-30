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
      bg: "bg-[#0B2545]",
      text: "text-white",
      sub: "text-[#c9d8ea]",
      num: "text-[#1e4f85]",
    },
    {
      bg: "bg-[#F0F7FF]",
      text: "text-[#0B2545]",
      sub: "text-[#5f7f9a]",
      num: "text-[#dbe9f7]",
    },
    {
      bg: "bg-[#E3F0FC]",
      text: "text-[#0B2545]",
      sub: "text-[#5f7f9a]",
      num: "text-[#cfe3f5]",
    },
    {
      bg: "bg-[#0B2545]",
      text: "text-white",
      sub: "text-[#c9d8ea]",
      num: "text-[#1e4f85]",
    },
  ];

  const s = styles[index];
  const { num, title, desc } = feature;

  return (
    <div
      className={`relative overflow-visible group transition-all duration-500 hover:-translate-y-1
      ${s.bg} ${s.text}
      p-[70px_38px_38px]`}
      style={{ borderRadius: "0px 28px 0px 28px" }}
    >
      {/* Number (shifted up) */}
      <span
        className={`absolute -top-4 right-6 text-[90px] font-black ${s.num}`}
      >
        {num}
      </span>

      {/* Title */}
      <h3 className="text-[22px] font-semibold mb-3">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-8 h-[1.5px] mb-4 bg-[#4DA3FF] transition-all duration-500 group-hover:w-16" />

      {/* Description */}
      <p className={`text-[14px] leading-[1.9] ${s.sub}`}>
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

      <section ref={rootRef} className="px-8 py-20 bg-transparent">

        <div className="max-w-5xl mx-auto">

          {/* Top label */}
          <div className={`fade-up ${visible ? "show" : ""} flex items-center gap-3 mb-6`}>
            <div className="w-7 h-[1px] bg-[#4DA3FF]" />
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#4DA3FF]">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-14">

            <div className={`fade-left ${visible ? "show" : ""}`}>
              <h2 className="text-[36px] font-bold text-[#0B2545] leading-[1.2]">
                Why Choose Our
              </h2>
              <h2 className="text-[36px] font-bold italic text-[#4DA3FF]">
                Fish Farm
              </h2>
            </div>

            <p className={`fade-right ${visible ? "show" : ""} text-[14px] text-[#5f7f9a] max-w-xs`}>
              We deliver premium-quality fish, reliable service, and expert support for every aquarium need.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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