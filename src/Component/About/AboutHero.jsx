export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">

        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Passion for Aquatic Life. <br />
          Commitment to Quality.
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-8 opacity-90 font-light tracking-wide">
          We promote responsible fish keeping and supply healthy ornamental fish
          with expert care. Our farm focuses on sustainable breeding,
          clean water systems, and quality fish for aquariums and ponds.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button className="bg-[#0A84D6] hover:bg-[#4FD1E8] px-8 py-3 rounded-md text-lg font-medium transition shadow-lg">
            Explore Our Fish
          </button>

          <button className="bg-white text-[#0A84D6] hover:bg-[#E6F6FF] px-8 py-3 rounded-md text-lg font-medium transition shadow-lg">
            Contact Our Farm
          </button>

        </div>

      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none">

        <svg
          className="w-full h-[120px] md:h-[160px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9fafb"
            d="M0,192L80,176C160,160,320,128,480,149.3C640,171,800,245,960,245.3C1120,245,1280,171,1360,133.3L1440,96L1440,320L0,320Z"
          ></path>
        </svg>

      </div>

    </section>
  );
}