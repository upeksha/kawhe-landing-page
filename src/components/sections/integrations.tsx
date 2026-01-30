import { Container } from "@/components/ui/container"

const tools = [
    { name: "Apple Wallet", status: "supported" },
    { name: "Google Wallet", status: "supported" },
    { name: "QR sign-up", status: "supported" },
    { name: "SMS / Email sharing", status: "supported" },
    { name: "POS integrations", status: "coming soon" },
    { name: "Automations", status: "coming soon" }
]

export function Integrations() {
    return (
        <section className="py-20 border-t border-cocoa/5">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-espresso mb-4">Fits into how you already work.</h2>
                    <p className="text-zinc-600">Start simple today. Add more automation as you grow.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {tools.map((tool) => (
                        <div key={tool.name} className="flex flex-col items-center gap-2">
                            <div className="h-12 flex items-center justify-center font-bold text-lg text-espresso/80 hover:text-espresso transition-colors text-center">
                                {tool.name}
                            </div>
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${tool.status === 'supported' ? 'bg-forest/10 text-forest' : 'bg-cocoa/10 text-cocoa'}`}>
                                {tool.status}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
