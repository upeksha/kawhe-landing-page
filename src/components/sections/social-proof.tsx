"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const companies = [
    "Espresso House",
    "Daily Grind",
    "Bean & Leaf",
    "Urban Roast",
    "Morning Brew",
    "The Roastery"
]

export function SocialProof() {
    return (
        <section className="py-12 border-y border-cocoa/5 bg-oat/50 overflow-hidden">
            <Container>
                <p className="text-center text-sm font-medium text-espresso/60 mb-8">
                    TRUSTED BY CAFÉS THAT CARE ABOUT BRAND AND REPEAT CUSTOMERS
                </p>
                <div className="relative flex overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-oat/50 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-oat/50 to-transparent z-10"></div>

                    <motion.div
                        className="flex gap-12 md:gap-24 items-center whitespace-nowrap pr-12 md:pr-24"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                    >
                        {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
                            <div key={i} className="text-xl md:text-2xl font-bold text-espresso/40 shrink-0">
                                {company}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
