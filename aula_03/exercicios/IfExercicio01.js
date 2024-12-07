/*
    Exercício 1: Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e
    imprima na tela se a soma de A + B é maior, menor ou igual a C.
*/

const leia = require('readline-sync')

let A = leia.questionInt("\nInforme o valor inteiro de A: ");
let B = leia.questionInt("Informe o valor inteiro de B: ");
let C = leia.questionInt("Informe o valor inteiro de C: ");

let soma = A + B;

if(soma > C){
    console.log(`\n${A} + ${B} = ${soma} > ${C}`)
    console.log("A Soma de A + B é Maior do que C");
}else if(soma < C){
    console.log(`\n${A} + ${B} = ${soma} < ${C}`)
    console.log("A Soma de A + B é Menor do que C");
}else{
    console.log(`\n${A} + ${B} = ${soma} = ${C}`)
    console.log("A Soma de A + B é Igual a C");
}