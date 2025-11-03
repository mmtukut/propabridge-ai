import { Bot, ShieldCheck, Banknote, MessagesSquare, Video, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'AI-Powered Search',
    description: "Find properties in 30 seconds. Our AI understands 'near my office' or 'quiet area with good schools.'",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Verified Listings Only',
    description: "Every property, every landlord, every document verified. If it's on Propabridge, it's real.",
  },
  {
    icon: <Banknote className="w-8 h-8 text-primary" />,
    title: 'Zero Upfront Fees',
    description: 'No registration fees. No search fees. No hidden charges. You only pay when you find your home.',
  },
  {
    icon: <MessagesSquare className="w-8 h-8 text-primary" />,
    title: 'Direct Landlord Contact',
    description: 'No middleman. No inflated prices. Connect directly with verified property owners.',
  },
  {
    icon: <Video className="w-8 h-8 text-primary" />,
    title: 'Virtual Tours',
    description: 'Explore properties from your couch. 360° tours, neighborhood insights, nearby amenities.',
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    title: 'Fraud Protection',
    description: 'Industry-first fraud prevention. Document verification. Secure payments. Your money is safe.',
  },
];

export function WhyPropabridge() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why 2,000+ Nigerians Choose Propabridge</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white text-left p-6 border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
