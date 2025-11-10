type User = {
  name: string;
  age: number;
};

// interface : object shape define : array, function, object

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user" | "guest";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user" | "guest";
}

const user1: UserWithRole = {
  name: "Alice",
  age: 30,
  role: "admin",
};
const user2: IUserWithRole = {
  name: "Bob",
  age: 25,
  role: "user",
};


// function interface 

type Add = (a: number, b: number) => number;

interface IAdd {
  (a: number, b: number): number;
}


const add : Add = (a,b) => a + b;