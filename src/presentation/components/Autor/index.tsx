import Image from "next/image";
import autorImage from "@/presentation/assets/autor.png";

const Autor = () => {
  return (
    <div className="w-full m-auto max-w-[675px] px-4 md:px-0">
      <div className="flex flex-col items-center text-center justify-center gap-4 md:gap-6">
        <Image
          src={autorImage}
          alt="Autor"
          width={224}
          height={224}
          priority
          quality={70}
          fetchPriority="high"
          className="w-[180px] h-[180px] md:w-[224px] md:h-[224px]"
        />

        <h1 className="font-bold text-primary text-base md:text-lg line-height-[150%]">
          Olá, meu nome é Fernanda_
        </h1>
        <h1 className="font-bold text-secondary text-5xl md:text-6xl line-height-[101%]">
          Eu ensino{" "}
          <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
            Programação
          </span>
        </h1>
        <p className="text-base md:text-lg text-text font-alt font-normal line-height-[150%] max-w-[581px] md:max-w-[581px]">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>
      </div>
    </div>
  );
};

export default Autor;
