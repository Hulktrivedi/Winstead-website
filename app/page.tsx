import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Server, Code, Cpu, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Professional IT Solutions for Your Business
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Winstead IT Services provides comprehensive hardware, software, and firmware solutions to help your
                business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="F:\winstead-site\public\images\hero\hero.png?height=400&width=600"
                alt="IT Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We offer a wide range of IT services to meet your business needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <Server className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Hardware Solutions</CardTitle>
                <CardDescription>Comprehensive hardware infrastructure setup, maintenance, and support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Network infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Server deployment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Hardware maintenance</span>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/services#hardware" className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Software Development</CardTitle>
                <CardDescription>Custom software solutions tailored to your business requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Custom applications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Web development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Mobile solutions</span>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/services#software" className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Cpu className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Firmware Engineering</CardTitle>
                <CardDescription>Specialized firmware development and optimization services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Embedded systems</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">IoT solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Firmware updates</span>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/services#firmware" className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:mr-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Why Choose Us"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Winstead IT</h2>
              <p className="text-muted-foreground">
                With years of experience in the IT industry, we provide reliable, efficient, and innovative solutions to
                businesses of all sizes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team consists of highly skilled professionals with expertise in various IT domains.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Customized Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      We tailor our services to meet your specific business requirements and goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Reliable Support</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide ongoing support to ensure your IT systems run smoothly and efficiently.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Contact us today to discuss how Winstead IT Services can help your business thrive.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
