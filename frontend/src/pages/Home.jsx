// src/pages/Home.jsx
import React from "react";
import About from "./About";
import Services from "./Services";
import Clients from "./Clients";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => (
  <>
    {/* Hero section with background image */}
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Prince Caterers</h1>
        <p className="mt-4 text-lg md:text-xl">Serving taste and tradition since 1990</p>
      </div>
    </section>

    <About />
    <Services />
    <Gallery />
    <Clients />
    <Testimonials />
    <Contact />
  </>
);

export default Home;
