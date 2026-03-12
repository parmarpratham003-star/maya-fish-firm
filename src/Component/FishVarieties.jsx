"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function FishVarieties() {

  const fishes = [
    { name: "Gold Fish", image: "/goldfish.png", desc: "Bright golden aquarium fish loved worldwide." },
    { name: "Angel Fish", image: "/angel.png", desc: "Elegant freshwater fish with beautiful fins." },
    { name: "Yellow Molly", image: "/yellowmolly.png", desc: "Peaceful fish perfect for community aquariums." },
    { name: "Guppies", image: "/guppies.png", desc: "Small colorful fish loved by aquarium hobbyists." },
    { name: "Fighter Fish", image: "/fighter.png", desc: "Vibrant Betta fish with flowing fins." },
    { name: "Koi Carp", image: "/koicrap.png", desc: "Large ornamental fish often kept in ponds." }
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#E6F6FF] to-white relative overflow-hidden">

      {/* decorative bubbles */}
      <div className="absolute w-72 h-72 bg-[#4FD1E8]/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-[#0A84D6]/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
       {/* Heading */}
<div className="text-center mb-20 max-w-3xl mx-auto">

  <p className="text-[#4FD1E8] font-semibold tracking-[4px] uppercase mb-4 text-sm">
    Our Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">

    <span className="block text-[#083B66] font-light tracking-wide">
      Popular Fish
    </span>

    <span className="block italic text-[#4FD1E8] font-semibold">
      Ornamental Varieties
    </span>

  </h2>

  <p className="text-[#083B66] text-lg leading-relaxed">
    Explore a wide range of healthy ornamental fishes bred with care
    at Maya Fish Firm.
  </p>

</div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">

          {fishes.map((a, b) => (
            <FishPixelBox key={b} fish={a} />
          ))}

        </div>

      </div>

    </section>
  );
}

function FishPixelBox({ fish }) {

  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const [a, setA] = useState(false);

  useEffect(() => {

    const b = pixelGridRef.current;
    if (!b) return;

    b.innerHTML = "";

    const c = 8;

    for (let d = 0; d < c; d++) {
      for (let e = 0; e < c; e++) {

        const f = document.createElement("div");
        const g = 100 / c;

        f.style.position = "absolute";
        f.style.width = `${g}%`;
        f.style.height = `${g}%`;
        f.style.left = `${e * g}%`;
        f.style.top = `${d * g}%`;
        f.style.background = "#ffffff";
        f.style.display = "none";

        b.appendChild(f);
      }
    }

  }, []);

  const animatePixels = (b) => {

    setA(b);

    const c = pixelGridRef.current;
    const d = activeRef.current;

    if (!c || !d) return;

    const e = c.children;

    gsap.killTweensOf(e);
    gsap.set(e, { display: "none" });

    gsap.to(e, {
      display: "block",
      duration: 0,
      stagger: { each: 0.006, from: "random" }
    });

    gsap.delayedCall(0.35, () => {
      d.style.display = b ? "flex" : "none";
    });

    gsap.to(e, {
      display: "none",
      duration: 0,
      delay: 0.35,
      stagger: { each: 0.006, from: "random" }
    });

  };

  return (
    <div
      className="relative w-full max-w-[320px] h-[260px] overflow-hidden rounded-3xl shadow-xl cursor-pointer group bg-white/40 backdrop-blur-lg border border-white/40 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => animatePixels(true)}
      onMouseLeave={() => animatePixels(false)}
    >

      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={fish.image}
          alt={fish.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div
        ref={activeRef}
        className="absolute inset-0 hidden items-center justify-center text-center px-6 bg-[#071A2F]/90 backdrop-blur-sm"
      >
        <div>
          <h3 className="text-white text-2xl font-bold mb-3">{fish.name}</h3>
          <p className="text-[#C7D5E0] text-sm leading-6">{fish.desc}</p>
        </div>
      </div>

      {/* Pixel grid */}
      <div
        ref={pixelGridRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Glow border */}
      <div className="absolute inset-0 rounded-3xl border border-white/30"></div>

    </div>
  );
}