"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { TrendingUp, Zap, Leaf, Eye } from "lucide-react"

const benefits = [
    { icon: TrendingUp, title: "More repeat visits", description: "Customers see stamp progress every time they open their phone. That visibility drives return visits without you lifting a finger.", gradient: "from-forest to-moss" },
    { icon: Zap, title: "Faster at the counter", description: "One scan to stamp, one scan to redeem. No fumbling with paper. Staff stay focused on making great coffee.", gradient: "from-clay to-honey" },
    { icon: Leaf, title: "No more paper waste", description: "Ditch paper cards, printing costs, and counter clutter. Everything lives on your customer's phone.", gradient: "from-moss to-sage" },
    { icon: Eye, title: "See what's working", description: "Know exactly who your regulars are, how often they visit, and when they redeem. Real data, not guesswork.", gradient: "from-honey to-clay" }
]

const cardVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }
    })
}

export function Benefits() {
    return (
        <section className="py-24 relative overflow-hidden" id="benefits">
            <div className="absolute inset-0 bg-gradient-warm"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] glow-warm rounded-full pointer-events-none"></div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">Why Kawhe</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-espresso mb-4">Built for the results that matter</h2>
                    <p className="text-lg text-espresso/55 max-w-xl mx-auto">Not just a digital card — a system designed to bring customers back.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} initial="hidden" whileInView="visible" custom={index}
                            viewport={{ once: true }}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-cocoa/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                                <benefit.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-espresso mb-3">{benefit.title}</h3>
                            <p className="text-espresso/55 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
