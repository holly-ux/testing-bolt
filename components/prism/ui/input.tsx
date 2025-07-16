import * as React from "react"
import { cn } from "@lib/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  /** Label text displayed above the input */
  label?: string
  /** Error message to display below the input */
  error?: string
  /** Whether to use a textarea instead of an input */
  multiline?: boolean
  /** Number of rows for textarea (only applies when multiline is true) */
  rows?: number
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className, label, error, multiline = false, rows = 3, ...props }, ref) => {
    const Component = multiline ? 'textarea' : 'input'
    
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="paragraph-small-bold text-[var(--color-gray-90)]">
            {label}
          </label>
        )}
        <Component
          ref={ref as any}
          className={cn(
            "w-full bg-[var(--color-gray-0)] border rounded-[3px] transition-colors",
            "paragraph-base text-[var(--color-gray-100)]",
            "placeholder:text-[var(--color-gray-70)]",
            !error && [
              "border-[var(--color-gray-40)]",
              "hover:border-[var(--color-gray-50)]",
              "focus:border-[var(--color-gray-70)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gray-20)]"
            ],
            error && [
              "border-[var(--color-red-60)]",
              "hover:border-[var(--color-red-60)]",
              "focus:border-[var(--color-red-60)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red-20)]"
            ],
            props.disabled && "bg-[var(--color-gray-20)] opacity-50 cursor-not-allowed",
            !multiline && "h-[36px] px-3",
            multiline && "min-h-[36px] p-3 resize-none",
            className
          )}
          {...props}
          rows={multiline ? rows : undefined}
        />
        {error && (
          <span className="paragraph-small text-[var(--color-red-60)]">
            {error}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }