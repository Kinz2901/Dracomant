const email = document.querySelector("input#email").value
const senha = document.querySelector("input#senha")
const olho = document.querySelector("img#olho")
 
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
    olho.setAttribute("src", "../imagens/olho-aberto.png")
}

function ocultarSenha() {
    senha.setAttribute("type", "password")
    olho.setAttribute("src", "../imagens/olho-fechado.png")
}

function confirmar() {
    
}
