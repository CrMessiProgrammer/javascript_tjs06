/*
    Exercício 2: Escreva um algoritmo, que leia 10 números inteiros via teclado
    e mostre na tela quantos números são pares e quantos número são ímpares.
*/

const leia = require('readline-sync')

let pares = 0;
let impares = 0;

console.log(`\n`);
console.log("-Digite 10 Números Inteiros Abaixo-");
console.log("-----------------------------------");

for (let contador = 1; contador <= 10; contador++) {
    let numero = leia.questionInt(`Digite o ${contador} numero: `);
    
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("-----------------------------------");
console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);