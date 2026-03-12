export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark Overlay*/}
      <div className="absolute inset-0 bg-[#071A2F]/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl">

        <p className="text-[#4FD1E8] font-semibold tracking-[4px] uppercase mb-4 text-sm">
          Premium Ornamental Fish
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 font-serif">

          <span className="block font-light tracking-wide">
            Healthy Ornamental Fish
          </span>

          <span className="block italic text-[#4FD1E8] font-semibold">
            For Stunning Aquariums
          </span>

        </h1>

        <p className="text-lg md:text-xl text-[#C7D5E0] max-w-3xl mx-auto mb-10 font-light tracking-wide">
          Premium-quality Gold Fish, Angel Fish, Guppies, Betta, Koi Carp &
          nutritious live fish feed — carefully bred and supplied with trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">

          <button className="bg-[#0A84D6] hover:bg-[#4FD1E8] px-10 py-4 rounded-lg text-lg font-semibold transition shadow-lg">
            Explore Our Fish
          </button>

          <button className="border border-white/40 hover:bg-white hover:text-[#083B66] px-10 py-4 rounded-lg text-lg font-semibold transition">
            WhatsApp Us
          </button>

        </div>

      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-[120px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#E6F6FF"
            d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,245.3C1120,245,1280,171,1360,133.3L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

    </section>
  );
}