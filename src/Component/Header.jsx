"use client";
import { useState, useEffect } from "react";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">

      {/* Hide Top Header when scroll */}
      {!scrolled && (
        <>
          {/* Top Bar */}
          <div className="bg-black text-white text-xs sm:text-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

              <div className="flex gap-6">
                <p>✉ Demo@example.com</p>
                <p>Open hours: Mon - Fri: 9:00AM - 6:00PM</p>
              </div>

              <div className="flex gap-4">
                <span>f</span>
                <span>X</span>
                <span>📷</span>
              </div>

            </div>
          </div>


          {/* Middle Header */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 py-4">

              <div className="flex items-center gap-3">
                📍
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-500 text-sm">
                    2334 Peterson Street Kingston
                  </p>
                </div>
              </div>

              <div className="text-center text-3xl font-bold text-blue-600">
                MAYA FISH FARM
              </div>

              <div className="flex justify-end items-center gap-3">
                ✉
                <div>
                  <p className="font-semibold">Telephone</p>
                  <p className="text-gray-500 text-sm">
                    +199 1123-2234-21
                  </p>
                </div>
              </div>

            </div>
          </div>
        </>
      )}

      {/* Navbar */}
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-blue-500"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center gap-10 text-white text-lg">

          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300">About</a>
          <a href="#" className="hover:text-blue-300">Service</a>
          <a href="#" className="hover:text-blue-300">Pages</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
          

        </div>
      </nav>

    </header>
  );
}