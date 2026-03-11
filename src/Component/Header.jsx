  "use client";
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
              ? "fixed top-0 bg-[#071A2F]/95 backdrop-blur-md shadow-lg"
              : "bg-[#071A2F]"
          }`}
        >

          <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="Maya Fish Farm"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Company Name */}
            <h1 className="hidden md:block text-white text-xl font-semibold tracking-wide">
              MAYA FISH FARM
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-[#C7D5E0] text-sm font-medium">

              <a href="#" className="hover:text-[#4FD1E8] transition">
                Home
              </a>

              <a href="#" className="hover:text-[#4FD1E8] transition">
                About
              </a>

              <a href="#" className="hover:text-[#4FD1E8] transition">
                Services
              </a>

              <a href="#" className="hover:text-[#4FD1E8] transition">
                Pages
              </a>

              <a href="#" className="hover:text-[#4FD1E8] transition">
                Contact
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-[#0F2F4F] px-6 py-4 text-[#C7D5E0]">

              <div className="flex flex-col gap-4 text-sm">

                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Pages</a>
                <a href="#">Contact</a>

              </div>

            </div>
          )}

        </nav>

      </header>
    );
  }