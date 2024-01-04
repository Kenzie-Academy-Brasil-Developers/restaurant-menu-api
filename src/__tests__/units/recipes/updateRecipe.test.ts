import { container } from "tsyringe";
import { RecipeServices } from "../../../services/recipe.service";
import { prismaMock } from "../../__mocks__/prisma";
import { recipeUpdateBodyMock, updatedRecipeMock } from "../../__mocks__/recipe.mocks";

describe("Unit test: update recipe", () => {
   it("update recipe should work correctly", async () => {
      const recipeServices = container.resolve(RecipeServices);

      prismaMock.recipe.update.mockResolvedValue(updatedRecipeMock);

      const data = await recipeServices.update(
         recipeUpdateBodyMock,
         updatedRecipeMock.id
      );

      expect(data).toStrictEqual(updatedRecipeMock);
   });
});
