//function

// arow function , normal function
// normal function
function add(a: number, b: number): number {
  return a + b;
}
//arow function
const addArrow = (a: number, b: number): number => {
  return a + b;
};
addArrow(3, 7);
add(5, 10);

//object => function => method

const poorUser = {
  firstName: "Jane",
  balance: 5,
  addBalance(money: number): number {
    return this.balance + money;
  },
};

poorUser.addBalance(10);

const arr: number[] = [1, 2, 3, 4, 5];
const arrSquire = arr.map((item: number): number => item * item);
console.log(arrSquire);