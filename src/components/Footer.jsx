"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

/* =========================
   🧲 Magnetic Wrapper (FIXED)
========================= */
function Magnetic({ children }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 180, damping: 18 });
  const springY = useSpring(my, { stiffness: 180, damping: 18 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    mx.set(x * 0.3);
    my.set(y * 0.3);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const ref = useRef(null);

  /* =========================
     🌊 LENIS
  ========================== */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* =========================
     🖱 CURSOR GLOW
  ========================== */
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(cursorY, { stiffness: 120, damping: 25 });

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  /* =========================
     📜 SCROLL ANIMATION (Fluence style)
  ========================== */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <footer
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative bg-[#0A0204] text-white overflow-hidden"
    >
      {/* 🔥 Gradient Glow (Fluence style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#9B1503]/30 to-transparent pointer-events-none" />

      {/* 🔥 Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,80,40,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-6 py-32 relative"
      >
        {/* 🔥 BIG HEADING (Fluence) */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[clamp(40px,8vw,120px)] font-semibold tracking-tight leading-none mb-20"
        >
          Let’s build something
        </motion.h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-16 mb-20">
          
          {/* BRAND */}
          <div className="md:col-span-2">
            <h2 className="text-[18px] font-medium mb-5">
              Fluence AI
            </h2>

            <p className="text-[14px] text-gray-400 leading-[1.7] mb-8 max-w-[320px]">
              Manage AI effortlessly with powerful tools designed for modern workflows.
            </p>

            <div className="flex gap-6">
              {["Facebook", "X", "Instagram", "LinkedIn"].map((s, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  className="text-[14px] text-gray-400 relative group"
                >
                  {s}
                  <span className="absolute left-0 -bottom-[2px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-[14px] font-medium mb-6">Use Link</h4>
            <ul className="space-y-3">
              {["Feature", "About", "Testimonial", "Pricing"].map((l, i) => (
                <li key={i}>
                  <Magnetic>
                    <a className="text-[14px] text-gray-400 relative group inline-block">
                      {l}
                      <span className="absolute left-0 -bottom-[2px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-[14px] font-medium mb-6">Company</h4>
            <p className="text-[14px] text-gray-400 leading-[1.7]">
              105 North 1st Street, #28 <br />
              San Jose, CA 94748
            </p>
          </div>
        </div>

        {/* 🔥 Divider */}
        <motion.div
          className="h-[1px] w-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% 0%", "-200% 0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-400">
          <p>© 2026 Design & Developed by Amani</p>

          <Magnetic>
            <a className="relative group mt-4 md:mt-0">
              Privacy Policy
              <span className="absolute left-0 -bottom-[2px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </footer>
  );
}