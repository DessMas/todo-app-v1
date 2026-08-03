"use client"
import DatePicker from "./Calendar";
import { Plus } from "lucide-react";
import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Todo } from "../types/todo";
import React from "react";
import { Separator } from "@/components/ui/separator"

export default function TodoForm({ addItem }: { addItem(todo: Todo): void }) {
  const [date, setDate] = React.useState<Date>()

  function handleSubmit(formData: FormData) {
    const title = formData.get("inputToDo");
    if (title) {
      console.log("adding new todo with this title:", title)
      // TODO: Make this a real TODO
      const todo: Todo = {
        id: crypto.randomUUID(),
        status: false,
        title: title.toString(),
        deadline: date?.toISOString(),
      }
      addItem(todo)
      setDate(undefined)
      console.log("adding new todo with the date:", todo.deadline)
    }
  }
  return (
    <form className="mt-7.5 " action={handleSubmit}>
      <InputGroup className="flex h-28 flex-col items-stretch rounded-2xl p-3 shadow-sm" >
        <div className="flex items-center gap-2">
          <InputGroupInput className="flex-1 " name="inputToDo" placeholder="Add a new task..." />
          <InputGroupButton className="h-10 aspect-square" type="submit"> <Plus /> </InputGroupButton>
          </div>
          <Separator/>
          <div className="flex items-center my-3">
            <DatePicker date={date} setDate={setDate} ></DatePicker>
          </div>
      </InputGroup>
    </form>
  )
}


