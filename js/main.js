// Unit 7 Assignment
/*
console.log("up and running")

// Create variables to store each card
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

// Use console.log() to display the four cards that the user flipped
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour);
*/


// unit 8 Assignment
/*
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne); //add cardOne to the end of the cardsInPlay array.
console.log("User flipped" + cardOne); //Use console.log() to display the card that the user flipped

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

// checks to see if the length of the cardsInPlay array is 2
if (cardsInPlay.length === 2) {
    // checks for equality between the two cards in the cardsInPlay array.
    if (cardsInPlay[0] = cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};
 */


// Unit 9 Assignment
/*
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var checkForMatch = function() {
    // checks for equality between the two cards in the cardsInPlay array.
    if (cardsInPlay[0] = cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
};

var flipCard = function(cardId) {

    console.log("User flipped " + cards[cardId]); //display the card that was flipped over.

    cardsInPlay.push(cards[cardId]); // add the card that the user flipped to the cardsInPlay array.

    // checks to see if the length of the cardsInPlay array is 2
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
};

flipCard(0); //call the flipCard function, passing in 0 as an argument.
flipCard(2);
*/



// Unit 10 Assignment

// create four objects, one for each card.
var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

var cardsInPlay = [];

var checkForMatch = function() {
    // checks for equality between the two cards in the cardsInPlay array.
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};
/* Unit 10 Assignment part commented out

 var flipCard = function(cardId) {

     console.log("User flipped " + cards[cardId].rank); // update this code so that we are accessing the rank property of this object.

     cardsInPlay.push(cards[cardId].rank);

     // add a bit of new code so that we can "see" the cards that are flipped in our console.
     // Add two console.log() statements. One should log the cardImage and the other should log the suit for the flipped card.

     console.log(cards[cardId].cardImage); // Display the image path in the console

     console.log(cards[cardId].suit); // Display the suit in the console

     if (cardsInPlay.length === 2) {
        checkForMatch();
     }
 };

 flipCard(0);
 flipCard(2);
 */


// Unit 11 Assignment

// Create a function to represent a user flipping a card
var flipCard = function () {
    // Get the data-id of the card that was just flipped and cache it
    var cardId = this.getAttribute('data-id');
    // use the "getAttribute" method to get the 'data-id' attribute of the card that was just clicked and store it in a variable cardId.
    console.log("User choose to flip " + cardId);

    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].cardImage);

    var matchOrNot = function() {

        // Check to see if two cards have been played
        if (cardsInPlay.length === 2) {

            checkForMatch();  // If so, call the checkForMatch function

            cardsInPlay = []; // Empty cards in play array after two has been picked for next try
            // If not doing so, the alert will keep poping up the "found match" event after each pick
        }
    };

    // this is not from assignment
    setTimeout(matchOrNot, 1000); // tell whether match or not after flipping the card, which makes more sense
};

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img'); // creating a list item
        cardElement.setAttribute('src', 'images/back.png'); // add a src attribute for the cardElement, display the back of card image
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        // add a click event to the cardElement. The function that we want to run when a user clicks on a card is the flipCard function.
        document.getElementById('game-board').appendChild(cardElement);
        // append the current cardElement to the game board (which has an id of game-board).
    }
};

// At the very end of your JavaScript file, after the createBoard function, call the createBoard function.
createBoard();


// not from assignment, just assign some true meanings to the "instruction" & "game" button
var refresh = function () {
    window.location.reload();
};

document.getElementById('gameItself').addEventListener("click", refresh);
document.getElementById('instructionItself').addEventListener("click", refresh);


