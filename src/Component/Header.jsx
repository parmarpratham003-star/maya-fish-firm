"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact",  href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-mont { font-family: 'Montserrat', sans-serif; }
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px;
          width: 0; height: 2px;
          background: #4FD1E8;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover::after { width: calc(100% - 24px); }
        .drawer {
          transform: translateX(-100%);
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
        }
        .drawer.open { transform: translateX(0); }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[1000] font-mont transition-all duration-300
          ${scrolled || menuOpen
            ? "bg-[#060e1f]/97 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.45)] border-b border-white/[0.06]"
            : "bg-transparent"
          }`}
      >
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between h-16 sm:h-[68px] px-4 sm:px-6 lg:px-12 relative">

          {/* LEFT — desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`nav-link text-[12.5px] font-medium tracking-[0.3px] no-underline px-3 py-1.5 rounded transition-colors duration-200 whitespace-nowrap
                  ${isActive(href) ? "text-[#4FD1E8] font-semibold" : "text-white/65 hover:text-white/95"}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CENTER — Logo (absolute on desktop, static on mobile) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline group
              lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <Image
              src="/logo1.png"
              alt="MAYA Fish Farm"
              width={36}
              height={36}
              className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300 sm:w-10 sm:h-10"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] sm:text-sm font-bold tracking-[2px] uppercase text-white">
                Maya Fish Farm
              </span>
              <span className="text-[7px] sm:text-[8px] font-normal tracking-[2px] uppercase text-white/40">
                Ornamental · Aquarium
              </span>
            </div>
          </Link>

          {/* RIGHT — desktop phone + mobile burger */}
          <div className="flex items-center gap-4 flex-shrink-0">

            {/* Desktop phone */}
            <div className="hidden lg:flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center transition-colors duration-200 group-hover:border-white/60">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                    stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] font-normal tracking-wide text-white/40 uppercase">
                  Call us anytime
                </span>
                <a href="tel:+18001230789"
                  className="text-[13px] font-semibold text-white no-underline hover:text-[#4FD1E8] transition-colors duration-200">
                  +1800 1230 7890
                </a>
              </div>
            </div>

            {/* Mobile: phone icon only */}
            
            <a  href="tel:+18001230789"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-[#4FD1E8]/50 transition-colors duration-200"
              aria-label="Call us"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                  stroke="#4FD1E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 hover:bg-white/[0.07] hover:border-white/25 transition-all duration-200"
            >
              <div className="flex flex-col gap-[5px] w-[18px]">
                <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center
                  ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300
                  ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center
                  ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </div>
            </button>

          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div className={`drawer fixed top-0 left-0 w-[min(300px,85vw)] h-[100dvh] bg-[#060e1f] border-r border-white/[0.08] z-[999] flex flex-col overflow-y-auto shadow-[4px_0_40px_rgba(0,0,0,0.6)] lg:hidden ${menuOpen ? "open" : ""}`}>

          {/* Drawer head */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
            <Link href="/" className="flex items-center gap-2 no-underline" onClick={() => setMenuOpen(false)}>
              <Image
                src="/logo1.png"
                alt="MAYA Fish Farm"
                width={30}
                height={30}
                className="object-contain brightness-0 invert opacity-90"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[13px] font-bold tracking-[1.5px] uppercase text-white font-mont">
                  MAYA <span className="text-[#4FD1E8]">FISH</span>
                </span>
                <span className="text-[7px] tracking-[2px] uppercase text-white/35 font-mont">
                  Ornamental · Aquarium
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-1 px-3 pt-4">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-medium tracking-[0.3px] no-underline border transition-all duration-200 font-mont
                  ${isActive(href)
                    ? "bg-[rgba(79,209,232,0.08)] text-[#4FD1E8] font-semibold border-[rgba(79,209,232,0.2)]"
                    : "text-white/65 border-transparent hover:bg-white/[0.05] hover:text-white hover:border-white/[0.07]"
                  }`}
              >
                <span>{label}</span>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2l4 4-4 4"
                    stroke={isActive(href) ? "#4FD1E8" : "rgba(255,255,255,0.25)"}
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </nav>

          {/* Drawer footer — phone */}
          <div className="mt-auto px-3 pb-8 pt-4 border-t border-white/[0.07]">
            <p className="text-[9px] font-medium uppercase tracking-[0.5px] text-white/30 px-1 mb-2 font-mont">
              Get in touch
            </p>
            
            <a  href="tel:+18001230789"
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] no-underline hover:bg-white/[0.07] hover:border-[#4FD1E8]/25 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-full border border-[#4FD1E8]/30 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                    stroke="#4FD1E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] font-medium text-white/35 uppercase tracking-[0.5px] font-mont">
                  Call us anytime
                </span>
                <span className="text-sm font-bold text-white tracking-[0.2px] font-mont">
                  +1800 1230 7890
                </span>
              </div>
            </a>
          </div>

        </div>
      </header>
    </>
  );
}