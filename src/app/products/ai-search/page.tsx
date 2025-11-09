import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Cpu, Database, Layers, Lock, Shield, Sparkles, Star, TrendingUp, Zap } from 'lucide-react';

export default function AISearchProductPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Renters & Buyers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Propabridge AI Search
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find verified properties in 30 seconds using natural language. No agents. No fraud. No stress.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/search" size="xl" rounded="full" className="shadow-glow-primary hover:shadow-glow-intense">
              Try AI Search Now
            </Button>
            <Button variant="secondary" size="xl" rounded="full">
              Watch Demo (2 min)
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Card className="bg-destructive/5 border-destructive/20 p-8 rounded-2xl">
              <h3 className="text-3xl font-headline font-bold text-destructive/80 mb-6">The Old Way</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><span className="text-destructive/80 mt-1">❌</span><span>6-8 weeks searching manually</span></li>
                <li className="flex items-start gap-3"><span className="text-destructive/80 mt-1">❌</span><span>78% encounter fake listings</span></li>
                <li className="flex items-start gap-3"><span className="text-destructive/80 mt-1">❌</span><span>₦50K-100K in agent fees</span></li>
                <li className="flex items-start gap-3"><span className="text-destructive/80 mt-1">❌</span><span>Endless phone calls and stressful viewings</span></li>
              </ul>
            </Card>
            <Card className="bg-primary/5 border-primary/20 p-8 rounded-2xl">
              <h3 className="text-3xl font-headline font-bold text-primary mb-6">With Propabridge AI</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span>30-second AI-powered search</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span>100% verified listings only</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span>Zero agent fees, direct landlord contact</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span>Virtual tours & instant messaging</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32">
        <div className="container max-w-4xl mx-auto text-center bg-card/50 border border-border/50 p-10 lg:p-20 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
            </div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">
                    Ready to Experience AI-Powered Property Search?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Join thousands of Nigerians who found their homes in minutes, not weeks.
                </p>
                <Button href="/search" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    Start Searching Now
                </Button>
                <p className="mt-6 text-sm text-muted-foreground">
                    ✓ No credit card required  •  ✓ 100% free to browse
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}
