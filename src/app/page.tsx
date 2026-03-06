import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Problem } from "@/components/sections/problem";
import { Benefits } from "@/components/sections/benefits";
import { Perspectives } from "@/components/sections/perspectives";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { UseCases } from "@/components/sections/use-cases";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/layout/footer";
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
        <HowItWorks />
        <Problem />
        <Benefits />
        <Perspectives />
        <FeatureGrid />
        <UseCases />
        <Pricing />
        <FAQ items={faqItems} />
      </main>
    </div>
  );
}
