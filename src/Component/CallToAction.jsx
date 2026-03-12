export default function CallToAction() {
  return (
    <section className="py-20 px-6 bg-[#E6F6FF]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left animate-slideLeft">

          <p className="text-[#0A84D6] font-semibold mb-2 uppercase tracking-[2px]">
            Call to Action
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#083B66] mb-5">
            Create a Thriving Aquatic Environment Today
          </h2>

          <p className="text-[#083B66] text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Get healthy ornamental fish and premium live feed from
            Maya Fish Firm. Perfect for aquarium hobbyists,
            fish stores, and bulk buyers.
          </p>

        </div>


        {/* Right Action Box */}
        <div className="flex justify-center animate-slideRight">

          <div
            className="bg-white/70 backdrop-blur-md border border-[#1F3D5A]/20
            px-12 py-10 rounded-3xl shadow-xl
            hover:shadow-[0_20px_40px_rgba(10,132,214,0.25)]
            hover:-translate-y-2 transition duration-300 text-center
            w-full max-w-sm"
          >

            <h3 className="text-2xl font-semibold text-[#083B66] mb-3">
              Contact Us
            </h3>

            <p className="text-[#083B66] mb-6">
              Place your fish orders today
            </p>

            <button
              className="bg-[#0A84D6] text-white px-7 py-3 rounded-full
              font-semibold hover:bg-[#4FD1E8] hover:scale-105
              transition duration-300 shadow-lg"
            >
              Contact Us for Orders
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}