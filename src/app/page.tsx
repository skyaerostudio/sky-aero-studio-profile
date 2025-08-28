import { HeroSection } from './components/HeroSection'
import { ServicesOverview } from './components/ServicesOverview'
import { AddOnServices } from './components/AddOnServices'
import { CarePlans } from './components/CarePlans'
import { FeaturedCaseStudies } from './components/FeaturedCaseStudies'

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkyAero Studio",
    "description": "AI-first studio that ships investor-ready prototypes in 2-4 weeks",
    "url": "https://skyaero.studio",
    "logo": "https://skyaero.studio/skyaero-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "skyaerostudio@outlook.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/in/ryanrazaan/",
      "https://twitter.com/skyaerostudio"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    }
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": "SkyAero Studio"
    },
    "description": "AI-first prototyping and MVP development services",
    "offers": [
      {
        "@type": "Offer",
        "name": "Simple Prototype",
        "description": "Perfect to validate fast. Auth, CRUD, clean UI, deployed in ≤2 weeks.",
        "price": "34900000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "Moderate Build",
        "description": "Investor-ready app with dashboard, integrations, and handover docs.",
        "price": "79900000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "Full App",
        "description": "Production-grade build with test suite, CI/CD, and scaling plan.",
        "price": "199900000",
        "priceCurrency": "IDR"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="space-y-16 md:space-y-20 lg:space-y-24">
        <HeroSection />
        <ServicesOverview />
        <AddOnServices />
        <CarePlans />
        <FeaturedCaseStudies />
      </div>
    </>
  )
}
