interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: number;
}

// this function expects that animal is Cat either confirms that it is a cat, or if numLives is does not exist then it is a dog 
const isCat = (animal: Cat | Dog): animal is Cat => {
    return (animal as Cat).numLives !== undefined;
}

// with animal is cat excluded, the function below does not whether it is Cat or Dog
// const isCat = (animal: Cat | Dog) => {
//     return (animal as Cat).numLives !== undefined;
// }

// hover animal inside if block to check its type
const makeNoise = (animal: Cat | Dog) => {
    if (isCat(animal)) {
        animal
        return `meow`
    } else {
        animal
        return `bark`
    }
}