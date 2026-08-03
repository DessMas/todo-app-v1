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

export default function DatePicker({ date, setDate }: { date: Date | undefined, setDate: React.Dispatch<React.SetStateAction<Date | undefined>> }) {
  const [open, setOpen] = useState(false)
  function handleSelect (selectedDate : Date | undefined) {
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
        {date ? format(date, "PP") : <span>Set a deadline</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  )
}