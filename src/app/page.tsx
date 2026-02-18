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
import { getPostsByCategoryName } from "@/lib/wordpress";

export default async function Home() {
  let faqItems: { q: string; a: string; isHtml?: boolean }[] | null = null;
  try {
    const faqPosts = await getPostsByCategoryName("faq");
    faqItems = faqPosts.map((p) => ({
      q: p.title,
      a: p.content,
      isHtml: true,
    }));
  } catch (e) {
    console.warn("Could not fetch FAQ posts from WordPress:", e);
  }

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
        <FAQ items={faqItems} />
      </main>
    </div>
  );
}
