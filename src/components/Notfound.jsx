import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

        {/* background */}
        <div className="absolute inset-0">
          <img
            src="https://framerusercontent.com/images/ChLYQp9qidYmBasL0Sih4gYbmM.png"
            alt="bg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* content */}
        <div className="relative z-10 text-center text-black/70">
          <h1 className="text-[140px] font-bold ">404</h1>
          <p className="text-black/70 mt-3 max-w-md mx-auto text-center">
            Hmmmm... I couldn't find that page. It's just me playing the guitar :)
          </p>

          {/* <button
            onClick={() => navigate("/")}
            className="mt-8 px-6 py-3 rounded-lg border border-white/30 
             bg-white/20 backdrop-blur-md 
             text-black font-medium 
             hover:bg-white hover:text-black 
             transition-all duration-300 shadow-sm"
          >
            Back to home
          </button> */}
          <button
            onClick={() => navigate("/")}
            className="group relative mt-8 px-8 py-3 rounded-lg border border-white/30 
             bg-white/20 backdrop-blur-md overflow-hidden 
             transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {/* Text 1 (default) */}
            <span
              className="absolute inset-0 flex items-center justify-center 
               transition-transform duration-300 
               group-hover:-translate-y-full"
            >
              Back to home
            </span>

            {/* Text 2 (comes from bottom) */}
            <span
              className="absolute inset-0 flex items-center justify-center 
               translate-y-full group-hover:translate-y-0 
               transition-transform duration-300"
            >
              Back to home
            </span>

            {/* Spacer (keeps button size stable) */}
            <span className="opacity-0">Back to home</span>
          </button>

        </div>

      </div>
    </>
  );
}