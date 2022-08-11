const printFullDate = (date: string | Date) => {
    if (date instanceof Date) {
        console.log(date.toUTCString())
    }
    else {
        console.log(new Date(date).toUTCString())
    }
}

class User {
    constructor(public username: string) {
    }
}


class Company {
    constructor(public name: string) { }
}

// Similar to typeof, you can actually check if the instance is a match of that class by using instanceof
function printName(entity: User | Company) {
    if (entity instanceof User) {
        return `I'm in User`
    }
    else {
        return `I'm in Company`
    }
}

const Samsung = new Company("Samsung")
console.log(printName(Samsung))