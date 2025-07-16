import * as React from "react"
import { cn } from "@lib/utils"

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Whether the radio is checked */
  checked?: boolean
  /** Whether the radio is disabled */
  disabled?: boolean
  /** Callback when the radio state changes */
  onCheckedChange?: (checked: boolean) => void
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, checked, disabled, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative w-4 h-4">
        <input
          type="radio"
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="absolute opacity-0 w-4 h-4 m-0 cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        <div className={cn(
          "w-4 h-4 border-[1.5px] rounded-full flex items-center justify-center pointer-events-none",
          !disabled && !checked && "border-[var(--color-gray-50)] bg-[var(--color-gray-0)] hover:border-[var(--color-gray-70)]",
          !disabled && checked && "border-[var(--color-teal-70)] bg-[var(--color-gray-0)]",
          disabled && !checked && "border-[var(--color-gray-40)] bg-[var(--color-gray-20)]",
          disabled && checked && "border-[var(--color-gray-40)] bg-[var(--color-gray-20)]",
          className
        )}>
          {checked && (
            <div className={cn(
              "w-2 h-2 rounded-full",
              !disabled && "bg-[var(--color-teal-70)]",
              disabled && "bg-[var(--color-gray-40)]"
            )} />
          )}
        </div>
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio }