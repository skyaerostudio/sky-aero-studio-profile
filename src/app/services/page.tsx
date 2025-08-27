import Link from 'next/link'
import { getCalendarUrl } from '@/lib/siteSettings'

export default function ServicesPage() {
  const services = [
    {
      id: 'simple-prototype',
      name: 'Simple Prototype',
      tagline: 'Perfect for validating ideas quickly',
      price: 'from $3,500',
      delivery: '1-2 weeks',
      targetUse: 'Ideal for startups needing to validate ideas with investors or early users',
      description: 'Get your MVP off the ground with a clean, functional prototype that demonstrates your core value proposition.',
      inclusions: [
        'Figma to responsive code',
        'Mobile-optimized design',
        'Basic analytics setup',
        'Form handling & validation',
        'SEO optimization',
        'Performance optimization',
        '1 revision cycle',
        'Deploy to production'
      ],
      addons: [
        'Additional pages (+$500 each)',
        'Custom animations (+$750)',
        'Advanced analytics (+$400)',
        'Multi-language support (+$1,200)'
      ],
      faq: [
        {
          q: 'What&apos;s included in the initial scope?',
          a: 'Up to 5 pages/screens, responsive design, basic contact forms, and deployment to your preferred hosting platform.'
        },
        {
          q: 'Can I request changes during development?',
          a: 'Yes, we include 1 revision cycle. Additional revisions are available at $150/hour.'
        }
      ]
    },
    {
      id: 'moderate-build',
      name: 'Moderate Build', 
      tagline: 'Full-stack solution with core features',
      price: 'from $8,500',
      delivery: '2-3 weeks',
      targetUse: 'Perfect for businesses ready to launch with user accounts, payments, and data management',
      description: 'A complete application with user authentication, database integration, and essential business features.',
      inclusions: [
        'Full-stack application',
        'User authentication & profiles',
        'Database design & setup',
        'Admin dashboard',
        'Payment processing integration',
        'Email notifications',
        'API development',
        'Security best practices',
        '2 revision cycles',
        'Production deployment'
      ],
      addons: [
        'Advanced user roles (+$1,500)',
        'Third-party integrations (+$800 each)',
        'Custom reporting (+$2,000)',
        'Mobile app companion (+$4,500)'
      ],
      faq: [
        {
          q: 'Which payment processors do you support?',
          a: 'We primarily use Stripe for its reliability and developer experience. PayPal and other processors available on request.'
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
      tagline: 'Enterprise-ready with advanced features',
      price: 'from $18,500', 
      delivery: '3-4 weeks',
      targetUse: 'For companies requiring advanced features, AI integration, and production-grade architecture',
      description: 'Production-ready application with advanced features, AI integration, comprehensive testing, and DevOps setup.',
      inclusions: [
        'Advanced feature development',
        'AI/ML model integration',
        'Performance optimization',
        'Comprehensive testing suite',
        'DevOps & CI/CD pipeline',
        'Monitoring & logging',
        'Documentation & training',
        'Advanced security features',
        'Load balancing & scaling',
        '3 revision cycles',
        'White-glove deployment'
      ],
      addons: [
        'Custom AI model training (+$5,000)',
        'Advanced analytics dashboard (+$3,500)',
        'Multi-tenant architecture (+$4,000)',
        'Ongoing maintenance package (+$2,500/month)'
      ],
      faq: [
        {
          q: 'What AI capabilities can you integrate?',
          a: 'We work with OpenAI, Anthropic, and custom models for text processing, image analysis, recommendations, and automation.'
        },
        {
          q: 'Do you provide ongoing support?',
          a: 'Yes, we offer maintenance packages starting at $2,500/month including updates, monitoring, and technical support.'
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