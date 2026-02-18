"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Accordion } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

const faqs = [
    {
        q: "Does the customer need to download an app?",
        a: "No. Customers add Kawhe to Apple Wallet or Google Wallet."
    },
    {
        q: "How do customers join?",
        a: "They scan a QR code or open a link and add the pass in seconds."
    },
    {
        q: "How do we stamp visits?",
        a: "Staff stamp with a quick scan/tap workflow designed for busy counters."
    },
    {
        q: "Can we run limited-time offers?",
        a: "Yes — you can run simple promotions and adjust rewards without reprinting anything."
    },
    {
        q: "Is it easy to set up?",
        a: "Yes. Most cafés can launch the same day."
    },
    {
        q: "Do you support multiple stores?",
        a: "Yes — Kawhe supports multi-store setups (best for small groups and franchises)."
    }
]

export function FAQ() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-espresso mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion items={faqs} />
                </div>

                {/* Final CTA */}
                <div className="bg-espresso rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-forest/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-clay/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Ready to replace paper cards with something customers actually keep?
                        </h2>
                        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                            Launch a premium Wallet loyalty pass for your café — fast to set up, easy to use, and built to drive repeat visits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                            <Button size="lg" className="rounded-full px-8 bg-forest hover:bg-forest/90 text-white" asChild>
                                <Link href="/demo">
                                    Book a demo
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 bg-transparent" asChild>
                                <Link href="/signup">Start free trial</Link>
                            </Button>
                        </div>
                        <p className="text-sm text-white/40">We’ll help you get your first pass live.</p>
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
        { label: "Features", path: "#features" },
        { label: "Pricing", path: "#pricing" },
        { label: "Showcase", path: "#showcase" },
        { label: "API", path: "#api" }
    ]

    const defaultCompanyLinks = [
        { label: "About", path: "#about" },
        { label: "Blog", path: "/blog" },
        { label: "Careers", path: "#careers" },
        { label: "Contact", path: "#contact" }
    ]

    const pLinks = productLinks || defaultProductLinks;
    const cLinks = companyLinks || defaultCompanyLinks;

    return (
        <footer className="bg-espresso text-oat py-16">
            <Container>
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
                            The premium digital loyalty solution for modern cafés.
                            Apple Wallet & Google Pay ready.
                        </p>
                        <div className="flex gap-4">
                            <Instagram className="h-5 w-5 text-white/60 hover:text-white cursor-pointer" />
                            <Twitter className="h-5 w-5 text-white/60 hover:text-white cursor-pointer" />
                            <Linkedin className="h-5 w-5 text-white/60 hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            {pLinks.map((link) => (
                                <li key={link.label} className="hover:text-white cursor-pointer">
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            {cLinks.map((link) => (
                                <li key={link.label} className="hover:text-white cursor-pointer">
                                    <Link href={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <div>© {new Date().getFullYear()} Kawhe Inc. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
