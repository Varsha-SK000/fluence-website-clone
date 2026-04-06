import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          About Fluence AI
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            fontSize: "18px",
            color: "#6b7280",
            marginBottom: "50px",
            lineHeight: "1.6",
          }}
        >
          Fluence AI is crafted to elevate how businesses showcase their AI
          solutions. With a focus on clean design, it helps brands engage and
          convert.
        </motion.p>
        
      </div>
    </section>
  );
}