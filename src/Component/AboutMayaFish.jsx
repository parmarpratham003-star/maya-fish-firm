"use client";

const highlights = [
  {
    title: "Healthy Fish Breeding",
    desc: "Responsible breeding with clean water systems and balanced nutrition for vibrant, strong fish.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 7.5 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#0A84D6" strokeWidth="1.8" />
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#4FD1E8" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="#0A84D6" />
      </svg>
    ),
  },
  {
    title: "Modern Aquaculture Practices",
    desc: "Up-to-date water quality management and scientifically guided aquaculture methods.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="10" rx="2" stroke="#0A84D6" strokeWidth="1.8" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="#0A84D6" />
      </svg>
    ),
  },
  {
    title: "Reliable Aquarium Supply",
    desc: "Trusted by hobbyists, pet stores, and bulk buyers for consistent quality and healthy stock.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
          stroke="#0A84D6" strokeWidth="1.8" strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function AboutMayaFish() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-[#e8f5fe] to-white py-24 px-8">

      {/* Decorative rings */}
      <div className="absolute top-[-200px] right-[-150px] w-[480px] h-[480px] rounded-full border border-[rgba(79,209,232,0.08)] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[260px] h-[260px] rounded-full border border-[rgba(79,209,232,0.08)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* Centered heading */}
        <div className="text-center max-w-xl mx-auto mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#4FD1E8] opacity-60" />
            <p className="text-[#4FD1E8] text-[11px] font-semibold tracking-[4px] uppercase">
              About Us
            </p>
            <span className="w-6 h-px bg-[#4FD1E8] opacity-60" />
          </div>

          <h2 className="font-serif leading-tight mb-4">
            <span className="block text-[#083B66] text-4xl md:text-5xl font-light tracking-tight">
              Trusted Ornamental Fish
            </span>
            <span className="block italic text-[#4FD1E8] text-4xl md:text-5xl font-semibold">
              Breeders &amp; Suppliers
            </span>
          </h2>

          <p className="text-[#3a6680] text-sm leading-relaxed font-light">
            MAYA Fish Farm is an ornamental fish breeding farm focused on producing healthy and
            colorful aquarium fish varieties — following responsible aquaculture practices to
            ensure strong fish growth and survival.
          </p>

        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT — Image */}
          <div className="relative">

            <div className="absolute -top-[18px] -left-[18px] w-[90px] h-[90px] rounded-full border-2 border-[rgba(79,209,232,0.22)] z-0 pointer-events-none">
              <div className="absolute top-[6px] left-[6px] w-3 h-3 rounded-full bg-[#4FD1E8] opacity-45" />
            </div>

            {/* Swap this SVG for <img src="/all.png" className="w-full h-full object-cover" /> when ready */}
            <div className="w-full rounded-[24px] overflow-hidden aspect-[4/3] transition-transform duration-500 hover:scale-[1.02]">
              <svg width="100%" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bgGrad" x1="0" y1="0" x2="380" y2="280" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#b8dff4" />
                    <stop offset="100%" stopColor="#7ec6e8" />
                  </linearGradient>
                </defs>
                <rect width="380" height="280" fill="url(#bgGrad)" />
                <path d="M0 200 Q95 170 190 200 Q285 230 380 200 L380 280 L0 280Z" fill="#2d8fb5" opacity="0.35" />
                <path d="M0 222 Q95 197 190 222 Q285 247 380 222 L380 280 L0 280Z" fill="#1a7a9e" opacity="0.4" />
                <g transform="translate(90,110)">
                  <path d="M80 28 C60 8,20 8,5 28 C20 48,60 48,80 28Z" fill="#fff" opacity="0.85" />
                  <path d="M80 28 L100 12 L94 28 L100 44Z" fill="#fff" opacity="0.6" />
                  <circle cx="18" cy="24" r="4" fill="#083B66" opacity="0.7" />
                </g>
                <g transform="translate(200,80)">
                  <path d="M60 20 C45 6,14 6,4 20 C14 34,45 34,60 20Z" fill="#4FD1E8" opacity="0.8" />
                  <path d="M60 20 L75 8 L71 20 L75 32Z" fill="#4FD1E8" opacity="0.55" />
                  <circle cx="13" cy="17" r="3" fill="#083B66" opacity="0.6" />
                </g>
                <g transform="translate(130,155)">
                  <path d="M55 18 C40 5,12 5,3 18 C12 31,40 31,55 18Z" fill="#f97316" opacity="0.75" />
                  <path d="M55 18 L68 7 L64 18 L68 29Z" fill="#ea6a00" opacity="0.6" />
                  <circle cx="11" cy="15" r="2.8" fill="#3B0E00" opacity="0.55" />
                </g>
                <g transform="translate(260,140)">
                  <path d="M48 16 C35 4,10 4,3 16 C10 28,35 28,48 16Z" fill="#a855f7" opacity="0.7" />
                  <path d="M48 16 L60 6 L57 16 L60 26Z" fill="#9333ea" opacity="0.5" />
                </g>
                <circle cx="40" cy="80" r="4" fill="#fff" opacity="0.25" />
                <circle cx="340" cy="60" r="3" fill="#fff" opacity="0.2" />
                <path d="M30 260 Q35 240 30 220" stroke="#2d8" strokeWidth="3" opacity="0.4" fill="none" strokeLinecap="round" />
                <path d="M350 265 Q345 248 352 228" stroke="#2d8" strokeWidth="2.5" opacity="0.35" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-2.5 bg-white border border-[rgba(10,132,214,0.14)] rounded-[14px] px-[18px] py-[14px] shadow-[0_6px_28px_rgba(10,132,214,0.1)] z-10">
              <p className="text-[#0A84D6] text-[11px] font-semibold tracking-[1.5px] uppercase mb-0.5">
                Ornamental Fish
              </p>
              <p className="text-[#083B66] text-[11px] font-light">Healthy aquarium fish breeding</p>
            </div>

          </div>

          {/* RIGHT — Highlight cards */}
          <div className="flex flex-col gap-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="flex items-start gap-3.5 bg-white border border-[rgba(10,132,214,0.1)] rounded-xl px-[18px] py-4 transition-all duration-200 hover:border-[rgba(79,209,232,0.45)] hover:translate-x-1"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E6F6FF] to-[#c8e9f8] flex items-center justify-center flex-shrink-0">
                  {h.icon}
                </div>
                <div className="pt-0.5">
                  <p className="text-[#083B66] text-[0.88rem] font-semibold mb-1">{h.title}</p>
                  <p className="text-[#5a88a0] text-[0.78rem] font-light leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}