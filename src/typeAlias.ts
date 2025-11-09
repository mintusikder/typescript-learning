type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
    age: number;
  };
  gender: "male" | "female";
  contactNumber?: string;
  addressInfo: {
    street: string;
    city: string;
  };
};

const user1: User = {
  id: 101,
  name: {
    firstName: "Emily",
    lastName: "Smith",
    age: 30,
  },
  gender: "female",
  addressInfo: {
    street: "123 Main St",
    city: "Metropolis",
  },
};

const user2: User = {
  id: 1235,
  name: {
    firstName: "Emily",
    lastName: "young",
    age: 60,
  },
  gender: "male",
  addressInfo: {
    street: "438 Main St",
    city: "barisal",
  },
};


//function 

type AddFunction = (num1 : number , num2: number) => number

const add : AddFunction = (num1 , num2) => num1 + num2;