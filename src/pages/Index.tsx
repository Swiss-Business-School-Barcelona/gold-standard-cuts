import { HeroSection } from '@/components/sections/HeroSection';
import { PurposeSection } from '@/components/sections/PurposeSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { MovementSection } from '@/components/sections/MovementSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { WhyCompaniesSection } from '@/components/sections/WhyCompaniesSection';
import { SponsorBenefitsSection } from '@/components/sections/SponsorBenefitsSection';
import { LocationsSection } from '@/components/sections/LocationsSection';
import { ClosingSection } from '@/components/sections/ClosingSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PurposeSection />
      <ProblemSection />
      <SolutionSection />
      <MovementSection />
      <MetricsSection />
      <WhyCompaniesSection />
      <SponsorBenefitsSection />
      <LocationsSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
