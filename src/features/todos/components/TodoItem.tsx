import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import type { Todo } from "../types/todo"
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Check } from 'lucide-react';

export default function TodoItem({ todo, checkItem, deleteItem, editToDo }: { todo: Todo, checkItem(id: string): void, deleteItem(id: string): void, editToDo(id: string, newTitle: string): void }) {

    const [isEditing, setIsEditing] = useState(false)

    function handleIsEditing() {
        setIsEditing(!isEditing)
    }
    function handleDelete() {
        deleteItem(todo.id)
    }
    function handleCheck() {
        checkItem(todo.id)
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        editToDo(todo.id, event.target.value)
    }
    return (
        <Card className="w-full rounded-xl p-2">
            <div className="group grid grid-cols-[30px_1fr_auto] items-center gap-3">
                {todo.status ? <Checkbox onCheckedChange={handleCheck} checked={todo.status} /> : <Checkbox className="hover:border-blue-500 hover:bg-blue-50 transition-colors" onCheckedChange={handleCheck} checked={todo.status} />}
                {isEditing ? <Input value = {todo.title} onChange={handleChange} /> : todo.status ? <p className="line-through text-gray-500"> {todo.title} </p> : <p> {todo.title} </p>}
                <div className="flex gap-2">
                    {isEditing ? <Button variant="ghost" onClick={handleIsEditing}> <Check className="text-blue-500"/> </Button> : <Button className="opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 bg-gray-100 text-blue-500 hover:bg-gray-200" onClick={handleIsEditing}> <Pencil /> </Button>}
                    <Button className="opacity-0 transition-all duration-200 group-hover:opacity-100 focus-visible:opacity-100 bg-red-100 text-red-600 hover:bg-red-200" onClick={handleDelete}> <Trash2 /> </Button>
                </div>
            </div>
        </Card>
    )
}


