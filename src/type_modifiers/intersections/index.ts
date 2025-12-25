type User = {
    name: string
}

type Role = {
    role: string
}

type UserRole = User & Role & { id: number }

interface IUserRole extends User, Role { id: number}

const userType: UserRole = {
    id: 1,
    name: "John",
    role: "admin"
}

const userInterface: IUserRole = {
    id: 1,
    name: "Doe",
    role: "viewer"
}