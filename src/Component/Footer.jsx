"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
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
      className="relative text-white"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Wave Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Dark Overlay */}
      <div className="bg-black/80 pt-28 pb-12 px-6">

        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              MAYA FISH FARM
            </h2>

            <p className="text-gray-300 text-sm mb-4">
              Sustainable aquaculture solutions providing fresh fish
              production and quality services for local markets.
            </p>

            <div className="flex gap-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
              <FaInstagram className="cursor-pointer hover:text-blue-400 transition" />
              <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>

            <ul className="space-y-2 text-gray-300">
              {["Home","About","Service",,"Contact Us"].map((item,i)=>(
                <li
                  key={i}
                  className="cursor-pointer hover:text-blue-400 transition transform hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Working Hours</h3>

            <p className="text-gray-300 text-sm mb-4">
              Visit our farm during working hours for fresh fish
              and aquaculture services.
            </p>

            <div className="space-y-2 text-gray-300 text-sm">
              <p>Mon - Fri : 9:00AM - 6:00PM</p>
              <p>Sat - Sun : 8:00AM - 4:00PM</p>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>

            <p className="text-gray-300 text-sm mb-4">
              Get latest updates about fish farming and offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mb-3 bg-transparent border border-gray-400 focus:outline-none focus:border-blue-400"
            />

            <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 text-center pt-6 mt-10 text-gray-300 text-sm">
          Copyright © Maya Fish Farm. All rights reserved.
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg transition"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}