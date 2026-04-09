import { motion } from "framer-motion";

export default function FluenceFooter() {
  return (
    <footer className="relative overflow-hidden px-16 pt-24 pb-12 font-inter bg-black text-white transition-colors duration-300 rounded-3xl mx-6 my-6">    {/* CTA Section */}
      <section className="relative z-10 flex items-center justify-between">
        <div className="max-w-xl">
          <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-white text-black">
            JOIN THE AI REVOLUTION
          </span>

          <h2 className="mt-6 text-[46px] font-bold leading-tight">
            Ready to Launch your AI
            <br />
            Agents with us?
          </h2>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 rounded-lg bg-black border border-white/10 text-white hover:bg-accent transition-colors">
              Get Started
            </button>

            <button className="px-7 py-3 rounded-lg bg-gray-200 text-black hover:bg-gray-300 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Rotating Cube */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-[246px] h-[246px]"
        >
          <img
            src="https://framerusercontent.com/images/3D34QUQAuR6kMLNTtzm7mEgCmuE.png?width=986&height=991"
            alt="cube"
            loading="lazy"
            decoding="auto"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Divider */}
      <div className="my-20 h-px bg-white/10" />

      {/* Footer Grid */}
      <section className="relative z-10 grid grid-cols-3 gap-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold">
            <span className="w-7 h-7 flex items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              X
            </span>
            Fluence AI
          </div>

          <p className="mt-4 text-sm text-white/70">
            Manage AI effortlessly
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 font-medium">Useful Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              "Feature",
              "About",
              "Testimonial",
              "Pricing",
              "Contact",
              "Blog",
              "404",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-accent cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 font-medium">Company</h4>
          <p className="text-sm text-white/70 leading-relaxed">
            105 North 1st Street, #28,
            <br />
            San Jose, CA 94748
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="my-20 h-px bg-white/10" />

      {/* Bottom */}
      <div className="mt-12 text-sm text-white/60">
        © 2026 Design & Developed by Amani
      </div>
    </footer>
  );
}
