import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

export default function FluenceFooter() {
  return (
    <footer className="relative overflow-hidden px-16 pt-28 pb-10 font-inter bg-black text-white rounded-3xl mx-6 my-6">

      {/* Background gradient (IMPORTANT for Framer look) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,70,255,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,0,150,0.08),transparent_55%)]" />

      {/* HUGE watermark (must be very low + big like original) */}
      <div className="absolute bottom-[-120px] left-0 text-white/5 text-[240px] font-bold tracking-tight whitespace-nowrap select-none">
        Fluence Ai
      </div>

      {/* FLOATING CUBE (correct Framer position) */}
      <div className="absolute top-10 right-14 z-0 pointer-events-none">
        <motion.img
          src="https://framerusercontent.com/images/3D34QUQAuR6kMLNTtzm7mEgCmuE.png"
          className="w-[280px] h-[280px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        />
      </div>

      {/* CTA SECTION (fix alignment like original) */}
      <section className="relative z-10 flex items-start justify-between">

        <div className="max-w-3xl">

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
          >
            JOIN THE AI REVOLUTION
          </span>

          <h2 className="mt-6 text-[64px] leading-[1.05] font-semibold tracking-tight">
            Ready to Launch your AI
            <br />
            Agents with us?
          </h2>

          <div className="mt-10 flex gap-5">

            <AnimatedButton
              text="Get Started"
              className="bg-black border border-white/15 text-white hover:bg-white hover:text-black"
            />

            <AnimatedButton
              text="Book a Demo"
              className="bg-white text-black hover:bg-gray-200"
            />

          </div>
        </div>
      </section>

      {/* divider */}
      <div className="my-24 h-px bg-white/10" />

      {/* FOOTER GRID (important alignment fix) */}
      <section className="relative z-10 grid grid-cols-3 gap-24">

        {/* BRAND + SOCIAL (Framer exact match) */}
        <div>

          {/* Logo block */}
          <div className="flex items-start gap-3">

            {/* Logo icon (SVG frame placeholder like Framer) */}
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-black flex items-center justify-center rounded-md">
              ✦
            </div>

            {/* Logo text */}
            <div>
              <p className="text-[32px] leading-[40px] font-medium capitalize text-white">
                Fluence Ai
              </p>

              <p className="text-sm text-white/60 mt-1">
                Manage Ai effortlessly
              </p>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-md hover:border-white transition"
            >
              <img
                src="/icons/facebook.png"
                alt="facebook"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-md hover:border-white transition"
            >
              <img
                src="/icons/twitter.png"
                alt="twitter"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-md hover:border-white transition"
            >
              <img
                src="/icons/instagram.png"
                alt="instagram"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-md hover:border-white transition"
            >
              <img
                src="/icons/linkedin.png"
                alt="linkedin"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition"
              />
            </a>

          </div>

        </div>

        {/* LINKS */}
        <div className="flex flex-row gap-[100px] w-fit h-fit p-0 relative overflow-hidden items-start justify-end">

          <div>
            <h4 className="mb-5 text-xs  uppercase tracking-widest text-white/70">
              Use Link
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              {[
                { name: "Feature", href: "#feature" },
                { name: "About", href: "#about" },
                { name: "Testimonial", href: "#testimonial" },
                { name: "Pricing", href: "#pricing" },
                { name: "Contact", href: "#contact" },

                // ✅ FIXED BLOG
                { name: "Blog", href: "#blog" },

                { name: "404", href: "*" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-5 text-xs uppercase tracking-widest text-white/70">
              Company
            </h4>

            <p className="text-sm text-white/60 leading-relaxed">
              105 North 1st Street, #28,<br />
              San Jose, CA 94748
            </p>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="my-20 h-px bg-white/10" />

      {/* BOTTOM BAR (exact spacing like Framer) */}
      <div className="flex justify-between items-center text-xs text-white/50">

        <div>© 2026 Design & Developed by Amani</div>

        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>

      </div>

    </footer>
  );
}