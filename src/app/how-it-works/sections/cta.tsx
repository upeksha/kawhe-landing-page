"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HiwCta() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="bg-espresso rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-forest/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-clay/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Ready to replace paper cards?
                        </h2>
                        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                            Launch a digital loyalty program that is easy for your team, easy for your customers, and built to bring people back.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                            <Button size="lg" className="rounded-full px-8 bg-forest hover:bg-forest/90 text-white" asChild>
                                <Link href="https://app.kawhe.shop/register">
                                    Start free trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 bg-transparent" asChild>
                                <Link href="/demo">Book a demo</Link>
                            </Button>
                        </div>
                        <p className="text-sm text-white/40">Free to start. No credit card required.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
