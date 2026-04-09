import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-20">
      
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Contact us
        </h1>
        <p className="text-gray-400 text-lg">
          Get in touch with our team. We’d love to connect.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div>
            <p className="text-gray-400 mb-2">Email us</p>
            <p className="text-xl font-semibold">hello@fluence.com</p>
          </div>

          <div>
            <p className="text-gray-400 mb-2">Get support</p>
            <p className="text-xl font-semibold">Chat with us</p>
          </div>

          {/* TESTIMONIAL */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-gray-300 mb-4">
              “Fluence AI has revolutionized the way we process data...”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <p className="font-semibold">Amber Stone</p>
                <p className="text-sm text-gray-400">Manager, GrowthTech</p>
              </div>
            </div>
          </div>

        </div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="input"
            />
            <input
              type="text"
              placeholder="Last name"
              className="input"
            />
          </div>

          <input
            type="email"
            placeholder="Your email"
            className="input"
          />

          <input
            type="text"
            placeholder="Your phone"
            className="input"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="input"
          />

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Submit
          </button>

          <p className="text-gray-500 text-sm">
            By submitting this form you agree to our friendly Privacy Policy
          </p>
        </motion.form>

      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to start your AI journey with us?
        </h2>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-xl font-semibold">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}