"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Everything you need to launch your first loyalty program.",
        features: ["Digital stamp card", "QR code + join link", "Mobile scanner app", "Basic insights", "Apple & Google Wallet"],
        cta: "Start free trial",
        href: "https://app.kawhe.shop/register",
        popular: false
    },
    {
        name: "Growth",
        price: "10 NZD",
        period: "/month",
        description: "For cafés ready to grow their repeat customer base.",
        features: ["Everything in Starter", "Campaign tools", "Deeper analytics", "Custom card design", "Priority support"],
        cta: "Start free trial",
        href: "https://app.kawhe.shop/register",
        popular: true
    },
    {
        name: "Multi-store",
        price: "Custom",
        description: "For groups and growing brands with multiple locations.",
        features: ["Everything in Growth", "Multi-location support", "Centralised management", "Priority onboarding", "Dedicated account manager"],
        cta: "Book a demo",
        href: "/demo",
        popular: false
    }
]

export function Pricing() {
    return (
        <section className="py-24 bg-oat/30" id="pricing">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">Pricing</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">Simple pricing, no surprises</h2>
                    <p className="text-lg text-espresso/60 max-w-xl mx-auto">Start free. Upgrade when you're ready. No lock-in contracts.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 border ${plan.popular ? 'bg-white border-forest shadow-xl scale-105 z-10' : 'bg-white/50 border-cocoa/10'} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-forest text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-espresso mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-espresso">{plan.price}</span>
                                    {plan.period && <span className="text-zinc-500">{plan.period}</span>}
                                </div>
                                <p className="text-sm text-zinc-500 mt-2">{plan.description}</p>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-sm text-zinc-700">
                                        <Check className="h-4 w-4 text-forest mt-0.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "default" : "outline"}
                                className="w-full rounded-xl"
                                asChild
                            >
                                <Link href={plan.href}>{plan.cta}</Link>
                            </Button>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-zinc-500 mt-12">Cancel anytime. No long contracts.</p>
            </Container>
        </section>
    )
}
