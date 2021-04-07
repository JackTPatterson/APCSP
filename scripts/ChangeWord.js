//* -- This file is responsible for rchanging the word --

function changeWord() {

    var isCorrectLength = true;

    while (isCorrectLength) {
        word = words[Math.floor(Math.random() * words.length)]
        if (word.length == wordLength) {
            isCorrectLength = false
            console.log(word)
        }
        
    }

}