import Image from "next/image";
import Tag from "../Tag";
import type { IPostDetails } from "./types";

const PostDetails = ({ post }: IPostDetails) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-[1191px] ml-auto mr-auto gap-4 md:gap-6 md:mt-6 md:mb-6 md:px-0">
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="font-bold text-secondary text-3xl md:text-5xl line-height-[101%]">
          {post?.title}
        </h1>
        <p className="font-alt text-text text-sm md:text-base font-bold">
          Categoria:
        </p>
        <div className="flex gap-3.5">
          <Tag id={post?.category?.slug} name={post?.category?.name} />
        </div>
        <p className="font-alt text-text text-sm md:text-base font-bold">
          Tags:
        </p>
        <div className="flex gap-3.5">
          {post?.tags?.map((item, _) => (
            <Tag
              variant="secondary"
              key={item?.slug}
              id={item?.slug}
              name={item?.name}
            />
          ))}
        </div>
      </div>
      <div className="relative rounded-sm overflow-hidden min-h-[220px] md:min-h-0">
        <Image
          src={post?.imageUrl}
          alt={post?.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={70}
          priority
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default PostDetails;
