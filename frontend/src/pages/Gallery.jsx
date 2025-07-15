import React from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

const GallerySection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-10">Gallery</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
