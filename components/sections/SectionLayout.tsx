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
      className={`relative w-full overflow-visible bg-transparent py-16 ${sectionClassName}`.trim()}
    >
      {decorations}

      <div
        className={`relative mx-auto flex w-full max-w-[1140px] flex-col px-4 py-10 sm:px-8 lg:px-12 ${containerClassName}`.trim()}
      >
        <div className={`flex flex-col items-center ${headerClassName}`.trim()}>
          {badge ?? (badgeText ? <HighlightBadge text={badgeText} /> : null)}
          <h2
            className={`mt-5 text-center font-kanit text-[24px] font-medium text-[#111216] md:text-[32px] ${titleClassName}`.trim()}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-2 text-center font-kanit text-sm text-[#45485F] sm:text-base ${descriptionClassName}`.trim()}
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
