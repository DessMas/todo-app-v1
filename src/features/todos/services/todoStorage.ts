"use client"

import type { Todo } from "../types/todo"

export function updateTodosInLocalStorage(todos: Todo[]) {
    // Zod validation if its really a todolist
    localStorage.setItem("todos", JSON.stringify(todos));
}
export function loadToDos (): Todo[] {
    try {
        const localTodos = localStorage.getItem("todos");
        const todoArray = JSON.parse(localTodos || "[]")
        return todoArray
        
    } catch (error) {
        console.log("dadada", error)
        return []
    }
}