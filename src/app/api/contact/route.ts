import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
// import { Ratelimit } from "@upstash/ratelimit"
// import { Redis } from "@upstash/redis"

// Rate limiting - would need Upstash Redis in production
// For now, using in-memory tracking
const submissions = new Map<string, { count: number; lastReset: number }>()

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  projectType: z.enum(['Simple Prototype', 'Moderate Build', 'Full App', 'Not Sure / Consultation Needed']),
  budgetBand: z.enum(['Under $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+', 'Let\'s discuss']),
  timeline: z.enum(['ASAP (Rush job)', '1-2 weeks', '2-4 weeks', '1-3 months', 'Flexible']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  // Honeypot field - should be empty
  website: z.string().max(0, 'Spam detected').optional()
})

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const hourInMs = 60 * 60 * 1000
  const maxSubmissions = 3

  const userSubmissions = submissions.get(ip)
  
  if (!userSubmissions) {
    submissions.set(ip, { count: 1, lastReset: now })
    return true
  }

  // Reset counter if an hour has passed
  if (now - userSubmissions.lastReset > hourInMs) {
    submissions.set(ip, { count: 1, lastReset: now })
    return true
  }

  if (userSubmissions.count >= maxSubmissions) {
    return false
  }

  userSubmissions.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactSchema.parse(body)

    // Check honeypot
    if (validatedData.website) {
      console.log('Spam attempt detected from IP:', ip)
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM
    // 4. Send auto-reply email

    console.log('Contact form submission:', {
      ...validatedData,
      ip,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We\'ll be in touch within 24 hours.'
    })

  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}