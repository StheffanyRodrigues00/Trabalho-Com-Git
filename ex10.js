const readline = require('readline-sync')

let totalDePaginas = 300

let qtdPaginasLidas = readline.questionInt("informe quantas paginas foram lidas: ")

let percentual = (qtdPaginasLidas / totalDePaginas) * 100

console.log("---------RESUSTADO---------")
console.log(`o usuário leu ${percentual}% do livro`)