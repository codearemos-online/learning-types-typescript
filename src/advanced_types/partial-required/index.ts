type Todo = {
    title: string,
    completed: boolean
    address?: {
        street: string
    }
}

type Person = {
    id: string,
    name: string
}

//Using required and partial type

type PartialTodo = Partial<Todo>
type RequiredTodo = Required<Todo>

//combine required and partial with pick and omit

type FormTodo = Required<Pick<Todo, 'title'>> & Omit<Partial<Todo>, 'title'>

const task: FormTodo = {
    title: 'dasdas'
}

//using generic types
type RequiredPick<T,  Key extends keyof T> = Required<Pick<T, Key>> & T


const todoExample: RequiredPick<Todo, 'title'> = {
    title: 'personname',
    completed: true
}
 
const personExample: RequiredPick<Person,'name'> = {
    id: 'dsds',
    name: 'example'
}