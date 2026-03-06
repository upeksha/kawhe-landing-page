"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Accordion, type AccordionItemType } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const defaultFaqs: AccordionItemType[] = [
    { q: "Do customers need to download an app?", a: "No. Customers join by scanning a QR code or tapping a link. Their digital loyalty card opens instantly in the browser. They can also add it to Apple Wallet or Google Wallet for quick access." },
    { q: "Does Kawhe work with Apple Wallet and Google Wallet?", a: "Yes. Customers can save their loyalty card to Apple Wallet or Google Wallet so it's always just a tap away. It's optional — the card works perfectly in the browser too." },
    { q: "Can staff use their own phone to scan customers?", a: "Yes. The Kawhe scanner app runs on any smartphone — Android or iOS. No special hardware or POS integration needed. Staff just open the app, scan the customer's code, and stamps are added instantly." },
    { q: "How quickly can I launch?", a: "Most businesses set up their first loyalty program in under 10 minutes. Choose a template, add your branding, set your reward rules, and share the QR code. You can start collecting stamps the same day." },
    { q: "Can I run multiple stores?", a: "Yes. The Multi-store plan lets you manage loyalty across multiple locations from a single dashboard. Customers can earn and redeem stamps at any of your stores." },
    { q: "Can I customise the loyalty card design?", a: "Yes. You can add your logo, choose colours, and match the card to your brand. Your loyalty card should feel like an extension of your business, not a generic template." },
    { q: "Is there protection against duplicate scans?", a: "Yes. Kawhe includes built-in fraud protection with time-based scan limits to prevent staff or customers from double-stamping." },
    { q: "What happens when a customer earns a reward?", a: "When a customer reaches the stamp threshold you've set, their reward unlocks automatically. Staff can see and redeem it with a single scan at the counter." }
]

interface FAQProps { items?: AccordionItemType[] | null }

export function FAQ({ items }: FAQProps) {
    const faqItems = items && items.length > 0 ? items : defaultFaqs

    return (
        <section className="py-24 bg-white" id="faq">
            <Container>
                <div className="max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-espresso">Common questions</h2>
                    </motion.div>
                    <Accordion items={faqItems} />
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="relative rounded-[2rem] p-8 md:p-16 text-center text-white overflow-hidden"
                >
                    {/* Rich gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-espresso via-cocoa to-espresso"></div>
                    <div className="absolute top-0 right-0 w-80 h-80 bg-forest/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-clay/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F3EFE7_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Launch your loyalty program in minutes
                        </h2>
                        <p className="text-base md:text-lg text-white/60 mb-10 max-w-2xl mx-auto">
                            Turn one-time visitors into loyal regulars. Set up in minutes, start seeing repeat customers this week.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                            <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-forest to-moss hover:shadow-lg hover:shadow-forest/30 text-white transition-all" asChild>
                                <Link href="https://app.kawhe.shop/register">
                                    Start free trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm" asChild>
                                <Link href="/demo">Book a demo</Link>
                            </Button>
                        </div>
                        <p className="text-sm text-white/35">Free to start. No credit card required.</p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

interface FooterLink { label: string; path: string; }
interface FooterProps { productLinks?: FooterLink[]; companyLinks?: FooterLink[]; }

export function Footer({ productLinks, companyLinks }: FooterProps) {
    const pLinks = productLinks || [
        { label: "How it works", path: "/how-it-works" },
        { label: "Features", path: "#features" },
        { label: "Pricing", path: "#pricing" },
        { label: "FAQ", path: "#faq" },
        { label: "Blog", path: "/blog" }
    ]
    const cLinks = companyLinks || [
        { label: "About", path: "#about" },
        { label: "Contact", path: "#contact" },
        { label: "Terms of Service", path: "/terms-of-service" },
        { label: "Privacy Policy", path: "/privacy-policy" }
    ]

    return (
        <footer className="relative bg-espresso text-oat py-16 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#F3EFE7_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="absolute top-0 left-1/3 w-[400px] h-[200px] bg-forest/10 rounded-full blur-[80px] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/kawhe-logo-svg-export-white.svg" alt="Kawhe Logo" width={40} height={40} className="h-10 w-10" />
                        </div>
                        <p className="text-white/50 max-w-xs mb-6 text-sm leading-relaxed">
                            The digital loyalty platform for cafés and local businesses. Replace paper cards, get more repeat customers.
                        </p>
                        <div className="flex gap-4">
                            <div className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer">
                                <Instagram className="h-4 w-4 text-white/60" />
                            </div>
                            <div className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer">
                                <Linkedin className="h-4 w-4 text-white/60" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-4">Product</h4>
                        <ul className="space-y-2.5 text-sm text-white/50">
                            {pLinks.map((link) => (
                                <li key={link.label} className="hover:text-white cursor-pointer transition-colors">
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm text-white/50">
                            {cLinks.map((link) => (
                                <li key={link.label} className="hover:text-white cursor-pointer transition-colors">
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <div>© {new Date().getFullYear()} Kawhe Inc. All rights reserved.</div>
                </div>
            </Container>
        </footer>
    )
}
