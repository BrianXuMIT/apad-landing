import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#" },
    { name: "How it works", href: "#" },
    { name: "AI Inerviewer", href: "#" },
    { name: "Assessments", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <nav className="w-full p-4">
      {/* Container with gray background and rounded corners */}
      <div className="mx-auto max-w-7xl bg-[#D1D1D1] rounded-[2rem] px-8 py-3 flex items-center justify-between shadow-sm">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-sm">
            {/* Replace with your <img> tag */}
            <span className="font-bold text-blue-600 flex items-center">
              <span className="text-green-600 mr-1">{"<"}</span>
              <span className="text-slate-800">APADCode</span>
              <span className="text-green-600 ml-1">{">"}</span>
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-xl border border-purple-400 bg-white text-gray-800 font-semibold text-sm hover:bg-gray-50 transition-all">
            Request Demo
          </button>
          <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-sm hover:opacity-90 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
