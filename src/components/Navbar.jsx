import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 flex justify-center px-4 py-6">
      
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white border border-gray-200 rounded-xl px-6 py-3 flex items-center justify-between shadow-sm">

        {/* Left (Logo + Menu Icon) */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-6 h-6"
          >
            {/* Animated Hamburger → X */}
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="absolute w-6 h-[2px] bg-gray-600 top-1"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="absolute w-6 h-[2px] bg-gray-600 bottom-1"
            />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md text-sm font-bold">
              ✕
            </div>
            <span className="text-lg font-medium text-black">
              Fluence AI
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#feature" className="hover:text-black">Feature</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#testimonial" className="hover:text-black">Testimonial</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#contact" className="hover:text-black">Contact</a>
          <a href="#blog" className="hover:text-black">Blog</a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg text-sm">
          Get Started
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 80, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] bg-white border border-gray-200 rounded-xl p-6 mt-16 shadow-lg flex flex-col gap-4"
            >
              <a href="#feature" onClick={() => setOpen(false)}>Feature</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#testimonial" onClick={() => setOpen(false)}>Testimonial</a>
              <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a href="#blog" onClick={() => setOpen(false)}>Blog</a>

              <button className="mt-4 bg-black text-white py-2 rounded-lg">
                Get Started
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}