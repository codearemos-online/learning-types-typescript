/**
 * 
 * Using Generic in types
 * 
*/

function getValue<T>(value: T): T {
    return value;
}

const getFirst = <T>(data: T[]): T => {
    return data[1];
}

/**
 * 
 * Using generic in clean arquitecture
 * 
*/

type User = {
    id: number,
    name: string
}

interface Repository<T> {
    findById(id: number): Promise<T | null>;
    getAll(): Promise<T>[];
    save(entity: T): Promise<void>;
}

type UserRepository = Repository<User>;


/**
 * 
 * Using generic in set
 * 
*/

const data = new Set<string | number>(['sdfd']);
data.add('12')
data.add(12)


/**
 * 
 * Using generic in map
 * 
*/
const mapData = new Map<number, string>([[12, 'sdasd']])
mapData.set(1, 'asd')
mapData.set(0, 'asd1')

/**
 * 
 * Using generic types in type responses
 * 
*/

//response user

type UserRes = {
    id: number,
    name: string
}

type Rol = {
    id: string
    name: string
}

interface ApiResponse<TData> {
    data: TData
    error?: boolean
}

type UserResponse = ApiResponse<UserRes>
type RolResponse = ApiResponse<Rol>;

const dataInfo: ApiResponse<UserRes> = {
    data: {
        id: 1,
        name: "ejemplo"
    },
    error: false
}

const res: RolResponse = {
    data: {
        id: "13123",
        name: "admin"
    },
    error: true
}

interface Response<TData extends object> {
    data: TData
}

/**
 * 
 * Using generic types with tuples  
 * 
*/

const convertArrToString = <T> (arr:[string,T][]) => {
    const obj:{
        [index: string]: T
    } = {};
    arr.forEach(([key,value]) => {
        obj[key] = value;;
    });
    return obj
}

const dataArray:[string, number | boolean][] = [
    ['dasd',123],
    ['dadasd',432],
    ['adsad',false]
]

let response = convertArrToString(dataArray)

console.log(response)