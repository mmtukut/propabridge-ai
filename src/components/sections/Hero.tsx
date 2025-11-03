import { Button } from '@/components/ui/button';
import { Search, Shield, Zap, CheckCircle, Home } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const TrustBadge = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-sm text-center">
    <p className="text-2xl md:text-3xl font-bold text-primary">{value}</p>
    <p className="text-sm font-medium text-gray-700">{label}</p>
  </div>
);

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-100/30 via-white to-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="container max-w-7xl text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building Nigeria's Infrastructure for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-coral">
                    Trust in Property
                </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                A deep-tech firm powering real estate with AI-native verification, fraud prevention, and market intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button href="/search" size="xl" rounded="full">
                    <Search className="w-5 h-5 mr-2" />
                    Find a Verified Property
                </Button>
                <Button href="/landlords" variant="ghost" size="xl" rounded="full">
                    Explore Enterprise Solutions
                </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                <TrustBadge value="99.8%" label="Verification Accuracy" />
                <TrustBadge value="1M+" label="Properties Analyzed" />
                <TrustBadge value="₦50B+" label="Value Secured" />
                <TrustBadge value="100%" label="Fraud-Free" />
            </div>
        </div>
    </section>
  );
};
