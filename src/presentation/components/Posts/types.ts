import type { Post } from "@/services/posts/types";

interface IPosts {
  posts: Post[];
  onPageChange?: (page: number) => void;
  totalPages?: number;
  currentPage?: number;
  onCategoryClick?: (slug: string) => void;
  activeCategory?: string;
  onClearCategory?: () => void;
  searchText?: string;
  onSearchChange?: (text: string) => void;
}

export type { IPosts };
