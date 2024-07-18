import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  role: z.string(),
  email: z.string(),
  phone: z.string(),
});