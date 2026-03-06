"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ArrowRight, Smartphone, Clock, Wallet } from "lucide-react"
import Link from "next/link"

export function HiwHero() {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-gradient-to-br from-sage/30 via-oat to-honey/15 rounded-b-[2rem] md:rounded-b-[3rem]">
                <Container className="py-20 md:py-28 lg:py-36">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center rounded-full border border-forest/20 bg-forest/5 px-4 py-1.5 text-sm font-medium text-forest mb-6"
                        >
                            How it works
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-extrabold tracking-tight text-espresso sm:text-5xl md:text-6xl mb-6 leading-[1.1]"
                        >
                            How Kawhe Loyalty works
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-espresso/65 mb-4 max-w-2xl mx-auto leading-relaxed"
                        >
                            From setup to repeat visits, Kawhe gives your business a simple digital loyalty system your customers actually keep.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-base text-espresso/50 mb-10 max-w-xl mx-auto"
                        >
                            Create your program, share a QR code or link, let staff stamp in seconds, and keep customers coming back with a loyalty card on their phone.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
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
                            className="flex flex-wrap items-center justify-center gap-6 text-sm text-espresso/50"
                        >
                            <span className="flex items-center gap-1.5">
                                <Smartphone className="h-3.5 w-3.5" />
                                No customer app download
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" />
                                Setup in minutes
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Wallet className="h-3.5 w-3.5" />
                                Apple &amp; Google Wallet
                            </span>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
