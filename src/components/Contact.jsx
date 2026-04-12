import React from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-white">

            {/* ================= NAVBAR ================= */}
            <Navbar />

            {/* ================= MAIN ================= */}
            <main className="flex-1 pt-24">

                <section className="w-full">
                    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-20">

                        {/* HEADER */}
                        <div className="text-center max-w-[700px] mx-auto mb-16">
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
                            >Contact us</span>

                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-semibold mt-6"
                            >
                                Get in touch with our team
                            </motion.h2>
                        </div>

                        {/* ================= CONTAINER (Framer-style) ================= */}
                        <div
                            className="flex flex-col lg:flex-row gap-10 rounded-2xl"
                            style={{
                                backgroundColor: "#fff",
                                padding: "40px",
                                borderRadius: "16px",
                                boxShadow: "0px 2px 5px rgba(0,0,0,0.05)"
                            }}
                        >

                            {/* ================= LEFT SIDE ================= */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex-1 space-y-8"
                            >

                                <p className="text-lg text-gray-700">
                                    Feel free to reach out — we’d love to connect.
                                </p>

                                {/* EMAIL */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
                                        ✉️
                                    </div>
                                    <div>
                                        <p className="font-medium">Email us</p>
                                        <a
                                            href="mailto:hello@fluence.com"
                                            className="text-gray-600 underline"
                                        >
                                            hello@fluence.com
                                        </a>
                                    </div>
                                </div>

                                {/* SUPPORT */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
                                        ℹ️
                                    </div>
                                    <div>
                                        <p className="font-medium">Get support</p>
                                        <a href="#" className="text-gray-600 underline">
                                            Chat with us
                                        </a>
                                    </div>
                                </div>

                                {/* TESTIMONIAL */}
                                <div className="mt-8 p-6 border rounded-xl bg-white">
                                    <p className="text-sm leading-relaxed mb-4">
                                        “Fluence AI has revolutionized the way we process data. It saved us countless hours.”
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png"
                                            className="w-10 h-10 rounded-full object-cover"
                                            alt="user"
                                        />
                                        <div>
                                            <p className="font-medium">Amber Stone</p>
                                            <p className="text-sm text-gray-500">
                                                Manager, GrowthTech
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>

                            {/* ================= RIGHT FORM ================= */}
                            <form
                                className="flex-1 flex flex-col gap-5"
                                style={{
                                    background: "#f7f6f7",
                                    padding: "32px",
                                    borderRadius: "16px",
                                    flex: 1.5
                                }}
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <input className="input" placeholder="First name" />
                                    <input className="input" placeholder="Last name" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <input className="input" placeholder="Your email" />
                                    <input className="input" placeholder="Your phone" />
                                </div>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message"
                                    className="input"
                                />

                                <button className="submit-btn">
                                    Submit
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting you agree to our{" "}
                                    <span className="underline">Privacy Policy</span>
                                </p>

                            </form>

                        </div>
                    </div>
                </section>

            </main>

            {/* ================= FOOTER ================= */}
            <Footer />

            {/* ================= STYLES ================= */}
            <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          outline: none;
          background: white;
        }

        .input:focus {
          border-color: #1b0c25;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #1b0c25;
          color: white;
          border-radius: 8px;
          transition: 0.3s;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }
      `}</style>

        </div>
    );
}