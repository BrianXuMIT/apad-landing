import Link from "next/link";

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-[#8C45FF] via-[#8F35FA] to-[#992DFF]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p className="text-center font-kanit text-[14px] text-white sm:text-left lg:text-[18px]">
            © 2026 APADCode, Inc. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-x-6 sm:justify-end sm:gap-x-8">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-kanit text-[14px] text-white transition-opacity hover:opacity-85 lg:text-[18px]"
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
