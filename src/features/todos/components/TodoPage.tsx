"use client"
import TodoList from "@/features/todos/components/TodoList";
import TodoForm from "@/features/todos/components/TodoForm";
import useToDos  from "../hooks/useTodos";
export default function TodoPage() {  
  const {deleteItem, addItem, checkItem, doneTodos, toBeDoneTodos, removeDoneToDos} = useToDos()
  return (
    <main>
      <h1 id="titelTodoApp">Todo App</h1>
        <TodoForm addItem={addItem}/>
        <TodoList  deleteItem ={deleteItem} checkItem={checkItem} doneTodos = {doneTodos} toBeDoneTodos = {toBeDoneTodos} removeDoneToDos = {removeDoneToDos} />
    </main>
  );
}