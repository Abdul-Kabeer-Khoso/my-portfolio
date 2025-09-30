import { useState } from "react";
import Home from "./sections/Home";
import "./index.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="w-[100%] h-auto bg-[rgb(4,8,26)]  flex justify-center">
      <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[85%] h-auto relative">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
