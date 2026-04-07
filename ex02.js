const readline = require('readline-sync')

let nome = readline.question("informe seu nome: ")
    let nomeDoPrato = readline.question("informe o nome do prato: ")
    let valorDoPrato = readline.questionFloat("informe o valor do prato: ")

    console.log(`cliente: ${nome}`)
    console.log(`Prato escolhido: ${nomeDoPrato}`)
    console.log(`valor: ${valorDoPrato}`)
