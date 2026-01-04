const dataUser = {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: [Object]
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
        name: 'Yost and Sons',
        catchPhrase: 'Switchable contextually-based project',
        bs: 'aggregate real-time technologies'
    }
}

type User = typeof dataUser;

const getData = async <T>(url: string):Promise<T> => {
    const res = await fetch(url)
    return res.json() as Promise<T>
}

const getUsers = await getData<User>(`https://jsonplaceholder.typicode.com/users`)
console.log(getUsers)