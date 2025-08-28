'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCalendarUrl, getWhatsAppUrl } from '@/lib/siteSettings'
import { funnelEvents } from '@/lib/analytics'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budgetBand: '',
    message: '',
    timeline: '',
    website: '' // Honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Track contact form start
  useEffect(() => {
    funnelEvents.contactFormStart('contact_page')
  }, [])

  const projectTypes = [
    'Simple Prototype',
    'Moderate Build', 
    'Full App',
    'Not Sure / Consultation Needed'
  ]

  const budgetBands = [
    'Under Rp 25M',
    'Rp 25M - 50M (Simple Prototype)',
    'Rp 50M - 150M (Moderate Build)',
    'Rp 150M+ (Full App)',
    'Let&apos;s discuss'
  ]

  const timelines = [
    'ASAP (Rush job)',
    '1-2 weeks',
    '2-4 weeks',
    '1-3 months',
    'Flexible'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.details) {
          // Handle validation errors
          const newErrors: Record<string, string> = {}
          data.details.forEach((detail: { field: string; message: string }) => {
            newErrors[detail.field] = detail.message
          })
          setErrors(newErrors)
        } else {
          // Handle general errors
          setErrors({ general: data.error || 'Something went wrong' })
        }
        return
      }

      // Track successful form completion
      funnelEvents.contactFormComplete(formData.projectType, formData.budgetBand)
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ general: 'Network error. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-foreground/80 mb-8">
            We&apos;ve received your project inquiry and will respond within 24 hours 
            with a detailed proposal and next steps.
          </p>
          <div className="space-y-4">
            <p className="text-foreground/70">
              <strong>What happens next:</strong>
            </p>
            <ul className="text-left space-y-2 text-foreground/80">
              <li>• We&apos;ll review your requirements within 4 hours</li>
              <li>• You&apos;ll receive a detailed proposal within 24 hours</li>
              <li>• We&apos;ll schedule a call to discuss your project</li>
            </ul>
          </div>
          <div className="mt-12">
            <Link
              href="/"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to turn your idea into reality? Tell us about your project 
            and we&apos;ll provide a detailed proposal within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {errors.general}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <div style={{ display: 'none' }}>
                <label htmlFor="website">Leave this field blank</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                      errors.name ? 'border-red-300' : 'border-border'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                      errors.email ? 'border-red-300' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budgetBand" className="block text-sm font-medium mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budgetBand"
                    name="budgetBand"
                    required
                    value={formData.budgetBand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgetBands.map((band) => (
                      <option key={band} value={band}>{band}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                  Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-vertical ${
                    errors.message ? 'border-red-300' : 'border-border'
                  }`}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-accent text-accent-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Details'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Quick Options */}
          <div className="space-y-8">
            <div className="border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Book a Call</h4>
                  <p className="text-foreground/70 text-sm mb-3">
                    Schedule a 30-minute consultation to discuss your project
                  </p>
                  <a
                    href={getCalendarUrl('contact_page')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => funnelEvents.calendarClick('contact_sidebar')}
                    className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Book Now
                  </a>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-medium mb-2">WhatsApp Chat</h4>
                  <p className="text-foreground/70 text-sm mb-3">
                    Quick questions? Message us directly
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => funnelEvents.whatsappClick('contact_sidebar')}
                    className="inline-block border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Chat Now
                  </a>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-medium mb-2">Email</h4>
                  <a
                    href="mailto:hello@skyaero.studio"
                    className="text-accent hover:underline"
                  >
                    hello@skyaero.studio
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">1</span>
                  <span>Response within 4 hours during business days</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">2</span>
                  <span>Detailed proposal with timeline and pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">3</span>
                  <span>Consultation call to refine requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">4</span>
                  <span>Project kickoff within 1-3 business days</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl">
              <h3 className="font-bold mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-foreground/80">
                The more details you provide about your project goals, target users, 
                and technical requirements, the more accurate our initial proposal will be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}