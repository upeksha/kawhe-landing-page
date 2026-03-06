"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Settings, QrCode, ScanLine, TrendingUp, Check } from "lucide-react"

interface StepData {
    number: string
    badge: string
    title: string
    description: string
    points: string[]
    icon: React.ElementType
    mockupTitle: string
    mockupSubtitle: string
    mockupDetail: string
    accentColor: string
    accentBg: string
}

const steps: StepData[] = [
    {
        number: "01",
        badge: "Setup in minutes",
        title: "Set up your loyalty program",
        description: "Choose your reward, set your stamp target, customise your branding, and get your digital loyalty card ready for customers.",
        points: [
            "Set rewards like \"10 coffees = 1 free coffee\"",
            "Add your logo, colours, and store details",
            "Launch with your own join link or QR code"
        ],
        icon: Settings,
        mockupTitle: "New Loyalty Program",
        mockupSubtitle: "Reward: Free coffee after 10 stamps",
        mockupDetail: "Branding: Custom logo & colours applied",
        accentColor: "text-forest",
        accentBg: "bg-forest"
    },
    {
        number: "02",
        badge: "No app download",
        title: "Customers join in seconds",
        description: "Customers scan your QR code at the counter, tap a join link online, or open it from a receipt or message. Their loyalty card is then ready on their phone.",
        points: [
            "Quick QR or link-based join flow",
            "Smooth customer sign-up",
            "Wallet-ready experience where available"
        ],
        icon: QrCode,
        mockupTitle: "Welcome to Bean & Leaf",
        mockupSubtitle: "Your loyalty card is ready",
        mockupDetail: "0 of 10 stamps · Add to Apple Wallet",
        accentColor: "text-clay",
        accentBg: "bg-clay"
    },
    {
        number: "03",
        badge: "Fast at the counter",
        title: "Staff stamp or redeem rewards",
        description: "At the counter, staff scan the customer code, add stamps, and redeem rewards in seconds using the web scanner or mobile scanner app.",
        points: [
            "Fast scan flow",
            "Clear reward status before redemption",
            "Secure verification when needed"
        ],
        icon: ScanLine,
        mockupTitle: "Scanner",
        mockupSubtitle: "✓ Stamp added successfully",
        mockupDetail: "Customer: 7 of 10 stamps collected",
        accentColor: "text-honey",
        accentBg: "bg-honey"
    },
    {
        number: "04",
        badge: "Built for retention",
        title: "Customers come back more often",
        description: "Customers can track their progress on their phone, see when rewards are available, and come back to unlock them. Owners get a clearer view of loyalty activity and repeat visits.",
        points: [
            "Progress stays on the customer's phone",
            "Rewards encourage repeat visits",
            "Owners can see what is working"
        ],
        icon: TrendingUp,
        mockupTitle: "Loyalty Insights",
        mockupSubtitle: "247 active customers this month",
        mockupDetail: "↑ 23% repeat visit rate",
        accentColor: "text-moss",
        accentBg: "bg-moss"
    }
]

function StepMockup({ step }: { step: StepData }) {
    return (
        <div className="relative">
            <div className={`absolute -inset-3 ${step.accentBg}/10 rounded-[2rem] -z-10`}></div>
            <div className="bg-white rounded-2xl shadow-xl border border-cocoa/10 overflow-hidden">
                <div className={`${step.accentBg} px-5 py-3 flex items-center gap-2`}>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                    </div>
                    <span className="text-xs font-medium text-white/80 ml-2">{step.mockupTitle}</span>
                </div>
                <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`h-10 w-10 rounded-xl ${step.accentBg}/10 flex items-center justify-center`}>
                            <step.icon className={`h-5 w-5 ${step.accentColor}`} />
                        </div>
                        <div>
                            <div className="font-bold text-espresso text-sm">{step.mockupSubtitle}</div>
                            <div className="text-xs text-espresso/50">{step.mockupDetail}</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className={`h-2.5 rounded-full ${step.accentBg}/10`} style={{ width: `${85 - i * 15}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function HiwSteps() {
    return (
        <section className="py-12 md:py-20">
            <Container>
                <div className="space-y-24 md:space-y-32">
                    {steps.map((step, index) => {
                        const reverse = index % 2 === 1;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
                            >
                                <div className="flex-1 max-w-xl">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-5xl font-extrabold text-oat select-none">{step.number}</span>
                                        <span className={`text-xs font-semibold uppercase tracking-wider ${step.accentColor} ${step.accentBg}/10 px-3 py-1 rounded-full`}>
                                            {step.badge}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-espresso mb-4 leading-tight">
                                        {step.title}
                                    </h2>

                                    <p className="text-base md:text-lg text-espresso/60 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {step.points.map((point, pi) => (
                                            <li key={pi} className="flex items-start gap-3 text-sm">
                                                <div className={`h-5 w-5 rounded-full ${step.accentBg}/15 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <Check className={`h-3 w-3 ${step.accentColor}`} />
                                                </div>
                                                <span className="text-espresso/70">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-1 w-full max-w-md lg:max-w-none">
                                    <StepMockup step={step} />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
