

let tela = ("Passeios compartilhados. Há muito o que fazer na sua cidade e nós temos os passeios para ajudar você a aproveitar tudo. E eles estão todos disponíveis diretamente no seu aplicativo")
let tela2=("Localização de ampla cobertura")


function colocarNaTela() {

    document.querySelector("p").innerHTML = tela
    document.querySelector("h1").innerHTML = tela2

    console.log(tela)
    console.log(tela2)
    
}




function cliqueiNoLink() {


    colocarNaTela()

}