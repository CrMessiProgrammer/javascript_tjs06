/*
    Exercício 2: Escreva um algoritmo que leia um número inteiro via teclado e
    mostre na tela uma mensagem indicando se este número é par ou ímpar e se o
    número é positivo ou negativo.
*/

const leia = require('readline-sync')

let numero = leia.questionInt("\nDigite um numero: ");

if(numero > 0 && numero % 2 == 0){
    console.log(`O Número ${numero} é par e positivo!`)
}else if(numero < 0 && numero % 2 != 0){
    console.log(`O Número ${numero} é ímpar e negativo!`)
}else if(numero < 0 && numero % 2 == 0){
    console.log(`O Número ${numero} é par e negativo!`)
}else if(numero > 0 && numero % 2 != 0){
    console.log(`O Número ${numero} é ímpar e positivo!`)
}else{
    console.log(`O Número ${numero} é par e neutro!`)
}