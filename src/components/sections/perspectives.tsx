"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { LayoutDashboard, ScanLine, Smartphone } from "lucide-react"

const perspectives = [
    {
        icon: LayoutDashboard,
        audience: "For owners",
        title: "Full control from your dashboard",
        features: [
            "Create and manage loyalty programs",
            "Set reward rules and stamp thresholds",
            "Customise your card design and branding",
            "View customer insights and visit data",
            "Run campaigns and promotions",
            "Manage multiple stores from one account"
        ],
        color: "bg-forest",
        lightColor: "bg-forest/10",
        textColor: "text-forest"
    },
    {
        icon: ScanLine,
        audience: "For staff",
        title: "Simple scanning, no training needed",
        features: [
            "Open the scanner app on any phone",
            "Scan customer QR codes to add stamps",
            "Redeem rewards with one tap",
            "Built-in duplicate scan protection",
            "Works on Android and iOS",
            "No special hardware required"
        ],
        color: "bg-clay",
        lightColor: "bg-clay/10",
        textColor: "text-clay"
    },
    {
        icon: Smartphone,
        audience: "For customers",
        title: "Their loyalty card, always with them",
        features: [
            "Join via QR code or link — no app download",
            "See stamp progress in real time",
            "Get notified when rewards are ready",
            "Add to Apple Wallet or Google Wallet",
            "Never lose a loyalty card again",
            "Works at any location"
        ],
        color: "bg-honey",
        lightColor: "bg-honey/10",
        textColor: "text-honey"
    }
]

export function Perspectives() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">The full system</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">One platform, three simple experiences</h2>
                    <p className="text-lg text-espresso/60 max-w-2xl mx-auto">Kawhe works for everyone in the loop — from the owner setting it up, to staff at the counter, to customers collecting stamps.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {perspectives.map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-cocoa/10 overflow-hidden"
                        >
                            <div className={`${p.color} px-6 py-5`}>
                                <div className="flex items-center gap-3">
                                    <p.icon className="h-6 w-6 text-white" />
                                    <div>
                                        <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">{p.audience}</div>
                                        <div className="text-base font-bold text-white">{p.title}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6">
                                <ul className="space-y-3">
                                    {p.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-start gap-3 text-sm">
                                            <div className={`h-5 w-5 rounded-full ${p.lightColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                <div className={`h-1.5 w-1.5 rounded-full ${p.color}`}></div>
                                            </div>
                                            <span className="text-espresso/70">{feature}</span>
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
