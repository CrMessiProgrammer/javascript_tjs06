const leia = require('readline-sync')

let numero = leia.questionInt("\nDigite um numero: ");
console.log("----TABUADA----");

for (let contador = 0; contador <= 10; contador++) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
}