"use client"
import { Todo } from "../types/todo"
import TodoItem from "./TodoItem"
import { Button } from "@/components/ui/button";
import {Card} from "@/components/ui/card"


export default function TodoList({ deleteItem, checkItem, doneTodos, toBeDoneTodos, removeDoneToDos}: { deleteItem(id: string): void, checkItem(id: string): void, doneTodos : Todo[] , toBeDoneTodos : Todo[], removeDoneToDos() : void}) {
    if (doneTodos.length === 0 && toBeDoneTodos.length === 0) {
        return <h1 className="mt-5 flex flex-col items-center"> Seems like there is nothing to do</h1>
    }
    
    function handleClick () {
        removeDoneToDos()
    }
    return (
        <div className="form">
            <Card className="mx-auto w-full max-w-sm">  
                <div className="mt-5 flex flex-col items-center">
                    <>
                    {toBeDoneTodos.map(todo => <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} checkItem={checkItem} />)}
                    {toBeDoneTodos.length > 0  && <h1 > {toBeDoneTodos.length} tasks to do</h1>}
                    </>
                    <>
                    {doneTodos.map(todo => <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} checkItem={checkItem} />)}
                    {doneTodos.length > 0 && <h1 > {doneTodos.length} completed </h1>}
                    </>
                    {doneTodos.length > 0 && <Button onClick={handleClick} > Delete completed </Button>}
                </div>
        </Card>
        </div>
    )
} 