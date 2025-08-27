import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="bg-muted border-t border-border mt-20 pt-4">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/skyaero-logo.png"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-xl">SkyAero Studio</span>
            </Link>
            <p className="text-foreground/70 max-w-md mb-6">
              AI-first studio that ships investor-ready prototypes in 2-4 weeks. 
              Transparent tiers, clear SLAs, proven case studies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@skyaero.studio" 
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="Email"
              >
                Email
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-2 pb-2 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            © {currentYear} SkyAero Studio. All rights reserved.
          </p>
          <p className="text-foreground/70 text-sm mt-2 md:mt-0">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}