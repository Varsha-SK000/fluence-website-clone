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
      "Yes! Fluence AI supports integration with a wide range of tools and platforms. Our flexible APIs allow you to connect with your data sources effortlessly, enabling a smooth workflow.",
  },
  {
    question: "How does Fluence AI automate tasks?",
    answer:
      "Fluence AI uses advanced AI-driven workflows to automate repetitive tasks, streamline operations, and enhance productivity across your organization.",
  },
  {
    question: "Is my data secure with Fluence AI?",
    answer:
      "Yes, data security is our top priority. We implement enterprise-grade security measures, including SOC 2 compliance, GDPR adherence, and HIPAA compliance to protect your information.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive support including 24/7 customer service, detailed documentation, onboarding assistance, and dedicated account management for enterprise clients.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(1); // default open like Fluence

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="faq"
      className="min-h-screen px-6 py-20 flex justify-center"
    >
      <div className="w-full max-w-6xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="flex flex-col justify-between rounded-[2rem] bg-white p-8 shadow-lg border border-gray-200">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-white border px-4 py-1 text-sm font-semibold shadow-sm">
              FAQ
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 max-w-xl text-gray-600 text-base md:text-lg">
              Find answers to the most common questions about Fluence AI. If you still need help, our team is ready to support you.
            </p>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-gray-50 p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col gap-3">
              <div>
                <h4 className="font-semibold text-lg text-black">
                  Still have a question?
                </h4>
                <p className="text-gray-500">
                  We’ll be happy to help you.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 rounded-full bg-slate-900/10"></span>
                <span className="inline-flex h-10 w-10 rounded-full bg-sky-500/15"></span>
                <span className="inline-flex h-10 w-10 rounded-full bg-amber-200"></span>
              </div>

              <a
                href="#contact"
                className="inline-block mt-2 w-full rounded-xl bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = index === activeIndex;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-lg text-black">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="relative h-5 w-5 flex-shrink-0"
                  >
                    <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-black" />
                    <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-black rotate-90" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-6 pb-6 text-gray-600"
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
    </section>
  );
}