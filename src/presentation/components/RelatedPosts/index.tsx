import PostCard from "../PostCard";
import type { IRelatedPosts } from "./types";

const RelatedPosts = ({ posts }: IRelatedPosts) => {
  return (
    <section className="max-w-[1191px] ml-auto mr-auto gap-6 flex flex-col md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 opacity-100">
        {posts?.map((item) => (
          <PostCard key={item?.id} post={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
