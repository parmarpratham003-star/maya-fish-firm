"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">

      <nav
        className={`w-full transition-all duration-300 z-50 ${
          scrolled
            ? "fixed top-0 bg-white shadow-md border-b border-[#1F3D5A]/20"
            : "bg-white border-b border-[#1F3D5A]/20"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 h-[90px] grid grid-cols-3 items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1.png"
              alt="Maya Fish Firm"
              width={85}
              height={85}
              priority
              className="object-contain"
            />
          </Link>

          {/* Center Title */}
          <h1 className="text-center text-[#083B66] text-2xl md:text-3xl font-bold tracking-[3px] font-serif">
            MAYA FISH FIRM
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-end gap-8 text-[#083B66] text-sm font-medium">

            <Link href="/" className="hover:text-[#4FD1E8] transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-[#4FD1E8] transition">
              About
            </Link>

            <Link href="/services" className="hover:text-[#4FD1E8] transition">
              Services
            </Link>

            <Link href="/pages" className="hover:text-[#4FD1E8] transition">
              Pages
            </Link>

            <Link href="/contact" className="hover:text-[#4FD1E8] transition">
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#083B66] text-xl absolute right-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#E6F6FF] px-6 py-4 text-[#083B66]">

            <div className="flex flex-col gap-4 text-sm font-medium">

              <Link href="/" className="hover:text-[#0A84D6]">
                Home
              </Link>

              <Link href="/about" className="hover:text-[#0A84D6]">
                About
              </Link>

              <Link href="/services" className="hover:text-[#0A84D6]">
                Services
              </Link>

              <Link href="/pages" className="hover:text-[#0A84D6]">
                Pages
              </Link>

              <Link href="/contact" className="hover:text-[#0A84D6]">
                Contact
              </Link>

            </div>

          </div>
        )}

      </nav>

    </header>
  );
}