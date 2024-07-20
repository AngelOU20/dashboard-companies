import { z } from "zod";

export const formSchema = z.object({
  eventName: z.string().min(2).max(50),
  companieSelected: z.object({
    name: z.string().min(2),
    id: z.string(),
  }),
});