const senhaOculta = document.querySelector('#senhaOculta')
const senhaVisivel = document.querySelector('#senhaVisivel')
const senha = document.querySelector('.senha')

senhaOculta.addEventListener('click', function () {
    let tipoDaSenha = senha.type == "password"

    if (tipoDaSenha) {
        senha.type = 'text'
        senhaOculta.style.display = 'none'
        senhaVisivel.style.display = 'block'
    }
})

senhaVisivel.addEventListener('click', function () {
    let tipoDaSenha = senha.type == "text"

    if (tipoDaSenha) {
        senha.type = 'password'
        senhaVisivel.style.display = 'none'
        senhaOculta.style.display = 'block'
    }
})
 