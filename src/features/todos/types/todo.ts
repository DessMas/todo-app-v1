import { z } from "zod"


export const schemaToDo = z.object({
    id: z.string(),
    title: z.string(),
    status: z.boolean(),
});

export type Todo = z.infer<typeof schemaToDo>