import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Winstead IT Services</h3>
            <p className="text-sm text-muted-foreground">
              Professional IT services in hardware, software, and firmware solutions.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#hardware" className="text-sm text-muted-foreground hover:text-foreground">
                  Hardware Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="text-sm text-muted-foreground hover:text-foreground">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#firmware" className="text-sm text-muted-foreground hover:text-foreground">
                  Firmware Engineering
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: info@winsteadit.com</li>
              <li className="text-sm text-muted-foreground">Phone: +1 (555) 123-4567</li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Winstead IT Services Pvt. LTD. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
