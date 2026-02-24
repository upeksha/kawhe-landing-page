"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-gradient-to-br from-pink via-purple/40 to-brand-light rounded-b-[2rem] md:rounded-b-[3rem]">
                <Container className="relative z-10 py-16 md:py-24 lg:py-32">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6"
                            >
                                Earn money from vouchers that turn into{" "}
                                <span className="text-foreground">loyal customers</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="max-w-lg text-lg text-zinc-600 mb-8"
                            >
                                Get revenue from vouchers, keep customers with loyalty cards, and track data that drives repeat visits.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 mb-4"
                            >
                                <Button size="lg" variant="premium" className="rounded-lg px-8" asChild>
                                    <Link href="/signup">
                                        Create your voucher for FREE
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-sm text-purple italic"
                            >
                                Works with Apple Wallet and Google Wallet
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex-1 relative w-full max-w-[400px] lg:max-w-none"
                        >
                            <Image
                                src="/iphone.png"
                                alt="Kawhe Wallet Pass on iPhone"
                                width={320}
                                height={650}
                                className="w-full max-w-[280px] md:max-w-[320px] h-auto drop-shadow-2xl mx-auto"
                                priority
                            />
                        </motion.div>
                    </div>
                </Container>
            </div>

            {/* Logo strip / social proof */}
            <div className="py-10 overflow-hidden">
                <Container>
                    <div className="flex items-center justify-center gap-12 opacity-60 flex-wrap">
                        {["Off The Hook", "Waterfront Café", "The Daily Grind", "Bean & Leaf", "Rise & Pour", "Espresso Lane", "The Copper Cup"].map((name) => (
                            <span key={name} className="text-lg font-bold text-zinc-400 whitespace-nowrap">
                                {name}
                            </span>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}
