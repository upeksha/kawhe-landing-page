"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { PencilRuler, QrCode, ScanLine, RefreshCcw } from "lucide-react"

const steps = [
    {
        icon: PencilRuler,
        step: "01",
        title: "Create your program",
        description: "Set up your loyalty card in minutes. Choose your reward rules, add your logo, and match your brand. No design skills needed."
    },
    {
        icon: QrCode,
        step: "02",
        title: "Customers join instantly",
        description: "Share a QR code or link. Customers join in seconds — no app download required. Their card lives on their phone or in Apple/Google Wallet."
    },
    {
        icon: ScanLine,
        step: "03",
        title: "Staff stamp with a tap",
        description: "Your team uses the scanner app to add stamps or redeem rewards. It takes two seconds, even during the morning rush."
    },
    {
        icon: RefreshCcw,
        step: "04",
        title: "Customers come back",
        description: "Stamp progress motivates return visits. Notifications keep your café top of mind. Regulars are built, not bought."
    }
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-white" id="how-it-works">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block">How it works</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-4">Up and running in four simple steps</h2>
                    <p className="text-lg text-espresso/60 max-w-2xl mx-auto">From sign-up to your first returning customer — the whole flow is designed to be fast and simple.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative text-center group"
                        >
                            <div className="text-4xl font-extrabold text-oat mb-4 select-none">{step.step}</div>
                            <div className="h-14 w-14 rounded-2xl bg-forest/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-forest/20 transition-colors">
                                <step.icon className="h-7 w-7 text-forest" />
                            </div>
                            <h3 className="text-lg font-bold text-espresso mb-2">{step.title}</h3>
                            <p className="text-sm text-espresso/60 leading-relaxed">{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-cocoa/10"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
