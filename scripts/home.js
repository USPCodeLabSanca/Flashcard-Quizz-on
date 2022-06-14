if(localStorage.getItem("decks")=="null" || localStorage.getItem("decks")==null){
    window.localStorage.setItem("decks",  JSON.stringify(new userDecks()))
}
d = JSON.parse(localStorage.getItem("decks"))
i = 0
console.log(d)
d.deck_list.forEach(d => {
    newDeck = document.createElement("option")
    newDeck.id = i
    newDeck.textContent = d.name
    document.querySelector("select").appendChild(newDeck)
    i+=1
});
document.querySelector("select").addEventListener("click", ()=>{
    localStorage.setItem("deckAtual", document.querySelector("select").options[document.querySelector("select").selectedIndex].id);
})
