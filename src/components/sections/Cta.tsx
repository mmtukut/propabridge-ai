import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function Cta() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
      <div className="container max-w-7xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Ready to Transform Property in Nigeria?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Join governments, enterprises, and innovators building the future of African real estate.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button href="/search" size="xl" rounded="full" className="shadow-glow-primary hover:shadow-glow-intense">
            Start Your Search
          </Button>
          <Button href="/contact" variant="ghost" size="xl" rounded="full">
            Partner With Us
          </Button>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>AI-Powered Search</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>100% free to browse</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Verified listings only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
