const readline = require ('readline-sync')

let meta = 10000

let passos = readline.questionInt("Quantos passos você deu hoje?: ")

let diferenca = meta - passos

console.log("resultado")

if(passos >= meta){
    console.log("parabéns você fiinalmente conseguiu!!")
    console.log(`você passou ${math.abs(diferenca)} passos da meta`)
}else{
    console.log(`faltaram ${diferenca} passos`)
}