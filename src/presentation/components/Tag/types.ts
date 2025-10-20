interface ITag {
  id: string;
  name: string;
  onTagClick?: VoidFunction;
  variant?: "primary" | "secondary";
}

export type { ITag };
