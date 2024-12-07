/*
    Exercício 5: Escreva um algoritmo, que leia números inteiros via teclado,
    até que o número zero seja digitado. Ao final, mostre na tela a soma de
    todos os números digitados, que sejam positivos.
*/

const leia = require('readline-sync')

let soma = 0;
let contador = 0;
let numero;

console.log(`\n`);
console.log("-Digite abaixo numeros inteiros (ou zero para encerrar)-");
console.log("---------------------------------------------------------");


do {
    contador++;
    numero = leia.questionInt(`Digite o ${contador} numero: `)

    if (numero === 0) {
        console.log("---------------------------------------------------------");
        console.log("Sessão Encerrada!");
        console.log(`A soma dos números positivos é: ${soma}`);
        process.exit(0);        
    }

    if (numero > 0) {
        soma += numero;
    }
} while (true);