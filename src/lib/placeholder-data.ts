export const navLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/renters', label: 'For Renters' },
  { href: '/landlords', label: 'For Landlords' },
  { href: '/trust-safety', label: 'Trust & Safety' },
];

export const testimonials = [
  {
    name: 'Chioma O.',
    role: 'Renter, Lagos',
    quote: 'I found my apartment in 48 hours. No agent fees, no fake listings, no stress. Propabridge is the real deal.',
    rating: 5,
    imageId: 'testimonial-1',
  },
  {
    name: 'Mr. Adewale',
    role: 'Property Owner, Abuja',
    quote: 'As a landlord, I connected with serious tenants instantly. The verification process protects both sides.',
    rating: 5,
    imageId: 'testimonial-2',
  },
  {
    name: 'Ibrahim & Fatima',
    role: 'Buyers, Port Harcourt',
    quote: "The AI search was shockingly accurate. It understood 'close to my workplace' and showed perfect matches.",
    rating: 5,
    imageId: 'testimonial-3',
  },
];

export const popularLocations = [
  {
    name: 'Lagos',
    properties: '1,245',
    price: '₦1.2M/year',
    imageId: 'location-lagos',
    href: '/search?location=Lagos',
  },
  {
    name: 'Abuja',
    properties: '820',
    price: '₦800K/year',
    imageId: 'location-abuja',
    href: '/search?location=Abuja',
  },
  {
    name: 'Port Harcourt',
    properties: '340',
    price: '₦600K/year',
    imageId: 'location-ph',
    href: '/search?location=Port%20Harcourt',
  },
  {
    name: 'Ibadan',
    properties: '180',
    price: '₦400K/year',
    imageId: 'location-ibadan',
    href: '/search?location=Ibadan',
  },
];


export const propertyPlaceholder = [
  {
    id: "prop-1",
    imageId: "property-1",
    type: "3-Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "₦5,500,000",
    bedrooms: 3,
    bathrooms: 4,
    verified: true,
    matchScore: 95
  },
  {
    id: "prop-2",
    imageId: "property-2",
    type: "4-Bedroom Semi-Detached Duplex",
    location: "Maitama, Abuja",
    price: "₦8,000,000",
    bedrooms: 4,
    bathrooms: 5,
    verified: true,
    matchScore: 92
  },
  {
    id: "prop-3",
    imageId: "property-3",
    type: "2-Bedroom Luxury Apartment",
    location: "Ikoyi, Lagos",
    price: "₦7,200,000",
    bedrooms: 2,
    bathrooms: 3,
    verified: true,
    matchScore: 88
  },
  {
    id: "prop-4",
    imageId: "hero",
    type: "5-Bedroom Villa",
    location: "Asokoro, Abuja",
    price: "₦15,000,000",
    bedrooms: 5,
    bathrooms: 6,
    verified: true,
    matchScore: 85
  },
];


export const propertyDetails = {
  id: "prop-1",
  images: ["property-1", "property-2", "property-3", "hero"],
  type: "3-Bedroom Detached Duplex",
  location: "Lekki Phase 1, Lagos",
  price: "5,500,000",
  bedrooms: 3,
  bathrooms: 4,
  area: 250,
  parking: 2,
  verified: true,
  verifiedAt: "July 15, 2024",
  description: "A stunning and newly built 3-bedroom detached duplex in the heart of Lekki Phase 1. This property boasts of spacious rooms, a fully fitted kitchen, 24/7 power supply, and top-notch security. The serene environment and proximity to major business hubs make it an ideal home for professionals and families.",
  amenities: ["Parking", "24/7 Power", "Security", "Pool", "Gym", "Serviced"],
  coordinates: { lat: 6.4474, lng: 3.4723 },
  landlord: {
    name: "Mr. Adewale Properties",
    avatarId: "testimonial-2",
    propertyCount: 12,
    response_time: "< 2 hours",
    rating: 4.9,
    verified: true
  },
  ai_analysis: {
    market_position: "5% Below Average",
    price_trend: "+8% YoY",
    demand_score: 87,
    insight: "Based on 1,247 comparable properties, this listing is priced competitively. Properties in this area typically rent within 14 days."
  }
};

export const similarProperties = [
  {
    id: "prop-2",
    imageId: "property-2",
    type: "4-Bedroom Semi-Detached Duplex",
    location: "Maitama, Abuja",
    price: "₦8,000,000",
    bedrooms: 4,
    bathrooms: 5,
  },
  {
    id: "prop-3",
    imageId: "property-3",
    type: "2-Bedroom Luxury Apartment",
    location: "Ikoyi, Lagos",
    price: "₦7,200,000",
    bedrooms: 2,
    bathrooms: 3,
  },
  {
    id: "prop-4",
    imageId: "hero",
    type: "5-Bedroom Villa",
    location: "Asokoro, Abuja",
    price: "₦15,000,000",
    bedrooms: 5,
    bathrooms: 6,
  },
];
