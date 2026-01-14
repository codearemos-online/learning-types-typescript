function fun(data:unknown){
    if(typeof data == 'string'){
        console.log(data.toUpperCase())
    }else if(typeof data === 'number'){
        console.log(data.toString)
    }
}


//validate if exists property in an object

function validateProperty (data:unknown){
    if(data != null && typeof data == 'object' && "name" in data){
        console.log(data.name)
    }
}

validateProperty({name:'Doe'})