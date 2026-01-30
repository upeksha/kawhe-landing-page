"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const stats = [
    { value: "0–10 min", label: "Setup time — From sign-up to your first pass." },
    { value: "1 scan", label: "To stamp — Fast at the counter." },
    { value: "Wallet-first", label: "Experience — No download required." },
    { value: "Clear rewards", label: "Customers always know what’s next." }
]

export function Metrics() {
    return (
        <section className="py-20 bg-forest text-oat relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F3EFE7_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">A smarter way to run loyalty.</h2>
                    <p className="text-lg text-sage/80">Track the basics that actually matter: adoption, usage, and reward redemptions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-sage/80 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
