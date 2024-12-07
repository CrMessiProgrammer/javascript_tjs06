const leia = require('readline-sync')

let idade,
    esporte,
    futebol = 0,
    voleibolMaiores18 = 0,
    basquetebolMenores18 = 0,
    outros = 0,
    continua = 'S';

while (continua === 'S') {
    idade = leia.questionInt("\nDigite a sua idade: ");

    console.log("\n-----ESPORTES-----");
    console.log("1 | Futebol");
    console.log("2 | Voleibol");
    console.log("3 | Basquetebol");
    console.log("4 | Outros");

    // validação simples de dados
    do {
        esporte = leia.questionInt("\nDigite o Esporte favorito (entre 1 e 4): ");

        if (esporte < 1 || esporte > 4) {
            console.log("Inválido! Digite um numero entre 1 e 4");
        }
    } while (esporte < 1 || esporte > 4);

    if (esporte === 1) {
        futebol++;
    }

    if (esporte === 2 && idade > 18) {
        voleibolMaiores18++;
    }

    if (esporte === 3 && idade < 18) {
        basquetebolMenores18++;
    }

    if (esporte === 4) {
        outros++;
    }

    continua = leia.question("Deseja continuar (S/N)? ").toUpperCase();
}

console.log(`\nTotal de pessoas que gostam de futebol: ${futebol}`)
console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleibolMaiores18}`)
console.log(`Total de pessoas que gostam de basquetebol e são menores de 18 anos: ${basquetebolMenores18}`)
console.log(`Total de pessoas que gostam de outros esportes: ${outros}`)