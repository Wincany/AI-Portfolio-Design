import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-foreground text-background hover:bg-foreground/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border border-border hover:bg-secondary",
    accent: "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
