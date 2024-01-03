import { restaurant } from "./restaurant.mocks";

export const recipeMock = {
   id: "f7b9dc3d-9b99-4daf-9bce-f3d977ad2117",
   name: "Recipe",
   description: "This is a recipe",
   price: 1234,
   restaurantId: restaurant.id,
   categoryId: null
};

export const secondRecipeMock = {
   id: "f7b9dc3d-9b99-4daf-9bce-f3d977ad2118",
   name: "Recipe 2",
   description: "This is a recipe 2",
   price: 1234,
   restaurantId: restaurant.id,
   categoryId: "39886d01-6713-4b1c-8643-cb8572ec3732"
}

export const updatedRecipeMock = {
   id: recipeMock.id,
   name: "Recipe Update",
   description: "This is a recipe update",
   price: 4321,
   restaurantId: recipeMock.restaurantId,
   categoryId: "15c8bfbc-8b0e-4f3e-a89d-48e2f772c968"
};

export const recipeCreateBodyMock = {
   name: recipeMock.name,
   description: recipeMock.description,
   price: recipeMock.price,
};

export const recipeListMock = [recipeMock, secondRecipeMock];


export const recipeUpdateBodyMock = {
   name: updatedRecipeMock.name,
   description: updatedRecipeMock.description,
   price: updatedRecipeMock.price,
   categoryId: updatedRecipeMock.categoryId
};