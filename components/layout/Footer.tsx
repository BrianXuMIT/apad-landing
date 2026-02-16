import Link from "next/link";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/#blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-[#8C45FF] via-[#8F35FA] to-[#992DFF]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-6 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p className="text-center font-kanit text-[14px] text-white sm:text-left lg:text-[14px]">
            © 2026 APADCode, Inc. All rights reserved.
          </p>

          <div
            className="flex items-center justify-center gap-x-5 sm:justify-end sm:gap-x-6"
            aria-label="Footer links"
          >
            {siteLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-kanit text-[13px] text-white/95 transition-opacity hover:opacity-85 sm:text-[14px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
