"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Store, Users, BarChart3 } from "lucide-react"

const pillars = [
    { icon: Users, label: "Easy for customers", detail: "Join in seconds, track progress on their phone" },
    { icon: Store, label: "Easy for staff", detail: "Scan to stamp or redeem — no training needed" },
    { icon: BarChart3, label: "Easy for owners", detail: "Manage everything from one dashboard" }
]

export function HiwIntro() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-espresso mb-5"
                    >
                        A loyalty system built for real-world business
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-espresso/60 leading-relaxed"
                    >
                        Kawhe replaces paper stamp cards with a digital experience that is easier for customers to keep, easier for staff to manage, and easier for owners to track.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-2xl bg-oat/50 border border-cocoa/8"
                        >
                            <div className="h-12 w-12 rounded-xl bg-forest/10 flex items-center justify-center mx-auto mb-4">
                                <p.icon className="h-6 w-6 text-forest" />
                            </div>
                            <h3 className="font-bold text-espresso mb-1">{p.label}</h3>
                            <p className="text-sm text-espresso/55">{p.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
