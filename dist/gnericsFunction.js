"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createArrayWithString = (value) => [value];
const createArrayWithNumber = (value) => [value];
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrayWithGeneric = (value) => [value];
const arrayString = arrayWithGeneric("Hello");
const arrayNumber = arrayWithGeneric(42);
const arrayGeneric = arrayWithGeneric({ id: 1, name: "Generic" });
//tuple
const createTuple = (value1, value2) => {
    return [value1, value2];
};
const createTupleGeneric = (value1, value2) => {
    return [value1, value2];
};
const resultTuple = createTupleGeneric("Age", 30);
//# sourceMappingURL=gnericsFunction.js.map