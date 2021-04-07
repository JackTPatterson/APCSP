# APCSP Create Task

## How It Works

APCSP Spelling Bee is a simple online spelling be created in **Javascript** and **HTML** 

To start a user will enter their name which will initialize the start function.

The game works by retrieving a random word from a wordlist and setting it as the current word. Using **speach synthesis**, the web server says the current word and the player must enter the word correctly. Typing the correct word rewards the player a point and sets a new word. This will go on until the player spells a given word wrong, which will then trigger a function to save the players name and score to a database hosted by **Firebase**

# Questions
#### Im only writing the questions here because Im too lazy to rewrite the answers in the pdf

### Describes the overall purpose of the program

The purpose of this program is to demonstrate the capabilities of the mind by spelling words of increasing difficulty, which is represented by a fun, simple game.



## Describes what functionality of the program is demonstrated in the video

The functionality includes a player inputting their name, having a word of a specified difficulty verbalized to them, and spelling the word. If the player gets the word correct, they will gain a point and the difficulty will increase by 1. For each level of difficulty, the number of letters in a word will increase.



## Describes the input and output of the program demonstrated in the video

The input of this program includes a player inputting their name to be entered into a database for a player scoreboard. Another input will include the player's spelling of their given word, which will be interpreted by the software to be either correct or incorrect. When a word is spelled correctly, the software outputs the player's name and score into a database that can be viewed on the webpage.



### The first program code segment must show how data have been stored in the list.

<blockquote>

    db.collection("players").add({ //*Function that adds data to the database
            name: document.getElementById('name-inp').value,
            score: $('#score').html().replaceAll('Score:', '')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error); //* Error reporting
        });

</blockquote>

### The second program code segment must show the data in the same list being used, such as creating new data from the existing data or accessing multiple elements in the list, as part of fulfilling the program’s purpose.
<blockquote>

                for (i = 0; i <= players.length - 1; i++){
                    $('#dataTable > tbody:last').after('<tr style="color: white;"><td>' 
                    + players[i]['name'] + '</td><td>' 
                    + players[i]['score'] + '</td></tr>');
                };

</blockquote>

## Identifies the name of the list being used in this response 
players


## Describes what the data contained in the list represent in your program
The data in the list contains multiple dictionaries and within those dictionaries contains the values for players and their scores



## Explains how the selected list manages complexity in your program code by explaining why your program code could not be written, or how it would be written differently, if you did not use the list


Dont know if this is the correct answer - If I did not use the list I would have to store all the data in specific variables. This would limit the ability of reusability of the data stored
# How It Works

### Bootstrap

Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development

### WordsAPI

**WordsAPI** is a RESTful API that enables you to find definitions, related words, and much more
Use it to find definitions for more than 150,000 words. 
You can find synonyms, antonyms, or similar words. 

### JQuery

**JQuery** is a Javascript library designed to make writing javascript simpler

It is used to define and modify elements on the webpage

### Firestore

**Cloud Firestore** is a NoSQL document database that lets you easily store data

Firestore is used to hold all player data and the scores cooresponding to those players 

### Speech Synthesis

**Speech synthesis** is the artificial production of human speech

Using **native OS speach synthesis**, I am able make the web app verbalize the necesary speech that is needed to run the game 





# Credit 

Bootstrap - https://getbootstrap.com/ 

WordsAPI - https://www.wordsapi.com/

JQuery - Javascript library - https://code.jquery.com/

Speech Synthesis - Javascript reference code - https://codepen.io/matt-west/pen/wGzuJ

Firebase Firestore - External Database https://firebase.google.com/docs/firestore/quickstart





