export default function FishVarieties() {

  const fishes = [
    {
      name: "Gold Fish",
      image: "https://images.unsplash.com/photo-1571759934494-7d0d1b5bb7ec"
    },
    {
      name: "Angel Fish",
      image: "https://images.unsplash.com/photo-1609424578068-9a5b3f2c5f9b"
    },
    {
      name: "Yellow Molly",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7"
    },
    {
      name: "Guppies",
      image: "https://images.unsplash.com/photo-1520302630591-fd1c66ed9a5c"
    },
    {
      name: "Fighter Fish (Betta)",
      image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a"
    },
    {
      name: "Koi Carp",
      image: "https://images.unsplash.com/photo-1589923188651-268a9765e432"
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-14">
          🐠 Our Popular Fish Varieties
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {fishes.map((fish, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >

              {/* Image */}
              <img
                src={`${fish.image}?auto=format&fit=crop&w=800&q=60`}
                alt={fish.name}
                className="w-full h-[260px] sm:h-[280px] md:h-[300px] object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* White hover overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 z-10 transform transition-all duration-500 group-hover:bottom-10">

                <h3 className="text-white group-hover:text-black text-lg md:text-xl font-semibold">
                  {fish.name}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}