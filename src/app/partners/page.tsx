import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GitMerge, Building, Landmark } from 'lucide-react';
import Link from 'next/link';

const partnerTypes = [
  {
    icon: <Landmark className="w-10 h-10 text-primary" />,
    title: 'Financial Institutions',
    description: 'Integrate our verification and valuation APIs to de-risk lending, automate mortgages, and enhance compliance.',
    href: '/solutions/enterprises'
  },
  {
    icon: <Landmark className="w-10 h-10 text-primary" />,
    title: 'Government Agencies',
    description: 'Collaborate with us to digitize land registries, automate property tax, and build transparent public services.',
    href: '/solutions/government'
  },
  {
    icon: <Building className="w-10 h-10 text-primary" />,
    title: 'Real Estate Developers',
    description: 'Leverage our platform to market your properties to verified buyers and access data for site selection.',
    href: '/solutions/developers'
  },
  {
    icon: <GitMerge className="w-10 h-10 text-primary" />,
    title: 'Technology Integrators',
    description: 'Become a certified partner to build solutions on top of the Propabridge API for your clients.',
    href: '/contact?inquiry=partnership'
  },
];

export default function PartnersPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Partner with Propabridge
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our ecosystem of innovators, enterprises, and governments to build the future of African real estate together.
          </p>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">Partnership Opportunities</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">We offer tailored partnership programs for different sectors.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner) => (
              <Card key={partner.title} className="bg-card/50 border-border/50 rounded-2xl p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
                <div className="mb-6">{partner.icon}</div>
                <h3 className="text-2xl font-bold font-headline mb-3">{partner.title}</h3>
                <p className="text-muted-foreground mb-6">{partner.description}</p>
                <Button asChild variant="secondary" rounded="full">
                    <Link href={partner.href}>Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container max-w-4xl mx-auto text-center bg-card/50 border border-border/50 p-10 lg:p-20 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
            </div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">
                    Ready to Build with Us?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Let's discuss how a partnership with Propabridge can help you achieve your goals.
                </p>
                <Button asChild size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    <Link href="/contact?inquiry=partnership">Become a Partner</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
