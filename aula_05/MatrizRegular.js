const leia = require('readline-sync')

// Linhas da Matriz
let matrizInteiros = new Array(3);

// Colunas da matriz -> esse laço serve para gerar as colunas, verificando linha por linha
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}

// Percorre a matriz e preenche com dados
// percorre as linhas
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
    //percorre as colunas
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++) {
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ");
    }
}

// Visualiza os dados inseridos na matriz
console.table(matrizInteiros);