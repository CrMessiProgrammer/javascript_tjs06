/*
    Exercício 3: Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas
    com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira
    doação. Escreva um Algoritmo que leia via teclado o nome do doador (string),
    a idade (número inteiro) do doador e se já fez outras doações de sangue
    (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre
    na tela se o doador está Apto ou Não Apto para doar sangue.
*/

const leia = require('readline-sync')

let nome = leia.question("\nDigite o seu nome: ");  // entrada de dados
let idade = leia.questionInt("Digite sua idade: ");
let doacao = leia.ques;

if(idade <= 0){ // exceções de erro (ñ pode ser menor que 0)
    console.log("\nIdade Inválida!");
    process.exit(0);
}else if(idade > 0 && idade <= 10){
    valor = 100.00;
}else if(idade >= 11 && idade <= 29){
    valor = 200.00;
}else{
    valor = 1000.00;
}

console.log(`\n${nome} - Plano de Saúde no valor de: R$${valor.toFixed(2)}`);