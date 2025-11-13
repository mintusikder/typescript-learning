"use strict";
// type UserRole = "admin" | "user" | "guest"; 
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["User"] = "User";
    UserRole["Guestt"] = "Guestt";
})(UserRole || (UserRole = {}));
const canUserAccess = (role) => {
    if (role === UserRole.Admin || role === UserRole.User) {
        return true;
    }
    else {
        return false;
    }
};
const inEdit = canUserAccess(UserRole.Admin); // Error: Type '"editor"' is not assignable to type 'UserRole'.
console.log(inEdit);
//# sourceMappingURL=enum.js.map