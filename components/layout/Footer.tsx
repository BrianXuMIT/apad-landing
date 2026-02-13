import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#8C45FF] via-[#8F35FA] to-[#992DFF]">
      <div className=" flex w-full flex-col items-center justify-between gap-3 px-[96px] py-4 sm:flex-row ">
        <p className="font-kanit text-[24px] text-white">
          © 2026 APADCode, Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-6 sm:gap-8]">
          <Link
            href="#"
            className="font-kanit text-[18px] text-white transition-opacity hover:opacity-85"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="font-kanit text-[18px] text-white transition-opacity hover:opacity-85"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-kanit text-[18px] text-white transition-opacity hover:opacity-85"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
