//* -- This file holds all key variables needed throughout the website

var word;

var score = 0;

var wordLength = 4; //inital word length


var button = document.getElementById('play');

var play = document.getElementById('replay');


// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');

definition = document.getElementById('definition');


const projectID = 'apcsp-65a13'
const key = 'AIzaSyCgmP5JpWhlUv_RjvPnKMlhBt2lVhUJwJw'
const doc = 'players/ZJyrX3dJ6FQIibH91UhD'
const url =
    `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${doc}?key=${key}`


var players = [];