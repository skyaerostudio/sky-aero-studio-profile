import Link from 'next/link'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'fintech-mvp-dashboard',
      title: 'FinTech MVP Dashboard',
      clientName: 'TechStart Inc.',
      industry: 'Financial Services',
      summary: 'Built investor-ready prototype in 3 weeks that helped secure $2.5M in funding',
      keyMetrics: [
        { label: 'Development Time', value: '3 weeks', improvement: '75% faster' },
        { label: 'Investment Raised', value: '$2.5M', improvement: 'vs $0 before' },
        { label: 'User Retention', value: '89%', improvement: 'industry-leading' }
      ],
      technologies: ['Next.js', 'TypeScript', 'Stripe API', 'PostgreSQL', 'Tailwind CSS'],
      featured: true
    },
    {
      slug: 'ai-powered-ecommerce',
      title: 'AI-Powered E-commerce Platform',
      clientName: 'RetailCorp',
      industry: 'E-commerce',
      summary: 'Integrated AI recommendations that doubled conversion rates in 2 weeks',
      keyMetrics: [
        { label: 'Conversion Rate', value: '4.7%', improvement: '+123% increase' },
        { label: 'Average Order Value', value: '$127', improvement: '+49% increase' },
        { label: 'Customer Satisfaction', value: '4.8/5', improvement: '+50% improvement' }
      ],
      technologies: ['React', 'OpenAI API', 'MongoDB', 'Node.js', 'Vercel'],
      featured: true
    },
    {
      slug: 'saas-analytics-dashboard',
      title: 'SaaS Analytics Dashboard',
      clientName: 'DataFlow Analytics',
      industry: 'SaaS',
      summary: 'Real-time dashboard that increased user engagement by 200%',
      keyMetrics: [
        { label: 'User Engagement', value: '200%', improvement: 'increase' },
        { label: 'Data Processing', value: '1M+', improvement: 'records/hour' },
        { label: 'Load Time', value: '<500ms', improvement: '80% faster' }
      ],
      technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Redis', 'AWS'],
      featured: false
    },
    {
      slug: 'healthcare-patient-portal',
      title: 'Healthcare Patient Portal',
      clientName: 'MedTech Solutions',
      industry: 'Healthcare',
      summary: 'HIPAA-compliant portal that streamlined patient communications',
      keyMetrics: [
        { label: 'Patient Satisfaction', value: '96%', improvement: '+40% increase' },
        { label: 'Admin Time Saved', value: '15hrs/week', improvement: 'per staff member' },
        { label: 'Appointment No-shows', value: '-45%', improvement: 'reduction' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS HIPAA'],
      featured: false
    }
  ]

  const industries = ['All', 'Financial Services', 'E-commerce', 'SaaS', 'Healthcare']

  return (
    <div className="container py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Case Studies
        </h1>
        <p className="text-xl text-foreground/80">
          Real projects, real results. See how we&apos;ve helped businesses ship faster 
          and achieve their goals with AI-first development.
        </p>
      </div>

      {/* Filter Tabs (for future implementation) */}
      <div className="flex flex-wrap justify-center gap-4">
        {industries.map((industry) => (
          <button
            key={industry}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              industry === 'All' 
                ? 'bg-accent text-accent-foreground' 
                : 'border border-border hover:bg-muted'
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <div key={study.slug} className="border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  {study.featured && (
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                <p className="text-foreground/60 text-sm mb-3">Client: {study.clientName}</p>
                <p className="text-foreground/80">{study.summary}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">Key Results</h3>
                <div className="space-y-3">
                  {study.keyMetrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium text-sm">{metric.label}</span>
                      <div className="text-right">
                        <div className="font-bold text-accent">{metric.value}</div>
                        <div className="text-xs text-foreground/60">{metric.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="bg-muted px-3 py-1 rounded-full text-sm text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/case-studies/${study.slug}`}
                className="inline-flex items-center text-accent font-semibold hover:underline group"
              >
                Read Full Case Study
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-muted p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to become our next success story?</h2>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your project and create a case study that showcases 
          measurable results and business impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
          <Link
            href="/services"
            className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background transition-colors"
          >
            View Service Tiers
          </Link>
        </div>
      </div>
    </div>
  )
}