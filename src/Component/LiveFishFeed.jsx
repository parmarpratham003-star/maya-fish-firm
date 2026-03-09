import { FaBug, FaLeaf, FaFish } from "react-icons/fa";

export default function LiveFishFeed() {
  return (
    <section className="bg-gray-50 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold mb-2">
            Live Fish Feed
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Nutritious Live Fish Feed
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We provide high-quality live fish food that supports healthy
            growth, stronger immunity, and vibrant coloration for
            ornamental fish.
          </p>

        </div>


        {/* Organic Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">

          {/* Worms */}
          <div className="group bg-white p-10 shadow-xl 
          rounded-[60%_40%_55%_45%/45%_60%_40%_55%] 
          hover:scale-105 transition duration-500 relative overflow-hidden">

            <div className="flex items-center gap-4 mb-6">

              <FaBug className="text-blue-600 text-3xl" />

              <h3 className="text-xl font-semibold text-gray-800">
                Worms
              </h3>

            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Protein-rich live worms ideal for fish growth and
              strengthening immunity in aquarium fish.
            </p>

          </div>


          {/* Natural Feed */}
          <div className="group bg-white p-10 shadow-xl 
          rounded-[55%_45%_60%_40%/40%_60%_45%_55%] 
          hover:scale-105 transition duration-500 relative overflow-hidden">

            <div className="flex items-center gap-4 mb-6">

              <FaLeaf className="text-green-600 text-3xl" />

              <h3 className="text-xl font-semibold text-gray-800">
                Natural Live Feed
              </h3>

            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Natural feed that keeps fish active, healthy,
              and improves vitality and coloration.
            </p>

          </div>


          {/* Breeding Feed */}
          <div className="group bg-white p-10 shadow-xl 
          rounded-[45%_55%_40%_60%/60%_40%_55%_45%] 
          hover:scale-105 transition duration-500 relative overflow-hidden">

            <div className="flex items-center gap-4 mb-6">

              <FaFish className="text-pink-600 text-3xl" />

              <h3 className="text-xl font-semibold text-gray-800">
                Breeding Support Feed
              </h3>

            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Special breeding feed that enhances reproduction
              and increases breeding success.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}