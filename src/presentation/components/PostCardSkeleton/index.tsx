import { cn } from "@/lib/cn";
import type { IPostCardSkeleton } from "./types";

const PostCardSkeleton = ({ className, length = 1 }: IPostCardSkeleton) => {
  return Array.from({ length }).map((_, index) => (
    <article
      key={`post-card-skeleton-${index + 1}`}
      className={cn(
        "rounded-sm flex flex-col border gap-[25px] p-6 border-primary",
        className,
      )}
    >
      <div className="w-full h-[196px] relative">
        <div className="w-full h-full rounded-sm bg-[color:var(--color-text)]/20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[130px] h-[30px] rounded-sm bg-[color:var(--color-primary)]/30 animate-pulse" />
      </div>

      <div className="h-6 w-3/4 rounded bg-[color:var(--color-text)]/30 animate-pulse" />

      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-[color:var(--color-text)]/20 animate-pulse" />
        <div className="h-4 w-11/12 rounded bg-[color:var(--color-text)]/20 animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-[color:var(--color-text)]/20 animate-pulse" />
      </div>

      <div className="h-5 w-24 rounded bg-[color:var(--color-primary)]/30 animate-pulse" />
    </article>
  ));
};

export default PostCardSkeleton;
