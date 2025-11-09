// array , object
let bajarlist: string[] = ["elma", "armut", "muz"];

// bajarlist.push(12);

let mixArray: (string | number | boolean)[] = [1, "iki", true];

mixArray.push(false);

// let con: [number, number] = [20, 20, 5];

//reference type : object

// const user: {
//   organization: "Tech Corp";  //value => type : literal types
//   firstName: string;
//   middleName?: string;
//   lastName: string;
//   isMarred: boolean;
// } = {
//   organization: "Tech Corp",
//   firstName: "John",
//   middleName: "something",
//   lastName: "Doe",
//   isMarred: false,
// };

// user.organization = "New Org";

const user: {
  readonly organization: string; // access modifier
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarred: boolean;
} = {
  organization: "Tech Corp",
  firstName: "John",
  middleName: "something",
  lastName: "Doe",
  isMarred: false,
};

// user.organization = "New Org";

console.log(user);
