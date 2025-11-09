
'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { propertyPlaceholder } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';

type Property = {
  id: string;
  imageId: string;
  type: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  verified: boolean;
  matchScore: number;
};

function PropertyCardGrid({ property }: { property: Property }) {
  const image = PlaceHolderImages.find((img) => img.id === property.imageId);

  return (
    <Card className="bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow-primary">
      <Link href={`/property/${property.id}`} className="block">
        <div className="relative h-56">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
          {property.verified && (
            <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <ShieldCheck size={14} />
              Verified
            </div>
          )}
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-bold text-lg truncate">{property.type}</h3>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <MapPin size={14} /> {property.location}
          </p>
          <div className="flex items-center justify-between text-sm pt-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <Bed size={16} /> {property.bedrooms}
              </span>
              <span className="flex items-center gap-1.5">
                <Bath size={16} /> {property.bathrooms}
              </span>
            </div>
            <p className="font-bold text-primary text-lg">
              {property.price}
              <span className="text-xs font-normal text-muted-foreground">/yr</span>
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default function SavedPropertiesPage() {
    // In a real app, this data would be fetched based on the logged-in user's profile.
    const savedProperties = propertyPlaceholder.slice(0, 3);

    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-8">Your Saved Properties</h1>
            {savedProperties.length > 0 ? (
                 <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {savedProperties.map((prop) => (
                        <PropertyCardGrid key={prop.id} property={prop} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-card border-border/50 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-2">No Saved Properties Yet</h2>
                    <p className="text-muted-foreground mb-6">Start searching to find and save properties you love.</p>
                    <Button href="/search">Find a Property</Button>
                </div>
            )}
        </div>
    )
}
