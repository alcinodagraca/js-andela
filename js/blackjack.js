

//Blackjack
//by Alcino da Graça

let suits = ["Hearts", "Clubs", "diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight",
            "Seven", "Six", "Five", "Four", "Three", "Two"];


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


function getCardstring(card){
    return card.value + ' of ' + card.suit;
}

function getNextDeck(){
    return deck.shift();
}

//Chamar as cartas
let deck = createDeck();

let playersCards = [ getNextDeck(), getNextDeck() ];

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log(" " + getCardstring(playersCards[1]));
//console.log(" " + getCardstring(playersCards[]));

for(i = 0; i < deck.length; i++){
    //console.log(deck[i]);
}
