import Link from "next/link";

const footerColumns = [
  {
    title: "Platform",
    links: ["Overview", "Interviewer AI", "Integration"],
  },
  {
    title: "Company",
    links: ["About", "Mission", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Careers", "Contact Us", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div className="max-w-[420px]">
              <img
                src="https://res.cloudinary.com/dxboqivs9/image/upload/v1770946710/logo-g_f3acaf.png"
                alt="APADCode logo"
                className="h-9 w-auto object-contain"
              />
              <p className="mt-5 font-kanit text-[24px] lg:text-[32px] leading-[1.2] text-[#1E2430]">
                An artificial Intelligence Platform that can help company to
                choose the best talent to work with us.
              </p>
              <p className="mt-6 font-kanit text-[16px] text-[#1E2430]">
                APADCode, 2026.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 bottom-0 pb-8  [justify-self:anchor-center]">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-kanit text-[16px] text-[#1E2430] lg:text-[24px] font-light">
                    {column.title}
                  </h3>
                  <ul className="mt-3 space-y-2.5 ">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="font-kanit font-light text-[16px] sm:text-[24px] text-[#2D3444] transition-opacity hover:opacity-75 lg:text-[24px]"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#8C45FF] via-[#8F35FA] to-[#992DFF]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row sm:px-10 lg:px-16">
          <p className="font-kanit text-xs text-white">
            © 2026 APADCode, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-5 sm:gap-8">
            <Link
              href="#"
              className="font-kanit text-xs text-white transition-opacity hover:opacity-85"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="font-kanit text-xs text-white transition-opacity hover:opacity-85"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-kanit text-xs text-white transition-opacity hover:opacity-85"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
