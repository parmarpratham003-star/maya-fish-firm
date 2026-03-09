"use client";
import { useState, useEffect } from "react";

import {
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaBars
} from "react-icons/fa6";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">

      {/* Top Bar */}
      


      {/* Navbar */}
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-blue-600"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold">
            MAYA FISH FARM
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-lg">

            <a href="#" className="hover:text-blue-300">Home</a>
            <a href="#" className="hover:text-blue-300">About</a>
            <a href="#" className="hover:text-blue-300">Service</a>
            <a href="#" className="hover:text-blue-300">Pages</a>
            <a href="#" className="hover:text-blue-300">Contact</a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-600 text-white px-6 pb-6">

            <div className="flex flex-col gap-4 text-lg">

              <a href="#" className="border-b border-blue-400 pb-2">Home</a>
              <a href="#" className="border-b border-blue-400 pb-2">About</a>
              <a href="#" className="border-b border-blue-400 pb-2">Service</a>
              <a href="#" className="border-b border-blue-400 pb-2">Pages</a>
              <a href="#" className="border-b border-blue-400 pb-2">Contact</a>

            </div>

          </div>
        )}

      </nav>

    </header>
  );
}