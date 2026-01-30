"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen?: boolean
    onClick?: () => void
}

export function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-cocoa/10 last:border-0">
            <button
                type="button"
                onClick={onClick}
                className="flex w-full items-center justify-between py-4 text-left font-medium text-espresso transition-all hover:text-forest"
                aria-expanded={isOpen}
            >
                {title}
                <ChevronDown
                    className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="text-sm leading-relaxed text-zinc-600">
                    {children}
                </div>
            </div>
        </div>
    )
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.q}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {item.a}
                </AccordionItem>
            ))}
        </div>
    )
}
