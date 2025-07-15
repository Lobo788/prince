import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    "Home",
    "About",
    "Services",
    "Clients",
    "Gallery",
    "Contact",
    "Order",
    "Profile"
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Prince Caterers Logo" className="h-10" />
          <span className="text-xl font-bold text-gray-800">Prince Caterers</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-500">
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin" className="text-gray-700 hover:text-blue-500">Sign In</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4 shadow">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-500"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-500">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-500">Sign In</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
