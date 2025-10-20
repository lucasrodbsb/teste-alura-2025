import Image from "next/image";
import { useMemo } from "react";
import { cn } from "@/lib/cn";
import searchIcon from "@/presentation/assets/icons/search.svg";
import PostCard from "../PostCard";
import Tag from "../Tag";
import type { IPosts } from "./types";

const Posts = ({
  posts,
  onPageChange,
  totalPages = 8,
  currentPage = 1,
  onCategoryClick,
  activeCategory,
  onClearCategory,
  searchText,
  onSearchChange,
}: IPosts) => {
  const uniqueCategories = useMemo(() => {
    const seen = new Set<string>();
    const result: { slug: string; name: string }[] = [];
    for (const item of posts ?? []) {
      const slug = item?.category?.slug;
      const name = item?.category?.name;
      if (slug && !seen.has(slug)) {
        seen.add(slug);
        result.push({ slug, name });
      }
    }
    return result;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const term = (searchText ?? "").trim().toLowerCase();
    if (!term) return posts ?? [];

    const normalize = (value?: string) =>
      (value ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}+/gu, "");

    const t = normalize(term);

    return (posts ?? []).filter((p) => {
      const inTitle = normalize(p.title).includes(t);
      const inContent = normalize(p.content).includes(t);
      const inAuthor = normalize(p.author).includes(t);
      const inCategory = normalize(p.category?.name).includes(t);
      const inTags = (p.tags ?? []).some((tag) =>
        normalize(tag.name).includes(t),
      );
      return inTitle || inContent || inAuthor || inCategory || inTags;
    });
  }, [posts, searchText]);

  return (
    <div className="max-w-[1191px] ml-auto mr-auto gap-6 flex flex-col w-full">
      {posts?.length > 0 && (
        <div className="flex items-center gap-4 md:gap-6 justify-between w-full flex-col md:flex-row">
          <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto flex-col md:flex-row">
            <h2 className="text-xl md:text-2xl font-semibold text-secondary line-height-[100%] text-nowrap hidden md:block">
              Minhas postagens
            </h2>
            <div className="relative w-full md:max-w-[320px] h-[40px] max-w-full">
              <input
                type="text"
                placeholder="Buscar..."
                className="font-alt text-base text-text w-full h-full border border-primary rounded-sm pl-3 pr-10"
                value={searchText ?? ""}
                onChange={(e) => onSearchChange?.(e?.target?.value)}
              />
              <Image
                src={searchIcon}
                alt="Buscar"
                width={24}
                quality={70}
                height={24}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
            <h2 className="text-sm md:text-base font-alt font-semibold text-secondary line-height-[100%] hidden md:block">
              Categorias:
            </h2>
            <div className="relative w-full md:w-64">
              <div className="flex items-center gap-3 md:gap-4 w-full overflow-x-auto scrollbar-primary pr-6">
                {uniqueCategories?.map((item) => {
                  return (
                    <Tag
                      id={item?.slug}
                      name={item?.name}
                      onTagClick={() => onCategoryClick?.(item?.slug)}
                      key={item?.slug}
                      variant={
                        activeCategory === item?.slug ? "secondary" : "primary"
                      }
                    />
                  );
                })}
                {activeCategory && (
                  <button
                    type="button"
                    className="text-nowrap text-sm md:text-base font-alt font-bold line-height-[100%] cursor-pointer rounded-sm bg-transparent hover:underline text-text whitespace-nowrap"
                    onClick={onClearCategory}
                  >
                    Limpar filtro
                  </button>
                )}
              </div>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-[linear-gradient(to_left,var(--color-white),rgba(255,255,255,0))]" />
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-x-6 gap-y-6 opacity-100">
        {filteredPosts?.map((item) => (
          <PostCard key={item?.id} post={item} />
        ))}
        {filteredPosts?.length === 0 &&
          (searchText?.trim()?.length ?? 0) > 0 && (
            <div className="col-span-3 flex items-center justify-center min-h-36 w-full">
              <p className="text-base font-alt font-bold line-height-[100%] text-text">
                Nenhum post encontrado
              </p>
            </div>
          )}
      </div>
      <div className="flex items-center gap-1 md:gap-2 justify-center w-full flex-wrap">
        {filteredPosts?.length > 0 &&
          Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={cn(
                  "text-nowrap text-sm md:text-base font-alt font-bold line-height-[100%] cursor-pointer w-7 h-7 md:w-8 md:h-8 rounded-sm",
                  page === currentPage
                    ? "bg-secondary text-white"
                    : "bg-[#9D9D9D] text-white hover:bg-secondary hover:text-white",
                )}
                type="button"
                onClick={() => onPageChange?.(page)}
              >
                {page}
              </button>
            ),
          )}
      </div>
    </div>
  );
};

export default Posts;
