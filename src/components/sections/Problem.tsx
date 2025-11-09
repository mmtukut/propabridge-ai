import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stats = [
    { value: "78%", label: "Encounter Fake Listings" },
    { value: "₦500B+", label: "Lost to Fraud Yearly" },
    { value: "6-8 Weeks", label: "Average Search Time" },
];

const problemImage = PlaceHolderImages.find(p => p.id === 'problem');

export function Problem() {
    return (
        <section className="bg-background py-20 lg:py-32 relative">
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[150px] animate-pulse-slow" />
            </div>
            <div className="container max-w-7xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg group">
                        {problemImage && (
                            <Image
                                src={problemImage.imageUrl}
                                alt={problemImage.description}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-ai-hint={problemImage.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight">
                            The ₦500 Billion Trust Deficit
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nigeria's real estate market is plagued by a fundamental lack of trust. Every year, over ₦500 billion is lost to property fraud, affecting millions. 78% of renters encounter fake listings, turning a home search into a 6-8 week ordeal filled with risk and inefficiency.
                        </p>
                        <p className="text-xl text-foreground font-semibold">We are solving this problem at its core by building the infrastructure for trust.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {stats.map(stat => (
                                <Card key={stat.label} className="bg-card/50 border-border/50 text-center backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <p className="text-3xl font-bold text-primary font-mono">{stat.value}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
