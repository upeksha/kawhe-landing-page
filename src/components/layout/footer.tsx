"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Accordion, type AccordionItemType } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

const defaultFaqs: AccordionItemType[] = [
    { q: "How does Kawhe Loyalty work for my café?", a: "Kawhe replaces physical stamp cards with a digital system. You display a unique QR code in-store, customers scan it to join, and you award digital stamps through the platform. Once customers reach the required number of stamps, they can redeem rewards directly in-store." },
    { q: "Do I need special hardware or equipment?", a: "No. You just need a smartphone or tablet. Customers add the pass to their Apple Wallet or Google Wallet." },
    { q: "How long does it take to set up?", a: "Most cafés can launch the same day. Setup typically takes less than 10 minutes." },
    { q: "Can I customise my loyalty program?", a: "Yes — you can customise your card design, rewards, and campaigns to match your brand." },
    { q: "How does Kawhe Loyalty help increase repeat customers?", a: "By giving customers a convenient, always-available loyalty card in their phone wallet, combined with push notifications and campaign tools." },
    { q: "Is customer data secure?", a: "Yes. We use industry-standard encryption and security practices to protect all customer data." },
    { q: "What if customers don't have Wallet?", a: "Both Apple Wallet and Google Wallet come pre-installed on modern smartphones. Over 95% of customers already have it." }
]

interface FAQProps {
    items?: AccordionItemType[] | null
}

export function FAQ({ items }: FAQProps) {
    const faqItems = items && items.length > 0 ? items : defaultFaqs

    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion items={faqItems} />
                </div>

                <div className="bg-brand rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Ready to replace paper cards with something customers actually keep?
                        </h2>
                        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                            Launch a premium Wallet loyalty pass for your café — fast to set up, easy to use, and built to drive repeat visits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                            <Button size="lg" className="rounded-lg px-8 bg-white text-brand hover:bg-white/90" asChild>
                                <Link href="/demo">
                                    Book a demo
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-lg px-8 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                                <Link href="/signup">Start free trial</Link>
                            </Button>
                        </div>
                        <p className="text-sm text-white/50">We&apos;ll help you get your first pass live.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

interface FooterLink {
    label: string;
    path: string;
}

interface FooterProps {
    productLinks?: FooterLink[];
    companyLinks?: FooterLink[];
}

export function Footer({ productLinks, companyLinks }: FooterProps) {
    const defaultProductLinks = [
        { label: "About", path: "#about" },
        { label: "Features", path: "#features" },
        { label: "Pricing", path: "#pricing" },
        { label: "FAQ", path: "#faq" },
        { label: "Contact", path: "#contact" },
        { label: "Blog", path: "/blog" }
    ]

    const defaultCompanyLinks = [
        { label: "Terms of Service", path: "/terms-of-service" },
        { label: "Privacy Policy", path: "/privacy-policy" }
    ]

    const navLinks = productLinks || defaultProductLinks;
    const policyLinks = companyLinks || defaultCompanyLinks;

    return (
        <footer className="bg-dark text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <Container className="relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/kawhe-logo-svg-export-white.svg"
                                alt="Kawhe Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                        </div>
                        <p className="text-white/60 max-w-xs mb-6">
                            Turn every visit into a reward. Add your card to Apple or Google Wallet and stay connected.
                        </p>
                        <div className="flex gap-4">
                            <Instagram className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            {navLinks.map((link) => (
                                <li key={link.label} className="hover:text-white cursor-pointer transition-colors">
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Policies</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            {policyLinks.map((link) => (
                                <li key={link.label} className="hover:text-white cursor-pointer transition-colors">
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <div>© {new Date().getFullYear()} Kawhe Inc. All rights reserved.</div>
                </div>
            </Container>
        </footer>
    )
}
