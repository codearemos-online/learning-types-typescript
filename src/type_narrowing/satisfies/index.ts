type Roles = 'admin'|'client';

const roles = {
    admin:{canDelete:true},
    client:{canDelete:false}
} satisfies Record<Roles,{canDelete:boolean}>


//example2

type Todo = {
    title:string
    dueDate: string | Date
    isComplete:boolean
}

const todo = {
    title: 'example',
    dueDate : new Date(),
    isComplete: false
} satisfies Todo

todo.dueDate.setDate(4) 