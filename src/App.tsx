import React from "react";
import HeroSection from "./sections/hero/Hero";
import Header from "./components/appComponents/Header";
import herobg from "@/assets/hero-bg.png";
import FutureApplications from "./sections/future-applications/FutureApplications";
import PlayToEarn from "./sections/play-to-earn/PlayToEarn";
import Ecosystem from "./sections/ecosystem/Ecosystem";
import Slider from "./sections/slider/Slider";
import Roadmap from "./sections/roadmap/Roadmap";
import Footer from "./sections/footer/Footer";
import Incubation from "./sections/incubation/Incubation";
import Partners from "./sections/partners/Partners";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <img src={herobg} className="absolute -z-99 h-screen w-screen" alt="" />
      <Header />
      <HeroSection />
      <PlayToEarn />
      <FutureApplications />
      <Slider />
      <Ecosystem />
      <Incubation />
      <Roadmap />
      <Partners />
      <Footer />
    </main>
  );
}

export default App;

// DESCTOP
// header ✅
// Hero ✅
// Play to earn ✅
// Future application ✅
// slider ✅
// ecosystem ✅
// Incubation✅
// Roadmap ✅
// partners ✅
// footer ✅

// Responsiveness
// header ✅
// Hero ✅
// Play to earn ✅
// Future application✅
// slider ✅
// ecosystem
// Incubation
// Roadmap
// partners✅
// footer✅

// animation
// header ✅
// Hero ✅
// Play to earn ✅
// Future application ✅

// Roadmap

// footer✅
