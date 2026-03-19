"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative text-white font-['Outfit',sans-serif]"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Wave Shape — tight, no gap */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          style={{ display: "block", height: "60px", width: "100%" }}
        >
          <path
            d="M0.00,30 C150.00,90 349.20,-20 500.00,30 L500.00,0.00 L0.00,0.00 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Dark Overlay */}
      <div className="bg-black/80 pt-20 pb-12 px-6">

        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand / About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#4FD1E8]" />
              <h2 className="text-2xl font-semibold tracking-wider text-[#ECF6FF]">
                MAYA FISH FARM
              </h2>
            </div>

            <p className="text-[#6d97b0] text-xs leading-relaxed mb-6">
              Sustainable aquaculture solutions providing fresh fish
              production and quality services for local markets.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[rgba(79,209,232,0.2)] flex items-center justify-center hover:bg-[#4FD1E8]/10 text-[#4FD1E8] transition cursor-pointer text-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[#ECF6FF] text-xs font-semibold tracking-wide mb-4">
              Quick Links
            </p>

            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-xs text-[#6d97b0] hover:text-[#4FD1E8] transition group/link"
                  >
                    <svg className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <p className="text-[#ECF6FF] text-xs font-semibold tracking-wide mb-4">
              Working Hours
            </p>

            <p className="text-[#6d97b0] text-xs leading-relaxed mb-4">
              Visit our farm during working hours for fresh fish
              and aquaculture services.
            </p>

            <div className="space-y-2 text-[#6d97b0] text-xs">
              <p>Mon – Fri : 9:00 AM – 6:00 PM</p>
              <p>Sat – Sun : 8:00 AM – 4:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-3 text-[#4a6a80] text-xs tracking-wide">
          <p>© Maya Fish Farm. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#4FD1E8] transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#4FD1E8] transition">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-[#0A84D6] hover:bg-[#0e9cc4] hover:-translate-y-1 flex items-center justify-center transition-all duration-200 shadow-lg"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white text-sm" />
      </button>

    </footer>
  );
}
