import { useEffect, useRef, useState } from "react";

const text = [
  "Fluence AI",
  "is crafted to",
  "elevate how businesses",
  "showcase their AI solutions.",
  "With a focus on",
  "clean design, it helps brands",
  "engage and convert.",
];

export default function About() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const height = sectionRef.current.offsetHeight;

      // smoother normalized scroll progress
      const raw =
        (-rect.top + window.innerHeight * 0.5) / (height * 0.7);

      const p = Math.min(1, Math.max(0, raw));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-[#0a0a0a] overflow-hidden rounded-3xl mx-6 my-6"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-start mb-10">
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
            about
          </span>
        </div>

        {/* Text */}
        <h2
          className="text-center flex flex-wrap justify-center"
          style={{
            fontFamily: "Bricolage Grotesque, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px,5vw,70px)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
          }}
        >
          {text.map((word, i) => {
            const start = i / (text.length + 2); // smoother stagger
            const diff = progress - start;

            // Framer-like reveal curve
            const active = diff > 0;

            const opacity = active ? 1 : 0.08;
            const blur = active ? "0px" : "8px";

            return (
              <span
                key={i}
                style={{
                  marginRight: "0.35em",
                  display: "inline-block",
                  opacity,
                  filter: `blur(${blur})`,
                  transform: active
                    ? "translateY(0px)"
                    : "translateY(6px)",
                  transition:
                    "opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease",
                  color: active
                    ? word === "Fluence AI"
                      ? "#ffffff"
                      : "#d1d1d1"
                    : "#2a2a2a",
                }}
              >
                {word}
              </span>
            );
          })}
        </h2>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[500px] top-[40%] left-[15%] bg-purple-500/10 blur-3xl rounded-full" />
      </div>
    </section>
  );
}