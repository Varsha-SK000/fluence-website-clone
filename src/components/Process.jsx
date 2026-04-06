import { motion } from "framer-motion";

const steps = [
  {
    title: "Connect Your Data",
    description: "Effortlessly integrate data from various sources into a unified system.",
    icon: "https://framerusercontent.com/images/PLXsSSAuDhFY3nTykAyD7DpKi8.png?width=696&height=508",
  },
  {
    title: "Analyze and Optimize",
    description: "Use AI to uncover valuable insights and improve performance.",
    icon: "https://framerusercontent.com/images/uup7dORC5yPjXdJ4q20qgl3IGI.png?width=696&height=508",
  },
  {
    title: "Let AI Work",
    description: "Streamline tasks and enhance productivity with AI.",
    icon: "https://framerusercontent.com/images/VLnlQRrUsqwRQQiox0h47mo.png?width=696&height=508",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            A Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started quickly and effortlessly with Fluence AI's streamlined 3-step process designed to optimize your data workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img src={step.icon} alt={step.title} className="w-24 h-24 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://fluence.framer.website/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition">
              Get Started
            </a>
            <a href="mailto:someone@yoursite.com" className="px-8 py-4 border border-gray-300 text-black rounded-lg font-semibold text-lg hover:bg-gray-50 transition">
              Book a Demo
            </a>
          </div>
          <img
            src="https://framerusercontent.com/images/eetEvxW02PAzDQTNZEJNez0XPc.png?width=522&height=597"
            alt="Man and women using laptop"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}