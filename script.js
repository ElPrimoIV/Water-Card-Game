let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let game = document.querySelector(".game");
let clickedIds = [];

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


// Button to Show Cards
buttonShow.onclick = function() {
   console.log("Showing the deck...");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }

  
    buttonShow.style.color = "silver";
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' class='card>");
        }
    }
};


function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' class='card id='" + i + "'>");
        i = i + 1;
    }
    //console.log("I shuffled my cards!");
  
};



// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "".
        i = i + 1;
    }
 
};


$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
   //if a card was clicked 
    if (clickedId !== "") {
       //make the background image appear!
        document.getelementById(clickedId).style.backgroundImage = "url('" + urlprefix + card[clciedId] + "')";
        //also add the id to an array (and log it)
        clickedIds.push(clickedId);
        console.log(clickedIds);
        //if 1 card was clicked...
        if (clickedIds.length === 2) {
            //Get both image URLs (and log them)
            let card1picture = document.getElementById(clickedIds[0].style.backgroundImage);
            let card2picture = document.getElementById(clickedIds[1].style.backgroundImage);
            console.log(card1picture);
            console.log(card2picture);
            //if they are the same, just empty the array!
            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedsIds[0]).id = "";
                document.getElementById(clickedsIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            } 
            
        } else if (clickedIds.length > 2) {
            document.getelementById(clickedIds[0]).style.background.image = "";
             document.getelementById(clickedIds[1]).style.background.image = "";
            clickedIds = [] ;
            clickedIds.push(clickedId);
            console.log(clickedIds);
        }
    }
});