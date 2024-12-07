/*
    Exercício 3: Escreva um algoritmo, que leia a idade de várias pessoas
    (números inteiros), via teclado e mostre na tela o total de pessoas cuja
    idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que
    50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade
    negativa.
*/

const leia = require('readline-sync')

let menor21 = 0;
let maior50 = 0;

console.log(`\n`);
console.log("-Digite abaixo as idades (ou um numero negativo para encerrar)-");
console.log("---------------------------------------------------------------");

while (true) {
    let idade = leia.questionInt("Digite idade: ");

    if (idade < 0) {
        console.log("---------------------------------------------------------------");
        console.log("Sessão Encerrada!");
        console.log(`Total de pessoas menores de 21 anos: ${menor21}`);
        console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);
        process.exit(0);
    }

    if (idade < 21) {
        menor21++;        
    } else if (idade > 50) {
        maior50++;        
    }
}