import Link from 'next/link'
import { getCalendarUrl } from '@/lib/siteSettings'

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="container px-4 pt-20 pb-16">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
          AI Prototypes in{' '}
          <span className="text-accent">2-4 Weeks</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          AI-first studio that ships investor-ready prototypes. 
          Transparent tiers, clear SLAs, proven case studies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href={getCalendarUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Book Intro Call
          </a>
          <Link
            href="/services"
            className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted hover:border-accent/50 transition-all duration-200"
          >
            View Services
          </Link>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2-4</div>
            <div className="text-foreground/70 text-sm md:text-base">Weeks Delivery</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-foreground/70 text-sm md:text-base">On-Time Delivery</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-foreground/70 text-sm md:text-base">Successful Launches</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}