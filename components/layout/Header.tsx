import React from "react";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    { name: "About", href: "#" },
    { name: "How it works", href: "#" },
    { name: "AI Interviewer", href: "#" },
    { name: "Assessments", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <nav className="absolute z-10 w-full p-4">
      <div className="mx-auto max-w-7xl rounded-[12px] bg-white px-8 py-3 shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946710/logo-g_f3acaf.png"
              alt="APADCode logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-800 transition-colors hover:text-gray-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="group h-[44px] rounded-[10px] border border-[#8C45FF] px-6 py-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#2DA8FF] hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)]">
              <span className="bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text text-sm font-semibold text-transparent transition-colors duration-300 group-hover:text-white">
                Request Demo
              </span>
            </button>
            <button className="group h-[44px] rounded-[10px] border border-[#8C45FF] px-6 py-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#2DA8FF] hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)]">
              <span className="bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text text-sm font-semibold text-transparent transition-colors duration-300 group-hover:text-white">
                Sign Up
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
