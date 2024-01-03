/*
export const categorySchema = z.object({
   id: z.string().min(1),
   name: z.string().min(1),
   restaurantId: z.string().min(1),
});
*/

import { restaurant } from "./restaurant.mocks";

export const categoryMock = {
    id: "d4046a93-3e73-4720-90c3-17461e6285ca",
    name: "Category",
    restaurantId: restaurant.id
}

export const secondCategoryMock = {
    id: "d4046a93-3e73-4720-90c3-17461e6285cb",
    name: "SecondCategory",
    restaurantId: restaurant.id
}
export const updatedCategoryMock = {
    id: categoryMock.id,
    name: "Category update",
    restaurantId: categoryMock.id
}

export const categoryCreateBodyMock = {
    name: categoryMock.name
}

export const categoryListMock = [categoryMock, secondCategoryMock];

export const categoryUpdateBodyMock = {
    name: updatedCategoryMock.name
}