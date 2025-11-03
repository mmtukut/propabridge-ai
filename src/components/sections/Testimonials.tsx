import Image from 'next/image';
import { Star, Shield, FileText, Home, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials } from '@/lib/placeholder-data';

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const image = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border-none rounded-2xl">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-yellow fill-accent-yellow' : 'text-gray-300'}`} />
          ))}
        </div>
        <blockquote className="text-lg text-gray-700 flex-grow">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-6 flex items-center">
          {image && (
            <Image
              src={image.imageUrl}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full mr-4"
              data-ai-hint={image.imageHint}
            />
          )}
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
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
    { icon: <CreditCard className="w-6 h-6" />, text: "Secure Payments" },
]

export function Testimonials() {
  return (
    <section className="bg-primary-100/30 py-20 lg:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Thousands of Nigerian Property Seekers
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900">How We Keep You Safe</h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {safetyBadges.map(badge => (
                    <div key={badge.text} className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
                        <div className="text-primary">{badge.icon}</div>
                        <p className="font-medium text-gray-700 text-center">{badge.text}</p>
                    </div>
                ))}
            </div>
             <div className="mt-10">
                 <Button href="/trust-safety" variant="secondary" size="lg" rounded="full">
                    See How Verification Works
                </Button>
             </div>
        </div>
      </div>
    </section>
  );
}
