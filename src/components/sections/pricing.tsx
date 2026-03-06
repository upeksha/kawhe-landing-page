"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const plans = [
    {
        name: "Starter", price: "Free",
        description: "Everything you need to launch your first loyalty program.",
        features: ["Digital stamp card", "QR code + join link", "Mobile scanner app", "Basic insights", "Apple & Google Wallet"],
        cta: "Start free trial", href: "https://app.kawhe.shop/register", popular: false
    },
    {
        name: "Growth", price: "10 NZD", period: "/month",
        description: "For cafés ready to grow their repeat customer base.",
        features: ["Everything in Starter", "Campaign tools", "Deeper analytics", "Custom card design", "Priority support"],
        cta: "Start free trial", href: "https://app.kawhe.shop/register", popular: true
    },
    {
        name: "Multi-store", price: "Custom",
        description: "For groups and growing brands with multiple locations.",
        features: ["Everything in Growth", "Multi-location support", "Centralised management", "Priority onboarding", "Dedicated account manager"],
        cta: "Book a demo", href: "/demo", popular: false
    }
]

export function Pricing() {
    return (
        <section className="py-24 relative overflow-hidden" id="pricing">
            <div className="absolute inset-0 bg-gradient-warm"></div>
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] glow-warm rounded-full pointer-events-none"></div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">Pricing</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-espresso mb-4">Simple pricing, no surprises</h2>
                    <p className="text-lg text-espresso/55 max-w-xl mx-auto">Start free. Upgrade when you&apos;re ready. No lock-in contracts.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }} viewport={{ once: true }}
                            className={`relative rounded-2xl p-7 border flex flex-col transition-all duration-300 ${
                                plan.popular
                                    ? 'bg-white border-forest/20 shadow-xl shadow-forest/10 scale-[1.03] z-10'
                                    : 'bg-white/70 backdrop-blur-sm border-cocoa/10 hover:shadow-lg hover:-translate-y-1'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-forest to-moss text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-espresso mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-espresso">{plan.price}</span>
                                    {plan.period && <span className="text-espresso/45">{plan.period}</span>}
                                </div>
                                <p className="text-sm text-espresso/50 mt-2">{plan.description}</p>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, fi) => (
                                    <li key={fi} className="flex items-start gap-3 text-sm text-espresso/65">
                                        <Check className="h-4 w-4 text-forest mt-0.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "premium" : "outline"}
                                className={`w-full rounded-xl ${plan.popular ? "shadow-md shadow-forest/20" : ""}`}
                                asChild
                            >
                                <Link href={plan.href}>{plan.cta}</Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-sm text-espresso/40 mt-12">Cancel anytime. No long contracts.</p>
            </Container>
        </section>
    )
}
