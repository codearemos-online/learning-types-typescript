function checkLength(a:string, b:number): boolean{
    return a.length < b;
}

type FunctionValue = (number1: number) => string;

// using return type to get a type of a function

type GetTypeLengthByFunction = ReturnType<typeof checkLength>

type GetTypeByFunctionTypeValue = ReturnType<FunctionValue>

//parameters

type GetParamsByFunction = Parameters<typeof checkLength>[0]

type GetParamsByTypeFunction= Parameters<FunctionValue>