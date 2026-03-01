import {
  comparisonCompanies,
  comparisonRows,
  type ComparisonTone,
} from "@/lib/why-apadcode-content";

type ComparisonMatrixProps = {
  title: string;
  description: string;
};

function getCellToneClass(tone: ComparisonTone): string {
  if (tone === "positive") {
    return "text-[#0F5A3D]";
  }

  if (tone === "negative") {
    return "text-[#7B2335]";
  }

  return "text-[#3D355D]";
}

export default function ComparisonMatrix({
  title,
  description,
}: ComparisonMatrixProps) {
  return (
    <section className="mt-7 rounded-[20px] border border-[#DACBFF]/62 bg-white/92 p-4 sm:p-5 lg:p-6">
      <h2 className="font-kanit text-[28px] leading-[1.08] tracking-[-0.012em] text-[#171B27] sm:text-[32px] lg:text-[38px]">
        {title}
      </h2>
      <p className="mt-2 max-w-[1040px] font-kanit text-[15px] leading-[1.45] text-[#353B4A] sm:text-[16px] lg:text-[17px]">
        {description}
      </p>

      <div className="mt-4 overflow-x-auto rounded-[14px] border border-[#D9CBFB]/70 bg-white">
        <table className="w-full min-w-[920px] border-collapse table-auto">
          <thead>
            <tr>
              <th className="w-[1%] whitespace-nowrap border border-[#E5DAFF] bg-[#F7F2FF] px-2.5 py-2 text-left font-kanit text-[12px] font-normal uppercase tracking-[0.08em] text-[#5B5281] sm:px-3 sm:text-[13px]">
                Feature
              </th>
              {comparisonCompanies.map((company) => (
                <th
                  key={company.id}
                  className={`border border-[#E5DAFF] px-2.5 py-2 text-center sm:px-3 ${
                    company.highlighted
                      ? "bg-[#F6F1FF]"
                      : "bg-white"
                  }`}
                >
                  <p className="font-kanit text-[15px] font-normal leading-[1.1] text-[#171B27] sm:text-[17px]">
                    {company.name}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature}>
                <th
                  scope="row"
                  className="w-[1%] whitespace-nowrap border border-[#EDE3FF] bg-white px-2.5 py-2 text-left font-kanit text-[13px] font-normal leading-[1.25] text-[#252A3C] sm:px-3 sm:text-[14px] lg:text-[15px]"
                >
                  {row.feature}
                </th>
                {comparisonCompanies.map((company) => {
                  const cell = row.values[company.id];
                  const toneClass = cell
                    ? getCellToneClass(cell.tone)
                    : getCellToneClass("neutral");
                  return (
                    <td
                      key={`${row.feature}-${company.id}`}
                      className={`border border-[#EDE3FF] px-2.5 py-2 text-center align-middle sm:px-3 ${
                        company.highlighted ? "bg-[#FCFAFF]" : "bg-white"
                      }`}
                    >
                      <span className={`font-kanit text-[12px] leading-[1.2] sm:text-[13px] ${toneClass}`}>
                        {cell?.value ?? "N/A"}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
