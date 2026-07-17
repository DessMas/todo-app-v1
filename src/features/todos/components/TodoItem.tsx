import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import type { Todo } from "../types/todo"
import { Trash2 } from 'lucide-react';

export default function TodoItem ({todo, checkItem, deleteItem}: {todo: Todo, checkItem(id: string) : void,  deleteItem(id : string) : void} ) {

    function handleDelete () {
        deleteItem(todo.id)
    }
    function handleCheck () {
         checkItem(todo.id)
    }
    return (
        <>
        <div className="Item">
                <Checkbox onCheckedChange = {handleCheck} checked={todo.status}/>
                {todo.status && <p className="line-through"> {todo.title} </p>}
                {!todo.status && <p> {todo.title} </p>}
                <Button onClick={handleDelete}> <Trash2 /> </Button>
        </div>
        </>
    )
} 


