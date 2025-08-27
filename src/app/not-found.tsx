import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl font-bold text-accent mb-8">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-foreground/80 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved or doesn&apos;t exist.
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-4">Popular Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <Link href="/services" className="text-accent hover:underline">
                → Service Tiers
              </Link>
              <Link href="/case-studies" className="text-accent hover:underline">
                → Case Studies  
              </Link>
              <Link href="/about" className="text-accent hover:underline">
                → About Us
              </Link>
              <Link href="/contact" className="text-accent hover:underline">
                → Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}