type QueryInput = Record<string, string> | URLSearchParams;

type FetchSupabaseRowsParams = {
  table: string;
  query: QueryInput;
  revalidateSeconds: number;
  tags: string[];
  errorLabel: string;
};

type SupabasePublicConfig = {
  url: string;
  anonKey: string;
};

function getSupabasePublicConfig(): SupabasePublicConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) return null;

  return {
    url: url.replace(/\/+$/, ""),
    anonKey,
  };
}

function toSearchParams(query: QueryInput): URLSearchParams {
  return query instanceof URLSearchParams
    ? query
    : new URLSearchParams(Object.entries(query));
}

function getSupabasePublicHeaders(anonKey: string): HeadersInit {
  return {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    "Content-Type": "application/json",
  };
}

export function normalizeIsoDate(value: string | null | undefined): string {
  if (!value) return new Date().toISOString();

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return new Date().toISOString();

  return date.toISOString();
}

export async function fetchSupabasePublicRows<T>({
  table,
  query,
  revalidateSeconds,
  tags,
  errorLabel,
}: FetchSupabaseRowsParams): Promise<T[]> {
  const config = getSupabasePublicConfig();
  if (!config) return [];

  const params = toSearchParams(query);
  const response = await fetch(
    `${config.url}/rest/v1/${table}?${params.toString()}`,
    {
      method: "GET",
      headers: getSupabasePublicHeaders(config.anonKey),
      cache: "force-cache",
      next: {
        revalidate: revalidateSeconds,
        tags,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`${errorLabel}: ${response.status}`);
  }

  const data = (await response.json()) as unknown;
  return Array.isArray(data) ? (data as T[]) : [];
}
