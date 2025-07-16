import * as React from "react";
import { cn } from "@lib/utils";
import { Icon } from "@prism/icon";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Callback when the checkbox state changes */
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, indeterminate, disabled, onCheckedChange, ...props }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate]);

    return (
      <div className="relative w-4 h-4">
        <input
          type="checkbox"
          ref={(element) => {
            if (element) {
              // Handle internal ref
              (internalRef as React.MutableRefObject<HTMLInputElement>).current = element;
              // Handle forwarded ref
              if (typeof ref === 'function') {
                ref(element);
              } else if (ref) {
                (ref as React.MutableRefObject<HTMLInputElement>).current = element;
              }
            }
          }}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="absolute opacity-0 w-4 h-4 m-0 cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        <div className={cn(
          "w-4 h-4 border-[1.5px] rounded-[3px] flex items-center justify-center pointer-events-none",
          !disabled && !checked && !indeterminate && "border-[var(--color-gray-50)] bg-[var(--color-gray-0)] hover:border-[var(--color-gray-70)]",
          !disabled && (checked || indeterminate) && "border-[var(--color-teal-70)] bg-[var(--color-teal-70)] hover:border-[var(--color-teal-80)] hover:bg-[var(--color-teal-80)]",
          disabled && !checked && !indeterminate && "border-[var(--color-gray-40)] bg-[var(--color-gray-20)]",
          disabled && (checked || indeterminate) && "border-[var(--color-gray-40)] bg-[var(--color-gray-40)]",
          className
        )}>
          {checked && <Icon name="Check" size="small" className="text-[var(--color-gray-0)]" />}
          {indeterminate && <Icon name="Minus" size="small" className="text-[var(--color-gray-0)]" />}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };