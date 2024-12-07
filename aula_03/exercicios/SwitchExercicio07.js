/*
    Exercício 7: Com base na tabela abaixo, escreva um algoritmo que simule uma
    Calculadora simples. O programa deverá ler dois números reais: numero1 e
    numero2, e na sequência ler o Código da operação matemática (número inteiro
    entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os
    números. Caso o número da operação esteja fora do intervalo entre 1 e 4,
    mostre a mensagem na tela Operação Inválida!
*/

const leia = require('readline-sync')

let num1 = leia.questionFloat("\nDigite o primeiro numero: ");
let num2 = leia.questionFloat("Digite o segundo numero: ");

console.log("\n******Calculadora******");
console.log("1 | Soma");
console.log("2 | Subtração");
console.log("3 | Multiplicação");
console.log("4 | Divisão");

let operacao = leia.questionInt("\nDigite o numero da operacao (1 a 4): ");
let simbolo;
let resultado;

switch (operacao) {
    case 1:
        simbolo = '+';
        resultado = num1 + num2;
        break;
    case 2:
        simbolo = '-';
        resultado = num1 - num2;
        break;
    case 3:
        simbolo = '*';
        resultado = num1 * num2;
        break;
    case 4:
        simbolo = '/';
        resultado = num1 / num2;
        break;
    default:
        console.log("\nOperação Inválida!");
        process.exit(0);
}

console.log(`\nResultado: ${num1} ${simbolo} ${num2} = ${resultado}`);