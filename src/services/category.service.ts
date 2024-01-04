import { injectable } from "tsyringe";
import {
   TCategory,
   TCategoryCreateBody,
   TCategoryUpdateBody,
} from "../schemas/category.schema";
import { prisma } from "../database/prisma";

@injectable()
export class CategoryServices {
   async create(body: TCategoryCreateBody, restaurantId: string): Promise<TCategory> {
      const newCategoryData = { ...body, restaurantId };

      const category = await prisma.category.create({ data: newCategoryData });

      return category;
   }

   async getMany(restaurantId: string): Promise<TCategory[]> {
      const categories = await prisma.category.findMany({ where: { restaurantId } });

      return categories;
   }

   async update(body: TCategoryUpdateBody, categoryId: string): Promise<TCategory> {
      const category = await prisma.category.update({
         where: { id: categoryId },
         data: body,
      });

      return category;
   }

   async delete(categoryId: string): Promise<void> {
      await prisma.category.delete({ where: { id: categoryId } });
   }
}
