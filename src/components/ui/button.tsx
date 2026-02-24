import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-brand text-white hover:bg-brand-dark shadow-sm",
                destructive: "bg-red-500 text-white hover:bg-red-500/90",
                outline: "border border-zinc-300 bg-transparent hover:bg-zinc-50 text-foreground",
                secondary: "bg-dark text-white hover:bg-dark/90 shadow-sm",
                ghost: "hover:bg-zinc-100 text-foreground",
                link: "text-brand underline-offset-4 hover:underline",
                premium: "bg-brand text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
                "outline-brand": "border-2 border-brand bg-transparent text-brand hover:bg-brand/5",
                "outline-yellow": "border-2 border-yellow bg-transparent text-foreground hover:bg-yellow/10",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-4",
                lg: "h-14 rounded-xl px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
