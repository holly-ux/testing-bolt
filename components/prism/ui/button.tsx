import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[3px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 paragraph-base-bold",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary: "bg-white border border-[var(--color-teal-70)] text-[var(--color-teal-70)] hover:bg-[#F1FBFE] hover:border-[var(--color-teal-90)] hover:text-[var(--color-teal-90)]", 
        tertiary: "bg-white text-[var(--color-gray-100)] hover:underline focus:underline",
        "tertiary-link": "bg-white text-[var(--color-teal-70)] hover:text-[var(--color-teal-90)] hover:underline focus:underline",
        destructive: "bg-[var(--color-red-60)] text-white hover:bg-[var(--color-red-80)]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[36px] px-4 py-2",
        small: "h-[32px] px-3",
        mini: "h-[26px] px-2 py-1 paragraph-small-bold",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'tertiary' | 'tertiary-link' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'small' | 'mini' | 'lg' | 'icon';
  asChild?: boolean;
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