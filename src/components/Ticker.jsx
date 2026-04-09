import { motion } from "framer-motion";

const items = [
    "Request a demo",
    "Request a demo",
    "Request a demo",
    "Request a demo",
];

export default function Ticker() {
    return (
        <div className="overflow-hidden whitespace-nowrap w-full bg-white">
            <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 15,
                    repeat: Infinity,
                }}
            >
                {[...items, ...items].map((text, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-10 px-16 py-6 text-[60px] font-medium text-[#1b0c26]"
                    >
                        {text}

                        {/* Icon */}
                        <div className="w-10 h-10 bg-black [clip-path:polygon(0_0,100%_50%,0_100%)]"></div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}