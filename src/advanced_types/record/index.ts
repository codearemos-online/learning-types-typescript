type Person = {
    name: string,
    age: number
}

type TypePerson = {
    [index: string]: Person[]
}


type RecordPerson = Record<Person['name'], Person[]>

const persons: RecordPerson = {
    'adasda': [
        {
            name: 'dasdas',
            age: 23
        }
    ]
}

console.log(persons)