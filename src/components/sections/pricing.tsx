"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
    {
        name: "Basic",
        price: "29,90€",
        period: "/monthly",
        description: "Best for a single café getting started.",
        features: ["Basic analytics", "Access roles", "Unlimited customers/cards", "Points, Stamps, Discounts, Coupons, Membership"],
        cta: "Start for FREE",
        href: "/signup",
        popular: false,
        enterprise: false,
    },
    {
        name: "Advanced",
        price: "49,90€",
        period: "/monthly",
        description: "For cafés running offers and tracking performance.",
        features: ["Everything in Basic", "Personalized push notifications", "Integrations POS", "QR scanner", "Custom design"],
        cta: "Start for FREE",
        href: "/signup",
        popular: false,
        enterprise: false,
    },
    {
        name: "Professional",
        price: "79,90€",
        period: "/monthly",
        description: "For cafés needing advanced tools and integrations.",
        features: ["Everything in Advanced", "Integrations suite (POS, ecomm)", "Predefined campaigns", "Advanced analytics", "Vouchers", "Priority support"],
        cta: "Start for FREE",
        href: "/signup",
        popular: false,
        enterprise: false,
    },
    {
        name: "Enterprise",
        price: "Contact us",
        description: "For groups and growing brands.",
        features: ["Everything in Professional", "Custom integrations", "5+ locations", "API access", "Custom functionality"],
        cta: "Speak to an Expert",
        href: "/demo",
        popular: false,
        enterprise: true,
    }
]

export function Pricing() {
    return (
        <section className="py-24 bg-white" id="pricing">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Simple, Transparent{" "}
                        <span className="bg-brand-light text-brand px-2 py-0.5">Pricing</span>{" "}
                        for Every Stage
                    </h2>
                    <p className="text-lg text-zinc-500">Choose the plan that fits your business</p>
                </div>

                <div className="flex items-center justify-center gap-3 mb-12">
                    <span className="text-sm text-zinc-600 font-medium">Monthly</span>
                    <div className="w-12 h-6 rounded-full bg-zinc-200 relative cursor-pointer">
                        <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform"></div>
                    </div>
                    <span className="text-sm text-zinc-600 font-medium">Yearly</span>
                    <span className="bg-pink text-foreground text-xs font-semibold px-2 py-1 rounded-full">Save up to 20%</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-6 border flex flex-col ${
                                plan.enterprise
                                    ? "bg-brand text-white border-brand"
                                    : "bg-white border-zinc-200 hover:shadow-lg transition-shadow"
                            }`}
                        >
                            <div className="mb-6">
                                <h3 className={`text-lg font-bold mb-2 ${plan.enterprise ? "text-white" : "text-foreground"}`}>
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-3xl font-extrabold ${plan.enterprise ? "text-white" : "text-foreground"}`}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className={plan.enterprise ? "text-white/70" : "text-zinc-500"}>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <Button
                                variant={plan.enterprise ? "outline" : "default"}
                                className={`w-full rounded-lg mb-6 ${
                                    plan.enterprise
                                        ? "border-white text-white hover:bg-white/10 bg-transparent"
                                        : ""
                                }`}
                                asChild
                            >
                                <Link href={plan.href}>{plan.cta}</Link>
                            </Button>

                            <ul className="space-y-3 flex-1">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className={`flex items-start gap-3 text-sm ${
                                        plan.enterprise ? "text-white/90" : "text-zinc-700"
                                    }`}>
                                        <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                                            plan.enterprise ? "text-white" : "text-brand"
                                        }`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-zinc-500 mt-12">Cancel anytime. No long contracts.</p>
            </Container>
        </section>
    )
}
