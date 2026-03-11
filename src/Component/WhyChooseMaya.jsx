import { FaFish, FaWater, FaTruck, FaUserFriends, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseMaya() {

  const cards = [
    {
      icon: <FaFish />,
      title: "Healthy & Disease-Free Fish",
      text: "Carefully bred fish with strong immunity and proper care."
    },
    {
      icon: <FaWater />,
      title: "Clean Breeding System",
      text: "Maintained tanks and clean water systems for healthy fish."
    },
    {
      icon: <FaTruck />,
      title: "Affordable Bulk Supply",
      text: "Reliable and affordable fish supply for shops and dealers."
    },
    {
      icon: <FaCheckCircle />,
      title: "Expert Fish Care Guidance",
      text: "Professional help for aquarium care and maintenance."
    },
    {
      icon: <FaUserFriends />,
      title: "Trusted Service",
      text: "Dedicated support for hobbyists and aquarium businesses."
    }
  ];

  return (
    <section className="py-24 px-6 overflow-hidden bg-[#071A2F]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#4FD1E8] font-semibold mb-2 animate-slideLeft">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white animate-slideRight">
            Why Choose Maya Fish Firm
          </h2>

          <p className="text-[#C7D5E0] mt-4 max-w-2xl mx-auto animate-slideLeft">
            We provide healthy ornamental fish, clean breeding systems,
            and reliable service for aquarium hobbyists and pet shops.
          </p>

        </div>


        {/* Auto Moving Cards */}
        <div className="relative w-full overflow-hidden">

          <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">

            {cards.concat(cards).map((card, index) => (
              <div
                key={index}
                className="min-w-[280px] backdrop-blur-md bg-white/10 border border-white/20
                rounded-2xl p-8 shadow-lg transition duration-300 group
                hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(79,209,232,0.5)]"
              >

                <div className="w-14 h-14 flex items-center justify-center
                rounded-full bg-[#083B66] mb-5 group-hover:bg-[#0A84D6] transition">

                  <div className="text-[#4FD1E8] text-2xl group-hover:text-white transition">
                    {card.icon}
                  </div>

                </div>

                <h3 className="font-semibold text-white mb-3 text-lg">
                  {card.title}
                </h3>

                <p className="text-[#C7D5E0] text-sm leading-relaxed">
                  {card.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}