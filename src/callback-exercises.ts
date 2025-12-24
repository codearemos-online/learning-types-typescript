/**
 *
 * Callbacks types
 * 
*/

function sum(a: number, b: number, cb: (sum: number) => void) {
    cb(a + b);
}

sum(1, 3, (result: number) => {
    console.log(result)
})


function validateAge(
    age: number,
    callback: (adult: boolean) => void
): void {
    if (age >= 18) {
        callback(true);
    } else {
        callback(false)
    }
}

validateAge(19, (adult: boolean) => {
    if (adult) {
        console.log("Is over 18")
    } else {
        console.log("can't access")
    }
})


/**
 * 
 * Exercise 2 greet
 * 
*/

const greeting = (name: string, callback: (message: string) => void): void => {
    callback("Hello " + name)
}

greeting("Diego", (message: string) => {
    console.log(message)
});

/**
 * 
 * Exercise 3 par and impar
 * 
*/

const operate = (
    num1: number,
    num2: number,
    callback: (sum: number, type: string) => void
): void => {
    const sum: number = num1 + num2;
    const type = sum % 2 === 0 ? 'par' : 'impar';
    callback(sum, type);
}

operate(
    1,
    3,
    (sum: number, type: string) => {
        console.log(`${sum} - ${type}`)
    }
)

operate(
    1,
    4,
    (sum: number, type: string) => {
        console.log(`${sum} - ${type}`)
    }
)

/**
 * 
 * Exercise 4: Cannot divide by zero
 * 
*/

const divide = (
    number1: number,
    number2: number,
    onSuccess: (result: number) => void,
    onError: (message: string) => void
): void => {
    number2 !== 0 ? onSuccess(number1 / number2) : onError("No puede dividir por 0")
}

divide(
    2,
    0,
    (result) => {
        console.log(result)
    },
    (message) => {
        console.log(message)
    }
)

divide(
    10,
    2,
    (result) => {
        console.log(result)
    },
    (message) => {
        console.log(message)
    }
)

/**
 * 
 * Exercise 5: Validate user information
 * 
*/

type UserValidate = {
    name?: string,
    age?: number
}

const createUser = (
    user: UserValidate,
    onSuccess: (user: UserValidate) => void,
    onError: (message: string) => void
) => {
    if (user.name == null) {
        onError("El nombre es obligatorio");
        return;
    }

    if (user.age == null) {
        onError("La edad es obligatoria");
        return;
    }

    onSuccess(user);
}

let newUser: UserValidate = {
    name: 'John',
    age: 9
}

createUser(
    newUser,
    (user) => {
        console.log(user)
    },
    (message: string) => {
        console.log(message)
    }
)

/**
 * 
 * Exercise 6: saving a user
 * 
*/

type UserInput = {
    username?: string,
    age?: number
}

type UserValidated = {
    username: string,
    age: number
}

type User = {
    id: string,
    username: string,
    age: number
}

function validateUser(
    input: UserInput,
    onSuccess: (validated: { username: string, age: number }) => void,
    onError: (message: string) => void
) {
    if (input.username === undefined) {
        onError("El username es obligatorio");
        return;
    }

    if (input.age === undefined) {
        onError("La edad es obligatoria");
        return;
    }

    if (input.age && input.age < 18) {
        onError("Es menor de edad");
        return;
    }

    const validatedUser: UserValidated = {
        username: input!.username,
        age: input!.age
    }

    onSuccess(validatedUser)
}

function createUserEntity(
    data: UserValidated,
    onSuccess: (user: User) => void
) {
    const user: User = {
        id: 'id-01',
        username: data.username,
        age: data.age
    }
    onSuccess(user);
}

function saveUser(
    user: User,
    onSuccess: (saved: User) => void
) {
    onSuccess(user)
}

function registerUser(
    input: UserInput,
    onSuccess: (user: User) => void,
    onError: (message: string) => void
) {
    validateUser(
        input,
        (validated) => {
            createUserEntity(
                validated,
                (user) => {
                    saveUser(user, (saved) => {
                        onSuccess(saved)
                    })
                }
            )
        },
        (error) => {
            onError(error)
        }
    )
}

registerUser(
    { username: "Diego", age: 25 },
    (user) => {
        console.log("Usuario registrado:", user);
    },
    (error) => {
        console.log("Error:", error);
    }
);