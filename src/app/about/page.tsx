import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Users, Scale, Globe } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Tobi Otokiti',
    role: 'Founder & CEO',
    imageId: 'testimonial-2',
    bio: 'UN-Habitat SDG & New Urban Agenda Champion with 15+ years in real estate, technology, and social enterprise. Expert in building scalable, impactful ventures in emerging markets.',
  },
  {
    name: 'Amina Salisu',
    role: 'Head of Engineering',
    imageId: 'testimonial-1',
    bio: 'Ex-Google AI engineer with a PhD in Machine Learning. Specializes in geospatial data analysis and building large-scale AI systems for complex data environments.',
  },
  {
    name: 'John Adebayo',
    role: 'Head of Operations',
    imageId: 'testimonial-3',
    bio: 'Certified property manager with 20 years of experience managing portfolios worth over ₦100B. Deep expertise in Nigerian property law and verification.',
  },
];

const values = [
  {
    icon: <Check className="w-8 h-8 text-primary" />,
    title: 'Unwavering Integrity',
    description: 'Trust is our product. We operate with radical transparency and hold ourselves to the highest ethical standards.',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Nigeria-First Innovation',
    description: 'We build solutions for Nigeria’s unique challenges, not copy-paste models from other markets.',
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: 'Systemic Impact',
    description: 'We measure success by the scale of the systemic change we create for the entire real estate ecosystem.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Radical Collaboration',
    description: 'We partner with governments, enterprises, and innovators to build a future that is greater than the sum of its parts.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Building Africa's Infrastructure for Trust in Property
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Propabridge is a deep-tech firm on a mission to eliminate fraud and inefficiency in African real estate by building a foundational layer of trust through AI-native verification and market intelligence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image src="https://picsum.photos/seed/about-story/800/1000" alt="Team discussing blueprints" fill className="object-cover" data-ai-hint="team discussion" />
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">From Problem to Infrastructure</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded in 2023, Propabridge was born from a simple observation: the largest asset class in Africa is also the least transparent and most fraught with risk. Witnessing billions lost to fraud and millions struggling with inefficient processes, we knew a simple app wouldn't suffice.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    The problem wasn't a lack of listings; it was a lack of trust. Our mission became to build the underlying infrastructure for that trust—a single source of truth for property data, powered by AI and grounded in local reality.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">Our Guiding Principles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map(value => (
                    <Card key={value.title} className="bg-card/50 border-border/50 rounded-2xl p-8 text-center backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
                        <div className="flex justify-center mb-4">{value.icon}</div>
                        <h3 className="text-xl font-bold font-headline mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">Leadership & Vision</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              A blend of credentialed experts in technology, real estate, and social impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map(member => {
                const image = PlaceHolderImages.find(p => p.id === member.imageId);
                return (
                    <Card key={member.name} className="bg-card/50 border-border/50 rounded-2xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-glow-primary">
                        {image && <Image src={image.imageUrl} alt={member.name} width={120} height={120} className="rounded-full mx-auto mb-6 border-4 border-primary/20" />}
                        <h3 className="text-2xl font-bold font-headline">{member.name}</h3>
                        <p className="text-primary font-semibold mb-4">{member.role}</p>
                        <p className="text-muted-foreground">{member.bio}</p>
                    </Card>
                )
            })}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-20 lg:py-32">
        <div className="container max-w-4xl mx-auto text-center bg-card/50 border border-border/50 p-10 lg:p-20 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
            </div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">
                    Join Our Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    We are looking for passionate builders, thinkers, and innovators to help us solve one of Africa's biggest challenges.
                </p>
                <Button href="/company/careers" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    View Open Roles
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
