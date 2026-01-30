"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
            <Container className="relative z-10 flex flex-col items-center text-center">
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-cocoa/20 bg-cocoa/5 px-3 py-1 text-sm font-medium text-cocoa mb-6"
                >
                    <span className="flex h-2 w-2 rounded-full bg-forest mr-2"></span>
                    Designed for cafés. Built for repeat visits.
                </motion.div> */}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl text-5xl font-extrabold tracking-tight text-espresso sm:text-6xl md:text-7xl lg:text-8xl mb-6"
                >
                    Loyalty that lives in your customer’s <span className="text-forest bg-clip-text">Wallet.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg text-espresso/70 sm:text-xl mb-10"
                >
                    Replace paper stamp cards with a premium Apple Wallet & Google Wallet pass. Customers add it in seconds — you stamp in real time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                    <Button size="lg" variant="premium" className="rounded-full px-8" asChild>
                        <Link href="/demo">
                            Book a demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 bg-oat border-cocoa/20 hover:bg-cocoa/5" asChild>
                        <Link href="/signup">Start free trial</Link>
                    </Button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-sm text-espresso/60 mb-20"
                >
                    No app downloads. No printing. Set up in minutes.
                </motion.p>
                {/* Mockup Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="relative w-full max-w-[320px] mx-auto"
                >
                    <Image
                        src="/iphone.png"
                        alt="Kawhe Wallet Pass on iPhone"
                        width={320}
                        height={650}
                        className="w-full h-auto drop-shadow-2xl"
                        priority
                    />

                    <div className="mt-8 flex justify-center gap-4">
                        <Image
                            src="/add-to-apple-wallet.svg"
                            alt="Add to Apple Wallet"
                            width={160}
                            height={48}
                            className="h-12 w-auto hover:scale-105 transition-transform cursor-pointer"
                        />
                        <Image
                            src="/add-to-google-wallet.svg"
                            alt="Add to Google Wallet"
                            width={160}
                            height={48}
                            className="h-12 w-auto hover:scale-105 transition-transform cursor-pointer"
                        />
                    </div>

                    {/* Decorative blobs */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-sage/30 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-clay/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </Container>
        </section>
    )
}
