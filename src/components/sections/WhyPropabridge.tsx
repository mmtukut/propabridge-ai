import { Bot, ShieldCheck, Globe, Users, Code, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'AI-Native Verification',
    description: "Our models are trained on Nigerian data for 99.8% accuracy in identity, document, and property verification.",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Nigeria-First Focus',
    description: "Built for local challenges. We understand the nuances of the Nigerian market, from addressing to legal documentation.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Government-Ready',
    description: 'Enterprise-grade security and compliance-first architecture, ready for public sector partnerships.',
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Developer Friendly',
    description: 'Robust, well-documented APIs for property intelligence, enabling a new generation of real estate innovation.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Unbreakable Trust',
    description: 'A multi-layered approach combining AI, on-ground verification, and secure transactions to eliminate fraud.',
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: 'Continuous Innovation',
    description: 'Led by a team of credentialed experts, we are constantly pushing the boundaries of what\'s possible in PropTech.',
  },
];

export function WhyPropabridge() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Foundational Difference</h2>
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
