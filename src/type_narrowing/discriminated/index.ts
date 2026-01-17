/* 
    Insted of:
    type ApiResponse = {
    status: "Success" | "Error"
    data?: {id:number,name:string}
    message?: string
} */

type Success = {
    status: "Success",
    data:{id:number,name:string}
}

type Error = {
    status: "Error",
    message: string
}

type ApiResponse = Success | Error


const getResponse = (data:ApiResponse) => {
    if(data.status == "Success"){
        console.log(data.data.name)
    }else{
        console.log(data.message)
    }
}