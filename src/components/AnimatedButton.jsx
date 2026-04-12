export default function AnimatedButton({ text, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden px-7 py-3 rounded-lg 
      transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${className}`}
    >
      {/* Text 1 */}
      <span
        className="absolute inset-0 flex items-center justify-center 
        transition-transform duration-300 ease-in-out 
        group-hover:-translate-y-full"
      >
        {text}
      </span>

      {/* Text 2 */}
      <span
        className="absolute inset-0 flex items-center justify-center 
        translate-y-full group-hover:translate-y-0 
        transition-transform duration-300 ease-in-out"
      >
        {text}
      </span>

      {/* Spacer */}
      <span className="opacity-0">{text}</span>
    </button>
  );
}