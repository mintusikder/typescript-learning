"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discountCalculator = (type) => {
    if (typeof type === "number") {
        const discountPrice = type - type * 0.1;
        console.log(`Discounted price is: ${discountPrice}`);
    }
    else if (typeof type === "string") {
        const numericValue = parseFloat(type);
        console.log(`Discounted price is: ${numericValue - numericValue * 0.1}`);
    }
    else {
        console.log("Invalid type for discount calculation.");
    }
};
discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);
//void 
//# sourceMappingURL=unKnown.js.map