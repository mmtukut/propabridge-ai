import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bot, ShieldCheck, Database, Search, MessageSquare, Key, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const steps = {
  renters: [
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: '1. Describe Your Need',
      description: "Use our AI search to tell us exactly what you're looking for in your own words. e.g., 'a 2-bedroom flat near VI with good power supply'."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: '2. Browse Verified Listings',
      description: 'Our AI presents you with a curated list of properties that have passed our rigorous 4-stage verification process. No fakes, no duplicates.'
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: '3. Connect & Secure',
      description: 'Message verified landlords directly, schedule viewings, and secure your new home with confidence, all on one platform.'
    }
  ],
  landlords: [
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: '1. Submit Your Property',
      description: 'Provide your property details through our easy-to-use listing form. Our AI will help optimize your description.'
    },
    {
      icon: <Bot className="w-10 h-10 text-primary" />,
      title: '2. We Verify Your Listing',
      description: 'Our team uses AI and physical checks to verify your identity, ownership documents, and the property itself, adding a "Verified" badge.'
    },
    {
      icon: <Key className="w-10 h-10 text-primary" />,
      title: '3. Connect with Tenants',
      description: 'Receive inquiries from a pool of pre-vetted, high-intent renters. Manage communications and fill vacancies faster.'
    }
  ]
};

export default function HowItWorksPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            From Search to Keys in 3 Simple Steps
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We've redesigned the entire property experience around trust, transparency, and technology.
          </p>
        </div>
      </section>

      {/* For Renters */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">For Renters & Buyers</h2>
            <p className="mt-4 text-xl text-muted-foreground">Find your next home with confidence and ease.</p>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {steps.renters.map((step) => (
                <Card key={step.title} className="bg-card/50 border-border/50 rounded-2xl p-8 text-center backdrop-blur-sm">
                  <div className="flex justify-center mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold font-headline mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-1/2 z-0">
                <div className="absolute top-1/2 left-1/3 w-px h-10 bg-border/50 -translate-y-1/2" />
                <div className="absolute top-1/2 left-2/3 w-px h-10 bg-border/50 -translate-y-1/2" />
            </div>
          </div>
          <div className="text-center mt-12">
            <Button href="/search" size="lg" rounded="full" className="shadow-glow-primary">Start Your Search</Button>
          </div>
        </div>
      </section>
      
      {/* For Landlords */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">For Landlords & Agents</h2>
            <p className="mt-4 text-xl text-muted-foreground">Access verified tenants and fill vacancies faster.</p>
          </div>
           <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {steps.landlords.map((step) => (
                <Card key={step.title} className="bg-card/50 border-border/50 rounded-2xl p-8 text-center backdrop-blur-sm">
                  <div className="flex justify-center mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold font-headline mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-1/2 z-0">
                <div className="absolute top-1/2 left-1/3 w-px h-10 bg-border/50 -translate-y-1/2" />
                <div className="absolute top-1/2 left-2/3 w-px h-10 bg-border/50 -translate-y-1/2" />
            </div>
          </div>
          <div className="text-center mt-12">
            <Button href="/landlords/new" size="lg" rounded="full" className="shadow-glow-primary">List Your Property</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
