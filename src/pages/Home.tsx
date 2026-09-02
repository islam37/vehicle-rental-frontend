import Hero from '../components/home/Hero';
import CategoryGrid from '../components/home/CategoryGrid';
import HowItWorks from '../components/home/HowItWorks';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <HowItWorks />
      <CTABanner />
    </div>
  );
}