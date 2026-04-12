import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

/* 🔹 Floating Shape */
function FloatingShape({ src, className, delay = 0 }) {
  return (
    <motion.img
      src={src}
      alt=""
      className={`absolute ${className} pointer-events-none`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: [1, 1.05, 1],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function SparkleIcon({ className = "w-4 h-4 text-purple-500" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="px-4 py-6 bg-white">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-[40px] border border-white/20">

        {/* 🎥 Background */}
        <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden">
          <video
            src="https://framerusercontent.com/assets/kn7cGos906MVn9KuVEyKH6r8Ris.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* 🌫 Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 blur-3xl opacity-40" />

        {/* 🔥 CONTENT */}
        <div className="relative z-10 py-20 px-4 text-center max-w-3xl">

          <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs rounded-full bg-white/30 backdrop-blur border border-white/40 text-white">
            <SparkleIcon className="w-4 h-4 text-pink-400" />
            BUSINESS & SOLUTION
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            The AI Agent Platform for Modern Teams
          </h1>

          <p className="text-gray-200 mb-6">
            Fluence AI helps you connect, manage, and optimize your AI tools effortlessly.
          </p>

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
        <div className="relative z-10 w-full max-w-6xl">
          {/* 🔲 SINGLE CONTAINER */}
          <div className="relative backdrop-blur-xl bg-white/40 border border-white/40 rounded-3xl p-6 shadow-xl overflow-hidden">

            {/* 🟣 Floating Shapes INSIDE */}
            <FloatingShape
              src="https://framerusercontent.com/images/mNO89ys2gWfzwt1uvhnoJyIgupY.png"
              className="-left-10 bottom-0 w-24"
            />
            <FloatingShape
              src="https://framerusercontent.com/images/B0V3gNPI0mHpDUqWHR41pDhDfMs.png"
              className="-right-10 top-0 w-28"
              delay={1}
            />

            {/* 💬 Messages */}
            <div className="relative z-10 w-full max-w-2xl px-6 py-8 mx-auto mb-6">

              {/* 🔲 ONE OUTER CHAT CONTAINER */}
              <div className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl">

                {/* 💬 Messages Wrapper */}
                <div className="flex flex-col gap-5">

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="flex items-end gap-2 max-w-xs">
                      <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow">
                        Hey, I need help sending out a campaign to all new subscribers.
                      </div>
                      <img
                        src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png"
                        alt="user"
                        className="w-8 h-8 rounded-md object-cover"
                      />
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2 max-w-xs">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md text-xs">
                        ✦
                      </div>
                      <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow">
                        Of course! I’ll prepare a personalized campaign for your new
                        subscribers. Would you like me to schedule it now or review it first?
                      </div>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="flex items-end gap-2 max-w-xs">
                      <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow">
                        Yes, you can schedule it.
                      </div>
                      <img
                        src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png"
                        alt="user"
                        className="w-8 h-8 rounded-md object-cover"
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* ✏️ Input Section */}
            <div className="bg-white/80 rounded-xl p-4 relative z-10 max-w-2xl px-6 py-8 mx-auto mb-6">

              {/* Top Buttons */}
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-white px-3 py-1 rounded-full border">
                  GPT 4.5
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full border">
                  Search
                </span>
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder="Ask anything ..."
                className="w-full outline-none bg-transparent mb-4 text-sm"
              />

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mb-3">
                {["Create Workflow", "Setup Bot", "Schedule Message"].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs px-3 py-1 bg-white rounded-full border shadow-sm"
                  >
                    <SparkleIcon />
                    {item}
                  </div>
                ))}
              </div>

              {/* Send */}
              <div className="flex justify-end">
                <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                  ➤
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}