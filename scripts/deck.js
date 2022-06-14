class card{
    constructor(id, type, question, answer){
        this.id = id
        this.type = type
        this.question = question
        this.answer = answer
    }
    edit_question(new_question){
        this.question = new_question
    }
    edit_answer(new_answer){
        this.answer = new_answer
    }
}

class cardM extends card{
    constructor(id, type, question, answer, alternatives){
        super(id, type, question, answer)
        this.alternatives = alternatives
        this.answer = answer
    }
    edit_alternative(new_alternative, number){
        this.alternatives[number] = new_alternative
    }
}

class cardD extends card{
    constructor(id, type, question, answer){
        super(id, type, question)
        this.answer = answer
    }
}
class deck{
    constructor(name){
        this.card_list = []
        this.name = name
        this.cardIds = 0
    }
    add_card(type, question, answer, alternatives){
        let new_card = ""
        if(type)
            new_card = new cardD(this.cardIds, type, question, answer)
        else
            new_card = new cardM(this.cardIds, type, question, answer, alternatives)
        this.cardIds+=1
        this.card_list.push(new_card)
    }
    remove_card(id){
        for(let i = 0; i<this.card_list.length; i++){
            if(this.card_list[i].id == id){
                this.card_list.splice(i, 1)
                break
            }

        }
    }
    edit_name(new_name){
        this.name = name
    }
}
class userDecks{
    constructor(){
        this.deck_list = []
    }
    add_deck(name){
        let new_deck = new deck(name)
        this.deck_list.push(new_deck)
    }
}