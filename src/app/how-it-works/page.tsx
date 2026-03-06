import type { Metadata } from "next";
import { HiwHero } from "./sections/hero";
import { HiwIntro } from "./sections/intro";
import { HiwSteps } from "./sections/steps";
import { HiwPaper } from "./sections/paper";
import { HiwExtras } from "./sections/extras";
import { HiwFaq } from "./sections/faq";
import { HiwCta } from "./sections/cta";

export const metadata: Metadata = {
    title: "How It Works | Kawhe Loyalty",
    description: "See how Kawhe Loyalty replaces paper stamp cards with a simple digital loyalty system. Set up in minutes, stamp with a scan, keep customers coming back.",
};

export default function HowItWorksPage() {
    return (
        <div className="selection:bg-forest/20">
            <main>
                <HiwHero />
                <HiwIntro />
                <HiwSteps />
                <HiwPaper />
                <HiwExtras />
                <HiwFaq />
                <HiwCta />
            </main>
        </div>
    );
}
