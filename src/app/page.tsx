import { Hero } from "@/components/sections/hero";
import { FAQ } from "@/components/layout/footer";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { Metrics } from "@/components/sections/metrics";
import { HowItWorks } from "@/components/sections/how-it-works";
import { UseCases } from "@/components/sections/use-cases";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { Integrations } from "@/components/sections/integrations";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <div className="selection:bg-forest/20">
      <main>
        <Hero />
        {/* <SocialProof /> */}
        <Features />
        <Metrics />
        <HowItWorks />
        <UseCases />
        <DashboardPreview />
        {/* <Integrations /> */}
        <Pricing />
        <FAQ />
      </main>
    </div>
  );
}
