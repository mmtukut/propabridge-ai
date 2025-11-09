
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BrainCircuit, Code, Users, BarChart, Map, PenTool } from 'lucide-react';
import Link from 'next/link';

const openRoles = [
  {
    title: 'Senior AI/ML Engineer (Geospatial)',
    department: 'Engineering',
    location: 'Lagos (Hybrid)',
    href: '#',
  },
  {
    title: 'Principal Product Manager (Enterprise)',
    department: 'Product',
    location: 'Lagos (Hybrid)',
    href: '#',
  },
  {
    title: 'Government Partnerships Lead',
    department: 'Business Development',
    location: 'Abuja',
    href: '#',
  },
  {
    title: 'Senior Frontend Engineer (React/Next.js)',
    department: 'Engineering',
    location: 'Remote',
    href: '#',
  },
  {
    title: 'Data Scientist (Real Estate Analytics)',
    department: 'Data Science',
    location: 'Lagos (Hybrid)',
    href: '#',
  },
];

const teams = [
    { icon: <BrainCircuit className="w-8 h-8 text-primary" />, name: 'AI & Research' },
    { icon: <Code className="w-8 h-8 text-primary" />, name: 'Engineering' },
    { icon: <PenTool className="w-8 h-8 text-primary" />, name: 'Product & Design' },
    { icon: <Users className="w-8 h-8 text-primary" />, name: 'Partnerships' },
    { icon: <BarChart className="w-8 h-8 text-primary" />, name: 'Data Science' },
    { icon: <Map className="w-8 h-8 text-primary" />, name: 'Operations' },
]

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Join Our Mission
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are building the foundational infrastructure for trust in African real estate. If you are passionate about solving hard problems with technology, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 lg:py-24" id="open-roles">
        <div className="container max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-center mb-16">Open Positions</h2>
            <Card className="bg-card/50 border-border/50 rounded-2xl">
                 <div className="divide-y divide-border/50">
                    {openRoles.map((role, index) => (
                        <Link href={role.href} key={index} className="block p-6 hover:bg-muted/30 transition-colors">
                            <div className="grid md:grid-cols-3 gap-4 items-center">
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">{role.title}</h3>
                                </div>
                                <div className="text-muted-foreground">
                                    <p>{role.department}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-muted-foreground">{role.location}</p>
                                    <Button variant="ghost" size="sm">Apply Now</Button>
                                </div>
                            </div>
                        </Link>
                    ))}
                 </div>
            </Card>
            <p className="text-center text-muted-foreground mt-8">
              Don't see a role that fits? <a href="mailto:careers@propabridge.ng" className="text-primary hover:underline">Send us your CV</a>. We're always looking for talent.
            </p>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">Meet Our Teams</h2>
                <p className="mt-4 text-xl text-muted-foreground">The innovators and builders behind the infrastructure.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {teams.map(team => (
                    <div key={team.name} className="flex flex-col items-center text-center gap-4">
                        <div className="bg-card/50 p-4 rounded-full border border-border/50">
                           {team.icon}
                        </div>
                        <p className="font-semibold text-muted-foreground">{team.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}
