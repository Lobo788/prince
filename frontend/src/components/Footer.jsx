import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Prince Caterers</h2>
          <p className="text-sm">
            Serving excellence since 1990. We offer catering services for weddings, events,
            corporate meetings, and more with a focus on quality and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="/services" className="hover:text-red-500 transition">Services</a></li>
            <li><a href="/gallery" className="hover:text-red-500 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>📍 Merlapadavu, Mangalore, Karnataka</p>
          <p>📞 +91 7899366407</p>
          <p>✉️ princecaterers@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Prince Caterers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
