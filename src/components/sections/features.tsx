"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featureBlocks = [
    {
        title: "Turn one-time visitors into",
        highlight: "loyal regulars",
        highlightColor: "bg-forest text-white",
        description: "Kawhe lets you create a digital loyalty program directly in Apple Wallet and Google Wallet. Customers collect points or stamps and you motivate them to return using rewards and push notifications.",
        cta: "Launch your loyalty program",
        ctaVariant: "outline-forest" as const,
        image: "/iphone.png",
        bgColor: "bg-forest",
        reverse: false,
    },
    {
        title: "Create",
        highlight: "a new revenue stream",
        highlightColor: "bg-clay text-white",
        titleSuffix: "for your business with digital vouchers",
        description: "Earn even outside your opening hours thanks to digital vouchers that customers save to Apple Wallet and Google Wallet.",
        cta: "Launch digital vouchers",
        ctaVariant: "outline-clay" as const,
        image: "/iphone.png",
        bgColor: "bg-clay",
        reverse: true,
    },
    {
        title: "Manage invite-only VIP cards with",
        highlight: "full control and analytics",
        highlightColor: "bg-honey text-espresso",
        description: "Give selected customers exclusive VIP status with special perks. You choose who gets the card and what benefits they receive.",
        cta: "Get started with VIP cards",
        ctaVariant: "outline-honey" as const,
        image: "/iphone.png",
        bgColor: "bg-honey",
        reverse: false,
    },
]

export function Features() {
    return (
        <section className="py-16 md:py-24" id="features">
            <Container>
                <div className="space-y-24 md:space-y-32">
                    {featureBlocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
                        >
                            <div className="flex-1 max-w-xl">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-espresso leading-tight mb-6">
                                    {block.title}{" "}
                                    <span className={`${block.highlightColor} px-2 py-0.5 inline-block`}>
                                        {block.highlight}
                                    </span>
                                    {block.titleSuffix && <> {block.titleSuffix}</>}
                                </h2>
                                <p className="text-lg text-espresso/70 mb-8 leading-relaxed">
                                    {block.description}
                                </p>
                                <Button variant={block.ctaVariant} className="rounded-full" asChild>
                                    <Link href="/signup">
                                        {block.cta} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex-1 relative">
                                <div className={`${block.bgColor} rounded-[2rem] p-8 md:p-12 flex items-center justify-center`}>
                                    <Image
                                        src={block.image}
                                        alt={block.highlight}
                                        width={240}
                                        height={480}
                                        className="w-full max-w-[200px] md:max-w-[240px] h-auto drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
