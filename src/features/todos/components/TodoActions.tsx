import { Button } from "@/components/ui/button";
import { Check, Pencil, Trash2 } from "lucide-react";
export default function TodoActions({
  isEditing,
  handleSave,
  handleIsEditing,
  handleDelete,
}: {
  isEditing: boolean;
  handleSave(): void;
  handleIsEditing(): void;
  handleDelete(): void;
}) {
  return (
    <>
      <div className="flex gap-2">
        {isEditing ? (
          <Button variant="ghost" onClick={handleSave}>
            <Check className="text-blue-500" />
          </Button>
        ) : (
          <Button
            className="opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 bg-gray-100 text-blue-500 hover:bg-gray-200"
            onClick={handleIsEditing}
          >
            <Pencil />
          </Button>
        )}
        <Button
          variant="destructive"
          className="opacity-0 transition-all duration-200 group-hover:opacity-100 focus-visible:opacity-100 bg-red-100 hover:bg-red-200"
          onClick={handleDelete}
        >
          <Trash2 />
        </Button>
      </div>
    </>
  );
}
