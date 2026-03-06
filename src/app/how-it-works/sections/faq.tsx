"use client"

import { Container } from "@/components/ui/container"
import { Accordion, type AccordionItemType } from "@/components/ui/accordion"

const faqItems: AccordionItemType[] = [
    { q: "Do customers need to download an app?", a: "No. Customers join by scanning a QR code or tapping a link. Their loyalty card opens in the browser and can be saved to Apple Wallet or Google Wallet. No app download needed." },
    { q: "Can Kawhe work with Apple Wallet and Google Wallet?", a: "Yes. Customers can add their loyalty card to Apple Wallet or Google Wallet for quick access. It's an optional feature — the card works just as well in the browser." },
    { q: "Can staff use their phone to stamp customers?", a: "Yes. Staff open the scanner on any smartphone — Android or iOS. They scan the customer's code, add a stamp, and the card updates instantly. No special hardware required." },
    { q: "Can I customise the loyalty card?", a: "Yes. You can add your logo, choose your brand colours, set your reward rules, and make the card feel like a natural extension of your business." },
    { q: "How quickly can I launch?", a: "Most businesses set up and launch in under 10 minutes. Create your program, add your branding, and share the QR code — you can start stamping the same day." },
    { q: "Can I run Kawhe across multiple stores?", a: "Yes. The multi-store plan lets you manage loyalty across all your locations from a single dashboard. Customers earn and redeem stamps at any store." }
]

export function HiwFaq() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-espresso">Common questions</h2>
                    </div>
                    <Accordion items={faqItems} />
                </div>
            </Container>
        </section>
    )
}
