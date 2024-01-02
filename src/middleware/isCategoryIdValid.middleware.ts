import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class IsCategoryIdValid{
    static async execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id;

        const category = await prisma.category.findFirst({ where: { id }});

        if(!category){
            throw new AppError("Category not found", 404);
        }

        next();
    }
}