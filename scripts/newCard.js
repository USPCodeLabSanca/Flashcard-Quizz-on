
let tipo = false
document.querySelector(".subjetiva").classList.add("invisivel")
document.querySelector(".check").addEventListener("click", () => {
    tipo = ! tipo
    if(tipo){
        document.querySelector(".alternativas").classList.add("invisivel")
        document.querySelector(".subjetiva").classList.remove("invisivel")
        document.querySelector(".check").classList.add("clicado")
    }else{
        document.querySelector(".subjetiva").classList.add("invisivel")
        document.querySelector(".alternativas").classList.remove("invisivel")
        document.querySelector(".check").classList.remove("clicado")
    }
})
document.querySelector(".salvar").addEventListener("click", ()=>{
    aux = JSON.parse(localStorage.getItem("deck"))
    d = new deck(aux.name, aux.id)
    d.card_list = aux.card_list
    pergunta = document.querySelector(".pergunta").value
    if(tipo){
        resposta = document.querySelector(".respostaSub").value
        d.add_card(tipo, pergunta, resposta, [])
    }else{
        resposta = document.querySelector(".respostaAlt").value
        alternativas = [resposta, document.querySelector(".alt1").value, document.querySelector(".alt2").value]
        d.add_card(tipo, pergunta, resposta, alternativas)
    }
    document.querySelector(".pergunta").value = ""
    document.querySelector(".respostaSub").value = ""
    document.querySelector(".respostaAlt").value = ""
    document.querySelector(".alt1").value = "" 
    document.querySelector(".alt2").value = ""
    localStorage.setItem("deck",  JSON.stringify(d))
    window.location.href = "file:///C:/Users/jeans/Documents/codeLab/Flashcard-Quizz-on/pages/telaCards.html"

})

