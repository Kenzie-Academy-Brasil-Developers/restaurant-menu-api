import { container } from "tsyringe";
import { RestaurantServices } from "../../../services/restaurant.service";
import { prismaMock } from "../../__mocks__/prisma";
import { restaurantUpdateBodyMock, restaurantUpdatedMock, restaurantUpdatedReturnMock } from "../../__mocks__/restaurant.mocks";

describe("Unit test: update restaurant", () => {
    it("update restaurant should work correctly", async () => {
        const restaurantServices = container.resolve(RestaurantServices);

        const restaurant = await restaurantUpdatedMock()

        prismaMock.restaurant.update.mockResolvedValue(restaurant);
        const data = await restaurantServices.update(restaurantUpdateBodyMock, restaurant.id);

        expect(data).toStrictEqual(restaurantUpdatedReturnMock);
    });
})