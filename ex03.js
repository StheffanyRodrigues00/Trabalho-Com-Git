const readline = require('readline-sync')
let nickname = readline.question('informe seu nickname: ')
let jogoFavorito = readline.question('informe seu jogo favorito: ')
let pontosAtual = readline.question('informe quantos pontos você está: ')

console.log(`nickname: ${nickname}`)
console.log(`jogo favorito: ${jogoFavorito}`)
console.log(`informe quantos pontos você está: ${pontosAtual}`)