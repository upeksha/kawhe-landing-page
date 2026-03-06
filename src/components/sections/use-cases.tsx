"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Coffee, Gift, Star, Calendar, Ticket, Building2 } from "lucide-react"

const cases = [
    {
        icon: Coffee,
        title: "Classic stamp card",
        description: "Buy 9, get the 10th free — the digital version of the card your customers already love.",
        color: "bg-forest",
        iconColor: "text-white/90"
    },
    {
        icon: Gift,
        title: "Reward-based offers",
        description: "Set custom reward thresholds — free coffee, discounts, upgrades — whatever fits your menu.",
        color: "bg-honey",
        iconColor: "text-espresso/80"
    },
    {
        icon: Star,
        title: "VIP member cards",
        description: "Create invite-only cards for your best customers with exclusive perks and early access.",
        color: "bg-clay",
        iconColor: "text-white/90"
    },
    {
        icon: Calendar,
        title: "Seasonal promotions",
        description: "Run limited-time campaigns tied to holidays, new menu items, or slow-day specials.",
        color: "bg-sage",
        iconColor: "text-espresso/80"
    },
    {
        icon: Ticket,
        title: "Voucher campaigns",
        description: "Create and distribute digital vouchers your customers save to their phone wallet.",
        color: "bg-cocoa",
        iconColor: "text-oat"
    },
    {
        icon: Building2,
        title: "Multi-store loyalty",
        description: "Run one loyalty program across multiple locations. Customers earn and redeem anywhere.",
        color: "bg-espresso",
        iconColor: "text-white/90"
    }
]

export function UseCases() {
    return (
        <section className="py-24 bg-white" id="use-cases">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">Use cases</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">Built for more than just stamps</h2>
                    <p className="text-lg text-espresso/60 max-w-2xl mx-auto">Start with a stamp card. Expand into vouchers, VIP programs, and seasonal campaigns as you grow.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl ${item.color} h-full hover:shadow-lg transition-shadow`}
                        >
                            <item.icon className={`h-8 w-8 mb-4 ${item.iconColor}`} />
                            <h3 className={`text-lg font-bold mb-2 ${item.iconColor === "text-espresso/80" ? "text-espresso" : "text-white"}`}>{item.title}</h3>
                            <p className={`text-sm leading-relaxed ${item.iconColor === "text-espresso/80" ? "text-espresso/70" : "text-white/70"}`}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
