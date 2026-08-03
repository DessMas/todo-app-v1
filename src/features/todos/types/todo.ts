import { z } from "zod"


export const schemaToDo = z.object({
    id: z.string(),
    title: z.string(),
    status: z.boolean(),
    deadline: z.string().optional()
});

export type Todo = z.infer<typeof schemaToDo>