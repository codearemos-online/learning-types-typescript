/**
 *
 * APPLY TYPES IN FUNCTIONS  
 * 
*/

type Person = {
    name:string,
    age?:number
}

const getName = (person: Person) => {
    return person;
}

const registerPerson: Person = {
    name:"John"
}

const newPerson = getName(registerPerson);

console.log(newPerson)