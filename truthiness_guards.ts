const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        word
        console.log("No word passed");
    }
};

console.log(printLetters("hi"));