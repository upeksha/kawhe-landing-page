"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Stamp, QrCode, LayoutDashboard, ScanLine, Gift, Wallet, ShieldCheck, Building2, BarChart3, Megaphone } from "lucide-react"

const features = [
    { icon: Stamp, title: "Digital stamp cards", description: "Replace paper with cards customers keep on their phone." },
    { icon: QrCode, title: "QR codes & join links", description: "Customers scan or tap to join. No app, no friction." },
    { icon: LayoutDashboard, title: "Merchant dashboard", description: "Manage programs, customers, and performance." },
    { icon: ScanLine, title: "Mobile scanner app", description: "Staff scan to stamp or redeem — fast and reliable." },
    { icon: Gift, title: "Reward redemption", description: "Set thresholds and let customers redeem with one scan." },
    { icon: Wallet, title: "Apple & Google Wallet", description: "Customers save their card to Wallet for instant access." },
    { icon: ShieldCheck, title: "Fraud protection", description: "Duplicate-scan prevention and time-based limits." },
    { icon: Building2, title: "Multi-store support", description: "Run loyalty across locations from one account." },
    { icon: BarChart3, title: "Customer insights", description: "Visit frequency, active customers, redemption rates." },
    { icon: Megaphone, title: "Campaigns & offers", description: "Run promotions and VIP rewards when you need a boost." }
]

const cardVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(3px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.4, delay: i * 0.05 }
    })
}

export function FeatureGrid() {
    return (
        <section className="py-24 relative overflow-hidden" id="features">
            <div className="absolute inset-0 bg-gradient-warm"></div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">Features</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-espresso mb-4">Everything you need to run loyalty</h2>
                    <p className="text-lg text-espresso/55 max-w-xl mx-auto">A complete toolkit — without the complexity.</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} initial="hidden" whileInView="visible" custom={index}
                            viewport={{ once: true }}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-cocoa/8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-forest/10 to-moss/10 flex items-center justify-center mb-4 group-hover:from-forest/20 group-hover:to-moss/20 transition-colors duration-300">
                                <feature.icon className="h-5 w-5 text-forest" />
                            </div>
                            <h3 className="text-sm font-bold text-espresso mb-1.5">{feature.title}</h3>
                            <p className="text-xs text-espresso/50 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
