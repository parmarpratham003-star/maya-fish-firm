import { FaFish, FaWater, FaTruck, FaUserFriends, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseMaya() {
  return (
    <section className="bg-gray-50 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading (same style as About section) */}
        <div className="text-center mb-20">

          <p className="text-blue-600 font-semibold mb-2">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Why Choose Maya Fish Firm
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We provide healthy ornamental fish, clean breeding systems,
            and reliable service for aquarium hobbyists and pet shops.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Card */}
          <div className="bg-white p-8 shadow-md hover:shadow-xl transition 
          [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">

            <FaFish className="text-blue-600 text-3xl mb-4" />

            <h3 className="font-semibold text-gray-800 mb-2">
              Healthy & Disease-Free Fish
            </h3>

            <p className="text-gray-500 text-sm">
              Carefully bred fish with strong immunity and proper care.
            </p>

          </div>


          <div className="bg-white p-8 shadow-md hover:shadow-xl transition 
          [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">

            <FaWater className="text-blue-600 text-3xl mb-4" />

            <h3 className="font-semibold text-gray-800 mb-2">
              Clean Breeding System
            </h3>

            <p className="text-gray-500 text-sm">
              Maintained tanks and clean water systems for healthy fish.
            </p>

          </div>


          <div className="bg-white p-8 shadow-md hover:shadow-xl transition 
          [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">

            <FaTruck className="text-blue-600 text-3xl mb-4" />

            <h3 className="font-semibold text-gray-800 mb-2">
              Affordable Bulk Supply
            </h3>

            <p className="text-gray-500 text-sm">
              Reliable and affordable fish supply for shops and dealers.
            </p>

          </div>


          <div className="bg-white p-8 shadow-md hover:shadow-xl transition 
          [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">

            <FaCheckCircle className="text-blue-600 text-3xl mb-4" />

            <h3 className="font-semibold text-gray-800 mb-2">
              Expert Fish Care Guidance
            </h3>

            <p className="text-gray-500 text-sm">
              Professional help for aquarium care and maintenance.
            </p>

          </div>


          <div className="bg-white p-8 shadow-md hover:shadow-xl transition 
          [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">

            <FaUserFriends className="text-blue-600 text-3xl mb-4" />

            <h3 className="font-semibold text-gray-800 mb-2">
              Trusted Service
            </h3>

            <p className="text-gray-500 text-sm">
              Dedicated support for hobbyists and aquarium businesses.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}