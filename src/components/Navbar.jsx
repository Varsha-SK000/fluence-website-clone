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
  const [scrolled, setScrolled] = useState(false);
  const [bounce, setBounce] = useState(false);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });

  const blur = useTransform(smoothVelocity, [-500, 0, 500], [22, 14, 22]);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

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

  const btnRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setBtnPos({ x: x * 0.25, y: y * 0.25 });
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
            "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* HEADER */}
      <header
        className="fixed top-0 left-0 w-full z-50 flex justify-center"
        style={{
          padding: scrolled ? "14px 24px" : "26px 32px",
          transition: "padding 0.45s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <motion.div
          layout
          animate={{
            height: scrolled ? 56 : 64,
            width: scrolled ? "70%" : "90%",
            scale: scrolled ? 0.92 : 1,
            borderRadius: scrolled ? 12 : 16,
            y: bounce ? -4 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 22,
          }}
          style={{
            backdropFilter: `blur(${blur.get()}px)`,
            WebkitBackdropFilter: `blur(${blur.get()}px)`,

            backgroundColor: "rgba(225, 215, 237, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            maxWidth: "1240px",
            width: "100%",
          }}
          className="px-6 flex items-center justify-between relative overflow-hidden"
        >
          {/* NOISE */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* LEFT */}
          <div className="flex items-center gap-3 z-10">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center">
              <span className="text-white font-bold">✦</span>
            </div>
            <span className="text-lg font-semibold">Fluence AI</span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium z-10">
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
                  className={`capitalize transition ${
                    active === item ? "text-black" : "text-gray-600"
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
                    className="absolute inset-0 -z-10 rounded-md bg-black/5"
                  />
                )}
              </div>
            ))}

            {/* CONTACT BUTTON */}
            <motion.a
              ref={btnRef}
              href="/contact"
              animate={{ x: btnPos.x, y: btnPos.y }}
              whileHover={{ scale: 1.08 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetBtn}
              className="bg-black text-white px-5 py-2 rounded-xl text-sm"
            >
              Contact
            </motion.a>
          </nav>

          {/* MOBILE BUTTON (FIXED) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl z-10"
          >
            ☰
          </button>
        </motion.div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 80, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl border border-gray-200 shadow-xl p-6 flex flex-col gap-4 z-50"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="capitalize text-gray-700"
                >
                  {item}
                </a>
              ))}

              <button className="bg-black text-white py-2 rounded-xl">
                Contact
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}