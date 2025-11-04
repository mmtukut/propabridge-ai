import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Landmark, Map, FileText, BarChart, ShieldCheck } from 'lucide-react';

const solutions = [
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "Digital Land Registry",
        description: "Transform paper-based land records into a secure, searchable digital database with our AI-powered document digitization and verification."
    },
    {
        icon: <BarChart className="w-8 h-8 text-primary" />,
        title: "Property Tax Automation",
        description: "Accurately assess property values at scale using our AVM and geospatial data to increase tax revenue and ensure fairness."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Anti-Fraud & Enforcement",
        description: "Equip enforcement agencies with tools to detect fraudulent transactions, verify ownership in the field, and build cases with auditable data trails."
    },
    {
        icon: <Map className="w-8 h-8 text-primary" />,
        title: "Urban & Regional Planning",
        description: "Utilize our geospatial and market intelligence data for evidence-based planning, infrastructure development, and public service allocation."
    }
];

export default function ForGovernmentPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Government & Public Sector
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            Building Infrastructure for National Development
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with Propabridge to enhance transparency, boost revenue, and drive efficiency in land administration and public services.
          </p>
          <div className="mt-10">
            <Button href="/contact?inquiry=government" size="xl" rounded="full" className="shadow-glow-primary hover:shadow-glow-intense">
              Schedule a Briefing
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">Public Sector Solutions</h2>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Government-ready technology to modernize land administration and unlock economic potential.</p>
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

      {/* Case Study Snippet */}
       <section className="py-20 lg:py-24">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/gov-case-study/800/1000" alt="Digital map interface" className="w-full h-full object-cover" data-ai-hint="digital map" />
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">Case Study: Lagos State Land Registry Pilot</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    In a pilot program with the Lagos State Land Registry, Propabridge's AI engine digitized and verified over 100,000 title deeds in 90 days, a task that would have taken an estimated 5 years using manual methods.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                    <div>
                        <p className="text-4xl font-bold text-primary font-mono">98.5%</p>
                        <p className="text-muted-foreground">Accuracy in OCR & Data Extraction</p>
                    </div>
                     <div>
                        <p className="text-4xl font-bold text-primary font-mono">15x</p>
                        <p className="text-muted-foreground">Increase in Processing Speed</p>
                    </div>
                </div>
                 <Button href="/insights/case-studies/lagos-land-registry" variant="secondary" size="lg" rounded="full">Read Full Case Study</Button>
            </div>
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
                    Partner with Us for a More Transparent Future
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Let's work together to build a modern, efficient, and trustworthy property system for Nigeria.
                </p>
                <Button href="/contact?inquiry=government" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    Contact Public Sector Team
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
