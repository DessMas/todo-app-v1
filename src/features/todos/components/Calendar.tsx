import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns"
// Calendar
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon } from "lucide-react"
import { useState } from 'react';

export default function DatePicker({ date, setDate, title }: { date: Date | undefined, setDate: React.Dispatch<React.SetStateAction<Date | undefined>>, title: string }) {
  const [open, setOpen] = useState(false)
  console.log("datepicker open-state changed")
  function handleSelect (selectedDate : Date | undefined) {
    console.log("We are selecting the following date:", selectedDate)
    setDate(selectedDate),
    setOpen(false)
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            data-empty={!date}
            className="shrink-0 justify-start text-left font-normal data-[empty=true]:text-muted-foreground h-8"
          />
        }
      >
        <CalendarIcon />
        {date ? format(date, "PP") : <span>{title}</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date}  onSelect={handleSelect}/>
      </PopoverContent>
    </Popover>
  )
}