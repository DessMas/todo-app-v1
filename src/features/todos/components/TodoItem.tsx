import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import type { Todo } from "../types/todo"
import { CalendarDays, Check, Pencil, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card";
import { useState } from 'react';
import { Input } from "@/components/ui/input";

import { format } from "date-fns"
import DatePicker from "./Calendar";


export default function TodoItem({ updateToDo, todo, deleteItem }: { updateToDo(updatedTodo: Todo): void, todo: Todo, deleteItem(id: string): void }) {

    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(todo.title)
    const [date, setDate] = useState<Date | undefined>(todo.deadline ? new Date(todo.deadline) : undefined)

    function handleIsEditing() {
        setIsEditing((prev) => !prev)
    }
    function handleDelete() {
        deleteItem(todo.id)
    }
    function handleCheck() {
        // Create new todo checkItem(todo)
        const updatedTodo = {
            ...todo,
            status: !todo.status
        }
        updateToDo(updatedTodo)
    }
    function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("123")
        setNewTitle(event.target.value)
    }
    function handleSave() {
        const updatedTodo = {
            ...todo,
            title: newTitle,
            deadline: date?.toISOString()
        }
        updateToDo(updatedTodo)
        setIsEditing(false)
    }
    return (
        <Card className="w-full rounded-xl p-2 shadow-md shadow-gray-100">
            <div className="group grid grid-cols-[30px_1fr_auto] items-center gap-x-3 gap-y-1">
                <Checkbox className={todo.status ? "" : "hover:border-blue-500 hover:bg-blue-50 transition-colors"} onCheckedChange={handleCheck} checked={todo.status}
                />
                {isEditing ? <Input value={newTitle} onChange={handleChangeTitle} /> : <p className={todo.status ? "line-through text-gray-500" : ""}> {todo.title} </p>}
                <div className="flex gap-2">
                    {isEditing ?
                        <Button variant="ghost" onClick={handleSave}> <Check className="text-blue-500" /> </Button>
                        :
                        <Button className="opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 bg-gray-100 text-blue-500 hover:bg-gray-200" onClick={handleIsEditing}> <Pencil /> </Button>}
                    <Button variant="destructive" className="opacity-0 transition-all duration-200 group-hover:opacity-100  focus-visible:opacity-100 bg-red-100 hover:bg-red-200" onClick={handleDelete}> <Trash2 /> </Button>
                </div>
                <div className="col-start-2">
                    {isEditing ?
                        <DatePicker date={date} setDate={setDate}></DatePicker>
                        :
                        todo.deadline && <p className={todo.status ? "line-through flex items-center gap-1 text-xs text-gray-500" : "flex items-center gap-1 text-xs text-gray-500"} > <CalendarDays size={15} /> {format(new Date(todo.deadline), "PP")}</p>}
                </div>
            </div>
        </Card>
    )
}


