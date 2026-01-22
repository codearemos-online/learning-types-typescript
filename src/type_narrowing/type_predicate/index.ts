/* function isString(value:unknown): value is string{
    return typeof value === "string"
}

function printValue(value:string | number):string{
    if(isString(value)){
        return value;
    }
    throw new Error("No string")
}

console.log(printValue(123))  */


//exercise 2

type User = {
    id:number,
    email:string
}

function isUser(value:unknown):value is User{
    return (
        typeof value === 'object' &&
        value != null &&
        'id' in value &&
        'email' in value
    )
}

function printUser(input:unknown){
    if(isUser(input)){
        console.log(input.email)
    }
}

printUser({"id":1,"email":"addasd"})

