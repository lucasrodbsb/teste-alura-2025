import { cn } from "@/lib/cn";

type SpinnerProps = {
  className?: string;
  size?: number;
};

const Spinner = ({ className, size = 96 }: SpinnerProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className="relative rounded-full bg-[conic-gradient(var(--color-primary),_#8c61d5)] animate-[spin_1.2s_linear_infinite]"
        style={{ width: size, height: size }}
      >
        <span className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-primary),_#8c61d5)] blur-[2px]" />
        <span className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-primary),_#8c61d5)] blur-[5px]" />
        <span className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-primary),_#8c61d5)] blur-[18px]" />
        <span className="absolute inset-0 rounded-full bg-[conic-gradient(var(--color-primary),_#8c61d5)] blur-[25px]" />
        <span className="absolute inset-[10px] rounded-full border-[5px] border-[var(--color-white)] bg-[var(--color-white)]" />
      </div>
    </div>
  );
};

export default Spinner;
