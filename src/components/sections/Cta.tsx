import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function Cta() {
  return (
    <section className="bg-gradient-to-br from-primary-100 to-white py-20 lg:py-32">
      <div className="container max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Ready to Transform Property in Nigeria?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Join governments, enterprises, and innovators building the future of African real estate.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button href="/search" size="xl" rounded="full">
            Start Your Search
          </Button>
          <Button href="/contact" variant="ghost" size="xl" rounded="full">
            Partner With Us
          </Button>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-accent-green" />
            <span>AI-Powered Search</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-accent-green" />
            <span>100% free to browse</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-accent-green" />
            <span>Verified listings only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
