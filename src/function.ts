type Person = {
    name:string,
    age?:number
}

const getName = (person: Person) => {
    return person;
}

const registerPerson: Person = {
    name:"diego"
}

const newPerson = getName(registerPerson);

console.log(newPerson)