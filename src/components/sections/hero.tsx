"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-gradient-to-br from-sage/30 via-oat to-honey/15 rounded-b-[2rem] md:rounded-b-[3rem]">
                <Container className="relative z-10 py-16 md:py-24 lg:py-32">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="inline-flex items-center rounded-full border border-forest/20 bg-forest/5 px-3 py-1 text-sm font-medium text-forest mb-6"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-forest mr-2"></span>
                                The digital loyalty platform for cafés
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl font-extrabold tracking-tight text-espresso sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl mb-6 leading-[1.1]"
                            >
                                Turn every visit into a reason to{" "}
                                <span className="text-forest">come back</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="max-w-lg text-lg text-espresso/70 mb-8 leading-relaxed"
                            >
                                Replace paper stamp cards with a digital loyalty program your customers actually use. They join via QR code, collect stamps on their phone, and keep coming back.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-3 mb-6"
                            >
                                <Button size="lg" variant="premium" className="rounded-full px-8" asChild>
                                    <Link href="https://app.kawhe.shop/register">
                                        Start free trial
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/60 border-cocoa/20 hover:bg-white" asChild>
                                    <Link href="/demo">Book a demo</Link>
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-center gap-4 text-sm text-espresso/50"
                            >
                                <span>No credit card required</span>
                                <span className="w-1 h-1 rounded-full bg-espresso/30"></span>
                                <span>Set up in under 10 minutes</span>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex-1 relative w-full max-w-[420px] lg:max-w-none"
                        >
                            <div className="relative">
                                <Image
                                    src="/iphone.png"
                                    alt="Digital loyalty card on customer's phone"
                                    width={320}
                                    height={650}
                                    className="w-full max-w-[260px] md:max-w-[300px] h-auto drop-shadow-2xl mx-auto relative z-10"
                                    priority
                                />
                                <div className="absolute -top-4 -right-4 md:right-0 w-48 md:w-56 bg-white rounded-2xl shadow-xl border border-cocoa/10 p-4 z-20">
                                    <div className="text-xs font-semibold text-espresso/60 mb-1">Dashboard</div>
                                    <div className="text-lg font-bold text-espresso">247 active customers</div>
                                    <div className="text-xs text-forest font-medium mt-1">↑ 18% this month</div>
                                </div>
                                <div className="absolute -bottom-2 -left-4 md:left-0 w-44 md:w-52 bg-white rounded-2xl shadow-xl border border-cocoa/10 p-4 z-20">
                                    <div className="text-xs font-semibold text-espresso/60 mb-1">Staff scanner</div>
                                    <div className="text-sm font-bold text-forest">✓ Stamp added</div>
                                    <div className="text-xs text-espresso/50 mt-1">6 of 9 stamps collected</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>

            <div className="py-10 border-b border-cocoa/5">
                <Container>
                    <p className="text-center text-sm text-espresso/40 mb-6 font-medium">Trusted by cafés and local businesses</p>
                    <div className="flex items-center justify-center gap-10 md:gap-14 opacity-40 flex-wrap">
                        {["Off The Hook", "Waterfront Café", "The Daily Grind", "Bean & Leaf", "Rise & Pour", "Espresso Lane"].map((name) => (
                            <span key={name} className="text-base font-bold text-cocoa whitespace-nowrap">
                                {name}
                            </span>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}
