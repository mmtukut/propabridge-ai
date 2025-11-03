import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stats = [
    { value: "78%", label: "Encounter Fake Listings" },
    { value: "₦500B+", label: "Lost to Fraud Yearly" },
    { value: "6-8 Weeks", label: "Average Search Time" },
]

const problemImage = PlaceHolderImages.find(p => p.id === 'problem');

export function Problem() {
    return (
        <section className="bg-background py-20 lg:py-24">
            <div className="container max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                        {problemImage && (
                            <Image
                                src={problemImage.imageUrl}
                                alt={problemImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={problemImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            The ₦500 Billion Trust Deficit
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Nigeria's real estate market is plagued by a fundamental lack of trust. Every year, over ₦500 billion is lost to property fraud, affecting millions. 78% of renters encounter fake listings, turning a home search into a 6-8 week ordeal filled with risk and inefficiency.
                        </p>
                        <p className="text-lg text-gray-800 font-semibold">We are solving the problem at its core by building the infrastructure for trust.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {stats.map(stat => (
                                <Card key={stat.label} className="bg-primary-100/50 border-primary-100 text-center">
                                    <CardContent className="p-4">
                                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                        <p className="text-sm text-gray-600">{stat.label}</p>
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
