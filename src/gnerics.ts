type GenericArray<value> = Array<value>;

const friends: GenericArray<string> = ["Alice", "Bob", "Charlie"];

const scores: GenericArray<number> = [90, 85, 88]; 

const list : GenericArray<boolean> = [true, false, true];

type GenericTuple<value1, value2> = [value1, value2]; 

const user: GenericTuple<string, number> = ["Dave", 30];
const product: GenericTuple<string, boolean> = ["Laptop", true];

