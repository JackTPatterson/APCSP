# APCSP Create Task

## How It Works

APCSP Spelling Bee is a simple online spelling be created in **Javascript** and **HTML** 

To start a user will enter their name which will initialize the start function.

The game works by retrieving a random word from a wordlist and setting it as the current word. Using **speach synthesis**, the web server says the current word and the player must enter the word correctly. Typing the correct word rewards the player a point and sets a new word. This will go on until the player spells a given word wrong, which will then trigger a function to save the players name and score to a database hosted by **Firebase**

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





