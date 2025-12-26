type Person = {
    name: string,
    age: number
}

// using keyof to ensure valid keys

function getValue(key: keyof Person, person: Person) {
    return person[key];
}

console.log(getValue("age", { name: "John", age: 29 }))

// using keyof to ensure valid keys with type

type PersonKey = keyof Person;

let person: Person = {
    name: "dassd",
    age: 12
}

function printProperty(person: Person, key: PersonKey) {
    console.log(person[key]);
}

printProperty(person, "name")

/**
 * 
 * Exercise order by field
 * 
*/

type User = {
    id: number,
    name: string,
    age: number
    address: {
        id: number,
        city: string
    }
};

const users: User[] = [
    {
        id: 2,
        name: "Alex",
        age: 29,
        address: {
            id: 2,
            city: "Bogota"
        }
    },
    {
        id: 1,
        name: "Richie",
        age: 27,
        address: {
            id: 6,
            city: "Armenia"
        }
    },
    {
        id: 3,
        name: "Martin",
        age: 20,
        address: {
            id: 4,
            city: "Cali"
        }
    }
];

const orderByProperty = (users: User[], field: keyof User): User[] => {
    return users.sort((a: User, b: User) =>
        a[field] > b[field] ? 1 : -1
    )
}

const data: User[] = orderByProperty(users, "name");
console.log(data)
