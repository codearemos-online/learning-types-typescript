type A = Awaited<number>

type B = Awaited<Promise<number>>

async function getUser() {
    return {
        id: '1',
        name: 'Alex',
    };
}

type UserPromise = ReturnType<typeof getUser>

type UserAwaited = Awaited<typeof getUser>

//Using wrapper generic

type ApiResponse<T> = Promise<{
    data: T
}>

type UserResponse = {
    name: string
}

type Result<T> = Awaited<ApiResponse<T>>

const getData = async ():Promise<Result<UserResponse>> => {
    return { data: { name: 'alex' } }
}