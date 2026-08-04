"use client";
import TodoList from "@/features/todos/components/TodoList";
import TodoForm from "@/features/todos/components/TodoForm";
import useToDos from "../hooks/useTodos";
export default function TodoPage() {
  const {
    deleteItem,
    addItem,
    updateToDo,
    doneTodos,
    toBeDoneTodos,
    removeDoneToDos,
  } = useToDos();
  return (
    <main className="mx-auto w-full max-w-xl">
      <h1 className="mt-5 mb-2.5 text-left text-xl font-semibold">Tasks</h1>
      {toBeDoneTodos.length > 0 && (
        <h1 className="text-sm text-gray-500">
          {" "}
          {toBeDoneTodos.length}{" "}
          {toBeDoneTodos.length === 1 ? "task to do" : "tasks to do"}{" "}
        </h1>
      )}
      <TodoForm addItem={addItem} />
      <TodoList
        updateToDo={updateToDo}
        deleteItem={deleteItem}
        doneTodos={doneTodos}
        toBeDoneTodos={toBeDoneTodos}
        removeDoneToDos={removeDoneToDos}
      />
    </main>
  );
}
