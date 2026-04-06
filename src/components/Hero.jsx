import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
            The AI Agent Platform for Modern Teams
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Build, Deploy and Scale Your Entire AI Workforce
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
            Fluence AI helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="https://fluence.framer.website/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition">
              Get Started
            </a>
            <a href="mailto:someone@yoursite.com" className="px-8 py-4 border border-gray-300 text-black rounded-lg font-semibold text-lg hover:bg-gray-50 transition">
              Book a Demo
            </a>
          </div>
        </motion.div>

        {/* Right Chart */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src="https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png?scale-down-to=1024&width=1260&height=668"
            alt="Fluence AI Chart"
            className="w-full max-w-lg rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}