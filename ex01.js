//const readline = require('readline-sync')

//let nome = readline.question("digite o seu nome: ")

//console.log(`seu nome é: ${nome}`)

const readline = require(`readline-sync`)
let nome = readline.question("informe seu nome: ")
let curso = readline.question("informe o seu curso: ")
let idade = readline.question("informe sua idade: ")
console.log("======= SISTEMA DE CADASTRO =======")
console.log(`nome do usuário: ${nome}`)
console.log(`curso do usuário: ${curso}`)
console.log(`idade do usuário: ${idade}`)