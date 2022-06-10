let d = new deck("teste")
function printCard(card){
    new_card = document.createElement("div")
    new_card.classList.add("card")
    question = document.createElement("h2")
    question.textContent = card.question
    new_card.appendChild(question)
    if(card.type==0){
        new_card.classList.add("cursive")
    }
    else{
        new_card.classList.add("alternative")
        alternatives = document.createElement("div")
        for(let i = 0; i<4; i++)
            option = document.createElement("div")
            option.classList.add("option")
            option.appendChild(selector)
            selector = document.createElement("div")
            selector.classList.add("selector")
            alt = document.createElement("p")
            alt.textContent = card.alternatives[i]
            option.appendChild(alt)
            alternatives.appendChild(option)
    }
    n.textContent = d.card_list[d.cardIds-1].question
    document.querySelector('body').appendChild(new_card)
}
document.getElementById("button").addEventListener("click", ()=>{
    console.log("works")
    d.add_card(document.getElementById("type").value, 
    document.getElementById("question").value,
    document.getElementById("answer").value, [])
    create_card()
})