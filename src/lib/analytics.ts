// Analytics configuration and event tracking
// Using Plausible for privacy-friendly analytics as mentioned in design principles

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string | number> }) => void;
  }
}

export type AnalyticsEvent = 
  | 'cta_click'
  | 'form_submit'
  | 'calendar_book'
  | 'whatsapp_click'
  | 'service_view'
  | 'case_study_view'
  | 'contact_form_start'
  | 'contact_form_complete'
  | 'estimate_request'

interface EventProperties {
  source?: string
  service_tier?: string
  case_study?: string
  error_type?: string
  form_field?: string
  [key: string]: string | number | undefined
}

// Analytics configuration
export const analyticsConfig = {
  enabled: process.env.NODE_ENV === 'production',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000',
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'skyaero.studio'
}

// Track custom events
export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  if (!analyticsConfig.enabled) {
    console.log(`[Analytics] ${event}`, properties)
    return
  }

  try {
    // Plausible analytics
    if (typeof window !== 'undefined' && window.plausible) {
      // Filter out undefined values for Plausible
      const filteredProps = properties ? 
        Object.fromEntries(
          Object.entries(properties).filter(([_, value]) => value !== undefined)
        ) as Record<string, string | number> : {}
      
      window.plausible(event, { props: filteredProps })
    }

    // Could also add GA4 here if needed
    // gtag('event', event, properties)
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

// Conversion funnel tracking
export const funnelEvents = {
  // Top of funnel
  landingPageView: (source?: string) => trackEvent('cta_click', { source: source || 'organic' }),
  
  // Interest signals
  serviceView: (tier: string) => trackEvent('service_view', { service_tier: tier }),
  caseStudyView: (study: string) => trackEvent('case_study_view', { case_study: study }),
  
  // Intent signals  
  contactFormStart: (source?: string) => trackEvent('contact_form_start', { source }),
  calendarClick: (source?: string) => trackEvent('calendar_book', { source }),
  whatsappClick: (source?: string) => trackEvent('whatsapp_click', { source }),
  
  // Conversion
  contactFormComplete: (projectType?: string, budget?: string) => 
    trackEvent('contact_form_complete', { 
      project_type: projectType, 
      budget_range: budget 
    }),
  estimateRequest: (projectType?: string) => 
    trackEvent('estimate_request', { project_type: projectType }),
  
  // Engagement
  ctaClick: (source: string, action: string) => 
    trackEvent('cta_click', { source, action })
}

// Error tracking
export function trackError(error: Error, context?: string) {
  if (!analyticsConfig.enabled) {
    console.error('[Analytics] Error:', error, context)
    return
  }

  trackEvent('cta_click', {
    error_type: error.name,
    error_message: error.message.slice(0, 100), // Limit length
    context: context || 'unknown'
  })
}

// Page view tracking (handled automatically by Plausible script)
export function trackPageView(path?: string) {
  if (!analyticsConfig.enabled || typeof window === 'undefined') return
  
  // Plausible handles this automatically, but we can add custom logic here
  console.log(`[Analytics] Page view: ${path || window.location.pathname}`)
}