import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCalendarUrl } from '@/lib/siteSettings'

// This would typically come from a CMS or database
const caseStudies = {
  'fintech-mvp-dashboard': {
    title: 'FinTech MVP Dashboard',
    clientName: 'TechStart Inc.',
    industry: 'Financial Services',
    projectType: 'Moderate Build',
    duration: '3 weeks',
    team: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'],
    
    context: {
      challenge: 'TechStart Inc. needed to build an investor-ready prototype for their FinTech platform within 3 weeks to secure Series A funding. They required a sophisticated dashboard that could demonstrate their core value proposition while handling real financial data securely.',
      goals: [
        'Create investor-ready prototype in under 3 weeks',
        'Demonstrate core platform functionality',
        'Handle sensitive financial data securely',
        'Support real-time data visualization',
        'Mobile-responsive design for demos'
      ]
    },

    approach: {
      strategy: 'We used a rapid prototyping approach focused on core user flows and data visualization. Our AI-first development process allowed us to generate boilerplate code quickly while focusing human expertise on complex financial calculations and security implementation.',
      stack: ['Next.js 13', 'TypeScript', 'PostgreSQL', 'Stripe API', 'Chart.js', 'Tailwind CSS', 'Vercel'],
      models: ['GPT-4 for code generation', 'Claude for documentation', 'Custom validation algorithms']
    },

    results: {
      beforeAfter: [
        {
          metric: 'Development Timeline',
          period: 'Project Duration',
          before: 'Estimated 12 weeks',
          after: '3 weeks delivered',
          improvement: '75% time reduction'
        },
        {
          metric: 'Investment Outcome', 
          period: 'Post-Launch',
          before: '$0 raised previously',
          after: '$2.5M Series A',
          improvement: 'Funding secured'
        },
        {
          metric: 'User Engagement',
          period: 'First Month',
          before: 'No user data',
          after: '89% daily retention',
          improvement: 'Industry-leading'
        },
        {
          metric: 'Demo Conversion',
          period: 'Investor Meetings',
          before: 'No functioning demo',
          after: '12/15 positive responses',
          improvement: '80% success rate'
        }
      ],
      timeline: [
        {
          week: 'Week 1',
          milestone: 'Architecture & Core Setup',
          deliverables: ['Database schema', 'Authentication system', 'Basic UI framework']
        },
        {
          week: 'Week 2', 
          milestone: 'Feature Implementation',
          deliverables: ['Dashboard views', 'Data visualization', 'API integrations']
        },
        {
          week: 'Week 3',
          milestone: 'Polish & Deploy',
          deliverables: ['Security hardening', 'Performance optimization', 'Production deployment']
        }
      ]
    },

    testimonial: {
      quote: "The SkyAero team delivered exactly what we needed in record time. Their AI-first approach didn't just save us weeks of development - it gave us a competitive edge in our funding round. The prototype was so polished that investors thought it was a fully built product.",
      author: 'Sarah Chen',
      role: 'CTO & Co-founder',
      company: 'TechStart Inc.'
    },

    images: [
      {
        src: '/case-studies/fintech-dashboard-overview.jpg',
        alt: 'FinTech dashboard overview showing main metrics',
        caption: 'Main dashboard with real-time financial metrics and trend analysis'
      },
      {
        src: '/case-studies/fintech-transaction-flow.jpg', 
        alt: 'Transaction flow interface',
        caption: 'Streamlined transaction processing with built-in validation'
      }
    ]
  },

  'ai-powered-ecommerce': {
    title: 'AI-Powered E-commerce Platform',
    clientName: 'RetailCorp',
    industry: 'E-commerce',
    projectType: 'Full App',
    duration: '2 weeks',
    team: ['Full-stack Developer', 'AI Engineer', 'UX Designer'],
    
    context: {
      challenge: 'RetailCorp\'s existing e-commerce platform had low conversion rates and poor user engagement. They needed AI-powered product recommendations and personalization features to compete with larger players, all within a tight 2-week timeline before their peak season.',
      goals: [
        'Implement AI product recommendations',
        'Increase conversion rates significantly', 
        'Improve average order value',
        'Enhance user experience with personalization',
        'Maintain existing customer data'
      ]
    },

    approach: {
      strategy: 'We focused on implementing AI recommendation algorithms using OpenAI\'s models combined with collaborative filtering. Our approach prioritized quick wins in personalization while building a foundation for more advanced features.',
      stack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Redis', 'Stripe', 'AWS'],
      models: ['OpenAI GPT-4 for product descriptions', 'Custom recommendation engine', 'Sentiment analysis for reviews']
    },

    results: {
      beforeAfter: [
        {
          metric: 'Conversion Rate',
          period: '30 days post-launch',
          before: '2.1%',
          after: '4.7%',
          improvement: '+123% increase'
        },
        {
          metric: 'Average Order Value',
          period: '30 days post-launch', 
          before: '$85',
          after: '$127',
          improvement: '+49% increase'
        },
        {
          metric: 'Customer Satisfaction',
          period: 'User surveys',
          before: '3.2/5 rating',
          after: '4.8/5 rating',
          improvement: '+50% improvement'
        },
        {
          metric: 'Page Load Time',
          period: 'Performance metrics',
          before: '3.2 seconds',
          after: '1.1 seconds', 
          improvement: '66% faster'
        }
      ],
      timeline: [
        {
          week: 'Week 1',
          milestone: 'AI Integration & Backend',
          deliverables: ['OpenAI API integration', 'Recommendation engine', 'Data migration']
        },
        {
          week: 'Week 2',
          milestone: 'Frontend & Optimization', 
          deliverables: ['Personalized UI components', 'Performance optimization', 'A/B testing setup']
        }
      ]
    },

    testimonial: {
      quote: "The results speak for themselves - our conversion rate more than doubled in just 2 weeks. The AI recommendations are incredibly accurate, and our customers are finding products they love. This has been a game-changer for our business.",
      author: 'Michael Rodriguez',
      role: 'Head of E-commerce',
      company: 'RetailCorp'
    },

    images: [
      {
        src: '/case-studies/ecommerce-recommendations.jpg',
        alt: 'AI-powered product recommendations',
        caption: 'Personalized product recommendations based on user behavior and preferences'
      },
      {
        src: '/case-studies/ecommerce-personalized-homepage.jpg',
        alt: 'Personalized homepage experience', 
        caption: 'Dynamic homepage that adapts to individual user preferences'
      }
    ]
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug as keyof typeof caseStudies]
  
  if (!study) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": study.title,
    "description": study.context.challenge,
    "author": {
      "@type": "Organization",
      "name": "SkyAero Studio",
      "url": "https://skyaero.studio"
    },
    "client": {
      "@type": "Organization", 
      "name": study.clientName,
      "industry": study.industry
    },
    "project": {
      "@type": "Service",
      "name": study.projectType,
      "provider": {
        "@type": "Organization",
        "name": "SkyAero Studio"
      }
    },
    "result": study.results.beforeAfter.map(metric => ({
      "@type": "QuantitativeValue",
      "name": metric.metric,
      "value": metric.after,
      "description": metric.improvement
    })),
    "testimonial": {
      "@type": "Review",
      "reviewBody": study.testimonial.quote,
      "author": {
        "@type": "Person",
        "name": study.testimonial.author,
        "jobTitle": study.testimonial.role,
        "worksFor": {
          "@type": "Organization",
          "name": study.testimonial.company
        }
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
    <div className="container py-16 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <Link 
          href="/case-studies"
          className="inline-flex items-center text-accent hover:underline mb-6"
        >
          ← Back to Case Studies
        </Link>
        
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
              {study.industry}
            </span>
            <span className="bg-muted px-3 py-1 rounded-full text-sm">
              {study.projectType}
            </span>
            <span className="text-foreground/60 text-sm">
              {study.duration}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-foreground/80">Client: {study.clientName}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-muted rounded-xl">
          {study.results.beforeAfter.slice(0, 4).map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{metric.after}</div>
              <div className="text-sm text-foreground/60">{metric.metric}</div>
              <div className="text-xs text-foreground/50 mt-1">{metric.improvement}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Context */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/80 text-lg leading-relaxed mb-6">
            {study.context.challenge}
          </p>
          <h3 className="text-xl font-semibold mb-4">Project Goals</h3>
          <ul className="space-y-2">
            {study.context.goals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-foreground/80">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Strategy</h3>
            <p className="text-foreground/80 mb-6">{study.approach.strategy}</p>
            
            <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {study.approach.stack.map((tech) => (
                <span key={tech} className="bg-muted px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">AI Models & Tools</h3>
            <ul className="space-y-2">
              {study.approach.models.map((model, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground/80">{model}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Before vs After</h3>
          <div className="space-y-4">
            {study.results.beforeAfter.map((metric, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{metric.metric}</h4>
                    <p className="text-sm text-foreground/60">{metric.period}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-sm text-foreground/60">Before: {metric.before}</div>
                    <div className="text-lg font-bold text-accent">After: {metric.after}</div>
                    <div className="text-sm text-green-600">{metric.improvement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Project Timeline</h3>
          <div className="space-y-6">
            {study.results.timeline.map((phase, index) => (
              <div key={index} className="border-l-4 border-accent pl-6">
                <h4 className="font-semibold text-lg mb-2">{phase.week}: {phase.milestone}</h4>
                <ul className="space-y-1">
                  {phase.deliverables.map((deliverable, dIndex) => (
                    <li key={dIndex} className="text-foreground/80">• {deliverable}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-16">
        <div className="bg-muted p-8 rounded-xl">
          <blockquote className="text-xl italic text-foreground/90 mb-6">
            &ldquo;{study.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center">
            <div>
              <div className="font-semibold">{study.testimonial.author}</div>
              <div className="text-foreground/70">{study.testimonial.role}</div>
              <div className="text-foreground/70">{study.testimonial.company}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-accent/5 border border-accent/20 p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create a customized solution that delivers 
          measurable business impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getCalendarUrl('case_study')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </a>
          <Link
            href="/services"
            className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted transition-colors"
          >
            View Service Tiers
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}

// Generate static paths for known case studies
export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug: slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies[params.slug as keyof typeof caseStudies]
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: `${study.title} - Case Study | SkyAero Studio`,
    description: study.context.challenge.slice(0, 160),
    openGraph: {
      title: study.title,
      description: study.context.challenge.slice(0, 160),
      type: 'article',
      authors: ['SkyAero Studio'],
      tags: [study.industry, study.projectType, 'AI Development', 'Case Study']
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.context.challenge.slice(0, 160)
    }
  }
}