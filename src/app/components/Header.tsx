'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/skyaero-logo.png"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">SkyAero Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Book Intro Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Intro Call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}