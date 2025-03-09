import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Clients from "./sections/Clients";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto" data-scroll-container>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Clients />
      {/* Contact */}
      <Footer />
    </main>
  );
};

export default App;
