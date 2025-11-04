'use client';

import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export const Hero = () => {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
        {heroImage && (
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover opacity-10 blur-sm"
                    data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 bg-background/50" />
            </div>
        )}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
        </div>
        <div className="container max-w-7xl text-center relative z-10">
            <h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              style={{ textShadow: '0 0 25px hsl(var(--primary) / 0.5), 0 0 10px hsl(var(--primary) / 0.3)' }}
            >
                Building Nigeria's Infrastructure for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300"
                style={{ textShadow: '0 2px 4px hsl(var(--primary) / 0.5)' }}>
                    Trust in Property
                </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                A deep-tech firm powering real estate with AI-native verification, fraud prevention, and market intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button href="/search" size="xl" rounded="full">
                    <Search className="w-5 h-5 mr-2" />
                    Find a Verified Property
                </Button>
                <Button href="/landlords" variant="ghost" size="xl" rounded="full">
                    Explore Enterprise Solutions
                </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                <TrustBadge value="99.8%" label="Verification Accuracy" />
                <TrustBadge value="1M+" label="Properties Analyzed" />
                <TrustBadge value="₦50B+" label="Value Secured" />
                <TrustBadge value="100%" label="Fraud-Free" />
            </div>
        </div>
    </section>
  );
};

const TrustBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-center">
    <p className="text-2xl md:text-3xl font-bold text-primary">{value}</p>
    <p className="text-sm font-medium text-foreground/80">{label}</p>
  </div>
);