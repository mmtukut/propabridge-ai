import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { popularLocations } from '@/lib/placeholder-data';
import Link from 'next/link';

function LocationCard({ location }: { location: typeof popularLocations[0] }) {
  const image = PlaceHolderImages.find((img) => img.id === location.imageId);

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link href={location.href}>
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">{location.name}</h3>
          <p className="text-sm mt-1">{location.properties} Verified Properties</p>
          <p className="text-sm mt-2">Starting From <span className="font-semibold">{location.price}</span></p>
        </div>
      </Link>
    </div>
  );
}

export function PopularLocations() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Nigeria's Hottest Property Markets
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {popularLocations.map((location) => (
            <LocationCard key={location.name} location={location} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button href="/locations" variant="secondary" size="lg" rounded="full">
                View All Locations
            </Button>
        </div>
      </div>
    </section>
  );
}
