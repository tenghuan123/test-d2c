import { Checkbox as CheckboxPrimitive } from "~/components/ui/checkbox";

type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
};

export function Checkbox({
  checked,
  defaultChecked,
  onCheckedChange,
  className = "",
  disabled,
}: CheckboxProps) {
  return (
    <CheckboxPrimitive
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      className={className}
      disabled={disabled}
    />
  );
}
