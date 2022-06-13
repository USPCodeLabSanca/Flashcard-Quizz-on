if(localStorage.getItem("deck")=="null"){
    window.localStorage.setItem("deck",  JSON.stringify(new deck("deck1", 1)))
}
d = JSON.parse(localStorage.getItem("deck"))
i = 0
d.card_list.forEach(c => {
    newCard = document.createElement("li")
    newCard.id = i
    newCard.classList.add("card")
    span = document.createElement("span")
    span.classList.add("cardTitulo")
    span.textContent = c.question
    newCard.appendChild(span)
    button1 = document.createElement("button")
    button1.classList.add("botaoEd")
    button1.textContent = "EDIT"
    button2 = document.createElement("button")
    button2.classList.add("botaoDel")
    button2.textContent = "DELETE"
    newCard.appendChild(button1)
    newCard.appendChild(button2)
    document.querySelector(".cards").appendChild(newCard)
    i+=1
});
del = document.querySelector(".botaoDel")
if(del)
    del.addEventListener("click", ()=>{
        id = del.parentNode.id
        d.card_list.splice(id, 1)
        location.reload()
        window.localStorage.setItem("deck",  JSON.stringify(d))  
    })