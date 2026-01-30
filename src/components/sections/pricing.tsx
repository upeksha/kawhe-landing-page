"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Best for a single café getting started.",
        features: ["Digital stamp card in Wallet", "QR + link distribution", "Basic insights"],
        cta: "Start free trial",
        href: "/signup",
        popular: false
    },
    {
        name: "Growth",
        price: "10 NZD",
        period: "/month",
        description: "For cafés running offers and tracking performance.",
        features: ["Everything in Starter", "Campaign tools", "Deeper analytics"],
        cta: "Book a demo",
        href: "/demo",
        popular: true
    },
    {
        name: "Multi-store",
        price: "Custom",
        description: "For groups and growing brands.",
        features: ["Everything in Growth", "Multi-location support", "Priority onboarding"],
        cta: "Talk to us",
        href: "/demo",
        popular: false
    }
]

export function Pricing() {
    return (
        <section className="py-24 bg-oat/30" id="pricing">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-espresso mb-4">Pricing that stays simple.</h2>
                    <p className="text-lg text-zinc-600">Pick a plan per store. Upgrade when you need more.</p>
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
                                        <Check className="h-4 w-4 text-forest mt-0.5" />
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
