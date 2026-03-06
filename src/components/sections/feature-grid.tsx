"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import {
    Stamp,
    QrCode,
    LayoutDashboard,
    ScanLine,
    Gift,
    Wallet,
    ShieldCheck,
    Building2,
    BarChart3,
    Megaphone
} from "lucide-react"

const features = [
    { icon: Stamp, title: "Digital stamp cards", description: "Replace paper with digital cards that customers keep on their phone." },
    { icon: QrCode, title: "QR codes & join links", description: "Customers scan a code or tap a link to join. No app, no friction." },
    { icon: LayoutDashboard, title: "Merchant dashboard", description: "Manage programs, view customers, and track performance from one place." },
    { icon: ScanLine, title: "Mobile scanner app", description: "Staff scan customer codes to stamp or redeem — fast and reliable." },
    { icon: Gift, title: "Reward redemption", description: "Set reward thresholds and let customers redeem with a single scan." },
    { icon: Wallet, title: "Apple & Google Wallet", description: "Customers can add their card to Wallet for instant access." },
    { icon: ShieldCheck, title: "Fraud protection", description: "Duplicate-scan prevention and time-based limits keep things honest." },
    { icon: Building2, title: "Multi-store support", description: "Run loyalty across multiple locations from a single account." },
    { icon: BarChart3, title: "Customer insights", description: "See visit frequency, active customers, and redemption rates at a glance." },
    { icon: Megaphone, title: "Campaigns & offers", description: "Run promotions, seasonal specials, or VIP-only rewards when you need a boost." }
]

export function FeatureGrid() {
    return (
        <section className="py-24 bg-oat/30" id="features">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">Features</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">Everything you need to run loyalty</h2>
                    <p className="text-lg text-espresso/60 max-w-2xl mx-auto">A complete toolkit — from creating cards to tracking results — without the complexity.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-5 border border-cocoa/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <div className="h-10 w-10 rounded-xl bg-forest/10 flex items-center justify-center mb-4">
                                <feature.icon className="h-5 w-5 text-forest" />
                            </div>
                            <h3 className="text-sm font-bold text-espresso mb-1.5">{feature.title}</h3>
                            <p className="text-xs text-espresso/55 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
