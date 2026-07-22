"use client"
import TodoList from "@/features/todos/components/TodoList";
import TodoForm from "@/features/todos/components/TodoForm";
import useToDos  from "../hooks/useTodos";
export default function TodoPage() {  
  const {deleteItem, addItem, checkItem, doneTodos, toBeDoneTodos, removeDoneToDos, editToDo} = useToDos()
  return (
    <main className="mx-auto w-full max-w-xl">
      <h1 className="mt-5 mb-2.5 text-left text-xl font-semibold">Tasks</h1>
        {toBeDoneTodos.length > 0 && <h1 className="text-sm text-gray-500"> {toBeDoneTodos.length} tasks to do</h1>}
        <TodoForm addItem={addItem}/>
        <TodoList deleteItem ={deleteItem} checkItem={checkItem} doneTodos = {doneTodos} toBeDoneTodos = {toBeDoneTodos} removeDoneToDos = {removeDoneToDos} editToDo = {editToDo} />
    </main>
  );
}