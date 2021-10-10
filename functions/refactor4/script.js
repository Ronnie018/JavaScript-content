const buttom = document.getElementById("buttom")
buttom.addEventListener("click", criaMateria)

function criaMateria(){
    console.log("inicio da execução");
    const content = ["titulo", "mensagem", "autor"]
    const instancia = pegaValores(content) !== undefined? pegaValores(content): alert("o valor digitado não foi definido")
    console.log(instancia);
}
function pegaValores(content){
    const pecker = {
        titulo: document.getElementById(content[0]).value.trim(),
        mensagem: document.getElementById(content[1]).value.trim(),
        autor: document.getElementById(content[2]).value.trim(),
    }
    if (verificaValores(pecker)){
        return pecker
    }
    return undefined
}
function verificaValores(pecker){
    if ( pecker.titulo === "" || pecker.mensagem === "" || pecker.autor === "" ){
        return false
    }
    return true
}
