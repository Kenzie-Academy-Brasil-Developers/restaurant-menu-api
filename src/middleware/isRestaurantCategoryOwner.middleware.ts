import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export class IsRestaurantCategoryOwner{
    static async execute(req: Request, res: Response, next: NextFunction){
        const restaurantId = res.locals.decode.id; 

        const category = res.locals.category;

        if(category.restaurantId !== restaurantId){
            throw new AppError("Restaurant must be the owner of this category", 401);
        }

        next();
    }
}
