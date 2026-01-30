import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-forest text-oat hover:bg-forest/90 shadow-sm",
                destructive: "bg-red-500 text-white hover:bg-red-500/90",
                outline: "border border-cocoa/20 bg-transparent hover:bg-cocoa/5 text-espresso",
                secondary: "bg-cocoa text-oat hover:bg-cocoa/90 shadow-sm",
                ghost: "hover:bg-cocoa/10 text-espresso",
                link: "text-forest underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-forest to-moss text-oat shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-3",
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
