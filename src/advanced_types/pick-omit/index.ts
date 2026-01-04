type Person = {
    id: number,
    name: string,
    lastname: string
}

type DataPerson = Omit<Person, 'id'>

type PickPerson = Pick<Person, 'name' | 'lastname'>

const registerPerson = (data:DataPerson):Person => {
   return {...data,id:123}
}   

console.log(registerPerson({
    name: "Diego",
    lastname: "Beltran"
}))