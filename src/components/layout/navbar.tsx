import Link from "next/link"
import Image from "next/image"
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
    const navLinks: NavLink[] = links || [
        { label: "Features", path: "#features" },
        { label: "Use Cases", path: "#use-cases" },
        { label: "Pricing", path: "#pricing" }
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-cocoa/10 bg-oat/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/kawhe-logo-svg-export.svg"
                                alt="Kawhe Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.path}
                                className="text-sm font-medium text-espresso/80 hover:text-espresso transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/demo" className="hidden sm:block text-sm font-medium text-espresso hover:text-forest">
                            Book a demo
                        </Link>
                        <Button size="sm" variant="default" className="rounded-full" asChild>
                            <Link href="/signup">Start free trial</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
