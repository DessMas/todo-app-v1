import { Checkbox } from "@/components/ui/checkbox";

export default function TodoCheckbox({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange(): void;
}) {
  return (
    <Checkbox
      className={
        checked
          ? ""
          : "hover:border-blue-500 hover:bg-blue-50 transition-colors"
      }
      checked={checked}
      onCheckedChange={onCheckedChange}
    />
  );
}