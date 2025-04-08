import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Winstead IT Services
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Learn about our journey, mission, and the team behind our success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                Winstead IT Services was founded with a vision to provide comprehensive IT solutions that empower
                businesses to achieve their goals through technology. What started as a small team of passionate IT
                professionals has grown into a full-service IT company serving clients across various industries.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have built a reputation for delivering high-quality, reliable, and innovative IT
                solutions. Our commitment to excellence and customer satisfaction has been the cornerstone of our
                success.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:mr-auto order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission & Values</h2>
              <p className="text-muted-foreground">
                Our mission is to provide innovative and reliable IT solutions that help businesses optimize their
                operations, enhance productivity, and achieve sustainable growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      We strive for excellence in everything we do, from the solutions we develop to the service we
                      provide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      We embrace innovation and continuously explore new technologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Integrity</h3>
                    <p className="text-sm text-muted-foreground">
                      We conduct our business with the highest level of integrity, transparency, and ethical standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Customer Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      We prioritize our customers' needs and are committed to their success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our team of experienced professionals is dedicated to delivering exceptional IT solutions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">John Smith</h3>
                <p className="text-sm text-muted-foreground mb-2">CEO & Founder</p>
                <p className="text-sm text-muted-foreground">
                  With over 15 years of experience in IT, John leads our team with vision and expertise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-2">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Sarah oversees our technical operations and ensures we deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground mb-2">Lead Software Engineer</p>
                <p className="text-sm text-muted-foreground">
                  Michael leads our software development team with innovation and technical excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Work With Us?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Contact us today to discuss how our team can help your business succeed with the right IT solutions.
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
