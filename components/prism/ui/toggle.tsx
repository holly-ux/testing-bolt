import * as React from "react"
import styled from "styled-components"
import { Check } from "lucide-react"

type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Whether the toggle is checked */
  checked?: boolean;
  /** Whether the toggle is disabled */
  disabled?: boolean;
  /** Callback when the toggle state changes */
  onCheckedChange?: (checked: boolean) => void;
};

const ToggleRoot = styled.label<{ $disabled?: boolean }>`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--color-green-70);
  }

  &:checked + span:before {
    transform: translateX(20px);
    background-color: white;
  }

  &:checked ~ div {
    opacity: 1;
  }
`;

const ToggleTrack = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-gray-50);
  transition: background-color 0.2s;
  border-radius: 34px;

  &:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: transform 0.2s;
    border-radius: 50%;
  }
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  opacity: 0;
  transition: opacity 0.2s;
  color: white;
  z-index: 1;
`;

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ checked, disabled, onCheckedChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(event.target.checked);
      }
    };

    return (
      <ToggleRoot $disabled={disabled}>
        <ToggleInput
          type="checkbox"
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <ToggleTrack />
        <CheckIcon>
          <Check size={12} />
        </CheckIcon>
      </ToggleRoot>
    );
  }
);

Toggle.displayName = "Toggle";