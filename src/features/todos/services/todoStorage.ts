"use client"
import { z } from "zod"
import { Todo, schemaToDo } from "../types/todo"

const todosSchema = z.array(schemaToDo)

export function updateTodosInLocalStorage(todos: Todo[]) {
    // Zod validation 
    try {
        const validatedTodos = todosSchema.parse(todos) // проверяет действительно ли это массив нужных обьектов. да - сохраняет в переменную. нет - кидает ошибку  
        localStorage.setItem("todos", JSON.stringify(validatedTodos)); // созраняет в  todos в localstorg переведенный в сткроку json с массивом validatedTodos
    }
    catch (error) {
        console.log("error:", error) // выводит лог ошибки 
    } 
}
export function loadToDos(): Todo[] {
    try {
        const localTodos = localStorage.getItem("todos"); // возвращает строку, JSON по сути
        const locatToDosAsObjArray = JSON.parse(localTodos || "[]") // возвращает массив обьектов ЛИБО! что мне непонятно, строку "[]"
        return todosSchema.parse(locatToDosAsObjArray) // проверяет соответствует ли массив обьектов схеме

    } catch (error) {
        console.log("error:", error) // выводит лог ошибки 
        return []
    }
}