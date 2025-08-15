import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-aurora-primary text-background hover:bg-aurora-primary/90 shadow-md hover:shadow-lg",
        hero: "bg-gradient-primary text-background hover:scale-105 shadow-glow rounded-2xl text-lg font-semibold tracking-wide glow-on-hover backdrop-blur-sm",
        ember: "bg-gradient-ember text-background hover:scale-105 shadow-glow rounded-2xl font-semibold glow-on-hover",
        glass: "glass-card text-text-high border-aurora-primary/20 hover:border-aurora-primary/40 hover:bg-surface-elevated/80 backdrop-blur-md",
        outline: "border border-aurora-primary/30 bg-transparent text-aurora-primary hover:bg-aurora-primary/10 hover:border-aurora-primary/60 backdrop-blur-sm",
        destructive: "bg-status-danger text-text-high hover:bg-status-danger/90",
        secondary: "bg-surface-elevated text-text-high hover:bg-surface-elevated/80 border border-border hover:border-border-hover",
        ghost: "hover:bg-surface-elevated/60 text-text-medium hover:text-text-high",
        link: "text-aurora-primary underline-offset-4 hover:underline hover:text-aurora-primary/80",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm rounded-xl",
        sm: "h-9 px-4 py-2 text-sm rounded-lg",
        lg: "h-14 px-8 py-4 text-base rounded-2xl",
        xl: "h-16 px-10 py-5 text-lg rounded-2xl",
        icon: "h-11 w-11 rounded-xl",
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
