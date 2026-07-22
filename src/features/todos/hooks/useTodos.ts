
import { Todo } from "../types/todo";
import React, { useEffect } from "react";
import { loadToDos, updateTodosInLocalStorage } from "../services/todoStorage"

export default function useToDos() {
  // State zum Speichern aller Todos
  const [todos, setToDos] = React.useState<Todo[]>([]);
  /**
   * Because of Emtpy dependency Array loadToDos gets called once on load
   * 
   */
  useEffect(() => {
    const initialTodos = loadToDos();
    setToDos(initialTodos);
  }, []);

  // Neue ToDo hinzufügen
  function addItem(title: string) {
    
    //Neue todo Objekt initialisieren
    const todo: Todo = {
      id: crypto.randomUUID(),
      status: false,
      title: title
    }
    // Neue Todo am Ende des Arrays hinzufügen 
    const newTodos = [...todos, todo];
    saveTodos(newTodos)
    // setToDos(newTodos)
    // updateTodosInLocalStorage(newTodos)
    console.log("addItem function has added new item with this title:", title )
  }
  function saveTodos(todos: Todo[]) {
    setToDos(todos)
    updateTodosInLocalStorage(todos)
  }

  //ToDO löschen
  function deleteItem(id: string) {
    //Neue array ohne todo mit dem ausgewählten id 
    const filtered = todos.filter((todo) => {
      return todo.id !== id
    });
    // Speichert neue array-State
    saveTodos(filtered)
  }
  // Changed Checkbox 
  function checkItem(id: string) {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status }
      } else {
        return todo;
      }
    })
    saveTodos(newArray)
  }
  function editToDo(id: string, newTitle: string) {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: newTitle }
      }
      else {
        return todo
      }
    })
    saveTodos(newArray)
  }
  const doneTodos = todos.filter(todo => todo.status);
  const toBeDoneTodos = todos.filter(todo => !todo.status);

  function removeDoneToDos() {
    const newArray = todos.filter((todo) => !todo.status)
    saveTodos(newArray)
  }
  return { deleteItem, addItem, checkItem, doneTodos, toBeDoneTodos, removeDoneToDos, editToDo }
}