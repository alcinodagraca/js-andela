function inMyFunction(){
    console.log('Hello Word!');
}

inMyFunction();

//Adding arguments to the Function
function cidades(nome, provincia){
    console.log(nome, provincia);
}

cidades('Maputo,', 'Província de Maputo');

//Returning Values
function multiplicando(anyNumeber){
    let result = anyNumeber * 2;
    return result;
}

let = printResult = multiplicando(20);
console.log(printResult);

//functions scopes

//Variáveis criadas dentro do escopo de uma função, ela não existirá globalmente.