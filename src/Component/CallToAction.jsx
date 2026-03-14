"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative bg-[#071A2F] py-24 px-6 overflow-hidden text-center">

      {/* Decorative rings */}
      <div className="absolute top-[-280px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(79,209,232,0.07)] pointer-events-none" />
      <div className="absolute bottom-[-160px] right-[-100px] w-[360px] h-[360px] rounded-full border border-[rgba(79,209,232,0.07)] pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] rounded-full border border-[rgba(79,209,232,0.07)] pointer-events-none" />

      {/* Decorative fish — top right */}
      <svg
        className="absolute top-8 right-14 w-28 opacity-[0.06] pointer-events-none"
        viewBox="0 0 120 60" fill="none"
      >
        <path d="M90 30 C65 8, 20 8, 5 30 C20 52, 65 52, 90 30Z" fill="#4FD1E8" />
        <path d="M90 30 L118 10 L108 30 L118 50Z" fill="#4FD1E8" />
        <circle cx="22" cy="25" r="5" fill="#fff" opacity="0.6" />
      </svg>

      {/* Decorative fish — bottom left */}
      <svg
        className="absolute bottom-10 left-10 w-20 opacity-[0.06] pointer-events-none scale-y-[-1]"
        viewBox="0 0 80 40" fill="none"
      >
        <path d="M60 20 C43 5, 13 5, 3 20 C13 35, 43 35, 60 20Z" fill="#0A84D6" />
        <path d="M60 20 L78 7 L73 20 L78 33Z" fill="#0A84D6" />
        <circle cx="14" cy="16" r="3.5" fill="#fff" opacity="0.5" />
      </svg>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-7 h-px bg-[#4FD1E8] opacity-50" />
          <p className="text-[#4FD1E8] text-[11px] font-semibold tracking-[4px] uppercase">
            Get In Touch
          </p>
          <span className="w-7 h-px bg-[#4FD1E8] opacity-50" />
        </div>

        {/* Heading */}
        <h2 className="font-serif leading-tight mb-5">
          <span className="block text-[#ECF6FF] text-4xl md:text-5xl font-light">
            Looking for Healthy Ornamental Fish
          </span>
          <span className="block italic text-[#4FD1E8] text-4xl md:text-5xl font-semibold">
            For Your Aquarium or Store?
          </span>
        </h2>

        {/* Description */}
        <p className="text-[#6d97b0] text-sm leading-relaxed font-light max-w-lg mx-auto mb-10">
          Contact MAYA Fish Farm today to learn more about our fish varieties
          and aquarium supply services.
        </p>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.18 }}
          className="group inline-flex items-center gap-2.5 bg-[#0A84D6] hover:bg-[#0e9cc4] text-white text-sm font-semibold px-10 py-4 rounded-full transition-colors duration-250 relative overflow-hidden"
        >
          {/* Shimmer */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          Get in Touch
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 8L8 2M8 2H4M8 2V6"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.a>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          {[
            "Healthy Fish Guaranteed",
            "Bulk Orders Welcome",
            "Expert Support",
          ].map((item, i, arr) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[#4a7a96] text-xs font-light">
                <span className="w-1 h-1 rounded-full bg-[#4FD1E8] opacity-60" />
                {item}
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-3.5 bg-[rgba(79,209,232,0.15)]" />
              )}
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}