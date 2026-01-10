type Code = {
    code: string | number;
    date?:Date | null
}



function validateCode(value: Code) {
    if (typeof value.code === 'string') {
        value.code.toUpperCase()
    }else{
        value.code.toString();
    }

    // It is wrong because toUppercase does not exists on type number
    // value.code.toUpperCase()
}

function validateDate(value:Code){
    if(value.date instanceof Date){
        console.log(value.date.getFullYear())
    }else{
        console.log('value null')
    }
}   

validateDate({code: 1234, date: new Date('2025-01-01 13:00:00')})

