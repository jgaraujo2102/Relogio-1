function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('img')
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const segundo = data.getSeconds()
    
    

    
    
    msg.innerHTML = `Agora são ${hora}:${min}:${segundo}`

     // atualiza o relógio a cada segundo
     setTimeout(carregar, 1000);
    


if (hora < 5 || hora >= 18) {
    // BOA NOITE!
    imagem.src=('fotonoite.png');  
    document.body.style.background = '#3a3f43';
} else if (hora < 12) {
    // BOM DIA!
    imagem.src=('fotomanha.png'); 
    document.body.style.background = '#d2d7c1';
} else {
    // BOA TARDE!
    imagem.src=('fototarde.png'); 
    document.body.style.background = '#c98377';
}

}