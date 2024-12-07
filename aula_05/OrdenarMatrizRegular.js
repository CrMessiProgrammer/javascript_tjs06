console.log("\n");
console.log("Matriz Regular - Antes de Ordenar");

let matrizDesordenada = [
    [1, 7, 9],
    [2, 6, 4],
    [3, 5, 8,],
]

console.table(matrizDesordenada);

// Converte a Matriz em um Vetor
let vetor = matrizDesordenada.flat();

// Ordena o Vetor
vetor.sort((a,b) => a - b);

// Converte o Vetor em Matriz
let matrizOrdenada = [];
while (vetor.length) {
    matrizOrdenada.push(vetor.splice(0, 3)); // Ajustar o splice com o numero de colunas    
}

console.log("Matriz Regular - Pós Ordenar");

// Exibe a Matriz Ordenada
console.table(matrizOrdenada);