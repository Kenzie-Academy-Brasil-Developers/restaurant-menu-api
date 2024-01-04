import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class IsRestaurantIdValid{
    static async execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.restaurantId;

        const restaurant = await prisma.restaurant.findFirst({ where: { id }});

        if(!restaurant){
            throw new AppError("Restaurant not found", 404);
        }

        next();
    }
}