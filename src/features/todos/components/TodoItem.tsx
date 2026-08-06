import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Todo } from "../types/todo";
import { CalendarDays, Check, Pencil, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { format, isToday } from "date-fns";
import DatePicker from "./Calendar";

export default function TodoItem({
  updateToDo,
  todo,
  deleteItem,
}: {
  updateToDo(updatedTodo: Todo): void;
  todo: Todo;
  deleteItem(id: string): void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const deadlineDate = todo.deadline
    ? new Date(todo.deadline)
    : undefined;

  const [date, setDate] = useState<Date | undefined>(deadlineDate);

  const isTodayDate = deadlineDate
    ? isToday(deadlineDate)
    : undefined;

  function handleIsEditing() {
    setIsEditing((prev) => !prev);
  }

  function handleDelete() {
    deleteItem(todo.id);
  }

  function handleCheck() {
    // Create new todo checkItem(todo)
    const updatedTodo = {
      ...todo,
      status: !todo.status,
    };

    updateToDo(updatedTodo);
  }

  function handleChangeTitle(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNewTitle(event.target.value);
  }

  function handleSave() {
    const updatedTodo = {
      ...todo,
      title: newTitle,
      deadline: date?.toISOString(),
    };

    updateToDo(updatedTodo);
    setIsEditing(false);
  }

  return (
    <Card className="w-full rounded-xl p-2 shadow-md shadow-gray-100">
      <div className="group grid grid-cols-[30px_1fr_auto] items-center gap-x-3 gap-y-1">
        <Checkbox
          className={
            todo.status
              ? ""
              : "hover:border-blue-500 hover:bg-blue-50 transition-colors"
          }
          onCheckedChange={handleCheck}
          checked={todo.status}
        />

        {isEditing ? (
          <Input
            value={newTitle}
            onChange={handleChangeTitle}
          />
        ) : (
          <p
            className={
              todo.status
                ? "line-through text-gray-500"
                : ""
            }
          >
            {" "}
            {todo.title}{" "}
          </p>
        )}

        <div className="flex gap-2">
          {isEditing ? (
            <Button
              variant="ghost"
              onClick={handleSave}
            >
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

        {isEditing ? (
          <div className="col-start-2">
            <DatePicker
              date={date}
              setDate={setDate}
              title={"Set a deadline"}
            ></DatePicker>
          </div>
        ) : (
          todo.deadline && (
            <div className="col-start-2">
              <p
                className={
                  todo.status
                    ? "line-through flex items-center gap-1 text-xs text-gray-500 "
                    : "flex items-center gap-1 text-xs text-gray-500"
                }
              >
                <CalendarDays
                  className={
                    todo.status && isTodayDate
                      ? "text-blue-500"
                      : ""
                  }
                  size={15}
                />
                {isTodayDate ? (
                  <span className="text-blue-500">
                    {" "}
                    {"Today"}
                  </span>
                ) : (
                  format(todo.deadline, "d. MMM.")
                )}
              </p>
            </div>
          )
        )}
      </div>
    </Card>
  );
}

//TODO:
// Card
//  checkbox
//  Edit:
// Input + anderer Button + Calendar
// No Edit:
// Text + Datums Icon (wenn da) + Durchgestrichen
// Action Buttons
