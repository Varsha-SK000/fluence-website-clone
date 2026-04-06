import { motion } from "framer-motion";

const benefits = [
  {
    icon: "⚡", 
    title: "Increased Efficiency",
    description: "Automate tasks and reduce manual workloads",
  },
  {
    icon: "📈",
    title: "Scalable Solutions",
    description: "Easily grow with the demands of your data",
  },
  {
    icon: "⏱️",
    title: "Faster Decision-Making",
    description: "Leverage real-time insights for quicker choices",
  },
  {
    icon: "🤝",
    title: "Enhanced Collaboration",
    description: "Streamline workflows with team-friendly features",
  },
  {
    icon: "🔒",
    title: "Data Security",
    description: "Safeguard your data with top-tier encryption",
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    description: "Let AI adapt and improve with evolving data",
  },
];

export default function About() {
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
            Why Choose Fluence AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fluence AI offers powerful benefits that help you save time, improve decision-making, and scale your data operations effortlessly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
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
          <h3 className="text-2xl font-bold text-black mb-4">Enterprise-Grade Security</h3>
          <p className="text-gray-600 mb-8">
            We maintain the highest standards of security and compliance for enterprise automation deployments.
          </p>
          <div className="flex justify-center space-x-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">SOC 2</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">GDPR</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">HIPAA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}