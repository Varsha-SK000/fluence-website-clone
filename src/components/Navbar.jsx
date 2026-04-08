import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";

const navItems = ["feature", "about", "testimonial", "pricing", "faq"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(null);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });

  const blur = useTransform(smoothVelocity, [-500, 0, 500], [25, 10, 25]);

  const [scrolled, setScrolled] = useState(false);
  const [bounce, setBounce] = useState(false);

  // Cursor glow
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Scroll + bounce
  useEffect(() => {
    let timeout;

    return scrollY.on("change", (y) => {
      setScrolled(y > 40);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setBounce(true);
        setTimeout(() => setBounce(false), 300);
      }, 120);
    });
  }, [scrollY]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 120;
          if (window.scrollY >= offset) current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll (inertia feel)
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const target = el.offsetTop - 80;
    let start = window.scrollY;
    let startTime = null;

    const duration = 600;

    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = ease(progress);

      window.scrollTo(0, start + (target - start) * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  // Magnetic button
  const btnRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setBtnPos({ x: x * 0.2, y: y * 0.2 });
  };

  const resetBtn = () => setBtnPos({ x: 0, y: 0 });

  return (
    <>
      {/* CURSOR GLOW */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-40"
        animate={{
          x: cursor.x - 150,
          y: cursor.y - 150,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.25), transparent 100%)",
          filter: "blur(100px)",
        }}
      />

      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
        <motion.div
          layout
          animate={{
            width: scrolled ? "70%" : "100%",
            scale: scrolled ? 0.92 : 1,
            borderRadius: scrolled ? 20 : 28,
            paddingTop: scrolled ? 8 : 16,
            paddingBottom: scrolled ? 8 : 16,
            y: bounce ? -4 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 20,
          }}
          style={{
            backdropFilter: `blur(${blur.get()}px)`,
          }}
          className="pointer-events-auto mt-4 px-6 flex items-center justify-between border border-gray-200 bg-white/60 shadow-md relative overflow-hidden"
        >
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Gradient edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 opacity-60 pointer-events-none" />

          {/* LEFT */}
          <div className="flex items-center gap-4 z-10">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-7 h-7 flex items-center justify-center"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                className="absolute w-6 h-[2px] bg-black"
              />
              <motion.span
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                className="absolute w-6 h-[2px] bg-black"
              />
            </button>

            <motion.div
              animate={{ scale: scrolled ? 0.9 : 1 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="20" fill="#000" />
                </svg>
              </div>
              <span className="text-lg font-semibold">Fluence AI</span>
            </motion.div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative z-10">
            {navItems.map((item, i) => (
              <div
                key={item}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`capitalize transition ${active === item ? "text-black" : "text-gray-500"
                    }`}
                >
                  {item}
                </a>

                {active === item && (
                  <motion.div
                    layoutId="active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black"
                  />
                )}

                {hovered === i && (
                  <motion.div
                    layoutId="hover"
                    className="absolute inset-0 -z-10 bg-black/5 rounded-md"
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Magnetic button */}
          <motion.button
            ref={btnRef}
            animate={{ x: btnPos.x, y: btnPos.y }}
            whileHover={{ scale: 1.08 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetBtn}
            className="hidden md:block bg-black text-white px-5 py-2 rounded-xl text-sm z-10"
          >
            Contact
          </motion.button>
        </motion.div>

        {/* MOBILE */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 80, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] bg-white border border-gray-200 rounded-2xl p-6 mt-16 shadow-xl flex flex-col gap-5"
              >
                {[...navItems, "contact", "blog"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="capitalize text-gray-700 hover:text-black"
                  >
                    {item}
                  </a>
                ))}

                <button className="mt-2 bg-black text-white py-2 rounded-xl">
                  Contact
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}