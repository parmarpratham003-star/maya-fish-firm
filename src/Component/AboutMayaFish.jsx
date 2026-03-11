export default function AboutMayaFish() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group animate-slideLeft">

          <img
            src="/all.png"
            alt="Fish Farm"
            className="rounded-2xl shadow-xl w-full transition duration-700 group-hover:scale-105"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">

            <p className="text-[#0A84D6] font-semibold text-sm">
              Premium Quality Fish
            </p>

            <p className="text-[#083B66] text-xs">
              Healthy ornamental fish breeding
            </p>

          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="animate-slideRight">

          <p className="text-[#0A84D6] font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#083B66] mb-6 transition duration-500 hover:text-[#0A84D6]">
            We Provide Best Fish Farmers Mission
          </h2>

          <p className="text-[#083B66] leading-relaxed mb-8">
            Maya Fish Firm specializes in breeding high-quality ornamental
            fish and supplying healthy aquarium fish for hobbyists,
            pet stores, and bulk buyers. We maintain clean water systems
            and proper breeding methods to ensure strong fish.
          </p>

          {/* Button */}
          <button className="bg-[#0A84D6] text-white px-8 py-3 rounded-full
          hover:bg-[#4FD1E8] hover:scale-105 transition duration-300
          shadow-lg animate-slideUp">
            About More
          </button>

        </div>

      </div>

    </section>
  );
}