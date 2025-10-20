"use client";

import Image from "next/image";
import { useState } from "react";
import background from "@/presentation/assets/background.svg";
import lines from "@/presentation/assets/lines.svg";
import Autor from "@/presentation/components/Autor";
import Contact from "@/presentation/components/Contact";
import Footer from "@/presentation/components/Footer";
import Header from "@/presentation/components/Header";
import { ACTUAL_PAGE_ENUM } from "@/presentation/components/Header/types";
import PostCardSkeleton from "@/presentation/components/PostCardSkeleton";
import Posts from "@/presentation/components/Posts";
import Skeleton from "@/presentation/components/Skeleton";
import { usePosts } from "@/services/posts/queries";
import type { IHomePostsProps } from "./types";

const HomePosts = ({ initialParams }: IHomePostsProps) => {
  const [pageState, setPageState] = useState(initialParams.page);
  const [categoryState, setCategoryState] = useState<string | undefined>(
    undefined,
  );
  const [queryState, setQueryState] = useState<string>("");

  const { data: posts } = usePosts({
    page: pageState,
    limit: 6,
    category: categoryState,
  });

  return (
    <section
      className="px-4 md:px-6 gap-10 md:gap-18 flex flex-col bg-no-repeat bg-top bg-auto md:bg-contain min-h-[80vh] justify-between"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="w-full ml-auto mr-auto max-w-[1440px] pt-12 md:pt-[72px] bg-no-repeat bg-top bg-auto gap-10 md:gap-18 flex flex-col min-h-[80vh] flex-1">
        <Header actualPage={ACTUAL_PAGE_ENUM.HOME} />
        <Autor />
        <Image
          src={lines}
          alt="Background"
          priority
          quality={70}
          fetchPriority="high"
          className="w-full max-w-[675px] ml-auto mr-auto"
          style={{ height: "auto" }}
        />
        {!posts && (
          <div className="max-w-[1191px] ml-auto mr-auto gap-6 flex flex-col w-full">
            <Skeleton className="max-w-[1191px] ml-auto mr-auto w-full h-[40px]" />
            <div className="max-w-[1191px] ml-auto mr-auto grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 opacity-100 w-full">
              <PostCardSkeleton length={6} />
            </div>
          </div>
        )}
        <Posts
          posts={posts?.posts ?? []}
          totalPages={posts?.pagination?.totalPages}
          currentPage={pageState}
          onPageChange={(p) => setPageState(p)}
          onCategoryClick={(slug) => {
            setCategoryState(slug);
            setPageState(1);
          }}
          activeCategory={categoryState}
          onClearCategory={() => {
            setCategoryState(undefined);
            setPageState(1);
          }}
          searchText={queryState}
          onSearchChange={(text) => {
            setQueryState(text);
            setPageState(1);
          }}
        />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default HomePosts;
