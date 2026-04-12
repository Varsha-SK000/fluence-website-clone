import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Fluence AI?",
    answer:
      "Fluence AI is a comprehensive platform that helps businesses connect, manage, and optimize their AI tools effortlessly.",
  },
  {
    question: "Can I integrate Fluence AI with my existing tools?",
    answer:
      "Yes! Fluence AI supports integration with a wide range of tools and platforms.",
  },
  {
    question: "How does Fluence AI automate tasks?",
    answer:
      "Fluence AI uses AI-driven workflows to automate repetitive tasks and improve productivity.",
  },
  {
    question: "Is my data secure with Fluence AI?",
    answer:
      "Yes, we use enterprise-grade security and compliance standards.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 support, onboarding help, documentation, and enterprise assistance.",
  },
];

const avatars = [
  'https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png',
  'https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png',
  'https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png',
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full flex justify-center px-4 py-[100px] bg-white"
    >

      {/* ✅ SINGLE OUTER CONTAINER */}
      <div className="w-full max-w-6xl rounded-[36px] bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-10 py-14">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">

          {/* LEFT SIDE (NO CARD STYLE ANYMORE) */}
          {/* <div className="flex flex-col justify-between">

            <div>
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
                FAQ
              </span>

              <h2 className="text-4xl font-semibold leading-tight text-[#1b0c25]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-[#1b0c25]">
                Still have a question?
              </h4>

              <p className="text-gray-500 mt-1">
                We’ll be happy to help you.
              </p>

              <a
                href="contact"
                className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Contact us!
              </a>
            </div>

          </div> */}
          {/* ── Left panel ── */}
          <div style={{ position: "sticky", top: 100 }}>

            {/* FAQ tag */}
            <div style={{ marginBottom: 18 }}>
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
                FAQ</span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 800,
                fontSize: "clamp(22px, 2.8vw, 32px)",
                color: "#0a0a0a",
                lineHeight: 1.2,
                margin: "16px 0 28px",
                letterSpacing: "-0.02em",
              }}
            >
              Frequently Asked Questions
            </h2>

            {/* Sub heading */}
            <div style={{ marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#0a0a0a",
                }}
              >
                Still have a question?
              </span>
            </div>

            {/* Description + link */}
            <p
              style={{
                fontSize: 15,
                color: "#777",
                marginBottom: 20,
                lineHeight: 1.55,
              }}
            >
              <a
                href="contact"
                style={{
                  fontWeight: 600,
                  color: "#0a0a0a",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Contact us!
              </a>{" "}
              We'll be happy to help you.
            </p>

            {/* Overlapping avatars */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="support team"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #fff",
                    marginLeft: i === 0 ? 0 : -14,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    position: "relative",
                    zIndex: avatars.length - i,
                  }}
                />
              ))}
            </div>

          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div className="space-y-4">

            {faqData.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#f7f6f7] border border-gray-200 overflow-hidden"
                >

                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-6 py-5"
                  >
                    <h4 className="text-[18px] font-medium text-[#1b0c25]">
                      {item.question}
                    </h4>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative w-5 h-5 flex-shrink-0"
                    >
                      <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1b0c25] -translate-y-1/2" />
                      <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1b0c25] -translate-y-1/2 rotate-90" />
                    </motion.div>

                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-gray-600"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}