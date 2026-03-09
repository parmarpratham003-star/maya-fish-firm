export default function AboutMayaFish() {
  return (
    <section className="py-24 bg-gray-100 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE SECTION */}
        <div className="relative">

          {/* Main Image */}
          <img
            src="/all.png"
            alt="Fish Farm"
            className="rounded-lg shadow-lg w-full"
          />

          {/* Floating Video/Image Card */}
          <div className="absolute bottom-[-40px] right-[-40px] bg-white p-3 rounded-lg shadow-xl w-64">

            <div className="relative">

              

              {/* Play Button
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-md">
                  ▶
                </div>
              </div> */}

            </div>

          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div>

          <p className="text-blue-600 font-semibold mb-2">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            We Provide Best Fish Farmers Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Maya Fish Firm specializes in breeding high-quality ornamental
            fish and supplying healthy aquarium fish for hobbyists,
            pet stores, and bulk buyers. We maintain clean water systems
            and proper breeding methods to ensure strong fish.
          </p>


          {/* Feature Card
          <div className="flex items-center bg-white rounded-full p-4 shadow-md mb-8">

            <img
              src="/goldfish.png"
              alt="Fish Farmer"
              className="w-14 h-14 rounded-full object-cover mr-4"
            />

            <div>
              <h4 className="font-semibold text-gray-800">
                Giant Fishes Farming
              </h4>
              <p className="text-gray-500 text-sm">
                Professional fish breeding and farming techniques
              </p>
            </div>

          </div> */}


          {/* Button */}
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
            About More
          </button>

        </div>

      </div>

    </section>
  );
}