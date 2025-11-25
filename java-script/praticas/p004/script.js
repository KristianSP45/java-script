function calcular(params) {
    let num = document.getElementById("txtnum")
    let res = document.getElementById("seltab")

    if (num.value.length == 0 ) {
        alert("[ERRO] Faltam dados!")
    } else {
        let n = Number(num.value)
        res.innerHTML = ""
        for (let index = 1; index <= 10; index++) {
            var i = document.createElement("option")
            i.text = `${n} x ${index} = ${n*index}`
            i.value = `tab${index}`
            res.appendChild(i)
        }
    }
}