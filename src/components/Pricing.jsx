import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: "Free",
      yearly: "Free",
      desc: "Get started with Fluence AI at no cost",
      features: [
        "400 AI credits at signup",
        "20,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links",
      ],
      popular: false,
    },
    {
      name: "Plus",
      monthly: "$22",
      yearly: "$22",
      desc: "Unlock more powerful features",
      features: [
        "Unlimited AI credits",
        "50,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links",
      ],
      popular: true,
    },
    {
      name: "Pro",
      monthly: "$69",
      yearly: "$69",
      desc: "Take your business to the next level",
      features: [
        "Unlimited AI creation",
        "100,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 text-center">
      {/* Header */}
      <div className="mb-12">
        <span className="px-4 py-1 border border-purple-400 rounded-full text-sm">
          Pricing
        </span>
        <h2 className="text-4xl font-bold mt-4">Simple, Flexible Pricing</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Pricing plans for businesses at every stage
        </p>
      </div>

      {/* Monthly/Yearly Toggle */}
      <div className="flex justify-center mb-16">
        <div className="relative flex bg-gray-200 p-1 rounded-full w-max">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full shadow`}
            style={{ left: isYearly ? "50%" : "0" }}
          />
          <button
            onClick={() => setIsYearly(false)}
            className={`relative z-10 px-6 py-2 font-medium ${!isYearly ? "text-black" : "text-gray-500"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`relative z-10 px-6 py-2 font-medium ${isYearly ? "text-black" : "text-gray-500"
              }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-3xl relative shadow-lg bg-white transition-transform duration-300 ${plan.popular
                ? "border-2 border-black scale-105"
                : "border border-gray-200"
              }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                Popular
              </span>
            )}

            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-500 mb-6">{plan.desc}</p>

            {/* Price */}
            <motion.h2
              key={isYearly ? plan.yearly : plan.monthly}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-5xl font-bold mb-2"
            >
              {isYearly ? plan.yearly : plan.monthly}
            </motion.h2>
            {plan.name !== "Starter" && (
              <p className="text-sm text-gray-400 mb-6">
                {isYearly ? "/year" : "/month"}
              </p>
            )}

            {/* CTA Button */}
            <a
             className={`w-full py-3 rounded-xl mb-6 block text-center font-medium ${plan.popular
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Get Started
            </a>

            {/* Features */}
            <div className="text-left space-y-3">
              <p className="text-sm font-semibold text-gray-500 mb-2">
                What's included:
              </p>
              {plan.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm hover:text-black transition-colors"
                >
                  <span>✔</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}