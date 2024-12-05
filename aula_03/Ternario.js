let idade = 15;

// *qual o teste* ? *o retorno se a condição for positiva* : *o retorno se a condição for negativa*
idade > 18 ? console.log("\nO Cliente é Maior de 18 anos") : console.log("\nO Cliente é Menor de 18 anos");

// exemplo de como a situação acima com o laço ternário, seria montado com o If
if(idade < 18){
    console.log("\nO Cliente é Menor de 18 anos")
}else{
    console.log("\nO Cliente é Maior de 18 anos")
}