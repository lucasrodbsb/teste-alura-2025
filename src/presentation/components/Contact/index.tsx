import Image from "next/image";
import githubIcon from "@/presentation/assets/icons/github.svg";
import linkedinIcon from "@/presentation/assets/icons/linkedin.svg";
import mailIcon from "@/presentation/assets/icons/mail.svg";

const Contact = () => {
  return (
    <section className="w-full max-w-[1191px] ml-auto mr-auto grid grid-cols-1 md:grid-cols-3 items-start gap-6">
      <div className="flex flex-col gap-1 text-center md:text-left md:gap-3 col-span-2">
        <h1 className="font-bold text-primary text-base line-height-[150%]">
          Vamos conversar?
        </h1>
        <h1 className="font-bold text-secondary text-4xl md:text-6xl line-height-[101%]">
          Entre em contato
        </h1>
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex gap-2 text-center md:text-left">
          <Image alt="Mail" src={mailIcon} width={24} height={24} />
          <p className="text-sm text-center md:text-left md:text-base font-alt text-text line-height-[150%]">
            fernandamascheti@gmail.com
          </p>
        </div>
        <div className="flex gap-2 text-center md:text-left">
          <Image alt="Linkedin" src={linkedinIcon} width={24} height={24} />
          <p className="text-sm text-center md:text-left md:text-base font-alt text-text line-height-[150%]">
            /Fernanda Mascheti
          </p>
        </div>
        <div className="flex gap-2 text-center md:text-left">
          <Image alt="GitHub" src={githubIcon} width={24} height={24} />
          <p className="text-sm  md:text-base font-alt text-text line-height-[150%]">
            /fernandamascheti
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
