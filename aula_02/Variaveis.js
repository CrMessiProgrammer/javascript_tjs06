let nome = "Carlos";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.44;
const bonus = 0.05; // uma 'const' (constante) não pode ser mudado seu valor depois

console.log("\nNome: ", nome)
console.log("\nProfissão: ", profissao)

console.log(
    '\nSalário Líquido: ',
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto))
);

console.log("\nO Salário Bruto do Colaborador " + nome + " é " + salarioBruto);

// Formatando um número para um valor monetário (dinheiro, nesse caso o Real "R$")
let salario = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto + (bonus * salarioBruto))

//  Interpolação (junção) de Strings
console.log(`\nO Salário Bruto do Colaborador ${nome} é ${salario}`);

// console.log("Tipo da variável: ", typeof nome)  // identifica o tipo da variável

// nome = 12;   // é possível no javascript essa mudança de tipagem nas variáveis (mas ñ/ é recomendado)

// console.log("\nNome: ", nome)

// console.log("Tipo da variável: ", typeof nome)  // identifica o tipo da variável