
'use client';

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { cn } from '@/lib/utils';

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Invalid email address."),
  inquiryType: z.string({ required_error: "Please select an inquiry type." }),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
  }

  return (
    <div className="bg-background text-foreground">
       {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're an enterprise client, a developer, or have a general inquiry, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-7xl">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
                <div className="md:col-span-3">
                    <Card className={cn("bg-card/50 border-border/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500", isSubmitted && "min-h-[600px]")}>
                        {!isSubmitted ? (
                          <>
                            <h2 className="text-3xl font-bold font-headline mb-8">Send us a Message</h2>
                             <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                  control={form.control}
                                  name="fullName"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Full Name</FormLabel>
                                      <FormControl>
                                        <Input placeholder="John Doe" {...field} className="bg-secondary/50 rounded-lg h-12" />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                 <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Email Address</FormLabel>
                                      <FormControl>
                                        <Input placeholder="john.doe@example.com" {...field} className="bg-secondary/50 rounded-lg h-12"/>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                 <FormField
                                    control={form.control}
                                    name="inquiryType"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Inquiry Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger className="bg-secondary/50 rounded-lg h-12">
                                                <SelectValue placeholder="Select a reason for contacting us" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="enterprise">Enterprise & Government Solutions</SelectItem>
                                                <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                                                <SelectItem value="support">Support</SelectItem>
                                                <SelectItem value="press">Press & Media</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                <FormField
                                  control={form.control}
                                  name="message"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Message</FormLabel>
                                      <FormControl>
                                        <Textarea
                                          placeholder="Tell us a little more about how we can help..."
                                          className="resize-none bg-secondary/50 rounded-lg min-h-[150px]"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <Button type="submit" size="lg" className="w-full shadow-glow-primary hover:shadow-glow-intense">Submit Inquiry</Button>
                              </form>
                            </Form>
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-center py-20">
                              <CheckCircle className="w-24 h-24 text-primary mb-6" />
                              <h2 className="text-3xl font-bold font-headline mb-4">Thank You!</h2>
                              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                                Your message has been sent. Our team will review it and get back to you within 24-48 hours.
                              </p>
                          </div>
                        )}
                    </Card>
                </div>
                <div className="md:col-span-2 space-y-8">
                    <Card className="bg-card/50 border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold font-headline mb-6">Contact Information</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <p className="font-semibold text-foreground">General Inquiries</p>
                                    <a href="mailto:hello@propabridge.ng" className="hover:text-primary">hello@propabridge.ng</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <p className="font-semibold text-foreground">Enterprise Sales</p>
                                    <a href="mailto:sales@propabridge.ng" className="hover:text-primary">sales@propabridge.ng</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <p className="font-semibold text-foreground">Phone</p>
                                    <p>+234 (0) 812 345 6789</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <p className="font-semibold text-foreground">Office</p>
                                    <p>123 Tech Avenue, Victoria Island, Lagos, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                     <Card className="bg-card/50 border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold font-headline mb-6">Connect with Us</h3>
                         <div className="flex space-x-4">
                            <Button variant="secondary" size="icon" asChild><a href="#"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor"/></svg></a></Button>
                         </div>
                    </Card>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
