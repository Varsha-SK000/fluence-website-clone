import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Keybenefits from "./components/Keybenefits";
import Testimonial from "./components/Testimonial";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Ticker from "./components/Ticker";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NotFound from "./components/Notfound";
import AutomationTicker from "./components/AutomationTicker";
import BuildSection from "./components/BuildSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BuildSection />
      <Features />
      <AutomationTicker />
      <About />
      <Keybenefits />
      <Testimonial />
      <Process />
      <Pricing />
      <Ticker />
      <FAQ />
      <Blog />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;