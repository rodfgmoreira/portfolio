import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-cyan-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Rodrigo Moreira</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">Habilidades sólidas em desenvolvimento web, com proficiência em JavaScript, TypeScript e frameworks como React.js. Resolvo problemas e comprometido em aprender novas tecnologias para contribuir em projetos desafiadores.</p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>

          <div>
            <Button>
              Entre em contato
            </Button>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Rodrigo Moreira"
        />
      </div>
    </section>
  )
} 