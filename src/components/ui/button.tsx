import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-neutral-900 text-white hover:bg-neutral-800": variant === "default",
            "border border-neutral-200 bg-white hover:bg-neutral-50": variant === "outline",
            "hover:bg-neutral-100": variant === "ghost",
            "text-neutral-900 underline-offset-4 hover:underline": variant === "link",
          },
          {
            "h-9 px-4 text-sm": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-11 px-6 text-base": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
