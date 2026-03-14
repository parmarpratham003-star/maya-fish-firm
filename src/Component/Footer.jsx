"use client";

const navLinks = ["Home", "About", "Services", "Contact"];

const ArrowIcon = () => (
  <svg className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none">
    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#4FD1E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#4FD1E8" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="#4FD1E8" strokeWidth="1.6" />
    <circle cx="17.5" cy="6.5" r="1" fill="#4FD1E8" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" stroke="#4FD1E8" strokeWidth="1.7" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="#4FD1E8" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const UpArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 11V3M3 7l4-4 4 4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#04111F] text-[#B0C8D8] font-['Outfit',sans-serif] overflow-hidden">

      {/* Decorative rings */}
      <div className="absolute top-[-300px] right-[-180px] w-[500px] h-[500px] rounded-full border border-[rgba(79,209,232,0.05)] pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-80px] w-[280px] h-[280px] rounded-full border border-[rgba(79,209,232,0.05)] pointer-events-none" />

      {/* Wave from CTA section */}
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block" style={{ height: "60px", marginBottom: "-2px" }}>
        <path fill="#071A2F" d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0Z" />
      </svg>

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        className="absolute right-8 top-[-20px] z-10 w-11 h-11 rounded-full bg-[#0A84D6] hover:bg-[#0e9cc4] hover:-translate-y-1 flex items-center justify-center transition-all duration-200 shadow-lg"
        aria-label="Back to top"
      >
        <UpArrow />
      </button>

      {/* Main grid */}
      <div className="relative max-w-5xl mx-auto px-8 pt-14 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#4FD1E8] flex-shrink-0" />
              <span className="font-['Playfair_Display',serif] text-2xl font-semibold text-[#ECF6FF] tracking-wide">
                Maya Fish Farm
              </span>
            </div>
            <p className="text-[#6d97b0] text-xs leading-relaxed font-light mb-5 max-w-[220px]">
              Ornamental fish breeding and aquarium supply — healthy, vibrant, and responsibly raised fish for hobbyists and retailers.
            </p>
            <div className="flex gap-2.5">
              {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-[rgba(79,209,232,0.2)] bg-[rgba(79,209,232,0.05)] hover:border-[#4FD1E8] hover:bg-[rgba(79,209,232,0.12)] flex items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <p className="text-[#ECF6FF] text-[10px] font-semibold tracking-[3px] uppercase whitespace-nowrap">
                Quick Links
              </p>
              <div className="flex-1 h-px bg-[rgba(79,209,232,0.12)]" />
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  
                   <a href="#"
                    className="group/link flex items-center gap-1.5 text-[#6d97b0] text-xs font-light hover:text-[#4FD1E8] transition-all duration-200"
                  >
                    <ArrowIcon />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <p className="text-[#ECF6FF] text-[10px] font-semibold tracking-[3px] uppercase whitespace-nowrap">
                Working Hours
              </p>
              <div className="flex-1 h-px bg-[rgba(79,209,232,0.12)]" />
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
                { day: "Sat – Sun", time: "8:00 AM – 4:00 PM" },
              ].map(({ day, time }) => (
                <div
                  key={day}
                  className="flex items-center justify-between bg-[rgba(79,209,232,0.04)] border border-[rgba(79,209,232,0.08)] rounded-lg px-3 py-2"
                >
                  <span className="text-[#6d97b0] text-xs font-light">{day}</span>
                  <span className="text-[#B0D4E8] text-[11px] font-medium">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <p className="text-[#ECF6FF] text-[10px] font-semibold tracking-[3px] uppercase whitespace-nowrap">
                Newsletter
              </p>
              <div className="flex-1 h-px bg-[rgba(79,209,232,0.12)]" />
            </div>
            <p className="text-[#4a6a80] text-xs font-light leading-relaxed mb-3.5">
              Get updates on new fish varieties and aquarium tips.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(79,209,232,0.15)] focus:border-[rgba(79,209,232,0.4)] rounded-lg px-3.5 py-2.5 text-[#ECF6FF] text-xs font-light placeholder-[#4a6a80] outline-none transition-colors mb-2.5"
            />
            <button className="w-full bg-[#0A84D6] hover:bg-[#0e9cc4] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto px-8 mt-12 pt-5 pb-7 border-t border-[rgba(79,209,232,0.08)] flex flex-wrap items-center justify-between gap-3">
        <p className="text-[#4a6a80] text-[11px] font-light">
          © 2024 Maya Fish Farm. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-[#4a6a80] text-[11px] font-light hover:text-[#4FD1E8] transition-colors">
            Privacy Policy
          </a>
          <span className="text-[rgba(79,209,232,0.2)] text-[11px]">|</span>
          <a href="#" className="text-[#4a6a80] text-[11px] font-light hover:text-[#4FD1E8] transition-colors">
            Terms of Use
          </a>
        </div>
      </div>

    </footer>
  );
}