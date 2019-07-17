let value = "Apple";

console.log(typeof(value));

//Não só o valor é importante mas o tipo do valor importa,
//especialmente quando trabalhamos com números, como veremos no exemplo a seguir 

let value1= "9";

console.log(value1 + value1);

//em vez de nos dar 18 como resultado, ele concatenou, para ter o resultado esperado,
//temos que tirar as aspas para ter números verdadeiros.

let value2= 9;

console.log(value2 + value2);

//CURIOSIDADES SOBRE NÚMEROS

let value3 = 0 / 0;

console.log(value3, typeof(value3));