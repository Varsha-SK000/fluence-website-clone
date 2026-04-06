import { motion } from "framer-motion";

const blogPosts = [
  {
    image: "https://framerusercontent.com/images/Using laptop STARTUP OCT 10, 2024 Why Data Security is Vital for Every SaaS Platform.jpg",
    category: "STARTUP",
    date: "OCT 10, 2024",
    title: "Why Data Security is Vital for Every SaaS Platform",
    link: "https://fluence.framer.website/blog/why-data-security-is-vital-for-every-saas-platform",
  },
  {
    image: "https://framerusercontent.com/images/Using laptop SAAS MAR 13, 2025 Efficient Strategies for Scaling Your SaaS Business.jpg",
    category: "SAAS",
    date: "MAR 13, 2025",
    title: "Efficient Strategies for Scaling Your SaaS Business",
    link: "https://fluence.framer.website/blog/integrating-payment-gateways-for-seamless-transactions",
  },
  {
    image: "https://framerusercontent.com/images/Using laptop AI FEB 16, 2025 The Ultimate SaaS Template for Startups.jpg",
    category: "AI",
    date: "FEB 16, 2025",
    title: "The Ultimate SaaS Template for Startups",
    link: "https://fluence.framer.website/blog/the-ultimate-saas-template-for-startups",
  },
];

export default function Blog() {
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
            Explore Our Blog And Stay Updated
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.category} {post.date}</div>
                <h3 className="text-xl font-bold text-black mb-2">{post.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-8">
            Ready to Launch your AI Agents with us?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition">
              Get Started
            </a>
            <a href="mailto:someone@yoursite.com" className="px-8 py-4 border border-gray-300 text-black rounded-lg font-semibold text-lg hover:bg-gray-50 transition">
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}