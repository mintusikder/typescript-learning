"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "hello";
anything.length; // using 'as' syntax
const kgTOGmConverter = (input) => {
    if (typeof input === "number") {
        const result = input * 1000;
        return `The converted value is : ${result} gm`;
    }
    else if (typeof input === "string") {
        const value = parseFloat(input);
        const result = value * 1000;
        return `The converted value is : ${result} gm`;
    }
    else {
        return "Invalid input type";
    }
};
const result1 = kgTOGmConverter(2);
const result2 = kgTOGmConverter("2 kg");
console.log(result1);
console.log(result2);
//# sourceMappingURL=typeAssertion.js.map