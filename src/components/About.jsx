import { motion } from "framer-motion";

const text = [
  "Fluence",
  "AI",
  "is",
  "crafted",
  "to",
  "elevate",
  "how",
  "businesses",
  "showcase",
  "their",
  "AI",
  "solutions.",
  "With",
  "a",
  "focus",
  "on",
  "clean",
  "design,",
  "it",
  "helps",
  "brands",
  "engage",
  "and",
  "convert."
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-#231716 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="px-6 py-2 border rounded-full shadow-md text-sm font-medium">
            about
          </div>
        </div>

        {/* Animated Text */}
        <div className="text-center sticky top-0">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-gray-900 flex flex-wrap justify-center">
            {text.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 1,
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl top-10 left-10 opacity-40"></div>
        <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl bottom-10 right-10 opacity-40"></div>
        <div className="absolute w-72 h-72 bg-indigo-200 rounded-full blur-3xl top-1/2 left-1/3 opacity-30"></div>
      </div>
    </section>
  );
}