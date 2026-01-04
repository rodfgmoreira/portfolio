import { HeroSection } from "./components/pages/home/hero-section"
import { HighlightedProjects } from "./components/pages/home/highlighted-projects"
import { KnownTechs } from "./components/pages/home/known-section"
import { WorkExperience } from "./components/pages/home/work-experience"

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
