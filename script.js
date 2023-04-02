function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var greeting = ''
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        greeting = 'BOM DIA!'
        document.body.style.background = '#b3e63c'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        greeting = 'BOA TARDE!'
        img.src = 'fototarde.png'
        document.body.style.background = '#aa8247'
    } else {
        // BOA NOITE!
        greeting = 'BOA NOITE!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#042534'
    }
    msg.innerHTML = `Agora são ${hora} horas. <br> ${greeting}`
}