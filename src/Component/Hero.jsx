export default function Hero() {
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

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-slideLeft">
          Healthy Ornamental Fish <br />
          for Beautiful Aquariums
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg mb-8 opacity-90 font-light tracking-wide animate-slideRight">
          Premium-quality Gold Fish, Angel Fish, Guppies, Betta, Koi Carp &
          Nutritious Live Fish Feed — bred with care and supplied with trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">

          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-lg font-medium transition shadow-lg">
            🔵 Explore Our Fish
          </button>

          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-md text-lg font-medium transition shadow-lg">
            🟢 WhatsApp Us Now
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