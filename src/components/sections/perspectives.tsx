"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { LayoutDashboard, ScanLine, Smartphone } from "lucide-react"

const perspectives = [
    {
        icon: LayoutDashboard, audience: "For owners", title: "Full control from your dashboard",
        features: ["Create and manage loyalty programs", "Set reward rules and stamp thresholds", "Customise card design and branding", "View customer insights and visit data", "Run campaigns and promotions", "Manage multiple stores"],
        gradient: "from-forest to-moss", lightBg: "bg-forest/5", dotColor: "bg-forest"
    },
    {
        icon: ScanLine, audience: "For staff", title: "Simple scanning, no training",
        features: ["Open the scanner app on any phone", "Scan customer QR codes to add stamps", "Redeem rewards with one tap", "Built-in duplicate scan protection", "Works on Android and iOS", "No special hardware required"],
        gradient: "from-clay to-honey", lightBg: "bg-clay/5", dotColor: "bg-clay"
    },
    {
        icon: Smartphone, audience: "For customers", title: "Loyalty card, always with them",
        features: ["Join via QR code or link — no app", "See stamp progress in real time", "Get notified when rewards are ready", "Add to Apple Wallet or Google Wallet", "Never lose a loyalty card again", "Works at any location"],
        gradient: "from-honey to-clay", lightBg: "bg-honey/5", dotColor: "bg-honey"
    }
]

const cardVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.5, delay: i * 0.15 }
    })
}

export function Perspectives() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] glow-forest rounded-full opacity-40 pointer-events-none"></div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">The full system</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-espresso mb-4">One platform, three experiences</h2>
                    <p className="text-lg text-espresso/55 max-w-xl mx-auto">Kawhe works for everyone — from the owner setting it up, to staff at the counter, to customers collecting stamps.</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {perspectives.map((p, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} initial="hidden" whileInView="visible" custom={index}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-cocoa/8 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`bg-gradient-to-r ${p.gradient} px-6 py-5`}>
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <p.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">{p.audience}</div>
                                        <div className="text-sm font-bold text-white">{p.title}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {p.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-start gap-3 text-sm">
                                            <div className={`h-5 w-5 rounded-full ${p.lightBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                <div className={`h-1.5 w-1.5 rounded-full ${p.dotColor}`}></div>
                                            </div>
                                            <span className="text-espresso/65">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
