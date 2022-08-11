var printLetters = function(word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    } else {
        word;
        console.log('No word passed');
    }
};
console.log(printLetters());