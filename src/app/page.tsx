import { HeroSection } from './components/HeroSection'
import { ServicesOverview } from './components/ServicesOverview'
import { FeaturedCaseStudies } from './components/FeaturedCaseStudies'

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ServicesOverview />
      <FeaturedCaseStudies />
    </div>
  )
}
