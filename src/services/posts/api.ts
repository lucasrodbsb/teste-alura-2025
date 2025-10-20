import { fetchJson } from "@/services/http/client";
import type { ListParams, Post, PostsListResponse } from "./types";

const BASE = "/api/posts";

export async function getPosts(params: ListParams) {
  const page = String(params.page ?? 1);
  const limit = String(params.limit ?? 6);

  if (params.category) {
    const qs = new URLSearchParams({ page, limit });
    return fetchJson<PostsListResponse>(
      `${BASE}/category/${params.category}?${qs}`,
    );
  }

  if (params.tag) {
    const qs = new URLSearchParams({ page, limit });
    return fetchJson<PostsListResponse>(`${BASE}/tags/${params.tag}?${qs}`);
  }

  const qs = new URLSearchParams({ page, limit });
  return fetchJson<PostsListResponse>(`${BASE}?${qs}`);
}

export async function getPostById(id: string) {
  return fetchJson<{ post: Post }>(`${BASE}/id/${id}`);
}
