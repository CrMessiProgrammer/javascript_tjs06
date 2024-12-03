const leia = require('readline-sync') // criou uma constante chamada 'leia' para importar/rodar a biblioteca 'readline-sync'

//var n1;   // variável global (da para usar em qualquer lugar, não respeita o escopo)
let n1, n2; // variável mais restrita (tem mais controle/respeita o escopo (as chaves por exemplo, recomendada))

// n1 = leia.questionInt("\nDigite o primeiro numero: ")   // entrada de dados (dado inteiro)
n1 = leia.questionFloat("\nDigite o segundo numero: ")    // entrada de dados (dado com ponto flutuante)
n2 = leia.questionFloat("Digite o segundo numero: ")

console.log("\nA Variável N1 possui o valor: ", n1)   // imprimi na tela (console/terminal)
console.log("A Variável N1 possui o valor: ", n2)

// soma = n1 + n2;

console.log("\n A Soma de n1 + n2 é igual a: ", n1 + n2)
console.log("A Subtração de n1 - n2 é igual a: ", n1 - n2)
console.log("A Multiplicação de n1 * n2 é igual a: ", n1 * n2)
console.log("A Divisão de n1 / n2 é igual a: ", n1 / n2)
console.log("A Potenciação de n1 ^ n2 é igual a: ", Math.pow(n1, n2))
console.log("A Raíz quadrada de n1 é igual a: ", Math.sqrt(n1))