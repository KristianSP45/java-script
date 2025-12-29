function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 12) {
                //crianca
                img.setAttribute("src", "imagens/crianca-h-p.jpg")
            } else if(idade < 21){
                //adoelecente
                img.setAttribute("src", "imagens/adolecente-h-p.jpg")
            } else if(idade < 50){
                //adulto
                img.setAttribute("src", "imagens/adulto-h-p.jpg")
            } else {
                //velho
                img.setAttribute("src", "imagens/velho-h-p.jpg")
            }
        } else if(fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 12) {
                //crianca
                img.setAttribute("src", "imagens/crianca-m-p.jpg")
            } else if(idade < 21){
                //adolecente
                img.setAttribute("src", "imagens/adolecente-m-p.jpg")
            } else if(idade < 50){
                //adulto
                img.setAttribute("src", "imagens/adulto-m-p.jpg")
            } else {
                //velho
                img.setAttribute("src", "imagens/velho-m-p.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}