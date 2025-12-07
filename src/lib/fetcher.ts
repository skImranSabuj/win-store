import "server-only";

type FetchOptions = {
  next?: { revalidate?: number; tags?: string[] };
  signal?: AbortSignal;
};

export async function apiFetch<T>(
  path: string,
  opts?: FetchOptions
): Promise<T> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${base}${path}`;
  console.log("url: ", url);
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    next: opts?.next,
    signal: opts?.signal,
  });

  if (!res.ok) {
    const body = await safeJson(res);
    throw new Error(
      body?.message ?? `API error ${res.status}: ${res.statusText}`
    );
  }
  return res.json() as Promise<T>;
}

async function safeJson(res: Response) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
