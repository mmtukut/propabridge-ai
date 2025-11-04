import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const pressReleases = [
  {
    date: 'July 22, 2024',
    title: 'Propabridge Launches AI-Powered Verification Platform to Combat Nigeria\'s ₦500B Property Fraud Problem',
    href: '#',
  },
  {
    date: 'June 15, 2024',
    title: 'Propabridge Partners with Lagos State Government on Land Registry Digitization Pilot',
    href: '#',
  },
  {
    date: 'May 01, 2024',
    title: 'Deep-Tech Firm Propabridge Raises $2.5M Seed Round to Build Africa\'s Trust Infrastructure for Real Estate',
    href: '#',
  },
];

const featuredIn = [
    { name: 'TechCrunch', logo: 'https://via.placeholder.com/150x50?text=TechCrunch', href: '#' },
    { name: 'Forbes', logo: 'https://via.placeholder.com/150x50?text=Forbes', href: '#' },
    { name: 'TechCabal', logo: 'https://via.placeholder.com/150x50?text=TechCabal', href: '#' },
    { name: 'The Guardian', logo: 'https://via.placeholder.com/150x50?text=The+Guardian', href: '#' },
]

export default function PressPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            Press & Media
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Information for journalists, publications, and media partners about Propabridge's mission to build trust in African real estate.
          </p>
        </div>
      </section>

      {/* Press Kit & Contact */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card/50 border-border/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                    <h2 className="text-3xl font-bold font-headline mb-4">Media Kit</h2>
                    <p className="text-muted-foreground mb-6">Download our official logo, brand guidelines, and leadership headshots.</p>
                    <Button size="lg" rounded="full">
                        <Download className="mr-2"/> Download Media Kit (.zip)
                    </Button>
                </Card>
                 <Card className="bg-card/50 border-border/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                    <h2 className="text-3xl font-bold font-headline mb-4">Press Contact</h2>
                    <p className="text-muted-foreground mb-6">For all media inquiries, please contact our communications team.</p>
                    <Button href="mailto:press@propabridge.ng" size="lg" rounded="full" variant="secondary">
                        <Mail className="mr-2"/> press@propabridge.ng
                    </Button>
                </Card>
            </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="pb-20 lg:pb-24">
        <div className="container max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow text-center mb-16">Press Releases</h2>
            <Card className="bg-card/50 border-border/50 rounded-2xl">
                 <div className="divide-y divide-border/50">
                    {pressReleases.map((release, index) => (
                        <Link href={release.href} key={index} className="block p-6 hover:bg-muted/30 transition-colors">
                            <div className="grid md:grid-cols-4 gap-4 items-center">
                                <div className="md:col-span-1 text-muted-foreground">
                                    <p>{release.date}</p>
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="font-bold text-lg text-foreground">{release.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                 </div>
            </Card>
        </div>
      </section>
      
       {/* As Seen In */}
      <section className="pb-20 lg:pb-32">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl font-bold font-headline text-glow mb-12">As Featured In</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
            {featuredIn.map(org => (
              <a key={org.name} href={org.href} target="_blank" rel="noopener noreferrer">
                <img src={org.logo} alt={org.name} className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
