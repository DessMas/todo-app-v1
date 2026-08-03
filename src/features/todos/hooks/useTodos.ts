
import { Todo } from "../types/todo";
import React, { useEffect } from "react";
import { loadToDos, updateTodosInLocalStorage } from "../services/todoStorage"

export default function useToDos() {
  // State zum Speichern aller Todos
  const [todos, setToDos] = React.useState<Todo[]>([]);
  /*
   * Because of Emtpy dependency Array loadToDos gets called once on load
   */
  useEffect(() => {
    const initialTodos = loadToDos();
    setToDos(initialTodos);
  }, []);

  // Neue ToDo hinzufügen
  function addItem(todo: Todo) {
    // Neue Todo am Ende des Arrays hinzufügen 
    const newTodos = [...todos, todo];
    saveTodos(newTodos)
  }
  function saveTodos(todos: Todo[]) {
    setToDos(todos)
    updateTodosInLocalStorage(todos)
  }

  //ToDO löschen
  function deleteItem(id: string) {
    //Neues array ohne todo mit dem ausgewählten id 
    const filtered = todos.filter((todo) => {
      return todo.id !== id
    });
    // Speichert neue array-State
    saveTodos(filtered)
  }
  function updateToDo(updatedTodo : Todo) {
    const newArray = todos.map((todo) => {
      if (updatedTodo.id === todo.id) {
        return updatedTodo;
      } 
      else{
        return todo;
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
  return { deleteItem, addItem,updateToDo, doneTodos, toBeDoneTodos, removeDoneToDos }
}