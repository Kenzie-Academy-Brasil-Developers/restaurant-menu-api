import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

export class HandleErrors {
   static execute(error: Error, req: Request, res: Response, nexx: NextFunction) {
      if (error instanceof AppError) {
         return res.status(error.statusCode).json({ message: error.message });
      }

      if (error instanceof ZodError) {
         return res.status(409).json(error);
      }

      if (error instanceof JsonWebTokenError) {
         return res.status(401).json({ messsage: error.message });
      }

      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
   }
}
