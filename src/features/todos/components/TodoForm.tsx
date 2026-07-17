"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react";
import { Field } from "@/components/ui/field"

export default function TodoForm({ addItem }: { addItem(title: string): void }) {
  function handleSubmit(formData: FormData) {
    const title = formData.get("inputToDo");
    if(title){
      addItem(title.toString())
    }
  }
  return (
      <form className= "form" action={handleSubmit}>
        <Field orientation="horizontal">
          <Input name="inputToDo" placeholder="Add a new task..." />
          <Button type="submit"> <Plus/> </Button>
        </Field>
      </form>
  )
}