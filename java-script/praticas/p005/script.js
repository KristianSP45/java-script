var num = document.getElementById("txtnum")
var res = document.getElementById("lista")
var total = document.getElementById("total")
var valores = []

function calcular(params) {
    var n = Number(num.value)

    if (num.value.length == 0 || num.value > 100 || num.value < 1) {
        alert("[ERRO] Digite um número entre 1 e 100!!!")
    } else if (valores.includes(n) == true) {
        alert("[ERRO] Esse número ja existe")
    } else {
        valores.push(n)
        var i = document.createElement("option")
        i.text = `Valor ${n} adicionado`
        i.value = `tab${n}`
        res.appendChild(i)
        res.innerHTML = ""
    }
    num.value = ""
    num.focus()
}



function finalizar(params) {
    var exem1 = valores[0]
    var exem2 = valores[0]
    var soma = 0
    var media
    total.innerHTML = ""

    if (valores.length == 0) {
        alert("[ERRO] Adicione valores")
    } else {
    for (let index = 0; index < valores.length; index++) {
        soma += valores[index]
        if (valores[index] > exem1) {
            exem1 = valores[index]
        }
        if (valores[index] < exem2) {
            exem2 = valores[index]
        }
    }

    media = soma / valores.length


    total.innerHTML = `
        Ao todo, temos ${valores.length} números cadastrados<br>
        O maior valor informado foi ${exem1}<br>
        O menor valor informado foi ${exem2}<br>
        Somando todos os valores, temos ${soma}<br>
        A média dos valores digitados é ${media}<br>
        `
        
    }
}