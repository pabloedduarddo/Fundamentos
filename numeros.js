/**
 * Números
 */

const peso = 62.0
const altura = 1.84
console.log(typeof(peso))
console.log(typeof(altura))
// dica para saber se um número é inteiro ou não
console.log(Number.isInteger(peso)) //true or fasle
console.log(Number.isInteger(altura)) //true or false
// + dicas
const imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)

// ATENÇÃO
console.log (10/2)
console.log ("10"/"m") //NaN (Not a Number)
console.log (0.1 + 0.2)
console.log (0.1 + 0.7)
console.log (0.2 + 0.3)
