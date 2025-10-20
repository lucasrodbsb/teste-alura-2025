"use client";

import background from "@/presentation/assets/background.svg";
import Footer from "@/presentation/components/Footer";
import Header from "@/presentation/components/Header";
import { ACTUAL_PAGE_ENUM } from "@/presentation/components/Header/types";
import PostCardSkeleton from "@/presentation/components/PostCardSkeleton";
import PostDetails from "@/presentation/components/PostDetails";
import RelatedPosts from "@/presentation/components/RelatedPosts";
import Spinner from "@/presentation/components/Spinner";
import { usePost, usePosts, useRelatedPosts } from "@/services/posts/queries";
import type { IDetailsProps } from "./types";
import { redirect } from "next/navigation";

const Details = ({ id }: IDetailsProps) => {
  const { data: posts } = usePosts({ page: 1, limit: 6 });
  const effectiveId = id === "1" ? (posts?.posts?.[0]?.id ?? id) : id;
  const { data: post, isError } = usePost(effectiveId);
  const { data: relatedPosts } = useRelatedPosts(effectiveId);

  if (isError) {
    redirect("/");
  }

  if (!post)
    return (
      <div className="flex flex-1 min-h-screen items-center justify-center">
        <Spinner size={64} />
      </div>
    );

  return (
    <section
      className="px-4 md:px-6 gap-10 md:gap-18 flex flex-col bg-no-repeat bg-top bg-auto md:bg-contain min-h-[80vh] justify-between"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="w-full ml-auto mr-auto max-w-[1191px] pt-12 md:pt-[72px] bg-no-repeat bg-top bg-auto gap-6 md:gap-10 flex flex-col flex-1">
        <Header actualPage={ACTUAL_PAGE_ENUM.BLOG} />
        <PostDetails post={post?.post} />
        <p className="text-text font-alt text-base md:text-base">
          {post?.post?.content}
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-secondary line-height-[100%] text-nowrap">
          Postagens relacionadas
        </h2>
        {!relatedPosts && (
          <div className="max-w-[1191px] ml-auto mr-auto grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 opacity-100 w-full">
            <PostCardSkeleton length={3} />
          </div>
        )}
        {relatedPosts && <RelatedPosts posts={relatedPosts ?? []} />}
        <Footer />
      </div>
    </section>
  );
};

export default Details;
