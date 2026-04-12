import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Fluence AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making",
    name: "Sarah J.",
    role: "Data Analyst, TechCorp",
    avatar:
      "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
  },
  {
    quote:
      "The automation features in Fluence AI have made our workflows so much more efficient. We're now able to focus on high-priority tasks while the system handles the rest",
    name: "Mark L.",
    role: "Operations Manager, GrowthTech",
    avatar:
      "https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png",
  },
  {
    quote:
      "Thanks to Fluence AI, we now make data-driven decisions in real time. The predictive analytics have helped us forecast trends and stay ahead of the competition",
    name: "Emily R.",
    role: "Marketing Director, InnovateCo",
    avatar:
      "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
  },
];

const stats = [
  { number: 80, suffix: "+", label: "Businesses are Happy" },
  { number: 4980, suffix: "+", label: "Data-driven decisions" },
  { number: 80, suffix: "%", label: "Customer Satisfied" },
];

// ---------- COUNT UP COMPONENT ----------
function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <h3 className="text-4xl font-bold text-black">
      {count}
      {suffix}
    </h3>
  );
}

// ---------- MAIN COMPONENT ----------
export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [startStats, setStartStats] = useState(false);
  const statsRef = useRef(null);

  // AUTOPLAY SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // TRIGGER STATS ON SCROLL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartStats(true);
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
    id="testimonial"
    className="relative py-28 overflow-hidden rounded-3xl mx-6 my-6 text-center">

      {/* BACKGROUND */}
      <img
        src="https://framerusercontent.com/images/vkYLURkIQB3wgCJUD4m2MGdbKg.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="bg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/40" />

      <div className="relative z-10 px-6 flex flex-col items-center">

        {/* HEADER */}
        <div className="text-white mb-10">
          <span
            className="inline-flex items-center px-4 py-1 rounded-full border shadow-sm"
            style={{
              color: "rgb(27, 12, 37)",
              borderColor: "rgb(213, 136, 251)", // matches framer purple-ish border
              backgroundColor: "white",
              lineHeight: "1",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Wall of Love
          </span>
          <h2 className="text-4xl text-black font-semibold mt-4">
            What they're saying
          </h2>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative max-w-3xl w-full">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-10"
            >
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                “{testimonials[index].quote}”
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[index].avatar}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={testimonials[index].name}
                />

                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="px-4 py-2 bg-white/80 rounded-full shadow hover:bg-white"
            >
              Prev
            </button>

            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="px-4 py-2 bg-white/80 rounded-full shadow hover:bg-white"
            >
              Next
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STATS */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl w-full text-center text-black/80"
        >
          {stats.map((s, i) => (
            <div key={i}>
              <CountUp
                target={s.number}
                suffix={s.suffix}
                start={startStats}
              />
              <p className="text-black/70 mt-2">{s.label}</p>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
}