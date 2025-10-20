import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import Details from "@/presentation/flows/Details";
import { postDetailOptions } from "@/services/posts/queries";

type Params = { params: Promise<{ id: string }> };

export const revalidate = 60;

export default async function PostPage({ params }: Params) {
  const { id } = await params;
  await queryClient.prefetchQuery(postDetailOptions(id));

  const state = dehydrate(queryClient);

  return (
    <HydrationBoundary state={state}>
      <Details id={id} />
    </HydrationBoundary>
  );
}
