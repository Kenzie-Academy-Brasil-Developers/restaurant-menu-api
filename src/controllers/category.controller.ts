import { inject, injectable } from "tsyringe";
import { CategoryServices } from "../services/category.service";
import { Request, Response } from "express";
import { TCategory } from "../schemas/category.schema";

@injectable()
export class CategoryControllers {
   constructor(@inject("CategoryServices") private categoryServices: CategoryServices) {}

   async create(req: Request, res: Response): Promise<Response<TCategory>> {
      const { id } = res.locals.decode;

      const response = await this.categoryServices.create(req.body, id);

      return res.status(201).json(response);
   }

   async getMany(req: Request, res: Response): Promise<Response<TCategory[]>> {
      const restaurantId = req.params.restaurantId;

      const response = await this.categoryServices.getMany(restaurantId);

      return res.status(200).json(response);
   }

   async update(req: Request, res: Response): Promise<Response<TCategory>> {
      const id = req.params.id;

      const response = await this.categoryServices.update(req.body, id);

      return res.status(200).json(response);
   }

   async delete(req: Request, res: Response): Promise<Response<void>> {
      const id = req.params.id;

      await this.categoryServices.delete(id);

      return res.status(204).json();
   }
}
