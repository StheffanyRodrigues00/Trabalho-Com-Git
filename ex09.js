const readline = require ('readline-sync')

let valor = 100

let valorDaCompra = readline.questionFloat("informe o valor da compra: ")

let diferenca = valor - valorDaCompra

console.log ("RESULTADO")

if (valorDaCompra >= valor){
    console.log("tem direito do frete grátis")
}else{
    console.log("ainda precisa colocar mais coisas no carrinho")
}