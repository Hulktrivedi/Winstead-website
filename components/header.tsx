"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Winstead IT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="/contact" onClick={toggleMenu}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
