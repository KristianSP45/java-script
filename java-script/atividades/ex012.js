let num =[5,8,2,9,3]

console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor em ordem fica ${num.sort()}`)
console.log(`Na posição: ${num.indexOf(3)}`)
//num.sort() = ordena os vetores
//num.push(1) = adiciona o número no final do vetor
//num.indexOf(9) = informar em qual posição está o número

for (let index = 0; index < num.length; index++) {
    console.log(num[index])
}

console.log("-----")
//Mas tem um jeito mais simples
for (let posições in num) {
    console.log(num[posições])
}