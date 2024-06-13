import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

import Advantages from "./components/Advantages/Advantages";
import Download from "./components/Download/Download";
import Faq from "./components/FAQ/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1200, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div
      className=" bg-slate-50 dark:bg-slate-950 w-full  lg:overflow-auto overflow-hidden
     "
    >
      <div className="lg:w-[1090px] w-full flex justify-center flex-col  mx-auto bg-slate-50  dark:bg-slate-950  x">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Features />
        <Advantages />
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default App;
