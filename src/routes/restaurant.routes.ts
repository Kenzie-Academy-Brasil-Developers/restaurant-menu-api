import { Router } from "express";
import { container } from "tsyringe";
import { RestaurantServices } from "../services/restaurant.service";
import { RestaurantControllers } from "../controllers/restaurant.controller";
import { ValidateBody } from "../middleware/validateBody.middleware";
import {
   restaurantLoginBodySchema,
   restaurantRegisterBodySchema,
} from "../schemas/restaurant.schema";
import { VerifyToken } from "../middleware/verifyToken.middleware";

export const restaurantRouter = Router();

container.registerSingleton("RestaurantServices", RestaurantServices);

const restaurantControllers = container.resolve(RestaurantControllers);

restaurantRoutes.post(
   "/",
   ValidateBody.execute(restaurantRegisterBodySchema),
   (req, res) => restaurantControllers.register
);

restaurantRoutes.post(
   "/login",
   ValidateBody.execute(restaurantLoginBodySchema),
   (req, res) => restaurantControllers.login
);

restaurantRoutes.get(
   "/profile",
   VerifyToken.execute,
   (req, res) => restaurantControllers.getRestaurant
);

restaurantRoutes.patch("/", VerifyToken.execute, (req, res) =>
   restaurantControllers.update(req, res)
);

restaurantRoutes.get("/", (req, res) =>
   restaurantControllers.getManyRestaurants(req, res)
);
