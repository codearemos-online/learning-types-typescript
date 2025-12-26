/**
 *
 * ASSIGNING TYPES  
 * 
*/
const number:number = 2;
const name:string = "John";
const isProgrammer:boolean = true;


/**
 *
 * ANY  
 * 
*/

let value = undefined;
value = "1234";

let parse = JSON.parse("312312")

let data = fetch('petirion').then(data => data.json()).then(data => data.asd.asd)

/**
 *
 * OBJECTS  
 * 
*/

const person:{name:string,surname:string,isProgrammer?:boolean} = {name:"alex",surname:"beltran"}

person.isProgrammer = true;


/**
 *
 * TYPES vs INTERFACES  
 * 
*/

//main difference in types use type and =. In interface use the word interface and don't use = anymore
// interface only works with objects

type Programmer = boolean;

type Person = {
    name:string,
    surname:string,
    isProgrammer?:Programmer
}



const person2:Person = {
    name:"alex2",
    surname:"beltran",
    isProgrammer:true
}
