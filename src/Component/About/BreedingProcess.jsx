    "use client";

    import { useEffect, useRef, useState } from "react";
    import { FaWater, FaFish, FaHeartbeat, FaBoxOpen } from "react-icons/fa";

    export default function BreedingProcess() {

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true);
            }
        },
        { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();

    }, []);

    const steps = [
        {
        icon: <FaWater />,
        text: "Clean and filtered water systems"
        },
        {
        icon: <FaFish />,
        text: "Proper breeding cycles"
        },
        {
        icon: <FaHeartbeat />,
        text: "Balanced feeding schedules"
        },
        {
        icon: <FaHeartbeat />,
        text: "Careful monitoring and health checks"
        },
        {
        icon: <FaBoxOpen />,
        text: "Safe packaging and transportation"
        }
    ];

    return (
        <section ref={sectionRef} className="px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div
            className={`text-center mb-16 transition-all duration-1000
            ${visible ? "animate-slideDown opacity-100" : "opacity-0"}`}
            >

            <h2 className="text-4xl md:text-5xl font-bold text-[#083B66] mb-4">
                Our Breeding & Care Process
            </h2>

            <p className="text-[#083B66] text-lg max-w-2xl mx-auto">
                We follow careful breeding techniques and responsible care
                practices to ensure strong, healthy, and stress-free fish.
            </p>

            </div>


            {/* Auto Sliding Cards */}
            <div className="relative overflow-hidden">

            <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">

                {steps.concat(steps).map((step, index) => (
                <div
                    key={index}
                    className={`min-w-[300px] h-[220px] 
                    bg-gradient-to-br from-[#0F2F4F] to-[#083B66]
                    border border-[#1F3D5A]
                    rounded-3xl p-8 shadow-lg
                    transition duration-500 group
                    hover:-translate-y-3
                    hover:shadow-[0_0_30px_rgba(79,209,232,0.4)]
                    ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}
                >

                    {/* Icon Circle */}
                    <div
                    className="w-14 h-14 flex items-center justify-center
                    rounded-full
                    bg-gradient-to-br from-[#0A84D6] to-[#4FD1E8]
                    text-white text-2xl mb-5
                    transition duration-500
                    group-hover:rotate-12 group-hover:scale-110"
                    >
                    {step.icon}
                    </div>

                    {/* Text */}
                    <p
                    className="text-[#C7D5E0] text-lg leading-relaxed
                    transition duration-500 group-hover:text-white"
                    >
                    {step.text}
                    </p>

                </div>
                ))}

            </div>

            </div>


            {/* Bottom Text */}
            <div
            className={`mt-16 text-center transition-all duration-1000
            ${visible ? "animate-slideUp opacity-100" : "opacity-0"}`}
            >

            <p className="text-[#083B66] text-lg max-w-3xl mx-auto">
                Our goal is to deliver active, stress-free, and disease-free fish
                to every customer through responsible breeding and careful handling.
            </p>

            </div>

        </div>

        </section>
    );
    }