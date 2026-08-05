import { Button } from "@/components/ui/button";
import { Check, Pencil, Trash2 } from "lucide-react";

export default function TodoActions({
  isEditing,
  onEdit,
  onSave,
  onDelete,
}: {
  isEditing: boolean;
  onEdit(): void;
  onSave(): void;
  onDelete(): void;
}) {
  return (
    <div className="flex gap-2">
      {isEditing ? (
        <Button variant="ghost" onClick={onSave}>
          <Check className="text-blue-500" />
        </Button>
      ) : (
        <Button
          className="opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 bg-gray-100 text-blue-500 hover:bg-gray-200"
          onClick={onEdit}
        >
          <Pencil />
        </Button>
      )}

      <Button
        variant="destructive"
        className="opacity-0 transition-all duration-200 group-hover:opacity-100 focus-visible:opacity-100 bg-red-100 hover:bg-red-200"
        onClick={onDelete}
      >
        <Trash2 />
      </Button>
    </div>
  );
}