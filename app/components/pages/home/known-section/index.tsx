import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./know-tech";
import { TbBrandNextjs } from "react-icons/tb";

export function KnownTechs() {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div>
        <KnownTech tech={{
          icon: <TbBrandNextjs/>,
          name: 'Next.js',
          startDate: '2025-01-01'
        }}
        />
      </div>
    </section>
  )
}