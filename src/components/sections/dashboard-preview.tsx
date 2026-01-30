"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"

const benefits = [
    "Fast checkout flow — stamp in seconds",
    "Live customer progress — fewer questions at the counter",
    "Redemptions you can track — know what you’re giving away",
    "Offer controls — adjust rewards without reprinting anything"
]

export function DashboardPreview() {
    return (
        <section className="py-24 bg-oat/50 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-6">
                            Simple for staff. Clear for owners.
                        </h2>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                            Everything you need to run loyalty — without adding complexity.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-forest flex-shrink-0" />
                                    <span className="text-espresso">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="text-forest border-forest hover:bg-forest hover:text-white">
                            Explore the Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden border border-cocoa/10 shadow-2xl bg-white aspect-[4/3] group">
                            <Image
                                src="/dashboard.jpg"
                                alt="Dashboard Preview"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
