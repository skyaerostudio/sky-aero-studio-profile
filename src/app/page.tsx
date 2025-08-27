import { HeroSection } from './components/HeroSection'
import { ServicesOverview } from './components/ServicesOverview'
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
      "email": "hello@skyaero.studio",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://linkedin.com/company/skyaero-studio",
      "https://twitter.com/skyaerostudio"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
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
        "description": "MVP landing page with core user flow",
        "price": "3500",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Moderate Build",
        "description": "Full-stack app with authentication and database",
        "price": "8500",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Full App",
        "description": "Production-ready application with advanced features",
        "price": "18500",
        "priceCurrency": "USD"
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
      <div className="space-y-20">
        <HeroSection />
        <ServicesOverview />
        <FeaturedCaseStudies />
      </div>
    </>
  )
}
