type Person = {
    readonly id:number,
    name:string
}

const person: Person = {id: 12, name:"John"};
//edit id is not possible person.id = 34;
console.log(person)

/**
 * 
 * Exercise with array
 * 
*/
type NumberArray = readonly number[];

const numbers: NumberArray = [1,2,3,4];

