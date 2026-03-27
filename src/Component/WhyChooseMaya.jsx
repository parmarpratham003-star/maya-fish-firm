"use client";

import { useEffect, useRef, useState } from "react";

const data = [
  {
    num: "01",
    title: "Premium Fish Quality",
    text: "We ensure top-grade ornamental fish through ethical and responsible breeding practices, resulting in healthy, colorful, and long-living aquarium fish.",
    dir: "left",
    bg: "bg-[#0d1f5c]",
    titleColor: "text-white",
    textColor: "text-[#a8b8d8]",
  },
  {
    num: "02",
    title: "Fast & Safe Delivery",
    text: "Our logistics system ensures that your fish are delivered safely, on time, and stress-free with proper packaging and handling.",
    dir: "right",
    bg: "bg-[#3346c8]",
    titleColor: "text-white",
    textColor: "text-[#c0ccf8]",
  },
  {
    num: "03",
    title: "Best Pricing Guarantee",
    text: "We offer competitive pricing without compromising on quality, making premium fish accessible to everyone.",
    dir: "left",
    bg: "bg-[#30a8d8]",
    titleColor: "text-white",
    textColor: "text-[#d0f0ff]",
  },
  {
    num: "04",
    title: "Expert Aquarium Guidance",
    text: "From setup to maintenance, our expert guidance helps you maintain a thriving aquarium long-term.",
    dir: "right",
    bg: "bg-[#a8d8f0]",
    titleColor: "text-[#0a2a40]",
    textColor: "text-[#1a4060]",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="py-[110px] px-5 bg-[#dde4ed] overflow-hidden font-[Montserrat]"
    >
      {/* HEADING */}
      <div
  className={`text-center max-w-[700px] mx-auto mb-14 transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  {/* EYEBROW */}
  <div className="flex items-center justify-center gap-[10px] mb-4">
    <span className="w-[28px] h-[1px] bg-[#2C7CB0]" />
    <span className="text-[10px] font-bold tracking-[4px] uppercase text-[#2C7CB0]">
      WHY CHOOSE US
    </span>
    <span className="w-[28px] h-[1px] bg-[#2C7CB0]" />
  </div>

  {/* ONE LINE HEADING */}
  <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#083B66] leading-[1.15] tracking-[-0.03em] mb-3 whitespace-nowrap">
    Why Choose <span className="text-[#0A2A4A]">MAYA Fish Farm</span>
  </h2>

  {/* 2 LINE CONTENT */}
  <p className="text-[13px] text-[#5a7a90] leading-[1.8] max-w-[580px] mx-auto">
    From responsible breeding to complete aquaculture solutions — we provide everything you need
    for a thriving aquarium experience, ensuring quality and reliability.
  </p>
</div>
        

      {/* CARDS */}
      <div className="max-w-[1000px] mx-auto flex flex-col gap-7">
        {data.map((item, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`flex items-center transition-all duration-700
              ${item.dir === "right" ? "flex-row-reverse" : "flex-row"}
              ${
                show
                  ? "opacity-100 translate-x-0"
                  : item.dir === "left"
                  ? "opacity-0 -translate-x-10"
                  : "opacity-0 translate-x-10"
              }
              max-md:flex-col max-md:gap-4`}
          >
            {/* CARD */}
            <div
              className={`flex-1 rounded-[22px] p-7 ${item.bg}
                hover:-translate-y-1 transition-all duration-300`}
            >
              <h3 className={`text-[18px] font-bold mb-2 ${item.titleColor}`}>
                {item.title}
              </h3>
              <p className={`text-[14px] leading-[1.8] ${item.textColor}`}>
                {item.text}
              </p>
            </div>

            {/* NUMBER CIRCLE */}
            <div
              className={`w-[72px] h-[72px] rounded-full flex-shrink-0
                flex items-center justify-center font-bold text-[18px] text-[#0F2854]                bg-white
                ${item.dir === "left" ? "ml-5" : "mr-5"}
                max-md:ml-0 max-md:mr-0`}
            >
              {item.num}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}