import React from "react";
import type { Todo } from "../types/todo";
import { format } from "date-fns";
import DatePicker from "./Calendar";
import { CalendarDays } from "lucide-react";
export default function TodoDeadline({
  isEditing,
  date,
  setDate,
  todo,
  isTodayDate,
}: {
  isEditing: boolean;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  todo: Todo;
  isTodayDate: boolean | undefined;
}) {
  return (
    <>
      {isEditing ? (
        <div className="col-start-2">
          <DatePicker
            date={date}
            setDate={setDate}
            title={"Set a deadline"}
          ></DatePicker>
        </div>
      ) : (
        todo.deadline && (
          <div className="col-start-2">
            <p
              className={
                todo.status
                  ? "line-through flex items-center gap-1 text-xs text-gray-500 "
                  : "flex items-center gap-1 text-xs text-gray-500"
              }
            >
              <CalendarDays
                className={todo.status && isTodayDate ? "text-blue-500" : ""}
                size={15}
              />
              {isTodayDate ? (
                <span className="text-blue-500"> {"Today"}</span>
              ) : (
                format(todo.deadline, "d. MMM.")
              )}
            </p>
          </div>
        )
      )}
    </>
  );
}
