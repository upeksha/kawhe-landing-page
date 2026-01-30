"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { PencilRuler, QrCode, RefreshCcw } from "lucide-react"

const steps = [
    {
        icon: PencilRuler,
        title: "1. Create your pass",
        description: "Choose a layout, add your logo, and match your café’s colours. Keep it clean, premium, and on-brand."
    },
    {
        icon: QrCode,
        title: "2. Share with a QR or link",
        description: "Place a QR at the counter, add a link to receipts or socials, or send via SMS/email. Customers add to Wallet in seconds."
    },
    {
        icon: RefreshCcw,
        title: "3. Stamp & notify in real time",
        description: "Stamp visits instantly. Reward progress updates automatically. Optional reminders help bring people back — without feeling spammy."
    }
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-oat/30">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-espresso mb-4">Launch in three simple steps.</h2>
                    {/* Removing subhead as none provided in content block */}
                </div>

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-cocoa/10 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="h-24 w-24 rounded-full bg-white border-4 border-oat shadow-lg flex items-center justify-center mb-6 z-10 relative">
                                <step.icon className="h-10 w-10 text-forest" />
                                <div className="absolute -top-2 -right-2 h-8 w-8 bg-clay text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-espresso mb-3">{step.title}</h3>
                            <p className="text-zinc-600 max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
