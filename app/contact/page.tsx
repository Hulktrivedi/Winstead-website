"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get in touch with our team to discuss your IT needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-6">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Thank You!</h3>
                      <p className="text-center text-muted-foreground">
                        Your message has been received. We'll get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            placeholder="Your email"
                            required
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            value={formState.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          required
                          value={formState.message}
                          onChange={handleChange}
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-muted-foreground mt-2">
                  You can also reach us using the following contact information.
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@winsteadit.com</p>
                      <p className="text-sm text-muted-foreground">support@winsteadit.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 765-4321</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Business Avenue, Suite 456
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>We're available during the following hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm font-medium">Monday - Friday</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Saturday</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sunday</p>
                      <p className="text-sm text-muted-foreground">Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Location</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Visit our office to meet our team in person
              </p>
            </div>
          </div>
          <div className="mt-8 h-[400px] w-full overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder - Embed your Google Maps here</p>
          </div>
        </div>
      </section>
    </div>
  )
}
