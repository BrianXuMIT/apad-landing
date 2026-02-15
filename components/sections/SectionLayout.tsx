import React from "react";
import HighlightBadge from "../HighlightBadge";

type SectionLayoutProps = {
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
      className={`relative w-full overflow-visible bg-transparent pt-16 ${sectionClassName}`.trim()}
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
          className={`flex flex-col items-center gap-[8px] ${headerClassName}`.trim()}
        >
          {badge ?? (badgeText ? <HighlightBadge text={badgeText} /> : null)}
          <h2
            className={`mt-5 text-center font-kanit text-[32px] font-medium text-[#111216] lg:text-[48px] ${titleClassName}`.trim()}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-2 text-center max-w-[980px] font-kanit lg:text-[24px] text-[#45485F] text-[20px] ${descriptionClassName}`.trim()}
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
