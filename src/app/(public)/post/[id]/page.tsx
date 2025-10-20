import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import Details from "@/presentation/flows/Details";

type Params = { params: Promise<{ id: string }> };

export const revalidate = 60;

export default async function PostPage({ params }: Params) {
  const { id } = await params;

  const state = dehydrate(queryClient);

  return (
    <HydrationBoundary state={state}>
      <Details id={id} />
    </HydrationBoundary>
  );
}
