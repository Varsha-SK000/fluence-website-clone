import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import Keybenefits from "./components/Keybenefits";
import Testimonial from "./components/Testimonial";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Key } from "lucide-react";
import Ticker from "./components/Ticker";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
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

export default App;