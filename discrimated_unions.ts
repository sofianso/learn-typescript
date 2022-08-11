interface Cow {
    name: String;
    weight: number;
    age: number;
    // kind can also be written as __type or TYPE
    kind: "cow";
}

interface Chicken {
    name: String;
    weight: number;
    age: number;
    kind: "chicken";

}

interface Pig {
    name: String;
    weight: number;
    age: number;
    kind: "pig";
}

interface Sheep {
    name: String;
    weight: number;
    age: number;
    kind: "sheep";
}

type FarmAnimal = Cow | Pig | Chicken | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case ("pig"):
            return "oink!"
        case ("chicken"):
            return "cluck!"
        case ("cow"):
            return "moo!"
        case ("sheep"):
            return "beeeeh!"
        default:
            //We should never make it here, if we handled all cases correctly
            // the default in this function checks if the type is missing from FarmAnimal
            // const shouldNeverGetHere: never = animal
            // return shouldNeverGetHere
            // in real life the following terms are used
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}

const ayam: Chicken = {
    name: "Ayam Goreng",
    weight: 2,
    age: 1.5,
    kind: "chicken"
}

console.log(getFarmAnimalSound(ayam));