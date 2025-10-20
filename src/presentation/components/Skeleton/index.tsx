import { cn } from "@/lib/cn";
import type { ISkeleton } from "./types";

const Skeleton = ({ className }: ISkeleton) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-[color:var(--color-text)]/20",
        className,
      )}
    />
  );
};

export default Skeleton;
