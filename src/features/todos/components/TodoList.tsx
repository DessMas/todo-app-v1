"use client"
import { Todo } from "../types/todo"
import TodoItem from "./TodoItem"
import { Button } from "@/components/ui/button";


export default function TodoList({ deleteItem, checkItem, doneTodos, toBeDoneTodos, removeDoneToDos, editToDo }: { deleteItem(id: string): void, checkItem(id: string): void, doneTodos: Todo[], toBeDoneTodos: Todo[], removeDoneToDos(): void, editToDo(id: string, newTitle: string): void }) {
    if (doneTodos.length === 0 && toBeDoneTodos.length === 0) {
        return <h1 className="mt-5 text-center"> Seems like there is nothing to do</h1>
    }
    function handleClick() {
        removeDoneToDos()
    }
    return (
        <div className="mt-5 flex w-full flex-col gap-4">
            {toBeDoneTodos.map(todo => <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} checkItem={checkItem} editToDo={editToDo} />)}
            {doneTodos.length > 0 && <h1 className="flex w-full items-center justify-between text-gray-500 uppercase tracking-wide"> СOMPLETED · {doneTodos.length} <Button variant="ghost" className="h-auto p-0 text-gray-500 hover:bg-transparent hover:text-gray-700" onClick={handleClick} > Clear completed </Button></h1>}
            {doneTodos.map(todo => <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} checkItem={checkItem} editToDo={editToDo} />)}
        </div>
    )
} 