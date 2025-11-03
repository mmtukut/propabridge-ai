import { Bot, ShieldCheck, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: 'Propabridge AI Search (B2C)',
    description: "For Renters & Buyers: Find verified properties in seconds using natural language. Our AI understands your needs, eliminating fraud and endless searching.",
    target: "For Renters & Buyers"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent-green" />,
    title: 'Propabridge Verify (B2B/B2G)',
    description: 'For Landlords & Gov: An enterprise-grade platform for AI-powered identity, document, and property verification, ensuring compliance and de-risking investments.',
    target: "For Enterprise & Government"
  },
  {
    icon: <KeyRound className="w-10 h-10 text-accent-yellow" />,
    title: 'Propabridge Intelligence (API)',
    description: 'For Developers: Access our robust APIs for geospatial data, market trends, and property intelligence to build next-generation real estate applications.',
    target: "For Developers"
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Foundational Infrastructure</h2>
          <p className="mt-4 text-xl text-gray-600">Three core products powering the future of African real estate.</p>
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
          <Button href="/contact" size="lg" variant="coral" rounded="full">
            Explore Our Technology
          </Button>
        </div>
      </div>
    </section>
  );
}
