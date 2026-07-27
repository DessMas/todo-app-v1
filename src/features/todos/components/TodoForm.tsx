"use client"

import { Plus } from "lucide-react";
import { InputGroup, InputGroupButton ,InputGroupInput} from "@/components/ui/input-group";

export default function TodoForm({ addItem }: { addItem(title: string): void }) {
  function handleSubmit(formData: FormData) {
    const title = formData.get("inputToDo");
    console.log("handleSubmit function started, title of new todo is:", title)
    if (title) {
      console.log("adding new todo with this title:", title)
      addItem(title.toString())
      console.log("new todo was added with this title:", title)
    }
  }
  return (
    <form className="mt-7.5" action={handleSubmit}>
         <InputGroup >
            <InputGroupInput name="inputToDo" placeholder="Add a new task..." />
            <InputGroupButton type="submit"> <Plus className="h-4 w-4" /> </InputGroupButton>
         </InputGroup>
    </form>
  )
}
