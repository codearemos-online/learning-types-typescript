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


/**
 *
 * APPLY VOID TYPES
 * 
*/

function printName(name:string):void{
    console.log(name)
} 

let namePerson = printName("Doe")


/**
 *
 * OPTIONAL PARAMETERS
 * 
*/

//Initialize values to params
const printNameAndOptions = (name:string,options:{debugMode:boolean} = {debugMode: true}) => {
    console.log(name,options)
}

type Options = {
    debugMode:boolean
}

const printNameAndOptionsOpc = (name:string,options?:Options) => {
    console.log(name,options)
}

printNameAndOptions('Testing name')
printNameAndOptionsOpc('Testing name opc', {debugMode:false})

/**
 *
 * OPTIONAL PARAMETERS
 * 
*/

type OptionDesc = {
    debugMode:boolean,
    printErrors:boolean
}

const printOptionsDestructured = (name:string,{debugMode}:OptionDesc) => {
    console.log(name,debugMode)
}

printOptionsDestructured("John",{debugMode:false,printErrors:true})


/**
 *
 * OPTIONAL PARAMETERS
 * 
*/

const printNumbers = (...nums:number[]) => {
    const num  = nums.reduce((num,num1) => num + num1)
    console.log(num)
}

printNumbers(1,2,3,4)


