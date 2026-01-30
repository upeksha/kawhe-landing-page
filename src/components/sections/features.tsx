"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Smartphone, Bell, BarChart3 } from "lucide-react"

const features = [
    {
        icon: Smartphone,
        title: "Stamp instantly",
        description: "Add a stamp with a quick scan or tap. Customers see progress update immediately — no guessing, no lost cards."
    },
    {
        icon: Bell,
        title: "No app. No friction.",
        description: "Customers keep it in Apple Wallet or Google Wallet — right where they already pay. One pass, always available."
    },
    {
        icon: BarChart3,
        title: "Know what’s working",
        description: "See adds, active customers, redemptions, and performance by offer — without complicated reporting."
    }
]

export function Features() {
    return (
        <section className="py-24 bg-white" id="features">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-espresso sm:text-4xl mb-4">
                        Loyalty that lives in your customer’s Wallet.
                    </h2>
                    <p className="text-lg text-zinc-600">
                        Powerful tools integrated directly into the wallet passes your customers already love.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl bg-oat/50 border border-cocoa/10 hover:bg-white hover:shadow-xl hover:shadow-cocoa/5 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="h-12 w-12 rounded-2xl bg-forest/10 flex items-center justify-center mb-6 group-hover:bg-forest/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-forest" />
                            </div>
                            <h3 className="text-xl font-bold text-espresso mb-3">{feature.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
