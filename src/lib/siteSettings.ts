// Site-wide configuration settings
// In production, this would come from a CMS or environment variables

export const siteSettings = {
  company: {
    name: "SkyAero Studio",
    tagline: "AI-first studio that ships investor-ready prototypes in 2-4 weeks",
    email: "hello@skyaero.studio",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Innovation Drive",
      city: "San Francisco",
      state: "CA",
      zip: "94105"
    }
  },
  
  contact: {
    // Calendar booking URL - replace with actual Calendly/Cal.com URL
    calendarUrl: "https://calendly.com/skyaero-studio/30min",
    whatsappNumber: "628170091449", // Include country code, no + or spaces
    whatsappMessage: encodeURIComponent("Hi! I'm interested in learning more about your AI development services."),
    
    // Social links
    social: {
      linkedin: "https://linkedin.com/company/skyaero-studio",
      twitter: "https://twitter.com/skyaerostudio",
      github: "https://github.com/skyaero-studio"
    }
  },

  business: {
    hours: "Monday - Friday, 9 AM - 6 PM PST",
    timezone: "America/Los_Angeles",
    responseTime: "4 hours during business days"
  },

  seo: {
    siteName: "SkyAero Studio",
    siteUrl: "https://skyaero.studio",
    defaultDescription: "AI-first development studio that ships investor-ready prototypes in 2-4 weeks. Specializing in rapid MVP development with cutting-edge AI tools.",
    twitterHandle: "@skyaerostudio",
    
    // Structured data
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SkyAero Studio",
      "url": "https://skyaero.studio",
      "logo": "https://skyaero.studio/logo.png",
      "description": "AI-first development studio specializing in rapid prototype development",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Innovation Drive",
        "addressLocality": "San Francisco",
        "addressRegion": "CA", 
        "postalCode": "94105",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "hello@skyaero.studio"
      },
      "sameAs": [
        "https://linkedin.com/company/skyaero-studio",
        "https://twitter.com/skyaerostudio"
      ]
    }
  }
}

// Helper functions
export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || siteSettings.contact.whatsappMessage
  return `https://wa.me/${siteSettings.contact.whatsappNumber}?text=${message}`
}

export const getCalendarUrl = (utm_source?: string) => {
  const baseUrl = siteSettings.contact.calendarUrl
  if (utm_source) {
    const separator = baseUrl.includes('?') ? '&' : '?'
    return `${baseUrl}${separator}utm_source=${utm_source}&utm_medium=website`
  }
  return baseUrl
}