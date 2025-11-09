
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Zap, DollarSign, Users, BarChart, Shield } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Fill Vacancies Faster",
    description: "Connect with a pool of over 10,000 pre-verified, high-intent renters and buyers actively searching each month."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Eliminate Fraud & Risk",
    description: "Our mandatory tenant verification process confirms identity and affordability, reducing your risk of rental debt and property damage."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Optimize Your Pricing",
    description: "Use our AI-powered rental valuation tool to price your property competitively based on real-time market data."
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "AI-Powered Listing Optimization",
    description: "Get AI-driven suggestions to improve your listing's title, description, and photos to attract more qualified leads."
  }
];

export default function ForLandlordsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute inset-0 z-0 opacity-10 blur-sm">
            <Image src="https://picsum.photos/seed/landlord-hero/1920/1080" alt="Modern apartment building" fill className="object-cover" data-ai-hint="modern building" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Landlords, Agents & Developers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            The Smartest Way to List & Manage Your Properties
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Access pre-verified tenants, optimize your rental income with AI, and fill vacancies faster than ever.
          </p>
          <div className="mt-10">
            <Button href="/landlords/new" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
              List Your Property for Free
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">Built for Property Professionals</h2>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Leverage our infrastructure to increase your returns and reduce your risk.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="bg-card/50 border-border/50 rounded-2xl p-8 flex items-start gap-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
                        <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-5xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-16">Listing Your Property is Easy</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold font-headline shadow-glow-primary mb-4">1</div>
                    <h3 className="text-2xl font-bold font-headline mb-2">Create Your Listing</h3>
                    <p className="text-muted-foreground">Provide property details and photos. Our AI helps you write a compelling description.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold font-headline shadow-glow-primary mb-4">2</div>
                    <h3 className="text-2xl font-bold font-headline mb-2">We Verify It</h3>
                    <p className="text-muted-foreground">Our team verifies your ownership and property details, adding a "Verified" badge to your listing.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold font-headline shadow-glow-primary mb-4">3</div>
                    <h3 className="text-2xl font-bold font-headline mb-2">Connect with Tenants</h3>
                    <p className="text-muted-foreground">Receive inquiries from pre-verified tenants and manage communication directly on our platform.</p>
                </div>
            </div>
             <div className="mt-16">
                <Button href="/landlords/new" size="lg" variant="secondary">
                    Get Started Now
                </Button>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 lg:pb-32">
        <div className="container max-w-4xl mx-auto text-center bg-card/50 border border-border/50 p-10 lg:p-20 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
            </div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">
                    Ready to Upgrade Your Listings?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Join hundreds of landlords and developers who are leasing smarter with Propabridge.
                </p>
                <Button href="/landlords/new" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    List Your Property
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
