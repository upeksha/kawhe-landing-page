"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Coffee, Gift, Star, Calendar, Ticket, Building2 } from "lucide-react"

const cases = [
    { icon: Coffee, title: "Classic stamp card", description: "Buy 9, get the 10th free — the digital version.", gradient: "from-forest to-moss", text: "text-white" },
    { icon: Gift, title: "Reward-based offers", description: "Custom rewards and thresholds for your menu.", gradient: "from-honey to-clay", text: "text-espresso" },
    { icon: Star, title: "VIP member cards", description: "Invite-only perks for your best customers.", gradient: "from-clay to-honey", text: "text-white" },
    { icon: Calendar, title: "Seasonal promotions", description: "Limited-time campaigns for events or slow days.", gradient: "from-sage to-moss", text: "text-espresso" },
    { icon: Ticket, title: "Voucher campaigns", description: "Digital vouchers customers save to their phone.", gradient: "from-cocoa to-espresso", text: "text-oat" },
    { icon: Building2, title: "Multi-store loyalty", description: "One program across multiple locations.", gradient: "from-espresso to-cocoa", text: "text-white" }
]

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(3px)" },
    visible: (i: number) => ({
        opacity: 1, scale: 1, filter: "blur(0px)",
        transition: { duration: 0.5, delay: i * 0.08 }
    })
}

export function UseCases() {
    return (
        <section className="py-24 bg-white" id="use-cases">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">Use cases</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-espresso mb-4">Built for more than just stamps</h2>
                    <p className="text-lg text-espresso/55 max-w-xl mx-auto">Start with a stamp card. Expand as you grow.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} initial="hidden" whileInView="visible" custom={index}
                            viewport={{ once: true }}
                            className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                            <item.icon className={`h-8 w-8 mb-4 ${item.text}/80 relative z-10`} />
                            <h3 className={`text-lg font-bold mb-2 ${item.text} relative z-10`}>{item.title}</h3>
                            <p className={`text-sm leading-relaxed ${item.text}/65 relative z-10`}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
