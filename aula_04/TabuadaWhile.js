const leia = require('readline-sync')

let numero = leia.questionInt("\nDigite um numero: ");
let contador = 0;

console.log("----TABUADA----");

while (contador <= 10) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
}