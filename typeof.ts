function triple(value: number | string) {
    if (typeof value === "number") {
        return value * 3
    }
    else if (typeof value === "string") {
        return value
    }
}

// console.log(triple("hi"));
console.log(triple(3));