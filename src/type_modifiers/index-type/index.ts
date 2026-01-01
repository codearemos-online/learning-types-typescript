type SkillLevel = "Beginner" | "Intermediate" | "Expert";

type Person = {
    id: number,
    name: string,
    skillLevel: SkillLevel
    
}

const getSkillLevel = (skill: Person['skillLevel']):void => {
    console.log(skill)
}

getSkillLevel("Beginner")


type GroupBySkillLevel = {
    [index: string]: Person["name"][]
}

let people: GroupBySkillLevel = {
    "inicio": ["Doe"]
}

/* const a = ["sdf","d",true]; */
const a = {
    name:"Diego",
    age: 29,
    isProgrammer: true
}
/* type A = (typeof a)[number]; */
type B = (typeof a)[keyof typeof a]