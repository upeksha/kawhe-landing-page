"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ArrowRight, Smartphone, Clock, Wallet } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fadeUp = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }
    })
}

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-hero"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-warm rounded-full animate-pulse-glow pointer-events-none"></div>

            <Container className="relative z-10 pt-16 md:pt-24 lg:pt-32 pb-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    {/* Left: copy */}
                    <div className="flex-1 text-left max-w-xl lg:max-w-none">
                        <motion.div
                            variants={fadeUp} initial="hidden" animate="visible" custom={0}
                            className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-forest mb-6 shadow-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-forest animate-pulse"></span>
                            The digital loyalty platform for cafés
                        </motion.div>

                        <motion.h1
                            variants={fadeUp} initial="hidden" animate="visible" custom={1}
                            className="text-4xl font-extrabold tracking-tight text-espresso sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl mb-6 leading-[1.08]"
                        >
                            Turn one-time customers into{" "}
                            <span className="text-gradient-warm">regulars</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp} initial="hidden" animate="visible" custom={2}
                            className="text-lg text-espresso/60 mb-8 leading-relaxed max-w-lg"
                        >
                            Replace paper stamp cards with a digital loyalty program your customers keep on their phone. Create your program, share a QR code, and let staff stamp in seconds.
                        </motion.p>

                        <motion.div
                            variants={fadeUp} initial="hidden" animate="visible" custom={3}
                            className="flex flex-col sm:flex-row gap-3 mb-6"
                        >
                            <Button size="lg" variant="premium" className="rounded-full px-8 shadow-lg shadow-forest/20" asChild>
                                <Link href="https://app.kawhe.shop/register">
                                    Start free trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/70 backdrop-blur-sm border-cocoa/15 hover:bg-white hover:shadow-md transition-all" asChild>
                                <Link href="/demo">Book a demo</Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={fadeUp} initial="hidden" animate="visible" custom={4}
                            className="flex flex-wrap gap-5 text-xs text-espresso/45 font-medium"
                        >
                            <span className="flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5" /> No app download</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Setup in minutes</span>
                            <span className="flex items-center gap-1.5"><Wallet className="h-3.5 w-3.5" /> Apple &amp; Google Wallet</span>
                        </motion.div>
                    </div>

                    {/* Right: layered product visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        className="flex-1 relative w-full max-w-[480px] lg:max-w-[520px]"
                    >
                        {/* Glow behind mockup */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-sage/30 via-honey/20 to-clay/10 rounded-full blur-3xl animate-pulse-glow"></div>

                        {/* Phone mockup */}
                        <div className="relative z-10 mx-auto w-[240px] md:w-[270px]">
                            <Image
                                src="/iphone.png"
                                alt="Customer loyalty card on phone"
                                width={270}
                                height={550}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Dashboard floating card */}
                        <motion.div
                            className="absolute -top-2 -right-2 md:right-4 lg:right-0 z-20 animate-float"
                        >
                            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-cocoa/8 p-4 w-52">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-forest to-moss flex items-center justify-center">
                                        <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                                    </div>
                                    <span className="text-[10px] font-semibold text-espresso/50 uppercase tracking-wider">Dashboard</span>
                                </div>
                                <div className="text-xl font-extrabold text-espresso">247</div>
                                <div className="text-[11px] text-espresso/50">active customers</div>
                                <div className="flex items-center gap-1 mt-1.5 text-[11px] font-semibold text-forest">
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                    18% this month
                                </div>
                            </div>
                        </motion.div>

                        {/* Scanner floating card */}
                        <motion.div
                            className="absolute -bottom-4 -left-4 md:left-0 lg:-left-4 z-20 animate-float-reverse"
                        >
                            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-cocoa/8 p-4 w-48">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-clay to-honey flex items-center justify-center">
                                        <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4h3M20 7V4h-3M4 17v3h3M20 17v3h-3M7 12h10" /></svg>
                                    </div>
                                    <span className="text-[10px] font-semibold text-espresso/50 uppercase tracking-wider">Scanner</span>
                                </div>
                                <div className="text-sm font-bold text-forest">✓ Stamp added</div>
                                <div className="text-[11px] text-espresso/45 mt-0.5">6 of 9 stamps collected</div>
                                <div className="mt-2 h-1.5 bg-sage/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-forest to-moss rounded-full" style={{ width: "66%" }}></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Reward pill */}
                        <motion.div
                            className="absolute top-1/2 -right-6 md:right-2 z-20 animate-float-slow"
                        >
                            <div className="bg-gradient-to-r from-honey to-clay text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-clay/25">
                                🎉 Reward unlocked!
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>

            {/* Social proof strip */}
            <div className="relative z-10 py-10 border-t border-cocoa/5">
                <Container>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-center text-xs text-espresso/35 mb-5 font-medium uppercase tracking-wider"
                    >
                        Trusted by cafés and local businesses
                    </motion.p>
                    <div className="flex items-center justify-center gap-10 md:gap-14 opacity-30 flex-wrap">
                        {["Off The Hook", "Waterfront Café", "The Daily Grind", "Bean & Leaf", "Rise & Pour", "Espresso Lane"].map((name) => (
                            <span key={name} className="text-base font-bold text-cocoa whitespace-nowrap">{name}</span>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}
