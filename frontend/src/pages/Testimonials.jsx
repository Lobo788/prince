// src/pages/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Ramesh K.",
    feedback: "Prince Caterers made our wedding unforgettable! Delicious food and excellent service.",
  },
  {
    name: "Anjali M.",
    feedback: "Professional staff and mouthwatering dishes. Highly recommend them for any occasion.",
  },
  {
    name: "Joseph D.",
    feedback: "They took care of everything with such dedication. Best catering service in town!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
              <h4 className="text-red-800 font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
