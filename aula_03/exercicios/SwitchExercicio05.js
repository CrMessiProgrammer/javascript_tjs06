// Exercício 5: Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const leia = require('readline-sync')

let nome = leia.question("\nInforme seu nome: ");
console.log(`\nOlá, ${nome}. Bem Vindo! Confira nosso cardápio abaixo: `);

console.log("\n********Cardápio********");
console.log("1 | Cachorro Quente | R$ 10.00");
console.log("2 | X-Salada        | R$ 15.00");
console.log("3 | X-Bacon         | R$ 18.00");
console.log("4 | Bauru           | R$ 12.00");
console.log("5 | Refrigerante    | R$ 8.00");
console.log("6 | Suco de Laranja | R$ 13.00");

let codigo = leia.questionInt("\nInforme o numero do seu produto (1 a 6): ");

if(codigo >= 1 && codigo <= 6){
    let quantidade = leia.questionInt("Informe a quantidade: ");
    let produto;
    let valorTotal = codigo * quantidade;
    
    switch (codigo) {
        case 1:
            produto = 'Cachorro Quente';
            valorTotal = 10 * quantidade;
            break;
        case 2:
            produto = 'X-Salada';
            valorTotal = 15 * quantidade;
            break;
        case 3:
            produto = 'X-Bacon';
            valorTotal = 18 * quantidade;
            break;
        case 4:
            produto = 'Bauru';
            valorTotal = 12 * quantidade;
            break;
        case 5:
            produto = 'Refrigerante';
            valorTotal = 8 * quantidade;
            break;
        case 6:
            produto = 'Suco de Laranja';
            valorTotal = 13 * quantidade;
            break;
        default:
            console.log("\nItem Indisponível no Cardápio!");
            process.exit(0);
    }
    console.log(`\nProduto: ${codigo} - ${produto} | Quantidade: ${quantidade} | Valor Total: R$ ${valorTotal.toFixed(2)}`);
} else {
    console.log("\nItem Indisponível no Cardápio!");
    process.exit(0);
}