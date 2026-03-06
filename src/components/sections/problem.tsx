"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { X, ArrowRight } from "lucide-react"

const painPoints = [
    { problem: "Customers lose paper cards", detail: "Thrown away, left at home, or forgotten in pockets. Loyalty progress vanishes." },
    { problem: "Staff forget to stamp", detail: "During busy hours, stamping gets skipped. Customers disengage." },
    { problem: "You can't track anything", detail: "Paper gives zero data — no way to know who your regulars are or what's working." },
    { problem: "It looks unprofessional", detail: "Worn-out cards don't match the quality of your food and service." }
]

const cardVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.5, delay: i * 0.1 }
    })
}

export function Problem() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-espresso via-cocoa to-espresso"></div>
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#F3EFE7_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-clay/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-forest/10 rounded-full blur-[100px] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block"
                    >The problem</motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
                    >
                        Paper cards are costing you customers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
                        className="text-base text-white/50"
                    >
                        You invest in great coffee and service. But your loyalty system is working against you.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
                    {painPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} initial="hidden" whileInView="visible" custom={index}
                            viewport={{ once: true }}
                            className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-colors duration-300"
                        >
                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <X className="h-4 w-4 text-clay" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{item.problem}</h3>
                                    <p className="text-sm text-white/45 leading-relaxed">{item.detail}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-forest/20 backdrop-blur-sm border border-forest/30 rounded-full px-6 py-3 text-sage font-medium text-sm shadow-lg shadow-forest/10">
                        There&apos;s a better way <ArrowRight className="h-4 w-4" />
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
