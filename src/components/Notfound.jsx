import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* NAVBAR (FORCED ON TOP) */}
      <div className="relative z-[100]">
        <Navbar />
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/ChLYQp9qidYmBasL0Sih4gYbmM.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">

        <h1 className="text-[140px] font-bold">404</h1>

        <p className="text-white/70 mt-3 max-w-md">
          Hmmmm... I couldn't find that page. It's just me playing the guitar :)
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 px-8 py-3 rounded-lg border border-white/30 
          bg-white/20 backdrop-blur-md hover:scale-105 transition"
        >
          Back to home
        </button>

      </div>
    </div>
  );
}