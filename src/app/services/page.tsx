import Link from 'next/link'
import { getCalendarUrl } from '@/lib/siteSettings'

export default function ServicesPage() {
  const services = [
    {
      id: 'simple-prototype',
      name: 'Simple Prototype',
      tagline: 'Perfect to validate fast. Auth, CRUD, clean UI, deployed in ≤2 weeks.',
      price: 'Rp 34.9M – 44.9M',
      delivery: '1-2 weeks',
      targetUse: 'Landing/MVP with auth, CRUD, basic DB, hosted • Team: 1 FE, 0.5 BE, PM',
      description: 'Perfect to validate fast. Auth, CRUD, clean UI, deployed in ≤2 weeks.',
      inclusions: [
        'Landing/MVP with auth',
        'CRUD operations',
        'Basic DB integration',
        'Hosted deployment',
        'Mobile-optimized design',
        'SEO optimization',
        '1 revision cycle',
        'Warranty: 30 days bug-fix'
      ],
      addons: [
        'Payments (Stripe/Midtrans): +Rp 12-25M',
        'Admin dashboard (Pro): +Rp 15-30M',
        'Design polish (brand kit): +Rp 6-15M',
        'Documentation pack: +Rp 5-12M'
      ],
      faq: [
        {
          q: 'What&apos;s included in the initial scope?',
          a: 'Up to 5 pages/screens, responsive design, basic contact forms, and deployment to your preferred hosting platform.'
        },
        {
          q: 'Can I request changes during development?',
          a: 'Yes, we include 1 revision cycle. Change requests are mini-estimated with price/time impact; work starts after approval.'
        }
      ]
    },
    {
      id: 'moderate-build',
      name: 'Moderate Build', 
      tagline: 'Investor-ready app with dashboard, integrations, and handover docs.',
      price: 'Rp 79.9M – 119.9M',
      delivery: '2-3 weeks',
      targetUse: 'Full-stack app + auth + DB + admin + integrations • Team: 1 FE, 1 BE, PM',
      description: 'Investor-ready app with dashboard, integrations, and handover docs.',
      inclusions: [
        'Full-stack app + auth',
        'Database + admin panel',
        'Third-party integrations',
        'Complete documentation',
        'API development',
        'Security best practices',
        '2 revision cycles',
        'Warranty: 30 days bug-fix'
      ],
      addons: [
        'AI features (OpenAI/watsonx): +Rp 15-40M',
        'DevOps & monitoring: +Rp 8-18M',
        'Test suite (Playwright): +Rp 10-22M',
        'Design polish: +Rp 6-15M'
      ],
      faq: [
        {
          q: 'Which payment processors do you support?',
          a: 'We support both Stripe (international) and Midtrans (Indonesia-specific). Other processors available on request.'
        },
        {
          q: 'What databases do you work with?',
          a: 'PostgreSQL for relational data, MongoDB for document-based needs. We choose based on your specific requirements.'
        }
      ]
    },
    {
      id: 'full-app',
      name: 'Full App',
      tagline: 'Production-grade build with test suite, CI/CD, and scaling plan.',
      price: 'Rp 199.9M+', 
      delivery: '3-6 weeks',
      targetUse: 'Production-ready app with advanced features, CI/CD, test suite • Team: 2-3 devs, PM',
      description: 'Production-grade build with test suite, CI/CD, and scaling plan.',
      inclusions: [
        'Advanced features',
        'AI integration',
        'CI/CD pipeline',
        'Test suite',
        'DevOps + monitoring',
        'Scaling architecture',
        'Performance optimization',
        'Security features',
        '3 revision cycles',
        'Warranty: 30 days bug-fix'
      ],
      addons: [
        'Custom AI model training: +Rp 40M',
        'Advanced analytics dashboard: +Rp 30M',
        'Multi-tenant architecture: +Rp 35M',
        'Care Plans available: Rp 3.5M-15M/month'
      ],
      faq: [
        {
          q: 'What AI capabilities can you integrate?',
          a: 'We work with OpenAI, Anthropic, and custom models for text processing, image analysis, recommendations, and automation.'
        },
        {
          q: 'What are your payment terms?',
          a: '40% deposit to start, 40% at mid-sprint milestone, 20% at delivery. All projects include 30-day warranty for bug fixes.'
        }
      ]
    }
  ]

  return (
    <div className="container py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Service Tiers
        </h1>
        <p className="text-xl text-foreground/80 mb-8">
          Choose the perfect package for your project. All tiers include transparent pricing, 
          clear SLAs, and proven delivery methods.
        </p>

        {/* Founders' Launch Banner */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 inline-block">
          <div className="text-sm font-semibold text-accent mb-1">🚀 FOUNDERS&apos; LAUNCH</div>
          <div className="text-foreground/80">
            Save 10-15% on your first project • Limited to 3 clients per quarter
          </div>
          <div className="text-xs text-foreground/60 mt-1">
            Prices shown reflect launch discount
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="space-y-16">
        {services.map((service) => (
          <div key={service.id} className="border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-8 py-6 border-b border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{service.name}</h2>
                  <p className="text-lg text-foreground/80">{service.tagline}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-3xl font-bold text-accent mb-1">{service.price}</div>
                  <div className="text-foreground/70">{service.delivery}</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Target Use</h3>
                    <p className="text-foreground/80 mb-6">{service.targetUse}</p>
                    <p className="text-foreground/80">{service.description}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">What&apos;s Included</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.inclusions.map((inclusion) => (
                        <div key={inclusion} className="flex items-center">
                          <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-foreground/80">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Add-ons Available</h3>
                    <ul className="space-y-2">
                      {service.addons.map((addon) => (
                        <li key={addon} className="text-foreground/80 flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                          {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                      {service.faq.map((item, faqIndex) => (
                        <div key={faqIndex}>
                          <h4 className="font-medium mb-2">{item.q}</h4>
                          <p className="text-foreground/80">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Ready to get started?</h3>
                    <p className="text-foreground/80 mb-6">
                      Get a detailed estimate for your project and timeline.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="/contact"
                        className="block text-center bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        Request Estimate
                      </Link>
                      <a
                        href={getCalendarUrl('services')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center border border-border py-3 rounded-lg font-semibold hover:bg-background transition-colors"
                      >
                        Book Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-muted p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Not sure which tier is right for you?</h2>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Book a free 30-minute consultation to discuss your project needs and get a custom recommendation.
        </p>
        <a
          href={getCalendarUrl('services_bottom')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Book Free Consultation
        </a>
      </div>
    </div>
  )
}