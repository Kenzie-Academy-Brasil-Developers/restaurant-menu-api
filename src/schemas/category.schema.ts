import { z } from "zod";

export const categorySchema = z.object({
   id: z.string().min(1),
   name: z.string().min(1),
   restaurantId: z.string().min(1),
});

export type TCategory = z.infer<typeof categorySchema>;

export const categoryCreateBodySchema = categorySchema.pick({ name: true });

export type TCategoryCreateBody = z.infer<typeof categoryCreateBodySchema>;

export const categoryUpdateBodySchema = categoryCreateBodySchema.partial(); 

export type TCategoryUpdateBody = z.infer<typeof categoryUpdateBodySchema>;
