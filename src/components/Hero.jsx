import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
            The AI Agent Platform for Modern Teams
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Build, Deploy and Scale Your Entire AI Workforce
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Fluence AI helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-300 text-black rounded-lg font-medium hover:bg-gray-50 transition">
              Book a Demo
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src="https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png?scale-down-to=1024&width=1260&height=668"
            alt="Fluence AI Chart"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}