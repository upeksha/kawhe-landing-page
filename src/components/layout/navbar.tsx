"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

interface NavLink {
    label: string;
    path: string;
}

interface NavbarProps {
    links?: NavLink[];
}

export function Navbar({ links }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navLinks: NavLink[] = links || [
        { label: "Blog", path: "/blog" },
        { label: "Features", path: "#features" },
        { label: "Pricing", path: "#pricing" }
    ]

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false)
        }
        window.addEventListener("keydown", handleEscape)
        return () => window.removeEventListener("keydown", handleEscape)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md">
            <Container>
                <div className="flex h-14 sm:h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 cursor-pointer" aria-label="Kawhe home">
                            <Image
                                src="/kawhe-logo-svg-export.svg"
                                alt="Kawhe Logo"
                                width={40}
                                height={40}
                                className="h-8 w-8 sm:h-10 sm:w-10"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 cursor-pointer [&_a]:cursor-pointer" aria-label="Main navigation">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.path ? `${link.path}-${i}` : i}
                                href={link.path}
                                className="text-sm font-medium text-zinc-700 hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3 lg:gap-4">
                        <Button size="sm" variant="default" className="rounded-lg" asChild>
                            <Link href="https://app.kawhe.shop/register">Try Free for 14 Days</Link>
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-lg" asChild>
                            <Link href="https://app.kawhe.shop/login">Login</Link>
                        </Button>
                    </div>

                    <button
                        type="button"
                        className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-zinc-100 transition-colors cursor-pointer"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {mobileMenuOpen && (
            <div
                className="md:hidden fixed inset-0 top-14 sm:top-16 z-40 bg-white"
            >
                <nav
                    className="flex flex-col gap-1 p-4 sm:p-6 [&_a]:cursor-pointer"
                    aria-label="Mobile navigation"
                >
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.path ? `${link.path}-${i}` : i}
                            href={link.path}
                            className="block py-3 px-4 text-base font-medium text-zinc-700 hover:text-foreground hover:bg-zinc-50 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-4 pt-4 border-t border-zinc-200 flex flex-col gap-2">
                        <Button size="default" variant="default" className="rounded-lg w-full justify-center" asChild>
                            <Link href="https://app.kawhe.shop/register" onClick={() => setMobileMenuOpen(false)}>
                                Try Free for 14 Days
                            </Link>
                        </Button>
                        <Button size="default" variant="outline" className="rounded-lg w-full justify-center" asChild>
                            <Link href="https://app.kawhe.shop/login" onClick={() => setMobileMenuOpen(false)}>
                                Login
                            </Link>
                        </Button>
                    </div>
                </nav>
            </div>
            )}
        </header>
    )
}
