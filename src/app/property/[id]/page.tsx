'use client';

import Image from 'next/image';
import {
  Bed,
  Bath,
  Move3d,
  ShieldCheck,
  MapPin,
  Heart,
  Share2,
  Flag,
  MessageCircle,
  Phone,
  Check,
  Star,
  Zap,
  TrendingUp,
  School,
  HeartPulse,
  ShoppingCart,
  Bus,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Landmark,
  FileCheck2,
  UserCheck,
  CalendarCheck2,
  Building,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { useEffect, useState } from 'react';


type Property = {
  id: string;
  images: string[];
  type: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  parking: number;
  verified: boolean;
  verifiedAt: string;
  description: string;
  amenities: string[];
  coordinates: { lat: number; lng: number };
  landlord: {
    name: string;
    avatarId: string;
    propertyCount: number;
    response_time: string;
    rating: number;
    verified: boolean;
  };
  ai_analysis: {
    market_position: string;
    price_trend: string;
    demand_score: number;
    insight: string;
  };
};

type SimilarProperty = {
  id: string;
  imageId: string;
  type: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
};


function SpecItem({ icon: Icon, value, label }: { icon: React.ElementType, value: string | number, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Icon className="w-8 h-8 text-primary" />
      <span className="font-bold text-xl">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

function MiniPropertyCard({ property }: { property: SimilarProperty }) {
  const image = PlaceHolderImages.find((img) => img.id === property.imageId);
  return (
    <Card className="bg-card/50 border-border/50 rounded-xl overflow-hidden">
       <Link href={`/property/${property.id}`} className="block">
        <div className="relative h-40">
          {image && <Image src={image.imageUrl} alt={image.description} fill className="object-cover" />}
        </div>
        <CardContent className="p-3">
          <h4 className="font-semibold truncate text-sm">{property.type}</h4>
          <p className="text-xs text-muted-foreground">{property.location}</p>
          <p className="font-bold text-primary text-base mt-2">{property.price}<span className="text-xs font-normal text-muted-foreground">/yr</span></p>
        </CardContent>
      </Link>
    </Card>
  )
}


export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [similarProperties, setSimilarProperties] = useState<SimilarProperty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/listings/${params.id}`);
        const data = await res.json();
        setProperty(data.listing);
        setSimilarProperties(data.similar);
      } catch (error) {
        console.error("Failed to fetch property details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProperty();
    }
  }, [params.id]);

  if (loading) {
    return <div className="min-h-screen bg-background text-foreground flex items-center justify-center">Loading property details...</div>;
  }

  if (!property) {
    return <div className="min-h-screen bg-background text-foreground flex items-center justify-center">Property not found.</div>;
  }

  const primaryImage = PlaceHolderImages.find(p => p.id === property.images[0]);
  const landlordAvatar = PlaceHolderImages.find(p => p.id === property.landlord.avatarId);
  const thumbnailImages = property.images.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Property Hero */}
      <div className="relative h-[70vh] w-full">
        {primaryImage && <Image src={primaryImage.imageUrl} alt={primaryImage.description} fill className="object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute top-6 left-6 flex gap-3">
            <div className="bg-primary/80 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <ShieldCheck size={16} />
                100% Verified
            </div>
             <Button variant="secondary" size="sm" className="rounded-full bg-secondary/50 backdrop-blur-sm">
                <Move3d size={16} className="mr-2"/> Virtual Tour
            </Button>
        </div>

        <div className="absolute bottom-6 right-6 flex gap-3">
            <Button size="icon" variant="secondary" className="rounded-full bg-secondary/50 backdrop-blur-sm"> <Maximize /> </Button>
        </div>
         <div className="absolute bottom-6 left-6 w-1/3">
             <div className="flex gap-2">
                 {thumbnailImages.slice(0, 4).map((img, i) => img && (
                     <div key={i} className={`relative w-1/4 h-20 rounded-lg overflow-hidden border-2 ${i === 0 ? 'border-primary' : 'border-transparent'}`}>
                         <Image src={img.imageUrl} alt={img.description} fill className="object-cover" />
                     </div>
                 ))}
             </div>
         </div>
      </div>
      
      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left/Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold font-headline">{property.type}</h1>
                <p className="text-lg text-muted-foreground flex items-center gap-2 mt-2">
                  <MapPin size={18} className="text-primary" /> {property.location}
                </p>
              </div>
               <p className="text-4xl font-bold text-primary font-mono text-right">
                ₦{Number(property.price).toLocaleString()}
                <span className="text-base font-headline text-muted-foreground block -mt-1">/year</span>
              </p>
            </div>

            {/* Specs */}
            <Card className="bg-card border-border/50 rounded-2xl">
              <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <SpecItem icon={Bed} value={property.bedrooms} label="Bedrooms" />
                <SpecItem icon={Bath} value={property.bathrooms} label="Bathrooms" />
                <SpecItem icon={Building} value={`${property.area} m²`} label="Area" />
                <SpecItem icon={Landmark} value={property.parking} label="Parking" />
              </CardContent>
            </Card>

            {/* Verification Panel */}
            <Card className="bg-primary/5 border border-primary/20 rounded-2xl">
                <CardContent className="p-6">
                    <h3 className="font-headline text-2xl font-bold flex items-center gap-3 mb-4">
                        <ShieldCheck className="text-primary" size={32} />
                        <span>Verification Status</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground">
                        <div className="flex items-center gap-2"><Check className="text-primary" /> Property Ownership Verified</div>
                        <div className="flex items-center gap-2"><Check className="text-primary" /> Title Documents Authenticated</div>
                        <div className="flex items-center gap-2"><Check className="text-primary" /> Physical Inspection Completed</div>
                        <div className="flex items-center gap-2"><Check className="text-primary" /> Landlord Identity Confirmed</div>
                    </div>
                     <p className="text-sm text-muted-foreground/50 mt-4">Verified on: {property.verifiedAt}</p>
                </CardContent>
            </Card>

            {/* Description */}
            <Card className="bg-card border-border/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold mb-4">Property Description</h3>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

             {/* Amenities */}
            <Card className="bg-card border-border/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold mb-4">Amenities & Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map(amenity => (
                        <div key={amenity} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-muted-foreground">{amenity}</span>
                        </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Neighborhood */}
            <Card className="bg-card border-border/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold mb-4">Neighborhood Intelligence</h3>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <SpecItem icon={School} value="3" label="Schools" />
                    <SpecItem icon={HeartPulse} value="1.5km" label="Hospital" />
                    <SpecItem icon={ShoppingCart} value="800m" label="Mall" />
                    <SpecItem icon={Bus} value="200m" label="Transport" />
                </div>
                 <div className="relative h-64 rounded-lg overflow-hidden">
                   <Image src="https://picsum.photos/seed/map/800/400" alt="Map" fill className="object-cover grayscale" />
                 </div>
              </CardContent>
            </Card>

            {/* AI Analysis */}
             <Card className="bg-card border-border/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold flex items-center gap-3 mb-4">
                    <Sparkles className="text-primary" />
                    <span>AI Property Analysis</span>
                </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-secondary p-4 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Market Position</p>
                        <p className="text-lg font-bold text-primary">{property.ai_analysis.market_position}</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Price Trend</p>
                        <p className="text-lg font-bold">{property.ai_analysis.price_trend}</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Demand Score</p>
                        <p className="text-lg font-bold text-primary">{property.ai_analysis.demand_score}/100</p>
                    </div>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg text-sm text-muted-foreground flex items-start gap-3">
                    <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                    <p>{property.ai_analysis.insight}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Similar Properties */}
             <Card className="bg-card border-border/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold mb-4">Similar Properties</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {similarProperties.map(p => <MiniPropertyCard key={p.id} property={p} />)}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right/Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
               <Card className="bg-card border-border/50 rounded-2xl backdrop-blur-sm">
                 <CardContent className="p-6 space-y-4">
                   <div className="text-center">
                    {landlordAvatar && (
                      <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
                        <AvatarImage src={landlordAvatar.imageUrl} alt={landlordAvatar.description} />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                    )}
                    <h4 className="text-xl font-bold">{property.landlord.name}</h4>
                    <p className="text-sm text-primary flex items-center justify-center gap-1">
                      <CheckCircle size={14} /> Verified Landlord
                    </p>
                   </div>
                   
                   <div className="grid grid-cols-3 gap-2 text-center text-sm pt-2">
                       <div>
                           <p className="font-bold text-lg">{property.landlord.propertyCount}</p>
                           <p className="text-muted-foreground text-xs">Properties</p>
                       </div>
                       <div>
                           <p className="font-bold text-lg">{property.landlord.response_time}</p>
                           <p className="text-muted-foreground text-xs">Response</p>
                       </div>
                       <div>
                           <p className="font-bold text-lg">{property.landlord.rating}/5</p>
                           <p className="text-muted-foreground text-xs">Rating</p>
                       </div>
                   </div>

                   <div className="space-y-3 pt-4">
                       <Button size="lg" className="w-full shadow-glow-primary hover:shadow-glow-intense">
                           <MessageCircle className="mr-2" /> Message Landlord
                       </Button>
                       <Button variant="secondary" size="lg" className="w-full">
                           <Phone className="mr-2" /> Request Viewing
                       </Button>
                   </div>
                 </CardContent>
               </Card>

               <Card className="bg-card border-border/50 rounded-2xl">
                 <CardContent className="p-4 flex items-center justify-around">
                   <Button variant="ghost" className="flex-1 flex-col h-auto py-2">
                     <Heart size={20} />
                     <span className="text-xs mt-1">Save</span>
                   </Button>
                   <Button variant="ghost" className="flex-1 flex-col h-auto py-2">
                     <Share2 size={20} />
                     <span className="text-xs mt-1">Share</span>
                   </Button>
                   <Button variant="ghost" className="flex-1 flex-col h-auto py-2 text-muted-foreground hover:text-destructive">
                     <Flag size={20} />
                     <span className="text-xs mt-1">Report</span>
                   </Button>
                 </CardContent>
               </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
