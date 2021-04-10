function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (formano.value.length == 0 || Number(formano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', './img/bebe_homem.jpg')
            } else if (idade <= 21){
                //adolescente
                img.setAttribute('src', './img/jovem_homem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './img/adulto_homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', './img/idoso_homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', './img/bebe_mulher.jpg')
            } else if (idade <= 21){
                //adolescente
                img.setAttribute('src', './img/jovem_mulher.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './img/adulto_mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', './img/idoso_mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}