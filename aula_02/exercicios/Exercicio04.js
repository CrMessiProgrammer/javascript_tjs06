/*
    Exercício 4: Leia quatro valores float (n1, n2, n3, n4). A seguir, calcule e
    mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4.
*/

const leia = require('readline-sync')

let n1 = leia.questionFloat("\nDigite o primeiro numero: ");
let n2 = leia.questionFloat("Digite o segundo numero: ");
let n3 = leia.questionFloat("Digite o terceiro numero: ");
let n4 = leia.questionFloat("Digite o quarto numero: ");

let calculo = (n1 * n2) - (n3 * n4);

console.log(`\nResultado: ${calculo}`);