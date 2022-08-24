function confirmar() {
    const email = document.querySelector("input#email").value
    const senha = document.querySelector("input#senha").value
    const emailFake = "email"
    const senhaFake = "senha"
    console.log({email,senha})
    if (email == emailFake && senha == senhaFake) {
    window.location.href="index.html"
    }
}
