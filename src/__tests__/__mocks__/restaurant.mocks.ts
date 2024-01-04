import bcrypt from "bcrypt";

export const restaurant = {
   id: "4b8744ee-8732-41d0-bb31-32c4136c382a",
   name: "Restaurant",
   email: "restaurant@email.com",
   description: null,
   password: "12345678",
};

export const restaurantListMock = [
    restaurant,
];

export const restaurantReturnListMock = [
    {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description
    }
]

export const restaurantMock = async () => {
   const hashPassword = await bcrypt.hash(restaurant.password, 10);

   return {
      id: restaurant.id,
      name: restaurant.name,
      email: restaurant.email,
      description: restaurant.description,
      password: hashPassword,
   };
};

export const restaurantCreateDataMock = async () => {
   const hashPassword = await bcrypt.hash(restaurant.password, 10);

   return {
      name: restaurant.name,
      email: restaurant.email,
      description: restaurant.description,
      password: hashPassword,
   };
}

export const restaurantCreateBodyMock = {
   name: restaurant.name,
   email: restaurant.email,
   password: restaurant.password,
};


export const restaurantWrongCreateBodyMock = {
   name: 123,
   email: 123,
   password: 123,
}

export const restaurantLoginBodyMock = {
   email: restaurant.email,
   password: restaurant.password,
};

export const restaurantLoginWrongPasswordBodyMock = {
   email: restaurant.email,
   password: "87654321",
};

export const restaurantWrongLoginBodyMock = {
   email: 321,
   password: 321,
}

export const restaurantUpdateBodyMock = {
   description: "Description example",
};

export const restaurantUpdatedMock = async () => {
   const restaurant = await restaurantMock();

   return {
      ...restaurant,
      description: restaurantUpdateBodyMock.description,
   };
};

export const restaurantReturnMock = {
   id: restaurant.id,
   name: restaurant.name,
   email: restaurant.email,
   description: restaurant.description,
};

export const restaurantUpdatedReturnMock = {
   id: restaurant.id,
   name: restaurant.name,
   email: restaurant.email,
   description: restaurantUpdateBodyMock.description,
};
