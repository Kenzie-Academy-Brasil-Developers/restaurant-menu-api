import { prisma } from "../../../database/prisma";
import { TRecipe } from "../../../schemas/recipe.schema";
import { restaurantRecipeCreateDataMock } from "../../__mocks__/recipe.mocks";
import { request } from "../../utils/request";
import { simulateLogin } from "../../utils/simulateLogin";

describe("Integration test: get restaurant recipes", () => {
   it("should be able to get all the recipes from a restaurant", async () => {
      const { restaurant } = await simulateLogin();

      const recipeData = restaurantRecipeCreateDataMock(restaurant.id);

      const recipeListData = [recipeData, recipeData];
      await prisma.recipe.createMany({ data: recipeListData });

      const data = await request
         .get(`/recipes/restaurant/${restaurant.id}`)
         .expect(200)
         .then((response) => response.body);

      expect(data).toHaveLength(recipeListData.length);

      data.forEach((recipe: TRecipe) => {
         expect(recipe.id).toBeDefined();
         expect(recipe.name).toBe(recipeData.name);
         expect(recipe.price).toBe(recipeData.price);
         expect(recipe.description).toBe(recipeData.description);
         expect(recipe.categoryId).toBe(recipeData.categoryId);
         expect(recipe.restaurantId).toBe(restaurant.id);
      });
   });

   it("should throw error when restaurant id is invalid", async () => {
      const data = await request
         .get("/recipes/restaurant/2bf43bce-98c0-48db-82a5-69453aafdf3e")
         .expect(404)
         .then((response) => response.body);
      expect(data.message).toBe("Restaurant not found");
   });
});
