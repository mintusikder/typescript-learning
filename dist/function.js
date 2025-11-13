"use strict";
//function
Object.defineProperty(exports, "__esModule", { value: true });
// arow function , normal function
// normal function
function add(a, b) {
    return a + b;
}
//arow function
const addArrow = (a, b) => {
    return a + b;
};
addArrow(3, 7);
add(5, 10);
//object => function => method
const poorUser = {
    firstName: "Jane",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    },
};
poorUser.addBalance(10);
const arr = [1, 2, 3, 4, 5];
const arrSquire = arr.map((item) => item * item);
console.log(arrSquire);
//# sourceMappingURL=function.js.map