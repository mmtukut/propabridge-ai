import { MessageSquare, ShieldCheck, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: 'Describe Your Dream Home',
    description: "Just tell our AI what you're looking for — in your own words. '3-bedroom flat in Lekki, budget ₦2-3M, parking essential.' Done.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent-green" />,
    title: 'Browse 100% Verified Listings',
    description: 'Every property verified before publication. Real photos, accurate prices, authentic landlords. No fake listings. Ever.',
  },
  {
    icon: <KeyRound className="w-10 h-10 text-accent-yellow" />,
    title: 'Connect & Move In',
    description: 'Chat directly with landlords. Schedule viewings. Complete transactions securely. Average time from search to keys: 48 hours.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How Propabridge Works</h2>
          <p className="mt-4 text-xl text-gray-600">From search to keys in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center items-center mb-6">
                <div className="bg-primary-100 rounded-full p-4">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/search" size="lg" variant="coral" rounded="full">
            Try It Now — It's Free
          </Button>
        </div>
      </div>
    </section>
  );
}
