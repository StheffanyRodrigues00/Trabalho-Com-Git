const readline = require(`readline-sync`)

let objetivo = 7

let notaSuficiente = readline.questionFloat("informe quanto o aluno tem de nota final: ")

let diferenca = objetivo - notaSuficiente

console.log ("registro da escola resutado")

if (notaSuficiente >= objetivo){
    console.log ("parabénes você conseguiu aceito!!") 
}else{
    console.log("infelizmente você foi reprovado")
}
