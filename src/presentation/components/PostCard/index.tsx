import Image from "next/image";
import Link from "next/link";
import type { IPostCard } from "./types";

const PostCard = ({ post }: IPostCard) => {
  return (
    <article className="rounded-sm flex flex-col border gap-4 sm:gap-[25px] p-4 sm:p-6 border-primary transition-shadow hover:shadow-[var(--shadow-primary)]">
      <div className="w-full h-[160px] sm:h-[196px] opacity-100 relative">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority
          quality={70}
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-primary text-white w-[110px] h-[28px] sm:w-[130px] sm:h-[30px] flex items-center justify-center text-xs sm:text-sm line-height-[100%] bottom-0 right-0">
          {post.category.name}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-secondary line-height-[100%]">
        <Link href={`/post/${post.id}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="text-sm sm:text-base font-alt text-text line-clamp-3 line-height-[150%]">
        {post.content}
      </p>
      <Link
        href={`/post/${post.id}`}
        className="text-sm sm:text-base font-alt text-primary hover:underline font-bold"
      >
        Ler mais
      </Link>
    </article>
  );
};

export default PostCard;
