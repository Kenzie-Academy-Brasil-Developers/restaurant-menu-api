import { z } from "zod";

export const categorySchema = z.object({
   id: z.string().min(1),
   name: z.string().min(1),
   restaurantId: z.string().min(1),
});

export type TCategory = z.infer<typeof categorySchema>;
