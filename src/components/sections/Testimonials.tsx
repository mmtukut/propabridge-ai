import Image from 'next/image';
import { Star, Shield, FileText, Home, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials } from '@/lib/placeholder-data';

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const image = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
  return (
    <Card className="h-full bg-card/50 border-border/50 rounded-2xl backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow-primary">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} />
          ))}
        </div>
        <blockquote className="text-lg text-muted-foreground flex-grow">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-6 flex items-center">
          {image && (
            <Image
              src={image.imageUrl}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full mr-4 border-2 border-primary/50"
              data-ai-hint={image.imageHint}
            />
          )}
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const safetyBadges = [
    { icon: <Shield className="w-6 h-6" />, text: "ID Verification" },
    { icon: <FileText className="w-6 h-6" />, text: "Document Verification" },
    { icon: <Home className="w-6 h-6" />, text: "Property Inspection" },
    { icon: <CreditCard className="w-6 h-6" />, text: "Secure Transactions" },
]

export function Testimonials() {
  return (
    <section className="bg-card/20 py-20 lg:py-32">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            Trusted by Leaders, Builders, and Dreamers
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold font-headline">How We Engineer Trust</h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {safetyBadges.map(badge => (
                    <div key={badge.text} className="flex flex-col items-center gap-3 p-6 bg-card/50 border-border/50 rounded-2xl backdrop-blur-sm">
                        <div className="text-primary">{badge.icon}</div>
                        <p className="font-medium text-muted-foreground text-center">{badge.text}</p>
                    </div>
                ))}
            </div>
             <div className="mt-12">
                 <Button href="/trust-safety" variant="secondary" size="lg" rounded="full">
                    Explore Our Verification Process
                </Button>
             </div>
        </div>
      </div>
    </section>
  );
}
