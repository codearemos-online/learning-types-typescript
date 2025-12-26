const person = {id: 1, name: "Jose"};
const people: typeof person[] = [];

people.push(person)
console.log(people)

/**
 * 
 * Exercise not repeat config
 * 
*/

//wrong
type Config = {
    apiUrl: string,
    timeout:number
}

const config: Config = {
    apiUrl:"https//codearemos.online",
    timeout:2000
}

//good

const configGood: Config = {
    apiUrl:"https//codearemos.online",
    timeout:2000
}

const ConfigGood = typeof configGood

//Functions

const sayHi = (name:string) => {
    console.log(name)
}

type Functype = typeof sayHi

function createUser() {
    return {
        id:1,
        name:"Alex",
        active: true
    }
}

type User = typeof createUser