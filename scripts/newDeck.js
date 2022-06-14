document.querySelector(".salvar").addEventListener("click", ()=>{
    titulo = document.querySelector(".pergunta").value
    decks = JSON.parse(localStorage.getItem("decks"))
    Decks = new userDecks()
    Decks.deck_list = decks.deck_list
    Decks.add_deck(titulo)
    localStorage.setItem("decks",  JSON.stringify(Decks))
    window.location.href = "file:///C:/Users/jeans/Documents/codeLab/Flashcard-Quizz-on/pages/home.html"
})
