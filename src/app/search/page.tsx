
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Bed,
  Bath,
  ShieldCheck,
  LayoutGrid,
  List,
  Map as MapIcon,
  Zap,
  TrendingUp,
  Bookmark,
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { propertyPlaceholder } from '@/lib/placeholder-data';
import { Wrapper as GoogleMapsWrapper, Status } from '@googlemaps/react-wrapper';
import { MapComponent, Marker } from '@/components/maps/Map';

type Property = typeof propertyPlaceholder[0] & {
  description: string;
  area: number;
  coordinates: {
    lat: number;
    lng: number;
  }
};

const amenities = [
  'Parking',
  '24/7 Power',
  'Security',
  'Pool',
  'Gym',
  'Generator',
  'Garden',
  'Serviced',
];

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
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
            {property.matchScore}% Match
          </div>
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

function PropertyCardList({ property }: { property: Property }) {
  const image = PlaceHolderImages.find((img) => img.id === property.imageId);

  return (
    <Card className="bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-glow-primary w-full">
      <Link href={`/property/${property.id}`} className="block">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/3 h-56 md:h-auto">
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
          <CardContent className="p-6 flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl">{property.type}</h3>
              <div className="bg-background/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                {property.matchScore}% Match
              </div>
            </div>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <MapPin size={14} /> {property.location}
            </p>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {property.description}
            </p>
            <div className="flex items-center gap-4 text-sm pt-2">
              <span className="flex items-center gap-1.5"><Bed size={16} /> {property.bedrooms} beds</span>
              <span className="flex items-center gap-1.5"><Bath size={16} /> {property.bathrooms} baths</span>
              <span className="flex items-center gap-1.5"><MapIcon size={16} /> {property.area} m²</span>
            </div>
             <div className="flex items-end justify-between pt-4">
              <div>
                {/* Additional info can go here */}
              </div>
              <p className="font-bold text-primary text-2xl">
                {property.price}
                <span className="text-sm font-normal text-muted-foreground">/yr</span>
              </p>
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}

const render = (status: Status) => {
  if (status === Status.FAILURE) return <p>Error loading maps</p>;
  return <p>Loading...</p>;
};

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState([1000000, 10000000]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/search');
        const data = await res.json();
        // Add mock description, area and coordinates
        const detailedProperties = data.results.map((p: any, index: number) => ({
          ...p,
          description: "A stunning and newly built property boasting of spacious rooms, a fully fitted kitchen, 24/7 power supply, and top-notch security. An ideal home for professionals and families.",
          area: Math.floor(Math.random() * 150) + 100, // Random area between 100-250 m²
          coordinates: {
            lat: 6.4474 + (Math.random() - 0.5) * 0.1 * index,
            lng: 3.4723 + (Math.random() - 0.5) * 0.1 * index,
          }
        }))
        setProperties(detailedProperties);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-transparent bg-opacity-50">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Describe Your Perfect Home. AI Does the Rest.
          </h1>
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative">
              <Input
                placeholder="e.g., 'A modern 3-bedroom flat in Lekki under ₦3M with 24/7 power'"
                className="w-full pl-6 pr-32 py-8 text-lg rounded-full bg-card/80 border-2 border-border focus:border-primary focus:ring-primary/50 backdrop-blur-sm"
              />
              <Button
                size="lg"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-14 px-8 shadow-glow-primary hover:shadow-glow-intense"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            ✓ 500+ Verified Properties • ✓ 100% Fraud-Free • ✓ Zero Hidden
            Fees
          </p>
        </div>
      </section>

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1 space-y-8">
          {/* Filters */}
          <Card className="bg-card border-border/50 rounded-2xl p-6 space-y-6">
            <h2 className="text-2xl font-bold font-headline">Filters</h2>

            <div>
              <h3 className="font-semibold mb-3">Price Range (/year)</h3>
              <Slider
                min={500000}
                max={20000000}
                step={100000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₦{priceRange[0].toLocaleString()}</span>
                <span>₦{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Property Type</h3>
              <div className="space-y-2">
                {[
                  'Flat/Apartment',
                  'Detached Duplex',
                  'Semi-Detached Duplex',
                  'Terraced Duplex',
                  'Penthouse',
                ].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <label
                      htmlFor={type}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Bedrooms</h3>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, '5+'].map((num) => (
                  <Button
                    key={num}
                    variant="secondary"
                    size="sm"
                    className="flex-1 rounded-md"
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Bathrooms</h3>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, '5+'].map((num) => (
                  <Button
                    key={num}
                    variant="secondary"
                    size="sm"
                    className="flex-1 rounded-md"
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox id={amenity} />
                    <label
                      htmlFor={amenity}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <Checkbox id="verified-only" defaultChecked />
              <label
                htmlFor="verified-only"
                className="text-sm font-bold leading-none text-primary"
              >
                Verified Listings Only
              </label>
            </div>
          </Card>

          {/* AI Insights */}
          <Card className="bg-card border-border/50 rounded-2xl p-6 space-y-4">
            <h3 className="font-headline text-xl font-bold">
              AI Market Insights
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <TrendingUp className="w-5 h-5 mt-0.5 text-primary" />
                <p className="text-muted-foreground">
                  Properties in Lekki Phase 1 are{' '}
                  <span className="font-bold text-foreground">
                    12% below
                  </span>{' '}
                  market average.
                </p>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Zap className="w-5 h-5 mt-0.5 text-primary" />
                <p className="text-muted-foreground">
                  <span className="font-bold text-foreground">3 properties</span>{' '}
                  matching your criteria were listed in the past 24 hours.
                </p>
              </div>
            </div>
          </Card>

          {/* Saved Searches */}
          <Card className="bg-card border-border/50 rounded-2xl p-6 space-y-4">
            <h3 className="font-headline text-xl font-bold flex items-center">
              <Bookmark className="mr-2" /> Saved Searches
            </h3>
            <div className="text-sm text-muted-foreground text-center py-4">
              You have no saved searches.
            </div>
            <Button variant="ghost" className="w-full">
              Create new search
            </Button>
          </Card>
        </aside>

        {/* Search Results */}
        <main className="md:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Showing {properties.length} properties
            </h2>
            <div className="flex items-center gap-4">
              <Select defaultValue="best-match">
                <SelectTrigger className="w-[180px] rounded-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-match">Best Match</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
              <div className="bg-secondary p-1 rounded-full flex items-center">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  className="w-9 h-9 rounded-full"
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  className="w-9 h-9 rounded-full"
                  onClick={() => setViewMode('list')}
                >
                  <List />
                </Button>
                <Button
                  variant={viewMode === 'map' ? 'default' : 'ghost'}
                  size="icon"
                  className="w-9 h-9 rounded-full"
                  onClick={() => setViewMode('map')}
                >
                  <MapIcon />
                </Button>
              </div>
            </div>
          </div>

          {loading ? (
            <p>Loading properties...</p>
          ) : (
            <>
              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {properties.map((prop) => (
                    <PropertyCardGrid key={prop.id} property={prop} />
                  ))}
                </div>
              )}
               {viewMode === 'list' && (
                <div className="space-y-6">
                  {properties.map((prop) => (
                    <PropertyCardList key={prop.id} property={prop} />
                  ))}
                </div>
              )}
               {viewMode === 'map' && (
                <Card className="bg-card border-border/50 rounded-2xl h-[600px] md:h-[800px] overflow-hidden">
                    <GoogleMapsWrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''} render={render}>
                        <MapComponent center={{ lat: 6.5244, lng: 3.3792 }} zoom={11}>
                            {properties.map(prop => <Marker key={prop.id} position={prop.coordinates} />)}
                        </MapComponent>
                    </GoogleMapsWrapper>
                </Card>
              )}
            </>
          )}

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" className="rounded-full">
              Load More Properties
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
