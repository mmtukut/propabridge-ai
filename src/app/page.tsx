import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyPropabridge } from '@/components/sections/WhyPropabridge';
import { Testimonials } from '@/components/sections/Testimonials';
import { ForLandlords } from '@/components/sections/ForLandlords';
import { Cta } from '@/components/sections/Cta';
import { PopularLocations } from '@/components/sections/PopularLocations';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <WhyPropabridge />
      <PopularLocations />
      <Testimonials />
      <ForLandlords />
      <Cta />
    </>
  );
}
