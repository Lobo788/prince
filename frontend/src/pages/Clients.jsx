import React from "react";

const clients = [
  { name: "Hotel Grand Palace", logo: "/images/client1.png" },
  { name: "Elite Events Co.", logo: "/images/client2.png" },
  { name: "Bluebell Weddings", logo: "/images/client3.png" },
  { name: "Mangalore Tech Fest", logo: "/images/client4.png" },
];

const ClientsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-10">Our Clients</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
        {clients.map((client, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={client.logo}
              alt={client.name}
              className="w-24 h-24 object-contain mb-2 transform hover:scale-110 transition duration-300"
              onError={(e) => (e.target.src = "/images/default-client.png")} // Fallback if image fails
            />
            <p className="text-gray-700 text-sm font-medium">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
