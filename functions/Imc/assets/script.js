function _init(){
    document.getElementById("p-submit").addEventListener("click", exibe)
}

function exibe(){
    const nome = document.getElementById("p-nome").value
    const altura = document.getElementById("p-altura").value
    const peso = document.getElementById("p-peso").value
    const calculo = calcula(altura, peso)
    if (verifica(nome, altura, peso)){
        msg = `${nome}, seu IMC é de ${calculo[0]}, e isso é considerado ${calculo[1]}`
        document.getElementById("output").innerHTML = msg
    }else{
        alert("algum valor invalido, verifique")
    }
}
function verifica(n, a, p){
    if (a.length <=3 || n.length <= 2 || p.length <= 1){
        return false
    }else{
        return true
    }
}




function calcula(A, P){
    C = divide(P, multiplica(A))
    console.log(C);
    if (C != undefined){
        if (C < 18.5){
            return [C.toFixed(2), "Magreza"]
        }else if (C <= 24.9){
            return [C.toFixed(2), "Normal"]
        }else if (C <= 29.9){
            return [C.toFixed(2), "Acima do peso"]
        }else if (C <= 39.9){
            return [C.toFixed(2), "Obesidade"]
        }else if (C >= 40 && C <= 600){
            return [C.toFixed(2), "Obesidade Grave"]
        }else{
            console.log("erro de digitação");
            alert("Algo errado foi digitado")
        }
    }else{
        console.log("erro de digitação");
        alert("algo errado não está certo")
    }
// return C.toFixed(2)

}
function divide(v1, v2){
    return v1/v2
}
function multiplica(val){
    return val * val
}
