     export default function CallToAction() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <p className="text-blue-600 font-semibold mb-2">
            Call to Action
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Create a Thriving Aquatic Environment Today
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Get healthy ornamental fish and premium live feed from
            Maya Fish Firm. Perfect for aquarium hobbyists,
            fish stores, and bulk buyers.
          </p>

        </div>


        {/* Right Action Box */}
        <div className="flex justify-center">

          <div
            className="bg-blue-600 text-white px-8 sm:px-12 py-8 sm:py-10
            rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105
            transition duration-300 cursor-pointer text-center
            w-full max-w-sm"
          >

            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Contact Us
            </h3>

            <p className="text-blue-100 mb-6 text-sm sm:text-base">
              Place your fish orders today
            </p>

            <span
              className="bg-white text-blue-600 px-6 py-3 rounded-full
              font-semibold text-sm sm:text-base inline-block"
            >
              Contact Us for Orders
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}