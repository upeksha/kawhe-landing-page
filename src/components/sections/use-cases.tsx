"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Coffee, Gift, Star, Calendar } from "lucide-react"

const cases = [
    {
        icon: Coffee,
        title: "Classic stamp card",
        description: "Buy 9, get 1 free — in Wallet.",
        color: "bg-forest",
        text: "text-white"
    },
    {
        icon: Gift,
        title: "Free coffee reward",
        description: "Clear progress. Easy redemption.",
        color: "bg-honey",
        text: "text-espresso"
    },
    {
        icon: Star,
        title: "VIP perks",
        description: "Treat regulars with member-only offers.",
        color: "bg-clay",
        text: "text-white"
    },
    {
        icon: Calendar,
        title: "Seasonal campaigns",
        description: "Limited-time rewards and specials.",
        color: "bg-sage",
        text: "text-espresso"
    },
    {
        icon: Coffee,
        title: "Slow-day boost",
        description: "Run a quick promo when you need it.",
        color: "bg-cocoa",
        text: "text-oat"
    },
    {
        icon: Star,
        title: "Multi-store ready",
        description: "Great for small groups and growing brands.",
        color: "bg-espresso",
        text: "text-white"
    }
]

export function UseCases() {
    return (
        <section className="py-24 bg-white" id="use-cases">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">Versatility</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">Made for everyday café loyalty.</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl ${item.color} ${item.text} h-full flex flex-col justify-between hover:shadow-lg transition-shadow`}
                        >
                            <div>
                                <item.icon className={`h-8 w-8 mb-4 ${item.text === "text-white" ? "text-white/90" : "text-espresso/80"}`} />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className={`opacity-90 leading-relaxed text-sm`}>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
