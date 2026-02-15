import Link from "next/link";

const footerColumns = [
  {
    title: "Platform",
    links: ["Overview", "Interview AI", "Integration"],
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
      <div className="flex justify-center">
        <div className="w-full max-w-[1440px] px-8 py-12 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="max-w-[520px]">
              <img
                src="https://res.cloudinary.com/dnvcelwkl/image/upload/v1771192573/logo-g_f3acaf_uwyuck.png"
                alt="APADCode logo"
                className="mx-auto h-8 w-auto object-contain sm:mx-0 sm:h-9"
              />
              <p className="mt-6 font-kanit text-[24px] leading-[1.24] text-[#1E2430] sm:text-[28px]">
                An artificial Intelligence Platform that can help company to
                choose the best talent to work with us.
              </p>
              <p className="mt-6 font-kanit text-[18px] text-[#1E2430] sm:text-[18px]">
                APADCode, 2026.
              </p>
            </div>

            <div className="self-center grid grid-cols-3 gap-x-6 gap-y-8 sm:gap-x-10 lg:items-start lg:pt-2">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-kanit text-[16px] font-medium text-[#1E2430] lg:text-[20px]">
                    {column.title}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="font-kanit text-[16px] text-[#2D3444] transition-opacity hover:opacity-75 lg:text-[20px]"
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
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p className="text-center font-kanit text-[14px] text-white sm:text-left lg:text-[18px]">
            © 2026 APADCode, Inc. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-x-6 sm:justify-end sm:gap-x-8">
            <Link
              href="#"
              className="font-kanit text-[14px] text-white transition-opacity hover:opacity-85 lg:text-[18px]"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="font-kanit text-[14px] text-white transition-opacity hover:opacity-85 lg:text-[18px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-kanit text-[14px] text-white transition-opacity hover:opacity-85 lg:text-[18px]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
