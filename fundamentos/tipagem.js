/**
 * Tipagem Dinâmica
 * Constantes e Variáveis
 */

console.clear()
console.log ("STRINGS __________________________")
let nome = "ababa silva"
console.log(nome)
console.log(typeof(nome))
nome = "Zé de assis"
console.log(nome)
console.log(nome.replace("Zé","cuzinho"))
//concatenação
console.log("Professor: " + nome)
console.log(`Professor: ${nome}`)

console.log("NUMBERS ___________________________")
let peso = 62
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger (peso))
console.log(Number.isInteger (altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)

console.log("BOOLEANS ____________________________")
let sw = true
console.log(typeof{sw})
console.log(`Chave: ${sw}`)

// ATENÇÃO !!!!!
console.log(10 / 0) 
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2) // NaN (not a Number)

