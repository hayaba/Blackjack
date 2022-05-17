let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //this is another method to grap an html element
let cardsEl = document.getElementById("cards-el");

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - ";
    }

    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 4;
    sum += card;
    cards.push(card);
    renderGame();
    console.log(cards)
}
