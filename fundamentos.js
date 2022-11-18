/**
 *  Fundamento do JS
 */

//A linguagem JS trabalha com sentenças
//; é opcional
//Você pode usar '' ou "" mas não pode usar "' as duas ao mesmo tempo
//A linguagem JS também trabalha com blocos
console.log("hello JS")
{
    console.log("oi")
}

//Variáveis no JS não são tipadas
//var let const (são usados para alocação de memória)

var nome = "Luiz"
var idade = 20
var vip = true
console.log("Nome: " + nome)
console.log("tipo de variavel: " + typeof(nome))
console.log("Idade: " + idade)
console.log("Tipo de variável: " + typeof(idade))
console.log("Vip: " + vip)
console.log("Tipo de variável: " + typeof(vip))

//-------------------------------------------------
// problemas no uso do var para declarar uma variável
var teste = 'hello' //criar uma variável
teste = "olá mundo" //alterar a variável
var teste = "BUG1" //redeclarar a variável
console.log(teste)

// let resolve este problema
let teste2 = "hello world" //criar uma variável
teste2 = "Olá mundo 2"
// let teste2 = "BUG2" 
//o let protege a variável não permitindo a criação de 
//uma segunda variável com o mesmo nome
console.log(teste2)
