import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(10),
  lastName: z.string().min(2).max(10),
  email: z.string().email(),
  phone: z.string(), //work later
  bio: z.string().min(2).max(50),
  hometown: z.string().min(2).max(15),
});
