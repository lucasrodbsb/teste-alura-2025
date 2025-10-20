import { queryOptions, useQuery } from "@tanstack/react-query";
import { getPostById, getPosts } from "./api";
import type { ListParams } from "./types";

const postsKeys = {
  all: ["posts"] as const,
  list: (params: ListParams) => [...postsKeys.all, "list", params] as const,
  detail: (id: string) => [...postsKeys.all, "detail", id] as const,
  related: (id: string) => [...postsKeys.all, "related", id] as const,
};

const postsListOptions = (params: ListParams) =>
  queryOptions({
    queryKey: postsKeys.list(params),
    queryFn: () => getPosts(params),
  });

const postDetailOptions = (id: string) =>
  queryOptions({
    queryKey: postsKeys.detail(id),
    queryFn: () => getPostById(id),
  });

function usePosts(params: ListParams) {
  return useQuery(postsListOptions(params));
}
function usePost(id: string) {
  return useQuery(postDetailOptions(id));
}
function useRelatedPosts(id: string) {
  return useQuery({
    queryKey: postsKeys.related(id),
    queryFn: async () => {
      const { post } = await getPostById(id);
      const list = await getPosts({
        page: 1,
        limit: 6,
        category: post?.category?.slug,
      });
      return list?.posts?.filter((p) => p?.id !== post?.id)?.slice(0, 3);
    },
  });
}

export {
  usePosts,
  usePost,
  useRelatedPosts,
  postsKeys,
  postsListOptions,
  postDetailOptions,
};
