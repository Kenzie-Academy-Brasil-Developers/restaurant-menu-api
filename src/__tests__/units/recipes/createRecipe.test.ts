import { container } from "tsyringe";
import { RecipeServices } from "../../../services/recipe.service";
import { prismaMock } from "../../__mocks__/prisma";
import { recipeCreateBodyMock, recipeMock } from "../../__mocks__/recipe.mocks";
import { restaurant } from "../../__mocks__/restaurant.mocks";

describe("Unit: create recipe", () => {
   it("create recipe should work correctly", async () => {
      const recipesServices = container.resolve(RecipeServices);

      prismaMock.recipe.create.mockResolvedValue(recipeMock);

      const data = await recipesServices.create(recipeCreateBodyMock, restaurant.id);

      expect(data).toStrictEqual(recipeMock);
   });
});
