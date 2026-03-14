
"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Ornamental Fish Breeding",
    desc: "Breeding vibrant and healthy ornamental fish varieties such as Goldfish, Angel Fish, Guppies, and Fighter Fish.",
    tags: ["Goldfish", "Angel Fish", "Guppies", "Fighter Fish"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17c2-4 5-6 9-6s7 2 9 6" stroke="#0A84D6" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 17c1-2 3-3 6-3s5 1 6 3" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="3" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M17 8c0-1.5-.7-2.8-2-3.5" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Aquarium Fish Supply",
    desc: "Supplying quality ornamental fish to aquarium hobbyists, retailers, and pet stores.",
    tags: ["Hobbyists", "Pet Stores", "Bulk Orders"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="18" height="8" rx="2" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M7 13V9a5 5 0 0110 0v4" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 17h2M12 17h4" stroke="#0A84D6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Fish Nutrition & Care",
    desc: "Providing proper fish feeding guidance and care support to maintain healthy aquarium environments.",
    tags: ["Feeding Plans", "Water Quality", "Health Support"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.3 4.7 3.3 6H12h3.7C17.7 14.7 19 12.5 19 10c0-3.5-3-7-7-7z" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M9 16v3h6v-3" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 19h4" stroke="#0A84D6" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M10 10c0-1.1.9-2 2-2s2 .9 2 2" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Aquaculture Support",
    desc: "Promoting responsible fish farming practices and sustainable aquaculture methods.",
    tags: ["Sustainable Farming", "Best Practices", "Consultation"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.8 5.5H20l-4.6 3.4 1.8 5.5L12 13l-5.2 3.4 1.8-5.5L4 7.5h6.2z" stroke="#0A84D6" strokeWidth="1.7"/>
        <circle cx="12" cy="13" r="2.2" stroke="#4FD1E8" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 10L10 2M10 2H5M10 2V7"
      stroke="#0A84D6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function KeyServices() {
  return (
    <section className="bg-gradient-to-b from-white via-[#EBF7FF] to-[#E0F3FF] py-10 px-6">

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">

        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-6 h-px bg-[#4FD1E8] opacity-60"/>
          <p className="text-[#4FD1E8] text-[11px] font-semibold tracking-[4px] uppercase">
            Our Services
          </p>
          <span className="block w-6 h-px bg-[#4FD1E8] opacity-60"/>
        </div>

        <h2 className="font-serif leading-tight mb-4">
          <span className="block text-[#083B66] text-4xl md:text-5xl font-light">
            What We Offer
          </span>
          <span className="block italic text-[#4FD1E8] text-4xl md:text-5xl font-semibold">
            Core Services
          </span>
        </h2>

        <p className="text-[#3a6680] text-sm leading-relaxed font-light">
          From responsible breeding to full aquaculture support — everything your aquarium
          needs, from our farm to your tank.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">

        {services.map((svc, i) => (

          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="group relative bg-white border border-[rgba(10,132,214,0.1)] rounded-[20px] p-8 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:border-[rgba(79,209,232,0.45)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,132,214,0.08)]"
          >

            <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A84D6] to-[#4FD1E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[20px]" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6F6FF] to-[#c8e9f8] flex items-center justify-center flex-shrink-0">
                {svc.icon}
              </div>

              <p className="text-[#083B66] text-base font-semibold leading-snug pt-1.5">
                {svc.title}
              </p>
            </div>

            <div className="h-px bg-[rgba(10,132,214,0.07)]" />

            <p className="text-[#4a7a96] text-sm leading-relaxed font-light flex-grow">
              {svc.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[#0A84D6] bg-[#E6F6FF] border border-[rgba(10,132,214,0.18)] rounded-full px-2.5 py-0.5 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[#0A84D6] text-xs font-semibold tracking-wide mt-auto"
            >
              Learn more
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>

          </motion.div>

        ))}

      </div>

      {/* Button */}
      <motion.div
        className="flex justify-center mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <a
          href="/services"
          className="group inline-flex items-center gap-2.5 bg-[#0A84D6] hover:bg-[#0e9cc4] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,132,214,0.3)]"
        >
          View All Services
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 8L8 2M8 2H4M8 2V6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </motion.div>

    </section>
  );
}

