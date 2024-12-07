/*
    Exercício 2: Elabore um algoritmo em Java que leia 4 notas de um
    participante, em variáveis do tipo float e exiba na tela a média final do
    participante.
*/

const leia = require('readline-sync')

let nota1 = leia.questionFloat("\nDigite a primeira nota: ")
let nota2 = leia.questionFloat("Digite a segunda nota: ");
let nota3 = leia.questionFloat("Digite a terceira nota: ");
let nota4 = leia.questionFloat("Digite a quarta nota: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Nota 4: ${nota4}`
);

console.log(`\nMédia Final: ${media}`);