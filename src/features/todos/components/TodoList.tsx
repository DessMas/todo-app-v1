"use client"
import { Todo } from "../types/todo"
import TodoItem from "./TodoItem"
import { Button } from "@/components/ui/button";

export default function TodoList({ deleteItem, checkItem, doneTodos, toBeDoneTodos, removeDoneToDos}: { deleteItem(id: string): void, checkItem(id: string): void, doneTodos : Todo[] , toBeDoneTodos : Todo[], removeDoneToDos() : void}) {
    if (doneTodos.length === 0 && toBeDoneTodos.length === 0) {
        return <h1 className="mt-5 flex flex-col items-center"> Es gibt noch keine Aufgaben. Fügen Sie ewas hinzu</h1>
    }

    function handleClick () {
        removeDoneToDos()
    }
    return (
        <div className="mt-5 flex flex-col items-center">
            <>
            {toBeDoneTodos.map(todo => <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} checkItem={checkItem} />)}
            <h1> {toBeDoneTodos.length} ToDos zu erledigen</h1>
            </>
            <>
            {doneTodos.map(todo => <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} checkItem={checkItem} />)}
            <h1> {doneTodos.length} erledigte ToDos</h1>
            </>
            <Button onClick={handleClick} > Abgehakte löschen </Button>
        </div>
    )
} 