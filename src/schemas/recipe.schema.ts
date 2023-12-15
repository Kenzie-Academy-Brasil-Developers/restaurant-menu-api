import { z } from "zod";

export const recipeSchema = z.object({
   id: z.string().min(1),
   name: z.string().min(1),
   description: z.string().min(1),
   price: z.number().positive(),
   restaurantId: z.string().min(1),
   categoryId: z.string().optional(),
});

export type TRecipe = z.infer<typeof recipeSchema>;
