import type { Todo } from "../types/todo";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

export default function TodoView({
  todo,
  isTodayDate,
}: {
  todo: Todo;
  isTodayDate: boolean | undefined;
}) {
  return (
    <> 
      <p className={todo.status ? "line-through text-gray-500" : ""}>
        {todo.title}
      </p>
      {todo.deadline && (
        <div className="col-start-2">
          <p 
            className={
              todo.status
                ? "line-through flex items-center gap-1 text-xs text-gray-500 "
                : "flex items-center gap-1 text-xs text-gray-500"
            }
          >
            <CalendarDays
              className={
                todo.status && isTodayDate ? "text-blue-500" : ""
              }
              size={15}
            />

            {isTodayDate ? (
              <span className="text-blue-500">Today</span>
            ) : (
              format(todo.deadline, "d. MMM.")
            )}
          </p>
        </div>
      )}
    </>
  );
}