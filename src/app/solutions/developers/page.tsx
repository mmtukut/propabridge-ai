import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Database, Globe, Layers, Zap, Book, GitMerge, FileJson } from 'lucide-react';

const apiProducts = [
    {
        icon: <Database className="w-8 h-8 text-primary" />,
        title: "Property Intelligence API",
        description: "Access real-time market trends, rental yields, price indices, and demand analytics for any location in Nigeria."
    },
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Geospatial API",
        description: "Get property boundaries, flood risk data, infrastructure mapping, and points of interest for geospatial analysis."
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "Valuation API",
        description: "Integrate our AI-powered Automated Valuation Models (AVM) for instant, data-driven property valuations."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Verification API",
        description: "Programmatically verify property documents, titles, and ownership records through a simple API call."
    }
];

export default function ForDevelopersPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Developers & Innovators
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Build the Future of Real Estate
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage Propabridge's robust APIs to power your applications with unparalleled property data, intelligence, and verification services.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact?inquiry=api" size="xl" rounded="full" className="shadow-glow-primary hover:shadow-glow-intense">
              Get API Keys
            </Button>
            <Button href="/technology/api-docs" variant="secondary" size="xl" rounded="full">
              Read API Docs
            </Button>
          </div>
        </div>
      </section>

      {/* API Products */}
      <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">Our Developer Platform</h2>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">A suite of powerful APIs to unlock real estate data for Africa.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {apiProducts.map(product => (
                    <Card key={product.title} className="bg-card/50 border-border/50 rounded-2xl p-8 flex items-start gap-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
                        <div className="flex-shrink-0 mt-1">{product.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-2">{product.title}</h3>
                            <p className="text-muted-foreground">{product.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* Code Snippet */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-5xl">
             <h2 className="text-4xl md:text-5xl font-bold font-headline mb-12 text-center">Simple, Powerful, and Easy to Integrate</h2>
            <Card className="bg-black border-border/50 rounded-2xl overflow-hidden">
                <div className="p-4 bg-secondary/30 border-b border-border/50 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="p-6 text-sm md:text-base overflow-x-auto">
                    <code className="font-mono">
{`
fetch('https://api.propabridge.ng/v1/intelligence', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'average_price',
    location: {
      type: 'lga',
      name: 'Eti-Osa'
    },
    property_type: '3-bedroom-flat'
  })
})
.then(response => response.json())
.then(data => console.log(data));

// { "average_price": "3,500,000 NGN", "trend": "+5.2% YoY" }
`}
                    </code>
                </pre>
            </Card>
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
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">
                    Start Building Today
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Get access to our sandbox environment and start integrating in minutes.
                </p>
                <Button href="/contact?inquiry=api" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    Request API Keys
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
