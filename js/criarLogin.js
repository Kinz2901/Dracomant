const email = document.querySelector("input#email").value
const senha = document.querySelector("input.senha")
const senha2 = document.querySelector("input.senha2")
const olho = document.querySelector("img.olho")
const olho2 = document.querySelector("img.olho2")

 
function clickOlho() {
    let inputTypeIsPassword = senha.type == "password"

    if (inputTypeIsPassword) {
        mostarSenha()
    } else {
        ocultarSenha()
    }
}

function mostarSenha() {
    senha.setAttribute("type", "text")
    olho.setAttribute("src", "olho-aberto.png")
}

function ocultarSenha() {
    senha.setAttribute("type", "password")
    olho.setAttribute("src", "olho-fechado.png")
}

function clickOlho2() {
    let inputTypeIsPassword = senha.type == "password"

    if (inputTypeIsPassword) {
        mostarSenha2()
    } else {
        ocultarSenha2()
    }
}

function mostarSenha2() {
    senha2.setAttribute("type", "text")
    olho2.setAttribute("src", "olho-aberto.png")
}

function ocultarSenha2() {
    
}