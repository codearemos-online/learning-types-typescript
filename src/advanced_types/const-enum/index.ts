let a = 1 as const
const b:number = 2

const SKILL_LEVELS = ["Beginner","Intermediate","Expert"] as const

type Person = {
    skillLevel: (typeof SKILL_LEVELS)[number]
}

SKILL_LEVELS.forEach(skillLevel => {
    console.log(skillLevel)
})