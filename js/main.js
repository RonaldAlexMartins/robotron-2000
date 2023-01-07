

const controle = document.querySelector(".controle-ajuste")

controle.forEach((elemento) => { 
    elemento.addEventListener("click", () => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao) {
  const peca = document.querySelector(".controle-contador")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}