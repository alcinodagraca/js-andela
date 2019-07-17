//Criar um Array
let valores = [1, 2, 3, 4];

//Acessar o array
console.log(valores[0]) // 1
console.log(valores[1]) // 2
console.log(valores[4]) // undefined

//array de strings
let baralho = ["Rei de Copas", "Rei de Ouros", "Dama de Espadas"];

console.log(baralho[0]) // Rei de copas
console.log(baralho[1]) // Rei de Ouros
console.log(baralho[2]) // Dama de Espada


// ========Array Features ======== // 

let cidades = ["Maputo", "Xai-xai", "Maxixe"];

// Pra saber o tamanho do array
console.log(cidades.length);

// Adiciornar um valor
cidades.push("Pemba", "Nacala")

console.log(cidades);

//Para remover o último elemento do array
console.log(cidades.pop());
console.log(cidades);

//Para remover o primeiro elemento do array
let shift = cidades.shift();

console.log(shift, cidades);

//Para apagar elementos elemento no array
baralho.splice(0, 1); //O primeiro paramétro é o índex do elemento, o segundo é de quantas vezes queremos apagar

console.log(baralho);

//O método Splice tem a opção de  adicionar mais elementos após apagar
baralho.splice(0, 1, "Duckie", "Rei de Espadas");






