import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // your logo path
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Brand */}
        <div className="flex flex-col items-start gap-3">
          <img src={Logo} alt="BioReturns" className="h-12 w-auto" />
          <h2 className="text-2xl font-bold text-green-700">BioReturns</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sustainable biodegradable solutions for a cleaner, healthier future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              "Home",
              "About",
              "Products",
              "Certificates",
              "Distributors",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
          <p className="text-gray-700 text-sm mb-2">
            123 Eco Street, Green City, India
          </p>
          <p className="text-gray-700 text-sm">Email: info@bioreturns.com</p>
          <p className="text-gray-700 text-sm mb-4">Phone: +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition text-xl hover:text-[#E4405F] hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition text-xl hover:text-black hover:scale-110"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition text-xl hover:text-[#1877F2] hover:scale-110"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BioReturns. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
