import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE: Reach Us + Form */}
          <div>
            {/* Reach Us Info */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reach Us</h3>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Merlapadavu, Mangalore, Karnataka
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:+918888888888" className="text-red-600 hover:underline">
                  +91 7899366407
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:princecaterers@email.com" className="text-red-600 hover:underline">
                  princecaterers@email.com
                </a>
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Google Map */}
          <div>
            <iframe
              title="Prince Caterers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.076683907328!2d74.8356403!3d12.9366371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35acfd8d2178f%3A0x541b9b3cb4cb8c3b!2sMerlapadavu!5e0!3m2!1sen!2sin!4v1716448040702"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
