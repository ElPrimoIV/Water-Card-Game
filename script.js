// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/967c5868-cd04-4ba5-926b-63b3bbea99ff/";
let cards = ["card1.jpg?v=1710435648752",
    "card2.jpg?v=1710435651674",
    "card3.jpg?v=1710435656412",
    "card4.jpg?v=1710435671371",
    "card5.jpg?v=1710435675442",
    "card6.jpg?v=1710435682980",
    "card7.jpg?v=1710435686594",
    "card8.jpg?v=1710867155119"
];


// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    //Log message
    console.log("Doubling the deck...");
    //For of loop
    for (let card of card) {
        game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' class='card>");
    }
};

// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;

});