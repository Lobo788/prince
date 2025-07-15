import React from "react";

const services = [
  {
    title: "Wedding Catering",
    image: "/images/service-wedding.jpg",
    description: "Traditional, modern or themed weddings — we serve elegance on every plate.",
  },
  {
    title: "Corporate Events",
    image: "/images/service-corporate.jpg",
    description: "Professional catering solutions tailored for meetings, launches, and conferences.",
  },
  {
    title: "Birthday Parties",
    image: "/images/service-birthday.jpg",
    description: "Make your special day deliciously unforgettable with our custom menus.",
  },
];

const ServicesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-10">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
