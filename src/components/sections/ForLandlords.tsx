import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  'Free listing for basic properties',
  'Reach 10,000+ verified renters monthly',
  'AI optimization for better visibility',
  'Secure tenant screening',
  'Fast payment processing',
  'No upfront costs',
];

const landlordImage = PlaceHolderImages.find(p => p.id === 'for-landlords');

export function ForLandlords() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Are You a Landlord or Developer?
            </h2>
            <p className="text-xl text-gray-600">
              List Your Property. Reach Thousands. Get Paid Faster.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/landlords" size="lg" rounded="full">
                List Your Property
              </Button>
              <Button href="/landlords#pricing" variant="ghost" size="lg" rounded="full">
                See Pricing
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
             {landlordImage && (
                <Image
                    src={landlordImage.imageUrl}
                    alt={landlordImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={landlordImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
