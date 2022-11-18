/**
 * Array - estudo do array(vetor)
 */

//para criar um vetor basta usar colchetes
//índice      [0]              [1]        [2]        [3]
let times = ["Palmeiras","Corinthias","São Paulo", "Santos"]
console.log(times)
// No JS um vetor é heterogêneo e dinâmico
console.log(typeof(times))
//Para saber o tamanho do vetor
console.log(times.length)
//Recuperar o índice de um valor armazenado no vetor

//Recuperar um valor do vetor

console.log(times[0])
console.log(times[5])
//Adicionando um item ao vetor
times[5] = "Flamengo"
console.log(times)
console.log(times[5])
//Adicionando múltiplo itens ao seotor
times.push("Cruzeiro","Sport","Paysandu")
console.log(times)
console.log(times.length)
//Adicionando itens de tipos diferentes ao vetor
times.push(1977,null,"Bragantino",true)
console.log(times)
//Removendo um item do vetor
delete times[1]
console.log(times)
//Removendo o último item do vetor
times.pop()
console.log(times)
