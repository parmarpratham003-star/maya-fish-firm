export default function FishVarieties() {

  const fishes = [
    {
      name: "Gold Fish",
      image: "goldfish.png",
      desc: "Popular aquarium fish known for its bright golden color."
    },
    {
      name: "Angel Fish",
      image: "angel.png",
      desc: "Elegant freshwater fish with beautiful triangular fins."
    },
    {
      name: "Yellow Molly",
      image: "yellowmolly.png",
      desc: "Peaceful live-bearing fish perfect for community aquariums."
    },
    {
      name: "Guppies",
      image: "guppies.png",
      desc: "Small colorful fish loved by aquarium hobbyists."
    },
    {
      name: "Fighter Fish (Betta)",
      image: "fighter.png",
      desc: "Vibrant fish famous for its flowing fins and colors."
    },
    {
      name: "Koi Carp",
      image: "koicrap.png",
      desc: "Large ornamental fish often kept in garden ponds."
    }
  ];

  return (
    <section className="bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold mb-2">
            Our Fish Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Popular Fish Varieties
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore a wide range of healthy ornamental fishes bred with care
            at Maya Fish Firm.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {fishes.map((fish, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-xl cursor-pointer rounded-[60px_20px_60px_20px]"
            >

              {/* Image */}
              <img
                src={fish.image}
                alt={fish.name}
                className="w-full h-72 object-cover transition duration-700 group-hover:scale-110 rounded-[60px_20px_60px_20px]"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[60px_20px_60px_20px]"></div>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-500">

                <h3 className="text-white text-2xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                  {fish.name}
                </h3>

                <p className="text-gray-300 text-sm transform translate-y-6 group-hover:translate-y-0 transition duration-700">
                  {fish.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}