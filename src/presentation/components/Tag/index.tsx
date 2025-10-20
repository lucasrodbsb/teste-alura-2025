import { cn } from "@/lib/cn";
import type { ITag } from "./types";

const Tag = ({ id, name, onTagClick, variant = "primary" }: ITag) => {
  const buttonClasses = cn(
    "text-nowrap text-sm md:text-base font-alt font-bold line-height-[100%] px-3 py-1.5 md:px-4 md:py-2 rounded-sm transition-all duration-300",
    variant === "primary"
      ? "bg-primary text-white border border-primary"
      : "bg-transparent text-primary border border-primary",
    onTagClick && "hover:bg-primary hover:text-white cursor-pointer",
  );

  return (
    <button
      type="button"
      key={id}
      className={buttonClasses}
      onClick={onTagClick}
    >
      {name}
    </button>
  );
};

export default Tag;
