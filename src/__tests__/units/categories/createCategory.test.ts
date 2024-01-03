import { container } from "tsyringe"
import { CategoryServices } from "../../../services/category.service"
import { prismaMock } from "../../__mocks__/prisma";
import { categoryCreateBodyMock, categoryMock } from "../../__mocks__/categories.mocks";
import { restaurant } from "../../__mocks__/restaurant.mocks";

describe("Unit test: create category", () => {
    it("create category should work correctly", async () => {
        const categoryServices = container.resolve(CategoryServices);

        prismaMock.category.create.mockResolvedValue(categoryMock);
        const data = await categoryServices.create(categoryCreateBodyMock, restaurant.id);

        expect(data).toStrictEqual(categoryMock);
    })
})
