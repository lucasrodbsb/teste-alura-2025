type ApiCategory = { slug: string; name: string; description: string };
type ApiTag = { slug: string; name: string };

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  category: ApiCategory;
  tags: ApiTag[];
  imageUrl: string;
};

type ListParams = {
  page?: number;
  limit?: number;
  category?: string;
  tag?: string;
};

type Pagination = {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type PostsListResponse = {
  posts: Post[];
  pagination: Pagination;
  meta?: Record<string, unknown>;
};

export type {
  ApiCategory,
  ApiTag,
  ListParams,
  Post,
  Pagination,
  PostsListResponse,
};
