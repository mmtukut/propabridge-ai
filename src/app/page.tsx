import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyPropabridge } from '@/components/sections/WhyPropabridge';
import { Testimonials } from '@/components/sections/Testimonials';
import { ForLandlords } from '@/components/sections/ForLandlords';
import { PopularLocations } from '@/components/sections/PopularLocations';
import { Cta } from '@/components/sections/Cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <WhyPropabridge />
      <Testimonials />
      <ForLandlords />
      <PopularLocations />
      <Cta />
    </>
  );
}
