const senhaOculta = document.querySelector('#senhaOculta')
const senhaVisivel = document.querySelector('#senhaVisivel')
const senha = document.querySelector('.password')

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

function resetFormStyles() {
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {}

userInputs.email = document.querySelector('#email')
userInputs.password = document.querySelector('#password')

const inputs = {}

inputs.email = document.querySelector('#bloco-email')
inputs.password = document.querySelector('#bloco-password')

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles()
    try {
        validateEmail(userInputs.email.value)
        inputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        inputs.password.classList.add('success')
    } catch (err) {
        inputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})
