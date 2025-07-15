import React from "react";

const AboutSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      {/* Text Column */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-red-600">About Prince Caterers</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We bring passion to the plate. With over 30 years of experience in the catering industry,
          our team of chefs and event experts deliver memorable culinary experiences for every occasion.
          From weddings to corporate events, our services are tailored to your taste and tradition.
        </p>
        <a
          href="/about"
          className="inline-block px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Learn More
        </a>
      </div>

      {/* Image Column */}
      <div>
        <img
          src="/images/about.jpg"
          alt="About Prince Caterers"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
