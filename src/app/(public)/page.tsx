import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import HomePosts from "@/presentation/flows/Home";
import { postsListOptions } from "@/services/posts/queries";

export const revalidate = 60;

export default async function Home() {
  const params = { page: 1, limit: 6 };
  await queryClient.prefetchQuery(postsListOptions(params));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main id="conteudo">
        <HomePosts initialParams={params} />
      </main>
    </HydrationBoundary>
  );
}
