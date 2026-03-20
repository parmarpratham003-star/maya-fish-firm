"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact",  href: "/contact" },
];

const WhatsAppIcon = ({ color = "#fff" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="#083B66" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="#083B66" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M4 2l4 4-4 4" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full">
      <nav
        className={`w-full z-50 transition-all duration-300 font-['Outfit',sans-serif]
          ${scrolled
            ? "fixed top-0 bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(8,59,102,0.08)] border-b border-[rgba(8,59,102,0.08)]"
            : "relative bg-white border-b border-[rgba(8,59,102,0.08)]"
          }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-[72px] flex items-center justify-between gap-6">

          {/* ── Brand / Logo ── */}
          <Link href="/" className="flex items-center gap-1 flex-shrink-0">
            <Image
              src="/logo1.png"
              alt="Maya Fish Farm logo"
              width={58}
              height={58}
              className="object-contain mix-blend-multiply"
            />
            <div className="flex flex-col leading-tight -ml-1">
              <span className="text-[#083B66] font-semibold tracking-[2px] text-[13px]">
                MAYA FISH FARM
              </span>
              <span className="text-[#4FD1E8] text-[9px] font-medium tracking-[2.5px] uppercase">
                Ornamental · Aquarium
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group relative text-[#3a6680] text-[13px] font-medium hover:text-[#083B66] transition-colors duration-200 pb-0.5"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#4FD1E8] group-hover:w-full transition-all duration-250" />
              </Link>
            ))}
          </div>

          {/* ── Desktop actions ── */}
          <div className="hidden md:flex items-center">
            
             <a href="https://wa.me/91XXXXXXXXXX"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden text-[#083B66] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[rgba(8,59,102,0.08)] px-5 py-5">
            <div className="flex flex-col gap-2">

              {navLinks.map(({ label, href }, i) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-[10px] text-[13px] font-medium transition-colors
                    ${i === 0
                      ? "bg-[#F0F9FF] text-[#083B66] border border-[rgba(10,132,214,0.12)]"
                      : "bg-white text-[#3a6680] border border-[rgba(8,59,102,0.07)] hover:bg-[#F5FBFF] hover:text-[#083B66]"
                    }`}
                >
                  {label}
                  <ChevronRight />
                </Link>
              ))}

              {/* WhatsApp only — full width on mobile */}
              
               <a href="https://wa.me/91XXXXXXXXXX"
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-[#25D366] hover:bg-[#1ebe5d] rounded-lg text-[13px] text-white font-semibold transition-colors shadow-[0_4px_14px_rgba(37,211,102,0.25)]"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}