"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { PencilRuler, QrCode, ScanLine, RefreshCcw } from "lucide-react"

const steps = [
    { icon: PencilRuler, step: "01", title: "Set up your loyalty program", description: "Choose your reward, add your branding, and launch your digital loyalty card in minutes.", gradient: "from-forest to-moss" },
    { icon: QrCode, step: "02", title: "Customers join in seconds", description: "Share a QR code or link. Customers join instantly — no app download needed.", gradient: "from-clay to-honey" },
    { icon: ScanLine, step: "03", title: "Staff stamp or redeem rewards", description: "Your team scans customer codes to add stamps or redeem — takes two seconds.", gradient: "from-honey to-clay" },
    { icon: RefreshCcw, step: "04", title: "Customers come back", description: "Progress drives return visits. Rewards keep your café top of mind.", gradient: "from-moss to-forest" }
]

const cardVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: (i: number) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }
    })
}

export function HowItWorks() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="how-it-works">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-forest rounded-full opacity-50 pointer-events-none"></div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} className="text-center mb-16"
                >
                    <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">How it works</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-espresso mb-4">Up and running in four steps</h2>
                    <p className="text-lg text-espresso/55 max-w-xl mx-auto">From sign-up to your first returning customer — designed to be fast and simple.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} initial="hidden" whileInView="visible" custom={index}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-2xl p-6 border border-cocoa/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="text-3xl font-extrabold text-oat mb-3 select-none">{step.step}</div>
                            <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-md`}>
                                <step.icon className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-base font-bold text-espresso mb-2">{step.title}</h3>
                            <p className="text-sm text-espresso/55 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
