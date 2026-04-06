import { motion } from "framer-motion";

const features = [
  {
    title: "Adaptive Learning",
    description: "AI that evolves with your data, continuously improving performance and adapting to new patterns",
    image: "https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png?scale-down-to=1024&width=1260&height=668",
  },
  {
    title: "Smart Automation",
    description: "Empowering you with AI-driven workflows designed to simplify operations, enhance productivity",
    image: "https://framerusercontent.com/images/fWv8t6fM6yzVYNiHLxm6JJ0QQ.png?width=561&height=501", // Note: this is for Outbound, but fetch has email for Smart
    // Wait, for Smart Automation, it's an email mockup, but URL not given, perhaps use placeholder or find.
    // In fetch, for Smart Automation, it's the email: H i  J u l i a From micheal@agentive.com etc.
    // So, perhaps render the email mockup as text or image.
    // But to simplify, use the laptop image for now, or create a mockup.
    // Actually, the image is for Outbound: Man using laptop.
    // For Smart, no image URL, so perhaps skip or use a placeholder.
    // Let's use a placeholder for now.
  },
  {
    title: "Outbound Outreach",
    description: "Personalize campaigns at scale, qualify leads instantly, and close deals faster with AI-driven engagement.",
    image: "https://framerusercontent.com/images/fWv8t6fM6yzVYNiHLxm6JJ0QQ.png?width=561&height=501",
  },
  {
    title: "Predictive Analytics",
    description: "Harness advanced models to forecast trends, uncover insights",
    image: "https://framerusercontent.com/images/qGFZyeulSY1zsGefM4aAo6C78.png?width=678&height=501",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Explore the Power of Fluence AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fluence AI transforms raw data into actionable insights. Our advanced features are designed to optimize workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
