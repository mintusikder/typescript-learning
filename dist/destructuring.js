"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object destructuring
const user = {
    id: 123,
    name: {
        firstName: "Jane",
        lastName: "Doe",
        age: 28,
    },
    gender: "male",
    favouriteColor: "red",
};
const userGender = user.gender;
const userFirstName = user.name.firstName;
const { favouriteColor, name: { lastName } } = user;
// console.log(favouriteColor);
// console.log(lastName);
//array destructuring 
const colors = ["red", "green", "blue", "yellow", "purple"];
// const myFavouriteColor = colors
const [, , , , myFavouriteColor] = colors;
console.log(myFavouriteColor);
//# sourceMappingURL=destructuring.js.map