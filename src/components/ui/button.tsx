import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from 'next/link'

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
        secondary: 'bg-card text-gray-900 border border-border hover:border-gray-400 hover:bg-gray-100',
        ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
        coral: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg',
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (href) {
      return (
        <Link href={href} passHref legacyBehavior>
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={cn(buttonVariants({ variant, size, rounded, className }))}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        </Link>
      );
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
