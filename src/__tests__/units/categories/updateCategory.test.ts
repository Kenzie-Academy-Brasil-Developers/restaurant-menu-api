import { container } from "tsyringe";
import { CategoryServices } from "../../../services/category.service";
import { prismaMock } from "../../__mocks__/prisma";
import {
   categoryUpdateBodyMock,
   updatedCategoryMock,
} from "../../__mocks__/categories.mocks";

describe("Unit test: update category", () => {
   it("update category should work correctly", async () => {
      const categoryServices = container.resolve(CategoryServices);

      prismaMock.category.update.mockResolvedValue(updatedCategoryMock);

      const data = await categoryServices.update(
         categoryUpdateBodyMock,
         updatedCategoryMock.id
      );

      expect(data).toStrictEqual(updatedCategoryMock);
   });
});
