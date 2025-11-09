
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Shield, Search, MessageSquare, Home, Zap, Star, Sparkles } from 'lucide-react';

const benefits = [
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "AI-Powered Search",
        description: "Describe your perfect home in plain English. Our AI understands context like 'quiet neighborhood' or 'close to work' to find your ideal match in seconds."
    },
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: "100% Verified Listings",
        description: "Every property is physically inspected and verified for ownership and authenticity. Say goodbye to fake listings and fraud."
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "Direct Landlord Contact",
        description: "No middlemen, no agent fees. Communicate directly with verified landlords to ask questions and schedule viewings."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Find a Home in 48 Hours",
        description: "Our efficient process helps renters find and secure a home in as little as two days, not weeks."
    }
];

export default function ForRentersPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Renters & Home Buyers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Find Your Perfect Home, Faster.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Use the power of AI to search verified properties, connect directly with landlords, and move in without the stress.
          </p>
          <div className="mt-10">
            <Button href="/search" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
              Start Your AI-Powered Search
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">The Propabridge Advantage</h2>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">We've rebuilt the property search experience around trust and technology.</p>
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

      {/* How it Works in 3 Steps */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-5xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-16">Your Journey in 3 Simple Steps</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold font-headline shadow-glow-primary mb-4">1</div>
                    <h3 className="text-2xl font-bold font-headline mb-2">Describe</h3>
                    <p className="text-muted-foreground">Use our AI search to describe exactly what you're looking for in your own words.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold font-headline shadow-glow-primary mb-4">2</div>
                    <h3 className="text-2xl font-bold font-headline mb-2">Connect</h3>
                    <p className="text-muted-foreground">Browse verified listings and connect directly with landlords to ask questions or book a viewing.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold font-headline shadow-glow-primary mb-4">3</div>
                    <h3 className="text-2xl font-bold font-headline mb-2">Secure</h3>
                    <p className="text-muted-foreground">Finalize your tenancy through our secure platform and move into your new home with confidence.</p>
                </div>
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
                    Ready to Find Your Dream Home?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Your next home is just a few clicks away. Start your fraud-free search today.
                </p>
                <Button href="/search" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    Find a Verified Property
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
