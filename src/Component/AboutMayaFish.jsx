export default function AboutMayaFish() {
  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            🌿 Welcome to Maya Fish Firm
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Maya Fish Firm is a dedicated ornamental fish breeding and sales
            business specializing in healthy, high-quality aquarium fish and
            live fish feed.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            We proudly serve aquarium hobbyists, pet shops, and bulk buyers
            with reliable supply and affordable pricing.
          </p>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Our farm follows proper breeding techniques, clean water systems,
            and careful fish handling to ensure strong, disease-free fish.
          </p>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src="/Maya fish firm logo.jpg.jpeg"
            alt="Fish Farm"
            className="rounded-xl shadow-lg w-full max-w-md"
          />

        </div>

      </div>

    </section>
  );
}