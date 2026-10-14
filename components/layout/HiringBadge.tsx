import { CAREERS_URL } from "@/lib/links";

export default function HiringBadge() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
      <a
        href={CAREERS_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="We are hiring! View open roles at APADCode"
        aria-label="We are hiring! View open job positions at APADCode (opens in a new tab)"
        className="pointer-events-auto relative inline-flex animate-hiring-in items-center gap-2.5 overflow-hidden rounded-full border border-white/40 bg-[linear-gradient(96deg,#8C45FF_2%,#0AAFF9_96%)] py-2.5 pl-3.5 pr-4 font-kanit text-[14px] font-medium text-white transition-transform duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C45FF] motion-safe:animate-hiring-glow sm:text-[15px]"
      >
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#7CFFB2] opacity-75 motion-safe:animate-hiring-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4CF28F]" />
        </span>
        <span>We are Hiring!</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-[2px] motion-safe:animate-hiring-shine"
        />
      </a>
    </div>
  );
}
