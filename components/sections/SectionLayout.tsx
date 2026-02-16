import React from "react";
import HighlightBadge from "@/components/ui/HighlightBadge";

type SectionLayoutProps = {
  sectionId?: string;
  title: string;
  description?: string;
  badgeText?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  decorations?: React.ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
};

export default function SectionLayout({
  sectionId,
  title,
  description,
  badgeText,
  badge,
  children,
  decorations,
  sectionClassName = "",
  containerClassName = "",
  headerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  contentClassName = "",
}: SectionLayoutProps) {
  return (
    <section
      id={sectionId}
      className={`relative w-full scroll-mt-5 overflow-visible bg-transparent pt-16 ${sectionClassName}`.trim()}
    >
      {decorations ? (
        <div className="pointer-events-none absolute inset-0 z-0">
          {decorations}
        </div>
      ) : null}

      <div
        className={`relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-4 sm:px-8 lg:px-12 ${containerClassName}`.trim()}
      >
        <div
          className={`relative flex flex-col items-center gap-[8px] ${headerClassName}`.trim()}
        >
          <div className="pointer-events-none absolute left-1/2 top-[52px] -z-10 h-[120px] w-[min(78vw,560px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(144,88,255,0.18)_0%,rgba(144,88,255,0.08)_34%,rgba(144,88,255,0)_72%)] blur-[26px]" />
          {badge ?? (badgeText ? <HighlightBadge text={badgeText} /> : null)}
          <h2
            className={`relative mt-5 bg-[linear-gradient(100deg,#10131F_0%,#2D3144_48%,#7F3EF1_100%)] bg-clip-text text-center font-kanit text-[32px] font-medium leading-[1.08] tracking-[-0.012em] text-transparent lg:text-[48px] ${titleClassName}`.trim()}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-2 max-w-[980px] text-center font-kanit text-[20px] text-[#45485F] lg:text-[24px] ${descriptionClassName}`.trim()}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className={`${contentClassName}`.trim()}>{children}</div>
      </div>
    </section>
  );
}
