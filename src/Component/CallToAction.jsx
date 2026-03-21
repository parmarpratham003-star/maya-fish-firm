"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .cta-font {
          font-family: 'DM Sans', sans-serif;
        }

        .cta-bold {
          font-weight: 700;
          color: #ECF6FF;
          letter-spacing: -0.02em;
        }

        .cta-thin {
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          margin-left: 6px;
          letter-spacing: -0.02em;
        }
      `}</style>

      <section className="cta-font bg-[#071A2F] py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >

          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            {/* LEFT CONTENT */}
            <div className="max-w-xl">

              <p className="text-[11px] font-normal text-[rgba(255,255,255,0.6)] mb-3">
                Explore. Experience. Enjoy
              </p>

              <h2 className="text-2xl md:text-4xl leading-tight mb-4">

                <span className="cta-bold">Healthy Ornamental</span>
                <span className="cta-thin">Fish</span>

                <br />

                <span className="cta-bold">Breeding</span>
                <span className="cta-thin">& Supply</span>

              </h2>

              <p className="text-[#6d97b0] text-sm leading-relaxed">
                We provide healthy, well-bred ornamental fish along with complete
                aquarium support. Connect with us for bulk supply or expert guidance.
              </p>

            </div>

            {/* RIGHT CTA */}
            <div className="flex flex-col items-start md:items-end gap-3">

              <motion.a
                href="/contact"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-3 text-white text-[11px] font-semibold border border-[#4FD1E8]/30 px-5 py-2.5 rounded-full hover:bg-[#4FD1E8]/10 transition"
              >
                Contact Us
                <span className="text-[#4FD1E8]">→</span>
              </motion.a>

              <a
                href="/service"
                className="text-[#6d97b0] text-[11px] hover:text-white transition"
              >
                View Services →
              </a>

            </div>

          </div>

          {/* Bottom Info Strip */}
          <div className="mt-10 pt-5 border-t border-white/10 flex flex-wrap justify-between gap-4 text-[11px] text-[#5f8aa6]">

            <span>Healthy Fish Guaranteed</span>
            <span>Bulk Orders Available</span>
            <span>Reliable Supply Chain</span>
            <span>Expert Support</span>

          </div>

        </motion.div>
      </section>
    </>
  );
}