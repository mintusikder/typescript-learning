// type UserRole = "admin" | "user" | "guest";

// enum UserRole {
//     Admin = "Admin",
//     User =  "User",
//     Guest = "Guest"
// }

const UserRole = {
  Admin: "Admin",
  User: "User",
  Guest: "Guest",
} as const;

UserRole.Admin = "SuperAdmin"

const canUserAccess = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.User) {
    return true;
  } else {
    return false;
  }
};

const inEdit = canUserAccess(UserRole.Admin); // Error: Type '"editor"' is not assignable to type 'UserRole'.
console.log(inEdit);
