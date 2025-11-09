import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  'Access 10,000+ verified renters and buyers monthly',
  'Utilize AI for listing optimization and price intelligence',
  'Reduce vacancy rates with qualified tenant matching',
  'Benefit from enterprise-grade security and compliance',
  'Seamlessly integrate with our robust developer APIs',
  'Partner with a leader in real estate technology',
];

const landlordImage = PlaceHolderImages.find(p => p.id === 'for-landlords');

export function ForLandlords() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">
              For Landlords, Developers & Government
            </h2>
            <p className="text-xl text-muted-foreground">
              Leverage Propabridge's infrastructure to de-risk investments, accelerate sales, and build trust at scale.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/landlords" size="lg" rounded="full">
                List Your Property
              </Button>
              <Button href="/contact" variant="secondary" size="lg" rounded="full">
                Explore Partnership
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group">
             {landlordImage && (
                <Image
                    src={landlordImage.imageUrl}
                    alt={landlordImage.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={landlordImage.imageHint}
                />
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
