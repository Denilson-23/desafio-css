

let tela = ("Passeios compartilhados. Há muito o que fazer na sua cidade e nós temos os passeios para ajudar você a aproveitar tudo. E eles estão todos disponíveis diretamente no seu aplicativo")
let tela2=("Localização de ampla cobertura")
let elemento=document.querySelector("p")
let elemento2=document.querySelector("h1")
function colocarNaTela() {

    elemento.innerHTML = tela
    elemento2.innerHTML = tela2

    console.log(tela)
    console.log(tela2)
    
}




function cliqueiNoLink() {


    colocarNaTela()

}





function cliqueiNoBotao (){
    let inputt=document.querySelector(".input1").value
    console.log(inputt)
    
}