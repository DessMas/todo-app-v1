import React from "react";
import { Input } from "@/components/ui/input";
import DatePicker from "./Calendar";

export default function TodoEditView({
  newTitle,
  date,
  setDate,
  handleChangeTitle,
}: {
  newTitle: string;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>): void;
}) {
  return (
    <>
      <Input value={newTitle} onChange={handleChangeTitle} />
      <div className="col-start-2">
        <DatePicker
          date={date}
          setDate={setDate}
          title={"Set a deadline"}
        ></DatePicker>
      </div>
    </>
  );
}
