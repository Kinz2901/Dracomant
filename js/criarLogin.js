const senhaOculta = document.querySelector('#senhaOculta')
const senhaVisivel = document.querySelector('#senhaVisivel')
const senha = document.querySelector('.senha')

const confirmSenhaOculta = document.querySelector('#confirmSenhaOculta')
const confirmSenhaVisivel = document.querySelector('#confirmSenhaVisivel')
const confirmSenha = document.querySelector('.confirmSenha')

const oculto = document.querySelector('.oculto')
const aparente = document.querySelector('.aparente')

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

confirmSenhaOculta.addEventListener('click', function () {
    let tipoDaSenha = confirmSenha.type == "password"

    if (tipoDaSenha) {
        confirmSenha.type = 'text'
        confirmSenhaOculta.style.display = 'none'
        confirmSenhaVisivel.style.display = 'block'
    }
})

confirmSenhaVisivel.addEventListener('click', function () {
    let tipoDaSenha = confirmSenha.type == "text"

    if (tipoDaSenha) {
        confirmSenha.type = 'password'
        confirmSenhaVisivel.style.display = 'none'
        confirmSenhaOculta.style.display = 'block'
    }
})

