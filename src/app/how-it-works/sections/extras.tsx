"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Coffee, Gift, Star, Calendar, Ticket, Building2 } from "lucide-react"

const extras = [
    { icon: Coffee, title: "Classic stamp cards", description: "The buy-9-get-1-free format, now digital." },
    { icon: Gift, title: "Reward offers", description: "Set custom rewards and thresholds for your menu." },
    { icon: Star, title: "VIP / member cards", description: "Invite-only perks for your best customers." },
    { icon: Calendar, title: "Seasonal campaigns", description: "Limited-time promotions tied to events or slow days." },
    { icon: Ticket, title: "Voucher promotions", description: "Digital vouchers customers save to their phone." },
    { icon: Building2, title: "Multi-store programs", description: "One loyalty program across multiple locations." }
]

export function HiwExtras() {
    return (
        <section className="py-24 bg-oat/30">
            <Container>
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-clay uppercase tracking-wider mb-2 block"
                    >
                        Optional extras
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-espresso mb-4"
                    >
                        More ways to use Kawhe
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-base text-espresso/55 max-w-lg mx-auto"
                    >
                        Start with a stamp card. Expand into other programs as your business grows.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {extras.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-5 border border-cocoa/10 hover:shadow-md transition-all"
                        >
                            <div className="h-9 w-9 rounded-lg bg-forest/10 flex items-center justify-center mb-3">
                                <item.icon className="h-4.5 w-4.5 text-forest" />
                            </div>
                            <h3 className="text-sm font-bold text-espresso mb-1">{item.title}</h3>
                            <p className="text-xs text-espresso/50 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
