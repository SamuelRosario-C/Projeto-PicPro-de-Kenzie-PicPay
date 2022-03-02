



const listaOpcoes = document.querySelector(".secaoDetalhesConta-opcoesTransacoes")

listaOpcoes.addEventListener("click", indentificarOpcoes => {

    const elemento = indentificarOpcoes.target

    if (elemento.tagName == "LI") {
        const id = elemento.id


        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        desativo()
        
        secaoEscolha.classList.add("ativo")
    }
})

function desativo() {
    const divs = document.querySelectorAll(".secaoTransacao div")
    for(let i = 0; i < divs.length; i++)
    divs[i].classList.remove("ativo")
}













