let cards = [];
let sum = 0;
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //this is another method to grap an html element
let cardsEl = document.getElementById("cards-el");
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");

// ---- Object: store data in depth. It is also called Composite /Complex data type
// The reason it is called like that is because it can store all types of data
// We can also store objects within objects (nested data structure)
// key-value pairs
let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  console.log(cards)
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " - ";
  }

  if (sum <= 20) {
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
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
        console.log(cards);
    }
 
}
