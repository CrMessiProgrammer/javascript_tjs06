/* Exercício 9: Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
    Todos os elementos da Diagonal Principal
    Todos os elementos da Diagonal Secundária
    A Soma de todos os elementos da Diagonal Principal
    A Soma de todos os elementos da Diagonal Secundária
*/

const leia = require('readline-sync')

let matrizNumInt = new Array(3);
contador = 0;

console.log(`\n`);
console.log("-Preencha a matriz 3x3 com números inteiros-");
console.log("--------------------------------------------");

for (let indice = 0; indice < matrizNumInt.length; indice++) {
    matrizNumInt[indice] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matrizNumInt.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matrizNumInt.length; indiceColuna++) {
        contador++;
        matrizNumInt[indiceLinha][indiceColuna] = leia.questionInt(`Digite o ${contador} numero: `);
    }
}

console.table(matrizNumInt);

let diagonalPrincipal = [];
let diagonalSecundária = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundária = 0;

for (let i = 0; i < matrizNumInt.length; i++) {
    diagonalPrincipal += matrizNumInt[i][i];
    somaDiagonalPrincipal += matrizNumInt[i][i];

    diagonalSecundária += matrizNumInt[i][2-i];
    somaDiagonalSecundária += matrizNumInt[i][2-i];
}

console.log("-----------------------------------");
console.log(`Elementos da Diagonal Principal: ${diagonalPrincipal}`);
console.log(`Elementos da Diagonal Secundária: ${diagonalSecundária}`);
console.log(`Soma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaDiagonalSecundária}`);