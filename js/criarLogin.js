const senhaOculta = document.querySelector('#senhaOculta')
const senhaVisivel = document.querySelector('#senhaVisivel')
const senha = document.querySelector('.password')

const confirmSenhaOculta = document.querySelector('#confirmSenhaOculta')
const confirmSenhaVisivel = document.querySelector('#confirmSenhaVisivel')
const confirmSenha = document.querySelector('.passwordConfirm')

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

function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password) {
    if (password.length < 8 || 
        !password.match(/[a-z]/) || 
        !password.match(/[A-Z]/) || 
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error('Senha inválida.')
        err.input = 'password'
        throw err
    }
}

function validatePasswordConfirm(passwordConfirm) {
    if (passwordConfirm !== userInputs.password.value) {
        const err = new Error('As senhas não se coinciden.')
        err.input = 'passwordConfirm'
        throw err
    }
}

function resetFormStyles() {
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {}

userInputs.name = document.querySelector('#name')
userInputs.email = document.querySelector('#email')
userInputs.password = document.querySelector('#password')
userInputs.passwordConfirm = document.querySelector('#passwordConfirm')


const inputs = {}

inputs.name = document.querySelector('#bloco-nome')
inputs.email = document.querySelector('#bloco-email')
inputs.password = document.querySelector('#bloco-password')
inputs.passwordConfirm = document.querySelector('#bloco-passwordConfirm')

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles()
    try {
        inputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        inputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        inputs.password.classList.add('success')
        validatePasswordConfirm(userInputs.passwordConfirm.value)
        inputs.passwordConfirm.classList.add('success')
    } catch (err) {
        inputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})
