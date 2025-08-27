import Link from 'next/link'
import { getCalendarUrl } from '@/lib/siteSettings'

export function HeroSection() {
  return (
    <section className="container pt-20 pb-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          AI Prototypes in{' '}
          <span className="text-accent">2-4 Weeks</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          AI-first studio that ships investor-ready prototypes. 
          Transparent tiers, clear SLAs, proven case studies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={getCalendarUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Book Intro Call
          </a>
          <Link
            href="/services"
            className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted transition-colors"
          >
            View Services
          </Link>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">2-4</div>
            <div className="text-foreground/70">Weeks Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-foreground/70">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-foreground/70">Successful Launches</div>
          </div>
        </div>
      </div>
    </section>
  )
}