"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    title: "Quality Service",
    desc: "We follow responsible fish breeding practices to ensure healthy and vibrant fish varieties for every customer.",
    tag: "Responsible Breeding",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 3 5 6 5 10c0 2.5 1.5 5 4 6.5V19h6v-2.5C17.5 15 19 12.5 19 10c0-4-3-7-7-7z" stroke="#4FD1E8" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 19h6M10 22h4" stroke="#0A84D6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 10c0-1.7 1.3-3 3-3" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "On-time Delivery",
    desc: "Reliable supply of ornamental fish to hobbyists and aquarium retailers, delivered fresh and on schedule.",
    tag: "Reliable Supply",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="16" height="11" rx="2" stroke="#4FD1E8" strokeWidth="1.7" />
        <path d="M18 10l3-2v8l-3-2" stroke="#0A84D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12h6M6 15h4" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Affordable Pricing",
    desc: "Competitive pricing while maintaining high standards of fish health — quality you can afford at every scale.",
    tag: "Great Value",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#4FD1E8" strokeWidth="1.7" />
        <path d="M12 7v5l3 3" stroke="#0A84D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 5.5C9.2 4.6 10.5 4 12 4" stroke="#4FD1E8" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Customer Support",
    desc: "Guidance for aquarium maintenance and fish care — our team is always ready to help you succeed.",
    tag: "Expert Guidance",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#4FD1E8" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 10h8M8 13h5" stroke="#0A84D6" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyChooseMaya() {
  return (
    <section className="relative bg-[#071A2F] py-24 px-6 overflow-hidden">

      {/* Decorative rings */}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full border border-[rgba(79,209,232,0.07)] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[300px] h-[300px] rounded-full border border-[rgba(79,209,232,0.07)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-px bg-[#4FD1E8] opacity-50" />
          <p className="text-[#4FD1E8] text-[11px] font-semibold tracking-[4px] uppercase">
            Why Choose Us
          </p>
          <span className="w-6 h-px bg-[#4FD1E8] opacity-50" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-center leading-tight mb-4">
          <span className="block text-[#ECF6FF] text-4xl md:text-5xl font-light">
            Reasons to Choose
          </span>
          <span className="block italic text-[#4FD1E8] text-4xl md:text-5xl font-semibold">
            Maya Fish Farm
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-center text-[#6d97b0] text-sm leading-relaxed font-light max-w-lg mx-auto mb-14">
          We combine responsible breeding practices, reliable delivery, and genuine customer
          care to bring you the healthiest ornamental fish.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/[0.04] border border-[rgba(79,209,232,0.12)] rounded-[20px] p-8 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:bg-white/[0.07] hover:border-[rgba(79,209,232,0.4)] hover:-translate-y-1"
            >
              {/* Bottom accent bar */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0A84D6] to-[#4FD1E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[20px]" />

              {/* Large background number */}
              <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-[rgba(79,209,232,0.06)] leading-none select-none pointer-events-none">
                {card.num}
              </span>

              {/* Icon ring */}
              <div className="w-13 h-13 w-[52px] h-[52px] rounded-[14px] border border-[rgba(79,209,232,0.2)] bg-[rgba(79,209,232,0.07)] flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>

              {/* Title */}
              <p className="text-[#ECF6FF] text-base font-semibold leading-snug">
                {card.title}
              </p>

              {/* Description */}
              <p className="text-[#6d97b0] text-sm leading-relaxed font-light flex-grow">
                {card.desc}
              </p>

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 w-fit text-[11px] text-[#4FD1E8] bg-[rgba(79,209,232,0.08)] border border-[rgba(79,209,232,0.18)] rounded-full px-2.5 py-0.5 font-medium">
                <span className="w-1 h-1 rounded-full bg-[#4FD1E8]" />
                {card.tag}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}