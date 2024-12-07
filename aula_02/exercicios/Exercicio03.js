/*
    Exercício 3: Elabore um algoritmo em Java, que leia o Salário Bruto, o
    Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, em
    variáveis do tipo float e exiba na tela o Salário Líquido.
*/

const leia = require('readline-sync')

let salarioBruto = leia.questionFloat("\nDigite o Salario Bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o Adicional Noturno: ");
let horasExtras = leia.questionFloat("Digite as Horas Extras: ");
let descontos = leia.questionFloat("Digite os Descontos: ");

let salarioLiquido = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos)

console.log(`\nSalário Líquido: ${salarioLiquido}`);