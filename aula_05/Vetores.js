const leia = require('readline-sync')

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

// cria um vetor vazio e indica o tamanho do mesmo (nº de índices/length)
let vetorInteiros = new Array(5);

let vetorNumeros = [7, 5, 9, 1, 3, 2 , 6, 4, 8, 10];

console.log("\n");

// a posição do vetor começa no índice 0 [0, 1, 2, 3, n...]
for (let contador = 0; contador < vetorStrings.length; contador++) {
    console.log(vetorStrings[contador]);
}

// tamanho do vetor
console.log("\nO tamanho do Vetor de String é: ", vetorStrings.length);

console.log("\n-----------------------------------\n");

for (let contador = 0; contador < vetorInteiros.length; contador++) {
    vetorInteiros[contador] = leia.questionInt("Digite um numero: ");
}
    
    //cria uma tabela no console/terminal
    console.table(vetorInteiros);

    console.log("\n-----------------------------------\n");
    
    console.log("Ordenando o vetorStrings");
    // 'sort' ordena vetores String
    console.table(vetorStrings.sort())

    console.log("\n-----------------------------------\n");

    console.log("O tamanho do Vetor de Números é: ", vetorNumeros.length);
    
    console.log("\nOrdenando o vetorNumeros");
    // 'sort' dessa forma ordena um vetor de numeros, os comparando
    console.table(vetorNumeros.sort((a,b) => a - b));

    // ordem decrescente (invertendo o 'a' e o 'b')
    //console.table(vetorNumeros.sort((a,b) => b - a));

    // 'indexOf(2)' verifica se existe o numero 2 no vetor, passando seu índice
    console.log("Existe o número 2? Se sim, informe seu índice: ", vetorNumeros.indexOf(2));