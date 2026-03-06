"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { TrendingUp, Zap, Leaf, Eye } from "lucide-react"

const benefits = [
    {
        icon: TrendingUp,
        title: "More repeat visits",
        description: "Customers see their stamp progress every time they open their phone. That visibility drives return visits without you lifting a finger.",
        accent: "bg-forest/10 text-forest"
    },
    {
        icon: Zap,
        title: "Faster at the counter",
        description: "One scan to stamp, one scan to redeem. No fumbling with paper cards. Staff stay focused on making great coffee.",
        accent: "bg-clay/10 text-clay"
    },
    {
        icon: Leaf,
        title: "No more paper waste",
        description: "Ditch the paper cards, the printing costs, and the counter clutter. Everything lives on your customer's phone.",
        accent: "bg-moss/10 text-moss"
    },
    {
        icon: Eye,
        title: "See what's working",
        description: "Know exactly who your regulars are, how often they visit, and when they redeem. Real data, not guesswork.",
        accent: "bg-honey/10 text-honey"
    }
]

export function Benefits() {
    return (
        <section className="py-24 bg-oat/30" id="benefits">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">Why Kawhe</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">Built for the results that matter</h2>
                    <p className="text-lg text-espresso/60 max-w-2xl mx-auto">Not just a digital card — a system designed to bring customers back and make your operations easier.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-cocoa/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`h-12 w-12 rounded-2xl ${benefit.accent} flex items-center justify-center mb-5`}>
                                <benefit.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-espresso mb-3">{benefit.title}</h3>
                            <p className="text-espresso/60 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
