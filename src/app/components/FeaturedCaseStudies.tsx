import Link from 'next/link'

export function FeaturedCaseStudies() {
  const caseStudies = [
    {
      title: 'FinTech MVP Dashboard',
      client: 'TechStart Inc.',
      industry: 'Financial Services',
      challenge: 'Build investor-ready prototype in 3 weeks',
      results: [
        { metric: 'Development Time', before: '12 weeks', after: '3 weeks' },
        { metric: 'User Engagement', before: 'N/A', after: '89% retention' },
        { metric: 'Investment Raised', before: '$0', after: '$2.5M' }
      ],
      technologies: ['Next.js', 'TypeScript', 'Stripe API', 'PostgreSQL'],
      slug: 'fintech-mvp-dashboard'
    },
    {
      title: 'AI-Powered E-commerce',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Integrate AI recommendations in 2 weeks',
      results: [
        { metric: 'Conversion Rate', before: '2.1%', after: '4.7%' },
        { metric: 'Average Order Value', before: '$85', after: '$127' },
        { metric: 'Customer Satisfaction', before: '3.2/5', after: '4.8/5' }
      ],
      technologies: ['React', 'OpenAI API', 'MongoDB', 'Vercel'],
      slug: 'ai-powered-ecommerce'
    }
  ]

  return (
    <section className="bg-background">
      <div className="container px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Proven Case Studies
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Real results from real clients with measurable outcomes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {caseStudies.map((study) => (
          <div key={study.slug} className="border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 hover:scale-105">
            <div className="p-8">
              <div className="mb-6">
                <div className="text-sm text-accent font-medium mb-2">{study.industry}</div>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-foreground/80 mb-4">{study.challenge}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="bg-muted px-3 py-1 rounded-full text-sm text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg">Key Results:</h4>
                {study.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-sm text-foreground/60">Before: {result.before}</div>
                      <div className="text-accent font-bold">After: {result.after}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={`/case-studies/${study.slug}`}
                className="inline-flex items-center text-accent font-semibold hover:underline"
              >
                Read Full Case Study
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/case-studies"
          className="inline-flex items-center border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
        >
          View All Case Studies
        </Link>
      </div>
      </div>
    </section>
  )
}