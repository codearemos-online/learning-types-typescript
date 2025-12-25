/**
 * 
 * Using union type 
 * 
*/

let id: number | string;

id = '123';
// It's not available type id = true; 

let status: "Pending" | "Approve" = "Pending";
// Approved is not assignable status = "Approved";

type Todo = {
    name: string
    status: "Pending" | "Finished"
}

type Person = {
    name: string
}

type TodoPerson = Todo | Person

let todoPerson: TodoPerson = {
    name: "William"
}

/**
 * 
 * Exercise 1
 * return a correct API Response
 * 
*/

type SuccessResponse = {
    success: true,
    data: string
}

type ErrorResponse = {
    success: false,
    message: string
}

type ApiResponse = SuccessResponse | ErrorResponse;

/**
 * 
 * search by ID or email
 * 
*/

type UserIndentifier = number | string;

function findUser(identifier: UserIndentifier) {
    if (typeof identifier == 'number') {
        console.log('search by id')
    } else {
        console.log('search by email')
    }
}

/**
 * 
 * simulate events
 * 
*/

type Event =
    | { type: "USER_CREATED", userId: number }
    | { type: "USER_UPDATED", userId: number }


function handleEvent(event: Event) {
    switch (event.type) {
        case "USER_CREATED":
            console.log('created')
            break;
        case "USER_UPDATED":
            console.log("updated")
            break;
    }
}

/**
 * 
 * Status process
 * 
*/

type ProcessState = 
| {status: "idle"}
| {status: "loading"}
| {status: "success", data:string}
| {status: "error", message:string}

const handleState = (process:ProcessState) => {
    switch(process.status){
        case 'idle':
            console.log('idle');
            break;
        case 'loading':
            console.log('Loading ...');
            break;
        case 'success':
            console.log('Bien ', process.data);
            break;
        case 'error':
            console.log('Error - ',process.message);
            break;
    }
}

handleState({status:"success",data:"Excelente"})
handleState({status:"error",message:"Problema de conexion"})