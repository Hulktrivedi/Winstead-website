import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Server, Code, Cpu } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive IT solutions tailored to meet your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Solutions */}
      <section id="hardware" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <Server className="h-4 w-4 inline mr-2" />
                Hardware
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Hardware Solutions</h2>
              <p className="text-muted-foreground">
                Our hardware solutions are designed to provide your business with reliable, scalable, and efficient IT
                infrastructure. We offer comprehensive hardware services from planning and procurement to installation
                and maintenance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Network Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">
                      Design, implementation, and maintenance of secure and reliable network systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Server Deployment</h3>
                    <p className="text-sm text-muted-foreground">
                      Setup and configuration of servers optimized for your business requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hardware Maintenance</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular maintenance and troubleshooting to ensure optimal performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">IT Infrastructure Audit</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive assessment of your current hardware infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hardware Solutions"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section id="software" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:mr-auto order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Software Development"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                <Code className="h-4 w-4 inline mr-2" />
                Software
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Software Development</h2>
              <p className="text-muted-foreground">
                Our software development services deliver custom solutions tailored to your specific business needs,
                helping you streamline operations and enhance productivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Custom Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Development of bespoke applications designed specifically for your business requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Web Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Creation of responsive, user-friendly websites and web applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Mobile Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Development of mobile applications for iOS and Android platforms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Software Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration of different software systems to enhance workflow efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firmware Engineering */}
      <section id="firmware" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <Cpu className="h-4 w-4 inline mr-2" />
                Firmware
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Firmware Engineering</h2>
              <p className="text-muted-foreground">
                Our firmware engineering services focus on developing and optimizing low-level software that controls
                hardware devices, ensuring optimal performance and reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Embedded Systems</h3>
                    <p className="text-sm text-muted-foreground">
                      Development of firmware for embedded systems and microcontrollers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">IoT Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Creation of firmware for Internet of Things (IoT) devices and applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Firmware Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Development and deployment of firmware updates to enhance functionality and security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hardware-Software Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration of firmware with hardware components and software systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Firmware Engineering"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Service Process</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We follow a structured approach to ensure we deliver high-quality solutions that meet your needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>1. Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We begin with a thorough consultation to understand your business needs and requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>2. Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We develop a detailed plan outlining the scope, timeline, and resources required for your project.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>3. Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our team executes the plan, developing and implementing the solution according to your specifications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>4. Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide ongoing support and maintenance to ensure your solution continues to perform optimally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Contact us today to discuss your IT needs and how we can help your business succeed.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
