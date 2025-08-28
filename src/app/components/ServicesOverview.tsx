import Link from 'next/link'

export function ServicesOverview() {
  const services = [
    {
      name: 'Simple Prototype',
      price: 'Rp 34.9M – 44.9M',
      originalPrice: 'from $3,500',
      delivery: '1-2 weeks',
      description: 'Perfect to validate fast. Auth, CRUD, clean UI, deployed in ≤2 weeks.',
      features: ['Landing/MVP with auth', 'CRUD operations', 'Basic DB integration', 'Hosted deployment'],
      team: '1 FE, 0.5 BE, PM',
      href: '/services/simple-prototype'
    },
    {
      name: 'Moderate Build',
      price: 'Rp 79.9M – 119.9M',
      originalPrice: 'from $8,500',
      delivery: '2-3 weeks',
      description: 'Investor-ready app with dashboard, integrations, and handover docs.',
      features: ['Full-stack app + auth', 'Database + admin panel', 'Third-party integrations', 'Complete documentation'],
      team: '1 FE, 1 BE, PM',
      href: '/services/moderate-build'
    },
    {
      name: 'Full App',
      price: 'Rp 199.9M+',
      originalPrice: 'from $18,500',
      delivery: '3-6 weeks',
      description: 'Production-grade build with test suite, CI/CD, and scaling plan.',
      features: ['Advanced features', 'AI integration', 'CI/CD pipeline', 'Test suite', 'DevOps + monitoring', 'Scaling architecture'],
      team: '2-3 devs, PM',
      href: '/services/full-app'
    }
  ]

  return (
    <section className="bg-background">
      <div className="container px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Choose Your Service Tier
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Transparent pricing with clear deliverables and timelines
        </p>
      </div>

      {/* Founders' Launch Banner */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-12 text-center">
        <div className="text-sm font-semibold text-accent mb-1">🚀 FOUNDERS' LAUNCH</div>
        <div className="text-foreground/80">
          Save 10-15% on your first project • Limited to 3 clients per quarter
        </div>
        <div className="text-xs text-foreground/60 mt-1">
          Prices shown reflect launch discount
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div 
            key={service.name}
            className={`border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 ${
              index === 1 ? 'ring-2 ring-accent relative scale-105 md:scale-100 lg:scale-105' : 'hover:scale-105'
            }`}
          >
            {index === 1 && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <div className="text-3xl font-bold text-accent mb-1">{service.price}</div>
              <div className="text-sm text-foreground/50 line-through mb-2">{service.originalPrice}</div>
              <div className="text-foreground/70 mb-2">{service.delivery}</div>
              <div className="text-sm text-foreground/60 mb-3">{service.team}</div>
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
      </div>
    </section>
  )
}