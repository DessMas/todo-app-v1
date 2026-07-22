"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react";


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
      <div className="relative">
        <Input
          className="h-13 pr-3"
          name="inputToDo"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-sky-400 text-white transition-colors duration-200 hover:bg-cyan-500"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}
/* <Button
          type="submit"
          onClick={() => console.log("Button got clicked!")}
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-sky-400 text-white transition-colors duration-200 hover:bg-cyan-500"
        >
          <Plus className="h-4 w-4" />
        </Button>
*/