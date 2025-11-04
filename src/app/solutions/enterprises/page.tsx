import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bank, Shield, TrendingUp, Building, FileCheck, Landmark } from 'lucide-react';
import Image from 'next/image';

const solutions = [
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: "Automated Mortgage Underwriting",
        description: "Reduce mortgage processing time from weeks to hours with AI-powered identity, document, and collateral verification."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: "Portfolio Risk Analysis",
        description: "Analyze your entire real estate portfolio for risks, including title defects, flood zones, and market volatility, using our data intelligence."
    },
    {
        icon: <FileCheck className="w-8 h-8 text-primary" />,
        title: "Digital KYC & Onboarding",
        description: "Seamlessly onboard new clients and tenants with instant, NDPR-compliant identity verification and background checks."
    },
    {
        icon: <Landmark className="w-8 h-8 text-primary" />,
        title: "Insurance Underwriting",
        description: "Accurately price property insurance with data-driven valuations and risk assessments, reducing fraud and claim losses."
    }
];

export default function ForEnterprisesPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Financial Institutions & Corporates
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            De-Risk Your Real Estate Operations
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage our enterprise-grade infrastructure to automate compliance, mitigate risk, and unlock new efficiencies in your property-related workflows.
          </p>
          <div className="mt-10">
            <Button href="/contact?inquiry=enterprise" size="xl" rounded="full" className="shadow-glow-primary hover:shadow-glow-intense">
              Request an Enterprise Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">Enterprise Solutions</h2>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Modular infrastructure to solve your most complex real estate challenges.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {solutions.map(solution => (
                    <Card key={solution.title} className="bg-card/50 border-border/50 rounded-2xl p-8 flex items-start gap-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
                        <div className="flex-shrink-0 mt-1">{solution.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-2">{solution.title}</h3>
                            <p className="text-muted-foreground">{solution.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow text-center mb-16">Quantifiable Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <Card className="bg-card/50 border-border/50 text-center p-8 rounded-2xl">
                    <p className="text-5xl font-bold text-primary font-mono">95%</p>
                    <p className="text-muted-foreground mt-2">Reduction in Verification Time</p>
                </Card>
                <Card className="bg-card/50 border-border/50 text-center p-8 rounded-2xl">
                    <p className="text-5xl font-bold text-primary font-mono">60%</p>
                    <p className="text-muted-foreground mt-2">Decrease in Loan Defaults</p>
                </Card>
                <Card className="bg-card/50 border-border/50 text-center p-8 rounded-2xl">
                    <p className="text-5xl font-bold text-primary font-mono">₦2B+</p>
                    <p className="text-muted-foreground mt-2">Fraud Prevented for Partners</p>
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
                    Secure and Scale Your Operations
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Talk to our solutions experts to design a pilot program for your organization.
                </p>
                <Button href="/contact?inquiry=enterprise" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    Contact Enterprise Sales
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
