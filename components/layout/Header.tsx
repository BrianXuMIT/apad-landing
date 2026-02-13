"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#" },
  { name: "How it works", href: "#" },
  { name: "AI Interviewer", href: "#" },
  { name: "Assessments", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blogs", href: "#" },
];

function ActionButton({ label }: { label: string }) {
  return (
    <button className="group h-[44px] rounded-[10px] border border-[#8C45FF] px-6 py-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#2DA8FF] hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)]">
      <span className="bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text text-sm font-semibold text-transparent transition-colors duration-300 group-hover:text-white">
        {label}
      </span>
    </button>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full px-2 pt-3 sm:px-4 sm:pt-4">
      <nav className="mx-auto w-full max-w-[1440px] rounded-[20px] bg-[#D1D1D1]/96 px-4 py-3 shadow-[0_8px_20px_rgba(16,24,40,0.14)] backdrop-blur-sm sm:px-6">
        <div className="flex items-center justify-between min-[1100px]:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1E2430]"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="h-[3px] w-7 rounded-full bg-[#1A1E28]" />
              <span className="h-[3px] w-7 rounded-full bg-[#1A1E28]" />
              <span className="h-[3px] w-7 rounded-full bg-[#1A1E28]" />
            </div>
          </button>

          <div className="rounded-sm bg-white px-2 py-1">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946710/logo-g_f3acaf.png"
              alt="APADCode logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="h-10 w-10" />
        </div>

        <div className="hidden items-center justify-between min-[1100px]:flex">
          <img
            src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946710/logo-g_f3acaf.png"
            alt="APADCode logo"
            className="h-10 w-auto object-contain"
          />

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-kanit font-medium text-gray-800 transition-colors hover:text-gray-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ActionButton label="Request Demo" />
            <ActionButton label="Sign Up" />
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-3 rounded-[14px] bg-white p-4 shadow-[0_10px_24px_rgba(16,24,40,0.12)] min-[1100px]:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-2 font-kanit text-base font-medium text-[#2D3444] transition-colors hover:bg-[#F3F3F8]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button className="group h-[42px] flex-1 rounded-[10px] border border-[#8C45FF] px-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#2DA8FF] hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)]">
                <span className="bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text text-sm font-semibold text-transparent transition-colors duration-300 group-hover:text-white">
                  Request Demo
                </span>
              </button>
              <button className="group h-[42px] flex-1 rounded-[10px] border border-[#8C45FF] px-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#2DA8FF] hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)]">
                <span className="bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text text-sm font-semibold text-transparent transition-colors duration-300 group-hover:text-white">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
