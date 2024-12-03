const leia = require('readline-sync')

// Dado usuário
const usuário = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login")

let usuarioLogin = leia.question("Digite o seu usuario: ")

// 'hideEchoBack: true' deixa oculto (com) o que o usuário vai digitar
let senhaLogin = leia.question("Digite a sua senha: ", {hideEchoBack: true})

if(usuarioLogin === usuário && senhaLogin === senha) {
    var mensagem = "Seja Bem-Vindo! Usuário autenticado com sucesso!"

    // negação
    if(!isBlock){
        console.log("Usuário está ativo!")
        
        if(isAdmin || isGerente){
            console.log("Acesso ao painél Administrativo Liberado!")
        } else {
            console.log("Acesso ao painél Administrativo Negado!")
        }
    } else {
        console.log("Usuário está inativo! Contate o Administrador!")
            process.exit(0) // reseta, sai do programa ao executá-lo
        }
} else {
    var mensagem = "Acesso Negado!"
}

console.log(mensagem)