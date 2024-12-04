// Exercício 1: Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript.

const leia = require('readline-sync')

let salario = leia.questionFloat("\nDigite o salario: ");
console.log(
    `Salário Atual: `,
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salario)
);

let abono = leia.questionFloat("\nDigite o abono: ");
console.log(
    `Valor Abono: `,
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(abono)
);

let novoSalario = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salario + abono)

console.log(`\nNovo Salário: ${novoSalario}`);