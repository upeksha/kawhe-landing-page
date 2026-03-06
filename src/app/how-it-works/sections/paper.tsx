"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ShieldCheck, Zap, BarChart3, Smile } from "lucide-react"

const reasons = [
    {
        icon: Smile,
        title: "Customers stop losing their progress",
        description: "Their loyalty card lives on their phone. No more lost, forgotten, or damaged paper cards."
    },
    {
        icon: Zap,
        title: "Staff stop dealing with paper cards",
        description: "One scan to stamp, one scan to redeem. Faster service, fewer mistakes, no paper to manage."
    },
    {
        icon: ShieldCheck,
        title: "Rewards are easier to track and redeem",
        description: "Clear stamp counts, automatic reward unlocking, and secure verification — all digital."
    },
    {
        icon: BarChart3,
        title: "Owners get better visibility",
        description: "See who your regulars are, how often they visit, and what drives repeat business. Paper can't tell you that."
    }
]

export function HiwPaper() {
    return (
        <section className="py-24 bg-espresso text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F3EFE7_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block"
                    >
                        Why go digital
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Why digital works better than paper cards
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
                        >
                            <div className="h-10 w-10 rounded-xl bg-forest/20 flex items-center justify-center mb-4">
                                <reason.icon className="h-5 w-5 text-sage" />
                            </div>
                            <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                            <p className="text-sm text-white/55 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
