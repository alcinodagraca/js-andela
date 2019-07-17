let score = 1000;

if(score === 1000){
   score = score + 1000;
}

//console.log("Your score is: ", score);

// =================== if... else ==============  //

let score1 = 999;
let bonus = 1;

if(score1 === 1000){
   console.log("Boa, esteve quase lá!");
} 
else if(score1 + bonus > score1){
    score1 = score1 + bonus;
    console.log("Parabéns, ganhou!");
} 
else{
    console.log("Falhou, tente novamente!");
}

console.log("Your final score is: ", score1 + bonus);





