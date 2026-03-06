"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { X, ArrowRight } from "lucide-react"

const painPoints = [
    { problem: "Customers lose paper cards", detail: "They get thrown away, left at home, or forgotten in pockets. Loyalty progress disappears." },
    { problem: "Staff forget to stamp", detail: "During busy hours, stamping gets skipped. Customers feel ignored and stop engaging." },
    { problem: "You can't track anything", detail: "Paper gives you zero data — no way to know who your regulars are, how often they visit, or what's working." },
    { problem: "It looks unprofessional", detail: "Worn-out paper cards don't match the quality of your food and service. Your brand deserves better." }
]

export function Problem() {
    return (
        <section className="py-24 bg-espresso text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F3EFE7_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block"
                    >
                        The problem
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Paper cards are costing you customers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-white/60"
                    >
                        You invest in great coffee and service. But your loyalty system is working against you.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                    {painPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6"
                        >
                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <X className="h-4 w-4 text-clay" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{item.problem}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{item.detail}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-forest/20 border border-forest/30 rounded-full px-6 py-3 text-sage font-medium">
                        There's a better way <ArrowRight className="h-4 w-4" />
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
