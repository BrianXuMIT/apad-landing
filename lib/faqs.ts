import { cache } from "react";
import { unstable_cache } from "next/cache";
import { fetchSupabasePublicRows, normalizeIsoDate } from "@/lib/supabase-rest";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
  updatedAtISO: string;
};

type FaqRow = {
  id: string;
  question: string;
  answer: string;
  sort_order: number | null;
  updated_at: string | null;
};

const FAQ_REVALIDATE_SECONDS = 900;
const FAQ_SELECT = "id,question,answer,sort_order,updated_at";

function mapRowToFaqItem(row: FaqRow): FaqItem | null {
  const question = row.question?.trim();
  const answer = row.answer?.trim();

  if (!question || !answer) return null;

  return {
    id: row.id,
    question,
    answer,
    sortOrder: row.sort_order ?? 0,
    updatedAtISO: normalizeIsoDate(row.updated_at),
  };
}

const fetchFaqRows = unstable_cache(
  async (): Promise<FaqRow[]> => {
    return fetchSupabasePublicRows<FaqRow>({
      table: "faq_items",
      query: {
        select: FAQ_SELECT,
        is_published: "eq.true",
        order: "sort_order.asc,created_at.asc",
      },
      revalidateSeconds: FAQ_REVALIDATE_SECONDS,
      tags: ["faq-items"],
      errorLabel: "Failed to fetch FAQs",
    });
  },
  ["faq-items"],
  { revalidate: FAQ_REVALIDATE_SECONDS, tags: ["faq-items"] }
);

export const getFaqItems = cache(async (): Promise<FaqItem[]> => {
  try {
    const rows = await fetchFaqRows();
    return rows
      .map(mapRowToFaqItem)
      .filter((item): item is FaqItem => Boolean(item));
  } catch {
    return [];
  }
});
