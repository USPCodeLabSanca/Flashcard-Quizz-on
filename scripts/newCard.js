
let tipo = false
let l = 1
document.querySelector(".subjetiva").classList.add("invisivel")
document.querySelector(".check").addEventListener("click", () => {
    console.log(l)
    l+=1
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