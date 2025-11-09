'use client';

import { Bot, ShieldCheck, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const products = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: 'AI Search',
    description: "For Renters & Buyers: Find verified properties in seconds using natural language. Our AI understands your needs, eliminating fraud and endless searching.",
    target: "For Individuals",
    href: "/products/ai-search"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'Verify',
    description: 'For Landlords & Gov: An enterprise-grade platform for AI-powered identity, document, and property verification, ensuring compliance and de-risking investments.',
    target: "For Enterprise & Government",
    href: "/products/verify"
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: 'Intelligence',
    description: 'For Developers & Analysts: Access our robust APIs for geospatial data, market trends, and property intelligence to build next-generation real estate applications.',
    target: "For Developers",
    href: "/products/intelligence"
  },
];

const howItWorksImage = PlaceHolderImages.find(p => p.id === 'how-it-works');

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-card/20 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        </div>
      <div className="container max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Find Your Solution in 3 Steps</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">We build foundational infrastructure for every participant in the real estate ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <Link key={index} href={product.href} className="block">
                <Card className="text-center p-8 bg-card/50 border-border/50 rounded-2xl h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow-primary">
                <div className="flex justify-center items-center mb-6">
                    <div className="bg-secondary rounded-full p-4">
                    {product.icon}
                    </div>
                </div>
                <p className="font-semibold text-primary mb-2">{product.target}</p>
                <h3 className="text-2xl font-bold font-headline mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/contact" size="lg" variant="secondary" rounded="full">
            Explore Partnership Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
