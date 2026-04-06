import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    text: "The automation features in Fluence AI have made our workflows so much more efficient. We're now able to focus on high‑priority tasks while the system handles the rest",
    name: "Mark L.",
    role: "Operations Manager, GrowthTech",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: "Thanks to Fluence AI, we now make data‑driven decisions in real time. The predictive analytics have helped us forecast trends and stay ahead of the competition",
    name: "Emily R.",
    role: "Marketing Director, InnovateCo",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: "Fluence AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision‑making",
    name: "Sarah J.",
    role: "Data Analyst, TechCorp",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const stats = [
  { number: "80+", label: "Businesses are Happy" },
  { number: "4980+", label: "Data‑driven decisions" },
  { number: "80%", label: "Customer Satisfied" },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonial" className="py-16 bg-gray-50 text-center scroll-mt-24">
      {/* Outer motion div (same fade + scale as your original code) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mt-16"
      >
        {/* BACKGROUND SKY IMAGE */}
        <img
          src="https://framerusercontent.com/images/vkYLURkIQB3wgCJUD4m2MGdbKg.png?scale-down-to=1024&width=2400&height=1345"
          alt="Sky"
          className="w-full rounded‑lg shadow‑lg object-cover"
        />

        {/* OVERLAY CONTAINER — positions everything on top of the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          
          {/* Heading */}
          <div className="mb-8 text-white">
            <span className="px-4 py-1 border border-white rounded-full text-sm">
              Wall of Love
            </span>
            <h2 className="text-3xl font-semibold mt-4">
              What they're saying
            </h2>
          </div>

          {/* Slider */}
          <div className="relative max-w-4xl w-full">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <p className="text-lg mb-6">
                "{testimonials[index].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[index].image}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <h4 className="font-semibold">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm opacity-60">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevSlide}
                className="px-4 py-2 bg-white shadow rounded-full hover:bg-gray-100"
              >
                Prev
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2 bg-white shadow rounded-full hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </div>

          {/* STATS — below the slider but still on the image overlay */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}