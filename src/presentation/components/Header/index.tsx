import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import logo from "@/presentation/assets/code.svg";
import ThemeToggle from "../ThemeToggle";
import { ACTUAL_PAGE_ENUM, type IHeaderProps } from "./types";

const Header = ({ actualPage = ACTUAL_PAGE_ENUM.HOME }: IHeaderProps) => {
  return (
    <header className="w-full max-w-[1191px] ml-auto mr-auto flex items-center justify-between px-4 md:px-0 flex-col md:flex-row gap-4 md:gap-0">
      <div className="flex items-center gap-3 md:gap-5">
        <Image src={logo} alt="Logo" width={46} height={46} quality={70} />
        <h1 className="text-lg md:text-2xl font-bold text-secondary">
          FERNANDA MASCHETI
        </h1>
      </div>
      <div className="flex items-center gap-4 md:gap-5">
        <ThemeToggle />
        <h1
          className={cn(
            "text-xl md:text-2xl font-bold text-secondary cursor-pointer hover:text-primary transition-all duration-300",
            actualPage === ACTUAL_PAGE_ENUM.HOME && "text-primary",
          )}
        >
          <Link href="/">Início</Link>
        </h1>
        <h1
          className={cn(
            "text-xl md:text-2xl font-bold text-secondary cursor-pointer hover:text-primary transition-all duration-300",
            actualPage === ACTUAL_PAGE_ENUM.BLOG && "text-primary",
          )}
        >
          <Link href="/post/1">Blog</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
