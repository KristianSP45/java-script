function carregar(params) {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //dia
        img.src = "imagens/manha-p.jpg"
        document.body.style.background = "#FFC371"
    } else if (hora >= 12 && hora <= 18){
        //tarde
        img.src = "imagens/tarde-p.jpg"
        document.body.style.background = "#4FA3F7"
    } else {
        //noite
        img.src = "imagens/noite-p.jpg"
        document.body.style.background = "#1F003B"
    }
}