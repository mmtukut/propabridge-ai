import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Code, Database, Globe, Layers, TrendingUp } from 'lucide-react';

export default function IntelligenceProductPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-primary/20">
            For Developers & Analysts
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-glow">
            Propabridge Intelligence
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Access robust APIs for geospatial data, market trends, and property intelligence to build next-generation real estate applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact" size="xl" rounded="full" className="shadow-glow-primary hover:shadow-glow-intense">
              Get API Keys
            </Button>
            <Button variant="secondary" size="xl" rounded="full">
              Read API Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Data Points */}
       <section className="py-20 lg:py-24 bg-card/20">
        <div className="container max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-16 text-center">Unlock Real Estate Data for Africa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <Card className="bg-card/50 border-border/50 p-8 rounded-2xl">
                    <Globe className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold font-headline mb-3">Geospatial Data</h3>
                    <p className="text-muted-foreground">Access property boundaries, flood risk zones, and infrastructure data.</p>
                </Card>
                 <Card className="bg-card/50 border-border/50 p-8 rounded-2xl">
                    <TrendingUp className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold font-headline mb-3">Market Trends</h3>
                    <p className="text-muted-foreground">Get real-time rental yields, price indices, and demand analytics.</p>
                </Card>
                 <Card className="bg-card/50 border-border/50 p-8 rounded-2xl">
                    <Database className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold font-headline mb-3">Property Records</h3>
                    <p className="text-muted-foreground">Query our database of over 1M+ analyzed property records.</p>
                </Card>
                 <Card className="bg-card/50 border-border/50 p-8 rounded-2xl">
                    <Layers className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold font-headline mb-3">Valuation Models</h3>
                    <p className="text-muted-foreground">Integrate our AI-powered Automated Valuation Models (AVM).</p>
                </Card>
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
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
            </div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow mb-6">
                    Build the Future of Real Estate
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                    Start building with the most comprehensive property data API for Africa.
                </p>
                <Button href="/contact" size="xl" className="shadow-glow-primary hover:shadow-glow-intense">
                    Request API Access
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
