import type { Todo } from "../types/todo";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { isToday } from "date-fns";
import TodoDeadline from "./TodoDeadline";
import TodoCheckbox from "./TodoCheckbox";
import TodoActions from "./TodoActions";

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
  const deadlineDate = todo.deadline ? new Date(todo.deadline) : undefined;
  const [date, setDate] = useState<Date | undefined>(deadlineDate);
  const isTodayDate = deadlineDate ? isToday(deadlineDate) : undefined;
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
  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
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
        <TodoCheckbox checked={todo.status} onCheckedChange={handleCheck} />
        {isEditing ? (
          <Input value={newTitle} onChange={handleChangeTitle} />
        ) : (
          <p className={todo.status ? "line-through text-gray-500" : ""}>
            {" "}
            {todo.title}{" "}
          </p>
        )}
        <TodoActions
          isEditing={isEditing}
          onEdit={handleIsEditing}
          onSave={handleSave}
          onDelete={handleDelete}
        />
        <TodoDeadline
          isEditing={isEditing}
          date={date}
          setDate={setDate}
          todo={todo}
          isTodayDate={isTodayDate}
        />
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
