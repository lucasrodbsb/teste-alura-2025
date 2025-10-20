const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://nextjs-alura-teste.vercel.app";

type FetchOptions = RequestInit & { timeoutMs?: number };

export async function fetchJson<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? 12_000
  );

  try {
    const isLocalApiPath = path.startsWith("/api");
    const url = isLocalApiPath ? path : `${BASE_URL}${path}`;

    const isGet = (options.method ?? "GET").toUpperCase() === "GET";

    const res = await fetch(url, {
      ...options,
      headers: isGet
        ? { ...(options.headers ?? {}) }
        : { "Content-Type": "application/json", ...(options.headers ?? {}) },
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} - ${text || res.statusText}`);
    }
    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}
