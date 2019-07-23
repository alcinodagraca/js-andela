

//Blackjack
//by Alcino da Graça

let suits = ["Hearts", "Clubs", "diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight",
            "Seven", "Six", "Five", "Four", "Three", "Two"];

//DOM Variables
let textArea = document.getElementById('paragraph');
let newGameBtn = document.getElementById('new-game-btn');
let hitBtn = document.getElementById('hit-btn');
let stayBtn = document.getElementById('stay-btn');


//Game Variables
let gameStarted     = false,
    gameOver        = false,
    playerWon       = false,
    dealerCards     = [],
    playerCards     = [],
    dealerScore     = 0,
    playerScore     = 0,
    deck            = [];

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();
      
newGameBtn.addEventListener('click', function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;


    deck = createDeck();
    suffleDeck(deck);
    dealerCards = [ getNextCard(), getNextCard()];
    playerCards = [ getNextCard(), getNextCard()];

    newGameBtn.style.display = 'none';
    hitBtn.style.display = 'inline';
    stayBtn.style.display = 'inline';

    showStatus();
});

hitBtn.addEventListener('click', function(){
    playerCards.push(getNextCard);
    checkForEndOfGame();
    showStatus();
});

stayBtn.addEventListener('click', function(){
    gameOver = true;
    checkForEndOfGame();
    showStatus();
})

function createDeck(){
    //criar a varíavel para armazenar as cartas
    let deck = [];
    //o loop para fazer as cartas
    for(suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for(valueIdx = 0; valueIdx < values.length; valueIdx++){
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    //retornar as cartas feitas
    return deck;
}

function getCardstring(deck){
    return deck.value + ' of ' + deck.suit;
}

function getCardNumericValue(card){
    switch(card.value) {
        case 'Ace':
          return 1;
        case 'Two':
          return 2;
        case 'Three':
          return 3;
        case 'Four':
          return 4;
        case 'Five': 
          return 5;
        case 'Six':
          return 6;
        case 'Seven':
          return 7;
        case 'Eight':
          return 8;
        case 'Nine':
          return 9;
        default:
          return 10;
      }
}


function getScore(cardArray){
    let score = 0;
    let hasAce = false;

    for(let i = 0; i < cardArray.length; i++){
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if(card.value === 'Ace'){
            hasAce = true;
        }
    }
    if(hasAce && score + 10 <= 21){
        return score + 10;
    }
    return score;
}

function updateScores(){
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
  
    updateScores();
    
    if (gameOver) {
      // let dealer take cards
      while(dealerScore < playerScore 
            && playerScore <= 21 
            && dealerScore <= 21) {
        dealerCards.push(getNextCard());
        updateScores();
      }
    }
    
    if (playerScore > 21) {
      playerWon = false;
      gameOver = true;
    }
    else if (dealerScore > 21) {
      playerWon = true;
      gameOver = true;
    }
    else if (gameOver) {
      
      if (playerScore > dealerScore) {
        playerWon = true;
      }
      else {
        playerWon = false;
      }
    }
  }

function showStatus(){
    if(!gameStarted){
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }

    let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++){
        dealerCardString += getCardstring(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++){
        playerCardString += getCardstring(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText = 
        'Dealer has:\n' + 
        dealerCardString + 
        '(score: ' + dealerScore + ') \n\n' + 

        'Player has:\n' + 
        playerCardString +
        '(score: ' + playerScore + ')\n\n';

    if(gameOver){
        if(playerWon){
            textArea.innerText = 'YOU WIN';
        }
        else{
            textArea.innerText = 'DEALER WINS';
        }
    }
}

function suffleDeck(deck){
    for(let i = 0; i < deck.length; i++){
        let swapIdx = Math.trunc(Math.random() * deck.length);
        // Isto funciona assim, Depois do método Math.random gerar cartas aleatórias,
        //o let tmp = deck[swapIdx]; vai guardar temporariamente as cartas até que seja clicado
        //o butão pra refresh e gerar novas cartas de forma aleatória.
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i]
        deck[i] = tmp; 
    }
}




function getNextCard(){
    return deck.shift();
}

