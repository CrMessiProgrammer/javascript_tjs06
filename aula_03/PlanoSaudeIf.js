const leia = require('readline-sync')

let nome = leia.question("\nDigite o seu nome: ");  // entrada de dados
let idade = leia.questionInt("Digite sua idade: ");
let valor;

if(idade <= 0){ // exceções de erro (ñ pode ser menor que 0)
    console.log("\nIdade Inválida!");
    process.exit(0);
}else if(idade > 0 && idade <= 10){
    valor = 100.00;
}else if(idade >= 11 && idade <= 29){
    valor = 200.00;
}else if(idade >= 30 && idade <= 45){
    valor = 300.00;
}else if(idade >= 46 && idade <= 59){
    valor = 500.00;
}else if(idade >= 60 && idade <= 65){
    valor = 600.00;
}else{
    valor = 1000.00;
}

console.log(`\n${nome} - Plano de Saúde no valor de: R$${valor.toFixed(2)}`);