"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedBorderButton from "../ui/AnimatedBorderButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "How it works", href: "#how-it-works" },
  { name: "AI Interviewer", href: "#ai-interviewer" },
  { name: "Assessments", href: "#assessments" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blogs", href: "#blogs" },
];

function ActionButton({ label }: { label: string }) {
  return (
    <button className="group h-[40px] rounded-[10px] border border-[#8C45FF] px-6 py-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#2DA8FF] hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)]">
      <span className="text-[16px] bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text font-light text-transparent transition-colors duration-300 group-hover:text-white">
        {label}
      </span>
    </button>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full px-2 pt-2 sm:px-4 sm:pt-3 lg:pt-4">
      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 lg:hidden"
        />
      ) : null}

      <nav className="relative z-50 mx-auto w-full max-w-[1440px] rounded-[16px] bg-[#D1D1D1]/96 px-3 py-2 shadow-[0_8px_20px_rgba(16,24,40,0.14)] backdrop-blur-sm sm:px-4 sm:py-2.5 lg:rounded-[20px] lg:px-6 lg:py-3">
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#1E2430] transition-colors hover:bg-white/50 sm:h-10 sm:w-10"
          >
            <div className="flex flex-col gap-1 sm:gap-[5px]">
              <span className="h-[3px] w-6 rounded-full bg-[#1A1E28] sm:w-7" />
              <span className="h-[3px] w-6 rounded-full bg-[#1A1E28] sm:w-7" />
              <span className="h-[3px] w-6 rounded-full bg-[#1A1E28] sm:w-7" />
            </div>
          </button>

          <div className="min-w-0 flex-1 rounded-sm px-1.5 py-0.5 sm:px-2 sm:py-0">
            <img
              src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946710/logo-g_f3acaf.png"
              alt="APADCode logo"
              className="mx-auto h-10 w-auto max-w-full object-contain"
            />
          </div>

          <button className="group h-[34px] shrink-0 rounded-[10px] border border-[#8C45FF] px-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8C45FF] hover:to-[#2DA8FF] hover:shadow-[0_10px_24px_rgba(109,86,255,0.24)] sm:h-[38px] sm:px-4">
            <span className="bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] bg-clip-text text-[13px] font-light text-transparent transition-colors duration-300 group-hover:text-white sm:text-[15px]">
              Sign Up
            </span>
          </button>
        </div>

        <div className="hidden items-center justify-between lg:flex">
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
          <div className="absolute left-0 right-0 top-full mt-2 lg:hidden">
            <div className="rounded-[14px] bg-white p-3 shadow-[0_14px_28px_rgba(16,24,40,0.14)]">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-2.5 font-kanit font-light text-[#2D3444] transition-colors hover:bg-[#F3F3F8]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
