import React from "react";

const items = [
  "Process Automation",
  "System Modernization",
  "AI-Powered Automation",
  "Sales Pipeline Automation",
  "Marketing Automation",
];

export default function AutomationTicker() {
  const doubled = [...items, ...items];

  return (
    <section className="relative w-full py-20 flex justify-center overflow-hidden">

      {/* 📦 CONTAINER */}
      <div className="relative w-full max-w-[1100px] mx-auto px-6">

        {/* 🧊 CARD (VIDEO INSIDE HERE) */}
        <div className="relative h-[140px] flex items-center justify-center
                        rounded-2xl border border-white/40
                        shadow-xl overflow-hidden">

          {/* 🎥 SKY VIDEO (inside container) */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://framerusercontent.com/assets/gEU5HnZaxeuzARhdWAZ3V5VCgLE.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* 🌈 overlays like Framer */}
          <div className="absolute inset-0 bg-blue-300/40" />
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5" />

          {/* 🌊 TICKER CONTENT */}
          <div className="relative z-10 tick-mask w-full">

            <div className="tick-l flex items-center">

              {doubled.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-[12px] flex-shrink-0
                  bg-white/70 backdrop-blur-md
                  border border-white/80
                  rounded-full px-6 py-2
                  text-[15px] font-medium text-[#1e3a5f]
                  shadow-sm whitespace-nowrap"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}