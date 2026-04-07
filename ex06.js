const readline = require(`readline-sync`)

let objetivo = 40

let horasEstudadas = readline.questionFloat("informe quantas horas vocẽ estudou: ")

let diferenca = objetivo - horasEstudadas

console.log("RESUTADO")
if(horasEstudadas >= objetivo){
console.log("Uau você conseguiu parabéns!!")
}else{
    console.log(`faltram ${diferenca} quantas horas para atingir o objetivo`)
}