// union 

type UserRole = "admin" | "editor" | "viewer"; 

const assignRole = (role: UserRole) => {
    if (role === "admin") {
        return "You have full access.";
    }
    else if (role === "editor") {
        return "You can edit content.";
    }
    else {
        return "You can view content.";
    }
}

assignRole("editor");

// intersection

type ContactInfo = {
    email: string;
    phone: string;
};

type Employee = {
    id: number;
    name: string;
};

type EmployeeContact = Employee & ContactInfo;

const mintuSikder: EmployeeContact = {
    id : 121,
    email : "mintusikder@gmail.com",
    name : "Mintu Sikder",
    phone : "017"
}