const readline = require('readline-sync')

let objetivo = 500

let dinheiroGuardado = readline.questionFloat("informe o valor guardado: ")

let diferenca = objetivo - dinheiroGuardado

console.log("RESUSTADO")
if(dinheiroGuardado >= objetivo){
console.log("Parabéns!! você atingiu a meta")
}else{
    console.log(`faltaram ${diferenca} para atigir o objetivo`)
}