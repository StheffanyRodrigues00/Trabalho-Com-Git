const readline = require(`readline-sync`)

let idade = readline.questionInt("informe sua idade: ")

if(idade >= 18){
    console.log("pode entrar")
}else{
    console.log("não pode entrar")
}