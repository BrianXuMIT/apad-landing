"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "AI Interviewer", href: "/#ai-interviewer" },
  { name: "Assessments", href: "/#assessments" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Blogs", href: "/#blogs" },
];

function getHashFromHref(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1) || null;
}

function ActionButton({
  label,
  primary = false,
  showIcon = true,
  compact = false,
}: {
  label: string;
  primary?: boolean;
  showIcon?: boolean;
  compact?: boolean;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[12px] font-kanit transition-all duration-300 ${
        primary
          ? compact
            ? "h-[36px] bg-[linear-gradient(96deg,#8C45FF_2%,#0AAFF9_96%)] px-3.5 text-[13px] font-medium text-white shadow-[0_7px_16px_rgba(117,83,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(117,83,255,0.36)]"
            : "h-[42px] bg-[linear-gradient(96deg,#8C45FF_2%,#0AAFF9_96%)] px-5 text-[15px] font-medium text-white shadow-[0_10px_22px_rgba(117,83,255,0.32)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(117,83,255,0.4)]"
          : compact
            ? "h-[36px] border border-[#8C45FF]/34 bg-white/75 px-3.5 text-[13px] font-medium text-[#2C3143] hover:border-[#8C45FF]/50 hover:bg-white/90"
            : "h-[42px] border border-[#8C45FF]/30 bg-white/65 px-5 text-[15px] font-medium text-[#2C3143] hover:border-[#8C45FF]/50 hover:bg-white/90"
      }`}
      type="button"
    >
      <span
        className={
          primary
            ? "inline-flex items-center gap-1.5"
            : "bg-[linear-gradient(98deg,#3B3F52_0%,#61439E_100%)] bg-clip-text text-transparent"
        }
      >
        {label}
        {primary && showIcon ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M4.167 10h11.666M10.833 4.583 16.25 10l-5.417 5.417"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
    </button>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSectionId(null);
      return;
    }

    const sectionIds = navLinks
      .map((item) => getHashFromHref(item.href))
      .filter((id): id is string => Boolean(id));

    let rafId = 0;

    const updateActiveSection = () => {
      rafId = 0;
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          return { id, top: element.offsetTop };
        })
        .filter((item): item is { id: string; top: number } => Boolean(item))
        .sort((a, b) => a.top - b.top);

      if (!sections.length) return;

      const markerY = window.scrollY + 170;
      let nextActiveId = sections[0].id;

      for (const section of sections) {
        if (markerY >= section.top) {
          nextActiveId = section.id;
        } else {
          break;
        }
      }

      setActiveSectionId((prev) => (prev === nextActiveId ? prev : nextActiveId));
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && sectionIds.includes(initialHash)) {
      setActiveSectionId(initialHash);
    }
    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-4">
      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-[#111216]/15 backdrop-blur-[1px] lg:hidden"
        />
      ) : null}

      <nav className="relative z-50 mx-auto w-full max-w-[1440px] rounded-[18px] border border-white/70 bg-[linear-gradient(124deg,rgba(255,255,255,0.86)_0%,rgba(247,241,255,0.84)_48%,rgba(236,245,255,0.88)_100%)] px-3 py-2 shadow-[0_12px_28px_rgba(35,33,56,0.14)] backdrop-blur-xl sm:px-4 sm:py-2.5 lg:rounded-[22px] lg:px-6 lg:py-3">
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#1E2430] transition-colors hover:bg-white/65 sm:h-10 sm:w-10"
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

          <ActionButton label="Sign Up" showIcon={false} compact />
        </div>

        <div className="hidden items-center justify-between gap-6 lg:flex">
          <img
            src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946710/logo-g_f3acaf.png"
            alt="APADCode logo"
            className="h-10 w-auto shrink-0 object-contain"
          />

          <div className="flex items-center gap-1 rounded-full border border-white/70 bg-white/58 px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            {navLinks.map((link) => {
              const hash = getHashFromHref(link.href);
              const isActive = hash !== null && activeSectionId === hash;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSectionId(hash)}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-full px-2.5 py-1.5 font-kanit text-[14px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/80 text-[#111216]"
                      : "text-[#383D4E] hover:bg-white/80 hover:text-[#111216]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <ActionButton label="Sign Up" />
            <ActionButton label="Request Demo" primary />
          </div>
        </div>

        {menuOpen ? (
          <div className="absolute left-0 right-0 top-full mt-2 lg:hidden">
            <div className="rounded-[16px] border border-white/70 bg-[linear-gradient(118deg,rgba(255,255,255,0.96)_0%,rgba(247,241,255,0.94)_52%,rgba(241,249,255,0.95)_100%)] p-3 shadow-[0_16px_32px_rgba(16,24,40,0.14)]">
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const hash = getHashFromHref(link.href);
                  const isActive = hash !== null && activeSectionId === hash;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveSectionId(hash);
                        setMenuOpen(false);
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={`rounded-xl px-3 py-2.5 font-kanit text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-white/85 text-[#111216]"
                          : "text-[#2D3444] hover:bg-white/85"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
