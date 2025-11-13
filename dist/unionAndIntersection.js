"use strict";
// union 
Object.defineProperty(exports, "__esModule", { value: true });
const assignRole = (role) => {
    if (role === "admin") {
        return "You have full access.";
    }
    else if (role === "editor") {
        return "You can edit content.";
    }
    else {
        return "You can view content.";
    }
};
assignRole("editor");
const mintuSikder = {
    id: 121,
    email: "mintusikder@gmail.com",
    name: "Mintu Sikder",
    phone: "017"
};
//# sourceMappingURL=unionAndIntersection.js.map