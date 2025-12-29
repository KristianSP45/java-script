function calcular(params) {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Faltam dados!")
        res.innerHTML = ("")
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            for (let index = i; index <= f; index += p) {
                res.innerHTML += ` ${index} |`
            }
        } else {
            for (let index = i; index >= f; index -= p) {
                res.innerHTML += ` ${index} |`
            }
        }
    }

}