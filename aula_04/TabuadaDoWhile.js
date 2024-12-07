const leia = require('readline-sync')

let numero = leia.questionInt("\nDigite um numero: ");
let contador = 0;

console.log("----TABUADA----");

do {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
} while (contador <= 10)