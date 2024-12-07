/*
    Exercício 7: Dado um vetor contendo 10 números inteiros não ordenados e não
    repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde
    o usuário irá digitar um número e o programa deve exibir na tela a posição
    deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não
    foi encontrado!” deve ser exibida na tela.
*/

const leia = require('readline-sync')

let vetorNumerosInt = new Array(10);

console.log(`\n`);
console.log("-Digite 10 Números Inteiros (não repetidos)-");
console.log("--------------------------------------------");

let contador = 0;

for (let index = 0; index < vetorNumerosInt.length; index++) {
    contador++;
    vetorNumerosInt[index] = leia.questionInt(`Digite o ${contador} numero: `);
}

console.table(vetorNumerosInt);
console.log("--------------------------------------------");

let numero = leia.questionInt("Digite o numero que deseja encontrar: ");
let posicao = vetorNumerosInt.indexOf(numero);

console.log("--------------------------------------------");

if (posicao !== -1) {
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
} else {
    console.log(`O numero ${numero} não foi encontrado!`);
}