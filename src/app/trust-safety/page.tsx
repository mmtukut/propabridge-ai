
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, ShieldCheck, UserCheck, FileCheck2, Home, BarChart } from 'lucide-react';
import Image from 'next/image';

const verificationSteps = [
  {
    icon: <UserCheck className="w-10 h-10 text-primary" />,
    title: 'Landlord Identity Verification',
    description: "We verify every landlord's identity against national databases (NIN, BVN) and conduct liveness checks to ensure they are who they say they are."
  },
  {
    icon: <FileCheck2 className="w-10 h-10 text-primary" />,
    title: 'Document Authenticity Analysis',
    description: "Our AI scans property documents (C of O, Title Deeds) for signs of forgery, cross-referencing them with land registry data where available."
  },
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: 'Physical Property Inspection',
    description: "A certified agent visits every property to confirm its existence, condition, and match to the listing details. No ghost listings. Ever."
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: 'AI Price & Fraud Monitoring',
    description: "Our system continuously monitors listings for fraudulent patterns, price anomalies, and suspicious activity, flagging them for review."
  }
];

export default function TrustAndSafetyPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            Engineered for Trust. Built for Safety.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We built our platform on a foundation of trust, with a multi-layered verification process designed to create the safest property ecosystem in Africa.
          </p>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">Our 4-Stage Verification Process</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Every single listing on Propabridge must pass our rigorous verification before it goes live.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationSteps.map(step => (
              <Card key={step.title} className="bg-card/50 border-border/50 rounded-2xl p-8 text-center backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold font-headline mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renter & Landlord Guarantees */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Renter Guarantee */}
            <Card className="bg-primary/5 border-primary/20 p-8 rounded-2xl">
              <h3 className="text-3xl font-headline font-bold text-primary mb-6">For Renters & Buyers</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span><strong>Zero Fraud Guarantee:</strong> If a verified listing is proven to be fraudulent, we cover your initial losses.</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span><strong>Verified Landlords:</strong> Every landlord you interact with has been identity-checked.</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span><strong>Secure Communication:</strong> Keep your personal details private by communicating through our secure platform.</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span><strong>Dispute Resolution:</strong> Our support team is here to mediate any issues that may arise during your tenancy.</span></li>
              </ul>
            </Card>
            {/* Landlord Guarantee */}
            <Card className="bg-card/50 border-border/50 p-8 rounded-2xl">
              <h3 className="text-3xl font-headline font-bold mb-6">For Landlords & Agents</h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span><strong>Verified Tenants:</strong> Access a pool of high-quality tenants who have passed identity and affordability checks.</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span><strong>Secure Payments (Coming Soon):</strong> A secure payment gateway to manage rent collection and reduce delays.</span></li>
                <li className="flex items-start gap-3"><Check className="text-primary mt-1.5 flex-shrink-0" /><span><strong>Data Privacy:</strong> We are NDPR compliant and committed to protecting your data and your tenants' data.</span></li>
              </ul>
            </Card>
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
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow mb-6">
                    Experience a Safer Way to Rent
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Browse thousands of verified listings with the confidence that we've got your back.
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
