"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react";

export default function TodoForm({ addItem }: { addItem(title: string): void }) {
  function handleSubmit(formData: FormData) {
    const title = formData.get("inputToDo");
    if(title){
      addItem(title.toString())
    }
  }
  return (
    <form action={handleSubmit}>
      <Input name="inputToDo" placeholder="Enter your Todo" />
      <Button type="submit"><Plus /></Button>
    </form>
  )
}