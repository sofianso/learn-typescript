function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "oink!";
        case ("chicken"):
            return "cluck!";
        case ("cow"):
            return "moo!";
    }
}
var ayam = {
    name: "Ayam Goreng",
    weight: 2,
    age: 1.5,
    kind: "chicken"
};
console.log(getFarmAnimalSound(ayam));
