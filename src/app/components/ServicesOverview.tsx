import Link from 'next/link'

export function ServicesOverview() {
  const services = [
    {
      name: 'Simple Prototype',
      price: 'from $3,500',
      delivery: '1-2 weeks',
      description: 'MVP landing page with core user flow',
      features: ['Figma to code', 'Responsive design', 'Basic analytics', 'Mobile optimized'],
      href: '/services/simple-prototype'
    },
    {
      name: 'Moderate Build',
      price: 'from $8,500',
      delivery: '2-3 weeks',
      description: 'Full-stack app with authentication and database',
      features: ['User authentication', 'Database integration', 'API development', 'Admin dashboard', 'Payment processing'],
      href: '/services/moderate-build'
    },
    {
      name: 'Full App',
      price: 'from $18,500',
      delivery: '3-4 weeks',
      description: 'Production-ready application with advanced features',
      features: ['Advanced features', 'AI integration', 'Performance optimization', 'DevOps setup', 'Testing suite', 'Documentation'],
      href: '/services/full-app'
    }
  ]

  return (
    <section className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Choose Your Service Tier
        </h2>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Transparent pricing with clear deliverables and timelines
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={service.name}
            className={`border border-border rounded-xl p-8 hover:shadow-lg transition-shadow ${
              index === 1 ? 'ring-2 ring-accent relative' : ''
            }`}
          >
            {index === 1 && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <div className="text-3xl font-bold text-accent mb-2">{service.price}</div>
              <div className="text-foreground/70 mb-4">{service.delivery}</div>
              <p className="text-foreground/80">{service.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={service.href}
              className="block text-center bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}