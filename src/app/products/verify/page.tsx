import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bank, Building, Check, FileCheck, Landmark, Shield } from 'lucide-react';

export default function VerifyProductPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Enterprise & Government
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            Propabridge Verify
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade AI infrastructure for identity, document, and property verification at scale.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact" size="xl" rounded="full" className="shadow-glow-primary hover:shadow-glow-intense">
              Request Enterprise Demo
            </Button>
            <Button variant="secondary" size="xl" rounded="full">
              Download Product Sheet
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-5xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">The ₦50 Billion De-Risking Challenge</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
                Financial institutions, real estate developers, and government agencies lose <strong className="text-primary">₦50B+ annually</strong> to property fraud, fake documents, and identity theft. Manual verification processes are slow, expensive, and unreliable.
            </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-16 text-center">AI-Native Verification Infrastructure</h2>
            <div className="grid md:grid-cols-3 gap-8">
                 <Card className="bg-card/50 border-border/50 p-8 rounded-2xl text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-headline mb-3">Identity Verification</h3>
                    <p className="text-muted-foreground">Multi-factor identity authentication: NIN, BVN, biometric matching, and liveness detection.</p>
                </Card>
                 <Card className="bg-card/50 border-border/50 p-8 rounded-2xl text-center">
                    <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-headline mb-3">Document Verification</h3>
                    <p className="text-muted-foreground">AI-powered authenticity checks for Title Deeds, C of O, and other legal documents using OCR.</p>
                </Card>
                 <Card className="bg-card/50 border-border/50 p-8 rounded-2xl text-center">
                    <Landmark className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-headline mb-3">Property Verification</h3>
                    <p className="text-muted-foreground">Satellite and ground-truth validation for ownership, encumbrances, and physical inspections.</p>
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
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow mb-6">
                    Secure Your Operations with Propabridge Verify
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    De-risk your portfolio, accelerate onboarding, and eliminate fraud with our enterprise-grade infrastructure.
                </p>
                <Button href="/contact" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    Contact Sales
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
