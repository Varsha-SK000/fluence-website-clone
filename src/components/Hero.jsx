import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
      
      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://framerusercontent.com/assets/kn7cGos906MVn9KuVEyKH6r8Ris.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 🧩 Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* 🏷️ Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
                     backdrop-blur-md bg-white/20 border border-white/30
                     shadow-[inset_0_4px_4px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.1)]
                     mb-6"
        >
          <span className="text-white text-sm font-medium">
            business & solution
          </span>
        </motion.div>

        {/* 🧠 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          The AI Agent Platform for Modern Teams
        </motion.h1>

        {/* ✍️ Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10"
        >
          Fluence AI helps you connect, manage, and optimize your AI tools effortlessly.
          Unlock powerful insights and automate complex processes with ease.
        </motion.p>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Primary */}
          <a
            href="/contact"
            className="px-8 py-4 bg-[#1b0c25] text-white rounded-lg font-semibold 
                       shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]
                       hover:opacity-90 transition"
          >
            Get Started
          </a>

          {/* Secondary */}
          <a
            href="mailto:someone@yoursite.com"
            className="px-8 py-4 bg-white/25 border border-white text-white 
                       rounded-lg font-semibold hover:bg-white/30 transition"
          >
            Book a Demo
          </a>
        </motion.div>

      </div>
    </section>
  );
}