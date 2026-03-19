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

export default function Footer1() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative text-[#B0C8D8] font-['Outfit',sans-serif] overflow-hidden
      bg-[url('/image.png')] bg-cover bg-center bg-no-repeat"
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#04111F]/85 backdrop-blur-[2px]" />

      {/* Decorative rings */}
      <div className="absolute top-[-300px] right-[-180px] w-[500px] h-[500px] rounded-full border border-[rgba(79,209,232,0.05)] pointer-events-none z-10" />
      <div className="absolute bottom-[-120px] left-[-80px] w-[280px] h-[280px] rounded-full border border-[rgba(79,209,232,0.05)] pointer-events-none z-10" />

      {/* Wave */}
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block relative z-10" style={{ height: "60px", marginBottom: "-2px" }}>
        <path fill="#071A2F" d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0Z" />
      </svg>

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        className="absolute right-8 top-[-20px] z-20 w-11 h-11 rounded-full bg-[#0A84D6] hover:bg-[#0e9cc4] hover:-translate-y-1 flex items-center justify-center transition-all duration-200 shadow-lg"
      >
        <UpArrow />
      </button>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 pt-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#4FD1E8]" />
              <span className="text-2xl font-semibold text-[#ECF6FF]">
                Maya Fish Farm
              </span>
            </div>
            <p className="text-[#6d97b0] text-xs mb-5">
              Ornamental fish breeding and aquarium supply — healthy, vibrant fish.
            </p>

            <div className="flex gap-2.5">
              {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-full border border-[rgba(79,209,232,0.2)] flex items-center justify-center hover:bg-[#4FD1E8]/10 cursor-pointer">
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#ECF6FF] text-xs mb-4">Quick Links</p>
            {navLinks.map((link) => (
              <a key={link} href="#" className="flex items-center gap-2 text-xs text-[#6d97b0] hover:text-[#4FD1E8] mb-2">
                <ArrowIcon /> {link}
              </a>
            ))}
          </div>

          {/* Hours */}
          <div>
            <p className="text-[#ECF6FF] text-xs mb-4">Working Hours</p>
            <p className="text-xs text-[#6d97b0]">Mon – Fri: 9AM – 6PM</p>
            <p className="text-xs text-[#6d97b0]">Sat – Sun: 8AM – 4PM</p>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[#ECF6FF] text-xs mb-4">Newsletter</p>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full mb-2 px-3 py-2 rounded bg-white/5 border border-white/10 text-white text-xs"
            />
            <button className="w-full bg-[#0A84D6] py-2 text-xs rounded hover:bg-[#0e9cc4]">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-5 border-t border-white/10 flex justify-between text-xs text-[#4a6a80]">
          <p>© 2024 Maya Fish Farm</p>
          <div className="flex gap-3">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}