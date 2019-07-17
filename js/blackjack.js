

//Blackjack
//by Alcino da Graça

let suits = ["Hearts", "Clubs", "diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight",
            "Seven", "Six", "Five", "Four", "Three", "Two"];

let deck = []

for(suitsIdx = 0; suitsIdx < suits.length; suitsIdx++){
    for(valuesIdx = 0; valuesIdx < values.length; valuesIdx++){
        deck.push(suits[suitsIdx] + ' of ' + values[valuesIdx]);
    }
}

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");

for(i = 0; i < deck.length; i++){
    console.log(deck[i]);
}
